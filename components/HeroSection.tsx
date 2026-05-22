"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useI18n();

  const stats = [
    { value: "50K+", label: t.hero.stat1Label },
    { value: "120+", label: t.hero.stat2Label },
    { value: "60+",  label: t.hero.stat3Label },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating icons */}
        {[
          { icon: "🫀", top: "15%", left: "10%", delay: "0s" },
          { icon: "🧬", top: "70%", left: "8%", delay: "0.8s" },
          { icon: "💊", top: "20%", right: "12%", delay: "0.4s" },
          { icon: "🔬", top: "65%", right: "10%", delay: "1.2s" },
          { icon: "🩺", top: "45%", left: "6%", delay: "1.6s" },
        ].map((item, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-20 animate-float"
            style={{
              top: item.top,
              left: (item as any).left,
              right: (item as any).right,
              animationDelay: item.delay,
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-blue-200 text-sm font-medium">{t.hero.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            {t.hero.title.split(",").map((part, i) => (
              <span key={i}>
                {i === 0 ? part : (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {part}
                  </span>
                )}
                {i === 0 && ","}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-blue-100/80 leading-relaxed mb-10 max-w-2xl">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              📅 {t.hero.ctaBook}
            </Link>
            <Link
              href="/#departments"
              className="inline-flex items-center justify-center gap-2 bg-blue-500/20 border border-blue-400/40 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-blue-500/30 transition-all backdrop-blur-sm"
            >
              🏥 {t.hero.ctaDepartments}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-blue-300 font-medium leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="fill-slate-50 w-full">
          <path d="M0,32 C360,60 720,0 1440,32 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
