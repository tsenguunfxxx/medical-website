"use client";

import Image from "next/image";
import { Doctor } from "@/types";
import { useI18n } from "@/lib/i18n";

interface DoctorCardProps {
  doctor: Doctor;
  accentColor?: string;
  compact?: boolean;
}

export function DoctorCard({ doctor, accentColor = "blue", compact = false }: DoctorCardProps) {
  const { t } = useI18n();

  const specialtyLabel =
    t.specialty[doctor.specialty as keyof typeof t.specialty] || doctor.specialty;

  if (compact) {
    return (
      <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-blue-100">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-slate-800 text-sm truncate">{doctor.name}</div>
          <div className="text-xs text-slate-500">{specialtyLabel} · {doctor.experience} {t.common.yearsExp}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      {/* Avatar area */}
      <div className="relative h-36 bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Experience badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs font-bold text-blue-700 shadow-sm">
          {doctor.experience} {t.appointment.years}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-slate-800 text-sm text-center mb-1">{doctor.name}</h3>
        <p className="text-xs text-blue-600 font-medium text-center mb-3">{specialtyLabel}</p>

        {/* Available days */}
        <div className="space-y-1">
          <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
            {t.appointment.availableDays}
          </div>
          <div className="flex flex-wrap gap-1">
            {doctor.availableDays.map((day) => (
              <span
                key={day}
                className="text-[10px] font-medium bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-md"
              >
                {t.days[day as keyof typeof t.days]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
