"use client";

import { MessageCircle, Search, Lightbulb, Rocket } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn from "./ui/AnimateIn";
import { useTranslation } from "@/i18n/LanguageContext";

const icons = [MessageCircle, Search, Lightbulb, Rocket];
const stepNumbers = ["01", "02", "03", "04"];

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="process" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            badge={t.howItWorks.badge}
            title={t.howItWorks.title}
            subtitle={t.howItWorks.subtitle}
          />
        </AnimateIn>

        <div className="relative">
          <div className="hidden lg:block absolute top-[12.5%] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {t.howItWorks.steps.map((item, i) => {
              const Icon = icons[i];
              return (
                <AnimateIn key={i} delay={i * 150}>
                  <div className="relative text-center">
                    <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                      <Icon size={28} className="text-white" />
                    </div>
                    <span className="inline-block text-xs font-bold text-purple-600 tracking-widest uppercase mb-2">
                      {t.howItWorks.stepLabel} {stepNumbers[i]}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                      {item.description}
                    </p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
