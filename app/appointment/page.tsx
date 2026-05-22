"use client";

import { Suspense } from "react";
import { useI18n } from "@/lib/i18n";
import { AppointmentForm } from "@/components/AppointmentForm";

function AppointmentContent() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Page header */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-blue-500/30 border border-blue-400/30 rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4">
            {t.appointment.badge}
          </span>
          <h1 className="text-4xl font-extrabold mb-3">{t.appointment.title}</h1>
          <p className="text-blue-200 max-w-lg mx-auto">{t.appointment.subtitle}</p>
        </div>
      </div>

      {/* Form card */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 pb-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-10">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-500">Loading...</div>}>
      <AppointmentContent />
    </Suspense>
  );
}
