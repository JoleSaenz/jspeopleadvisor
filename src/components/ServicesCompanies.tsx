"use client";

import { BarChart3, BrainCircuit, Users } from "lucide-react";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn from "./ui/AnimateIn";
import { useTranslation } from "@/i18n/LanguageContext";

const icons = [BarChart3, BrainCircuit, Users];

export default function ServicesCompanies() {
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            badge={t.servicesCompanies.badge}
            title={t.servicesCompanies.title}
            subtitle={t.servicesCompanies.subtitle}
          />
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.servicesCompanies.services.map((service, i) => {
            const Icon = icons[i];
            return (
              <AnimateIn key={i} delay={i * 150}>
                <Card className="relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
