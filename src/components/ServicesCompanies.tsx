"use client";

import { BarChart3, BrainCircuit, Users } from "lucide-react";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn from "./ui/AnimateIn";

const services = [
  {
    icon: BarChart3,
    title: "Employee Engagement & Climate Surveys",
    description:
      "Understand what your team really thinks. I design and run tailored engagement surveys, then translate the results into clear insights you can actually act on.",
    features: [
      "Custom survey design",
      "Confidential data collection",
      "Actionable reporting",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Data Analysis & Action Plans",
    description:
      "Numbers tell a story. I help you interpret people data — from turnover rates to engagement scores — and build strategic action plans that drive real change.",
    features: [
      "People analytics dashboards",
      "Trend identification",
      "Strategic recommendations",
    ],
  },
  {
    icon: Users,
    title: "Team Coaching & Development",
    description:
      "High-performing teams don't happen by accident. Through targeted workshops and coaching, I help your teams improve communication, leadership, and collaboration.",
    features: [
      "Leadership workshops",
      "Communication training",
      "Team alignment sessions",
    ],
  },
];

export default function ServicesCompanies() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            badge="For Companies"
            title="Scale Your People Strategy"
            subtitle="From early-stage startups to growing tech teams — build the culture and infrastructure your company needs to attract, retain, and develop top talent."
          />
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 150}>
              <Card className="relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6">
                    <service.icon size={28} className="text-white" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
