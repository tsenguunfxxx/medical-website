"use client";

import { useI18n } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useI18n();

  const features = [
    { icon: "🔬", title: t.about.feature1Title, desc: t.about.feature1Desc },
    { icon: "🧑‍⚕️", title: t.about.feature2Title, desc: t.about.feature2Desc },
    { icon: "🚨", title: t.about.feature3Title, desc: t.about.feature3Desc },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              {t.about.badge}
            </span>
            <h2 className="text-4xl font-extrabold text-slate-800 mb-6 leading-tight">
              {t.about.title}
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">{t.about.body1}</p>
            <p className="text-slate-500 leading-relaxed mb-8">{t.about.body2}</p>

            {/* Feature pills */}
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-xl shadow-sm">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm mb-0.5">{f.title}</div>
                    <div className="text-slate-500 text-sm">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative">
            {/* Main card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-6xl mb-6 text-center">🏥</div>
              <h3 className="text-xl font-bold text-center mb-2">
                Mongolian National Medical Center
              </h3>
              <p className="text-blue-200 text-sm text-center mb-8">Est. 1962 · Ulaanbaatar</p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "400", label: "Beds", icon: "🛏️" },
                  { value: "12", label: "Departments", icon: "🏢" },
                  { value: "200+", label: "Doctors", icon: "👨‍⚕️" },
                  { value: "24/7", label: "Emergency", icon: "🚨" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20"
                  >
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-2xl font-extrabold">{item.value}</div>
                    <div className="text-blue-200 text-xs font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-green-500 text-white rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-2xl font-extrabold">ISO 9001</div>
              <div className="text-green-100 text-xs">Certified Quality</div>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100">
              <div className="text-yellow-500 text-xl mb-0.5">⭐⭐⭐⭐⭐</div>
              <div className="text-xs font-semibold text-slate-700">Top Rated Hospital</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
