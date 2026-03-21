"use client";

import { Zap, Heart, BarChart, Globe } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn from "./ui/AnimateIn";

const reasons = [
  {
    icon: Zap,
    title: "Startup DNA",
    description:
      "I've spent my career inside fast-growing tech companies like Mercado Libre and PedidosYa. I understand the pace, the ambiguity, and the culture of startups — because I've lived it.",
  },
  {
    icon: Heart,
    title: "People-First, Always",
    description:
      "I'm a psychologist by training and a people strategist by choice. I combine human insight with data-driven thinking to create solutions that actually work for real people.",
  },
  {
    icon: BarChart,
    title: "Data-Driven Approach",
    description:
      "From People Analytics to engagement dashboards, I leverage data to make better decisions. No guesswork — just clear insights backed by evidence.",
  },
  {
    icon: Globe,
    title: "LATAM & Global Perspective",
    description:
      "Having worked across multiple countries and cultures in LATAM, I bring a regional perspective with a global mindset to every project.",
  },
];

export default function WhyChooseMe() {
  return (
    <section id="why" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            badge="Why Me"
            title="Not Your Typical HR Consultant"
            subtitle="I bring the energy of a startup, the rigor of data, and the empathy of a psychologist to every engagement."
          />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <AnimateIn key={reason.title} delay={i * 100}>
              <div className="flex gap-6 p-8 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 hover:border-purple-200 h-full">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                  <reason.icon size={28} className="text-purple-600" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
