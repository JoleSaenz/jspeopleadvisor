"use client";

import { Zap, Heart, BarChart, Globe } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn from "./ui/AnimateIn";
import { useTranslation } from "@/i18n/LanguageContext";

const icons = [Zap, Heart, BarChart, Globe];

export default function WhyChooseMe() {
  const { t } = useTranslation();

  return (
    <section id="why" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            badge={t.whyChooseMe.badge}
            title={t.whyChooseMe.title}
            subtitle={t.whyChooseMe.subtitle}
          />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.whyChooseMe.reasons.map((reason, i) => {
            const Icon = icons[i];
            return (
              <AnimateIn key={i} delay={i * 100}>
                <div className="flex gap-6 p-8 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 hover:border-purple-200 h-full">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                    <Icon size={28} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
