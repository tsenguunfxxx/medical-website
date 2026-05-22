"use client";

import { useI18n } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center bg-slate-100 rounded-full p-0.5 text-sm font-semibold">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded-full transition-all duration-200 ${
          lang === "en"
            ? "bg-white text-blue-700 shadow-sm"
            : "text-slate-500 hover:text-slate-700"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLang("mn")}
        className={`px-3 py-1 rounded-full transition-all duration-200 ${
          lang === "mn"
            ? "bg-white text-blue-700 shadow-sm"
            : "text-slate-500 hover:text-slate-700"
        }`}
        aria-label="Монгол хэлэнд шилжих"
      >
        МН
      </button>
    </div>
  );
}
