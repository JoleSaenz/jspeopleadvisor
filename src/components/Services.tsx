"use client";

import { useState } from "react";
import {
  BarChart3,
  BrainCircuit,
  Users,
  FileText,
  Target,
  MessageSquare,
  ArrowRightLeft,
  Building2,
  User,
  LayoutGrid,
  Handshake,
  Sparkles,
} from "lucide-react";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn from "./ui/AnimateIn";
import { useTranslation } from "@/i18n/LanguageContext";

const companyIcons = [BarChart3, BrainCircuit, Users, Sparkles, LayoutGrid, Handshake];
const individualIcons = [FileText, Target, MessageSquare, ArrowRightLeft];

type Tab = "companies" | "individuals";

export default function Services() {
  const [activeTab, setActiveTab] = useState<Tab>("companies");
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-gray-100 border border-gray-200">
            <button
              onClick={() => setActiveTab("companies")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "companies"
                  ? "bg-white text-purple-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Building2 size={16} />
              {t.servicesTabs.companies}
            </button>
            <button
              onClick={() => setActiveTab("individuals")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "individuals"
                  ? "bg-white text-purple-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <User size={16} />
              {t.servicesTabs.individuals}
            </button>
          </div>
        </div>

        <div
          key={activeTab}
          className="animate-fade-in-up"
        >
          {activeTab === "companies" ? (
            <>
              <AnimateIn>
                <SectionHeading
                  badge={t.servicesCompanies.badge}
                  title={t.servicesCompanies.title}
                  subtitle={t.servicesCompanies.subtitle}
                />
              </AnimateIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.servicesCompanies.services.map((service, i) => {
                  const Icon = companyIcons[i];
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
            </>
          ) : (
            <>
              <AnimateIn>
                <SectionHeading
                  badge={t.servicesIndividuals.badge}
                  title={t.servicesIndividuals.title}
                  subtitle={t.servicesIndividuals.subtitle}
                />
              </AnimateIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.servicesIndividuals.services.map((service, i) => {
                  const Icon = individualIcons[i];
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
