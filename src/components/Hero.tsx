"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Button from "./ui/Button";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse-soft delay-200" />
      <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-purple-100/40 rounded-full blur-2xl animate-float" />

      <div className="relative z-10 max-w-max mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-semibold text-purple-700 bg-purple-100/80 rounded-full backdrop-blur-sm">
              <Sparkles size={16} />
              {t.hero.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] animate-fade-in-up delay-100">
            {t.hero.titleLine1}
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>{" "}
            {t.hero.titleLine2}
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            {t.hero.description}{" "}
            <span className="font-semibold text-gray-900">{t.hero.descriptionHighlight}</span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Button href="#contact" size="lg">
              {t.hero.ctaPrimary}
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              {t.hero.ctaSecondary}
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-8 animate-fade-in-up delay-400">
            <div className="flex -space-x-3">
              {[
                "bg-purple-400",
                "bg-purple-500",
                "bg-purple-600",
                "bg-purple-700",
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                >
                  {["ML", "PY", "JS", "RR"][i]}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {t.hero.trustedBy}
              </p>
              <p className="text-sm text-gray-500">
                {t.hero.acrossLatam}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
