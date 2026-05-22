"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/#about", label: t.nav.about },
    { href: "/#departments", label: t.nav.departments },
    { href: "/appointment", label: t.nav.appointment },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">🏥</span>
              </div>
              <div>
                <div className="font-bold text-white text-base">MNMC</div>
                <div className="text-xs text-slate-400">Mongolian National Medical Center</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.nav.contact}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2.5">
                <span className="text-blue-400 mt-0.5">📍</span>
                <span className="text-slate-400">{t.footer.addressValue}</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-blue-400">📞</span>
                <span>{t.footer.phoneValue}</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-blue-400">✉️</span>
                <span>{t.footer.emailValue}</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-blue-400">🕐</span>
                <span className="text-slate-400">{t.footer.hoursValue}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Emergency badge */}
            <div className="mt-6 bg-red-900/40 border border-red-700/50 rounded-xl p-3">
              <div className="text-red-400 font-semibold text-sm flex items-center gap-1.5">
                🚨 Emergency: +976 103
              </div>
              <div className="text-red-300/70 text-xs mt-0.5">24/7 Available</div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} MNMC. {t.footer.rights}</span>
          <span>Made with ❤️ in Ulaanbaatar, Mongolia</span>
        </div>
      </div>
    </footer>
  );
}
