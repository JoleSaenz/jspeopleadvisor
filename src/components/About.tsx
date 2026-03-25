"use client";

import { Linkedin, Award, GraduationCap, Briefcase } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn from "./ui/AnimateIn";
import { useTranslation } from "@/i18n/LanguageContext";

const highlightIcons = [Briefcase, Award, GraduationCap];

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            badge={t.about.badge}
            title={t.about.title}
            subtitle={t.about.subtitle}
          />
        </AnimateIn>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <AnimateIn className="md:col-span-1 flex flex-col items-center">
              <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center shadow-xl shadow-purple-500/20">
                <span className="text-6xl font-bold text-white">JS</span>
              </div>
              <a
                href="https://www.linkedin.com/in/josefina-saenz/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
              >
                <Linkedin size={18} />
                {t.about.connectLinkedin}
              </a>
            </AnimateIn>

            <AnimateIn className="md:col-span-2" delay={150}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t.about.bio1}{" "}
                <span className="font-semibold text-gray-900">
                  Mercado Libre
                </span>
                ,{" "}
                <span className="font-semibold text-gray-900">PedidosYa</span>
                ,{" "}
                <span className="font-semibold text-gray-900">QuintoAndar</span>
                {" "}{t.about.bio1And}{" "}
                <span className="font-semibold text-gray-900">Flux IT</span>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t.about.bio2}
              </p>

              <div className="space-y-4">
                {t.about.highlights.map((label, i) => {
                  const Icon = highlightIcons[i];
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-xl bg-purple-50 border border-purple-100"
                    >
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Icon size={20} className="text-purple-600" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
