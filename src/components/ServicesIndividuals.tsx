"use client";

import {
  FileText,
  Target,
  MessageSquare,
  ArrowRightLeft,
} from "lucide-react";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn from "./ui/AnimateIn";
import { useTranslation } from "@/i18n/LanguageContext";

const icons = [FileText, Target, MessageSquare, ArrowRightLeft];

export default function ServicesIndividuals() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            badge={t.servicesIndividuals.badge}
            title={t.servicesIndividuals.title}
            subtitle={t.servicesIndividuals.subtitle}
          />
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.servicesIndividuals.services.map((service, i) => {
            const Icon = icons[i];
            return (
              <AnimateIn key={i} delay={i * 100}>
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </Card>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
