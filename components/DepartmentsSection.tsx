"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { departments } from "@/data/departments";
import { DepartmentCard } from "./DepartmentCard";

export function DepartmentsSection() {
  const { t } = useI18n();
  const [search, setSearch] = useState("");

  const filtered = departments.filter((dept) => {
    const name = t.dept[dept.nameKey as keyof typeof t.dept] || "";
    const desc = t.dept[dept.descriptionKey as keyof typeof t.dept] || "";
    const q = search.toLowerCase();
    return name.toLowerCase().includes(q) || desc.toLowerCase().includes(q);
  });

  return (
    <section id="departments" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {t.departments.badge}
          </span>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">{t.departments.title}</h2>
          <p className="text-slate-500 max-w-xl mx-auto">{t.departments.subtitle}</p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-10 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.departments.searchPlaceholder}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-blue-400 focus:outline-none bg-white text-sm shadow-sm transition-colors"
          />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-slate-500">{t.departments.noResults}</p>
          </div>
        )}
      </div>
    </section>
  );
}
