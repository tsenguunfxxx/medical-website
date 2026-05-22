"use client";

import Link from "next/link";
import { Department } from "@/types";
import { useI18n } from "@/lib/i18n";
import { colorMap } from "@/data/departments";

interface DepartmentCardProps {
  department: Department;
}

export function DepartmentCard({ department }: DepartmentCardProps) {
  const { t } = useI18n();
  const colors = colorMap[department.color] || colorMap.blue;

  const name = t.dept[department.nameKey as keyof typeof t.dept] || department.nameKey;
  const description = t.dept[department.descriptionKey as keyof typeof t.dept] || department.descriptionKey;

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Top accent bar */}
      <div className={`h-1.5 ${colors.bg}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + title */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center flex-shrink-0 text-2xl shadow-sm`}>
            {department.icon}
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-lg leading-tight">{name}</h3>
            <span className={`text-xs font-semibold ${colors.badge} px-2 py-0.5 rounded-full mt-1 inline-block`}>
              {department.doctors.length} {t.departments.doctors}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">{description}</p>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <Link
            href={`/appointment?dept=${department.id}`}
            className={`flex-1 text-center text-sm font-semibold py-2.5 px-3 rounded-xl ${colors.bg} text-white hover:opacity-90 transition-opacity`}
          >
            📅 {t.departments.bookAppointment}
          </Link>
        </div>
      </div>
    </div>
  );
}
