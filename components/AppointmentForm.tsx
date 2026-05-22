"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { useAppointments } from "@/lib/appointments";
import { departments, colorMap } from "@/data/departments";
import { AppointmentFormData, Department, Doctor } from "@/types";
import { DoctorCard } from "./DoctorCard";

// ─── Step indicator ───────────────────────────────────────────────────────────
function StepIndicator({ current, labels }: { current: number; labels: string[] }) {
  return (
    <div className="flex items-center justify-center mb-8">
      {labels.map((label, i) => (
        <div key={i} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                i < current
                  ? "bg-green-500 text-white"
                  : i === current
                  ? "bg-blue-600 text-white ring-4 ring-blue-100"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {i < current ? "✓" : i + 1}
            </div>
            <span
              className={`text-xs font-medium mt-1 whitespace-nowrap ${
                i === current ? "text-blue-700" : i < current ? "text-green-600" : "text-slate-400"
              }`}
            >
              {label}
            </span>
          </div>
          {i < labels.length - 1 && (
            <div
              className={`w-12 sm:w-20 h-0.5 mx-1 mb-5 transition-all duration-300 ${
                i < current ? "bg-green-400" : "bg-slate-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Success screen ───────────────────────────────────────────────────────────
function SuccessScreen({
  data,
  onReset,
}: {
  data: AppointmentFormData;
  onReset: () => void;
}) {
  const { t } = useI18n();
  const dept = departments.find((d) => d.id === data.departmentId);
  const doctor = dept?.doctors.find((doc) => doc.id === data.doctorId);
  const deptName = dept ? t.dept[dept.nameKey as keyof typeof t.dept] : "";

  return (
    <div className="text-center py-10 px-4 animate-fade-in">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
        <span className="text-4xl">✅</span>
      </div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">{t.appointment.successTitle}</h2>
      <p className="text-slate-500 mb-8 max-w-sm mx-auto">{t.appointment.successBody}</p>

      {/* Booking summary card */}
      <div className="max-w-xs mx-auto bg-slate-50 rounded-2xl p-5 text-left space-y-3 mb-8 border border-slate-100">
        <SummaryRow icon="🏥" label={t.appointment.confirmDept} value={deptName} />
        <SummaryRow icon="👨‍⚕️" label={t.appointment.confirmDoctor} value={doctor?.name || ""} />
        <SummaryRow icon="📅" label={t.appointment.confirmDate} value={data.date} />
        <SummaryRow icon="🕐" label={t.appointment.confirmTime} value={data.time} />
        <SummaryRow icon="👤" label={t.appointment.patientName} value={data.patientName} />
        <SummaryRow icon="📞" label={t.appointment.phone} value={data.phone} />
      </div>

      <button
        onClick={onReset}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
      >
        {t.appointment.bookAnother}
      </button>
    </div>
  );
}

function SummaryRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="text-base mt-0.5">{icon}</span>
      <div>
        <div className="text-xs text-slate-400 font-medium">{label}</div>
        <div className="text-sm font-semibold text-slate-700">{value}</div>
      </div>
    </div>
  );
}

// ─── Main form ────────────────────────────────────────────────────────────────
export function AppointmentForm() {
  const { t } = useI18n();
  const { addAppointment } = useAppointments();
  const searchParams = useSearchParams();

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<AppointmentFormData>({
    departmentId: searchParams.get("dept") || "",
    doctorId: "",
    date: "",
    time: "",
    patientName: "",
    phone: "",
  });

  // Auto-advance to step 1 if dept pre-selected
  useEffect(() => {
    if (formData.departmentId) setStep(1);
  }, []);

  const selectedDept = departments.find((d) => d.id === formData.departmentId);
  const selectedDoctor = selectedDept?.doctors.find((d) => d.id === formData.doctorId);

  // Get available days for selected doctor
  const getAvailableTimeSlots = (date: string): string[] => {
    if (!selectedDoctor || !date) return [];
    const dayName = new Date(date).toLocaleDateString("en-US", { weekday: "long" });
    if (!selectedDoctor.availableDays.includes(dayName)) return [];
    return selectedDoctor.timeSlots;
  };

  const steps = [
    t.appointment.stepDept,
    t.appointment.stepDoctor,
    t.appointment.stepDateTime,
    t.appointment.stepInfo,
  ];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.patientName.trim()) newErrors.patientName = t.appointment.required;
    if (!formData.phone.trim()) newErrors.phone = t.appointment.required;
    else if (!/^[\+\d\s\-\(\)]{7,15}$/.test(formData.phone.trim()))
      newErrors.phone = t.appointment.invalidPhone;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 1200));
    addAppointment(formData);
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ departmentId: "", doctorId: "", date: "", time: "", patientName: "", phone: "" });
    setStep(0);
    setSubmitted(false);
    setErrors({});
  };

  // ── Min date = today ────────────────────────────────────────────────────────
  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return <SuccessScreen data={formData} onReset={handleReset} />;
  }

  return (
    <div>
      <StepIndicator current={step} labels={steps} />

      {/* ── STEP 0: Select Department ─────────────────────────────────── */}
      {step === 0 && (
        <div className="animate-slide-in">
          <h3 className="text-lg font-bold text-slate-700 mb-4">{t.appointment.selectDepartment}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {departments.map((dept) => {
              const colors = colorMap[dept.color] || colorMap.blue;
              const isSelected = formData.departmentId === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => {
                    setFormData((f) => ({ ...f, departmentId: dept.id, doctorId: "", date: "", time: "" }));
                    setStep(1);
                  }}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                    isSelected
                      ? `border-blue-500 ${colors.light}`
                      : "border-slate-100 hover:border-blue-200 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-2xl">{dept.icon}</span>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">
                      {t.dept[dept.nameKey as keyof typeof t.dept]}
                    </div>
                    <div className="text-xs text-slate-500">
                      {dept.doctors.length} {t.departments.doctors}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── STEP 1: Select Doctor ─────────────────────────────────────── */}
      {step === 1 && selectedDept && (
        <div className="animate-slide-in">
          <h3 className="text-lg font-bold text-slate-700 mb-4">{t.appointment.selectDoctor}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedDept.doctors.map((doc) => (
              <button
                key={doc.id}
                onClick={() => {
                  setFormData((f) => ({ ...f, doctorId: doc.id, date: "", time: "" }));
                  setStep(2);
                }}
                className={`text-left rounded-2xl border-2 transition-all hover:border-blue-300 overflow-hidden ${
                  formData.doctorId === doc.id ? "border-blue-500 shadow-md" : "border-transparent"
                }`}
              >
                <DoctorCard doctor={doc} />
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep(0)}
            className="mt-5 text-sm text-slate-500 hover:text-blue-600 flex items-center gap-1"
          >
            ← {t.common.back}
          </button>
        </div>
      )}

      {/* ── STEP 2: Select Date & Time ────────────────────────────────── */}
      {step === 2 && selectedDoctor && (
        <div className="animate-slide-in">
          <h3 className="text-lg font-bold text-slate-700 mb-4">{t.appointment.selectDate}</h3>

          {/* Doctor mini-summary */}
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl mb-5">
            <img src={selectedDoctor.image} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-semibold text-slate-800 text-sm">{selectedDoctor.name}</div>
              <div className="text-xs text-slate-500">
                {t.appointment.availableDays}:{" "}
                {selectedDoctor.availableDays.map((d) => t.days[d as keyof typeof t.days]).join(", ")}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Date picker */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">📅 {t.appointment.selectDate}</label>
              <input
                type="date"
                min={today}
                value={formData.date}
                onChange={(e) => setFormData((f) => ({ ...f, date: e.target.value, time: "" }))}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            {/* Time slots */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">🕐 {t.appointment.selectTime}</label>
              {formData.date ? (
                getAvailableTimeSlots(formData.date).length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {getAvailableTimeSlots(formData.date).map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setFormData((f) => ({ ...f, time: slot }))}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium border-2 transition-all ${
                          formData.time === slot
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm text-amber-600 bg-amber-50 rounded-xl p-3">
                    ⚠️ {t.appointment.noSlotsAvailable}
                  </div>
                )
              ) : (
                <div className="text-sm text-slate-400 bg-slate-50 rounded-xl p-3">
                  Select a date first
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setStep(1)}
              className="text-sm text-slate-500 hover:text-blue-600 flex items-center gap-1"
            >
              ← {t.common.back}
            </button>
            <button
              disabled={!formData.date || !formData.time}
              onClick={() => setStep(3)}
              className="ml-auto bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              {t.common.next} →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3: Patient Info ──────────────────────────────────────── */}
      {step === 3 && (
        <div className="animate-slide-in max-w-md mx-auto">
          {/* Summary */}
          <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-2 text-sm">
            <div className="font-semibold text-slate-700 mb-2">📋 Booking Summary</div>
            <div className="flex justify-between">
              <span className="text-slate-500">{t.appointment.confirmDept}</span>
              <span className="font-medium">{selectedDept && t.dept[selectedDept.nameKey as keyof typeof t.dept]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">{t.appointment.confirmDoctor}</span>
              <span className="font-medium">{selectedDoctor?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">{t.appointment.confirmDate}</span>
              <span className="font-medium">{formData.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">{t.appointment.confirmTime}</span>
              <span className="font-medium text-blue-600">{formData.time}</span>
            </div>
          </div>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                👤 {t.appointment.patientName} *
              </label>
              <input
                type="text"
                placeholder={t.appointment.patientNamePlaceholder}
                value={formData.patientName}
                onChange={(e) => {
                  setFormData((f) => ({ ...f, patientName: e.target.value }));
                  if (errors.patientName) setErrors((e) => ({ ...e, patientName: "" }));
                }}
                className={`w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors ${
                  errors.patientName ? "border-red-400 bg-red-50" : "border-slate-200 focus:border-blue-400"
                }`}
              />
              {errors.patientName && (
                <p className="text-red-500 text-xs mt-1">{errors.patientName}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                📞 {t.appointment.phone} *
              </label>
              <input
                type="tel"
                placeholder={t.appointment.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => {
                  setFormData((f) => ({ ...f, phone: e.target.value }));
                  if (errors.phone) setErrors((e) => ({ ...e, phone: "" }));
                }}
                className={`w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors ${
                  errors.phone ? "border-red-400 bg-red-50" : "border-slate-200 focus:border-blue-400"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setStep(2)}
              className="text-sm text-slate-500 hover:text-blue-600 flex items-center gap-1"
            >
              ← {t.common.back}
            </button>
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="ml-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-8 py-2.5 rounded-xl transition-all disabled:opacity-70 flex items-center gap-2"
            >
              {submitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  {t.appointment.submitting}
                </>
              ) : (
                <>✓ {t.appointment.submit}</>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
