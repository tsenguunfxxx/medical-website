  "use client";

import { useI18n } from "@/lib/i18n";

export function ServicesSection() {
  const { t } = useI18n();

  const services = [
    { icon: "🖥️", title: t.services.s1Title, desc: t.services.s1Desc, color: "blue" },
    { icon: "🧪", title: t.services.s2Title, desc: t.services.s2Desc, color: "purple" },
    { icon: "🔪", title: t.services.s3Title, desc: t.services.s3Desc, color: "red" },
    { icon: "🏃", title: t.services.s4Title, desc: t.services.s4Desc, color: "green" },
  ];

  const colorStyles: Record<string, string> = {
    blue:   "bg-blue-50 text-blue-600",
    purple: "bg-purple-50 text-purple-600",
    red:    "bg-red-50 text-red-600",
    green:  "bg-green-50 text-green-600",
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {t.services.badge}
          </span>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">{t.services.title}</h2>
          <p className="text-slate-500 max-w-xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 ${colorStyles[s.color]} transition-transform group-hover:scale-110`}
              >
                {s.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-base mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold mb-2">Need immediate assistance?</h3>
            <p className="text-blue-200">Our emergency team is available 24/7</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+97677001234"
              className="flex items-center gap-2 bg-white text-blue-800 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              📞 Call Now
            </a>
            <a
              href="/appointment"
              className="flex items-center gap-2 bg-blue-500/30 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-500/40 transition-colors whitespace-nowrap"
            >
              📅 Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
