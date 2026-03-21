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

const services = [
  {
    icon: FileText,
    title: "CV & Resume Optimization",
    description:
      "Your resume is your first impression. I'll help you craft a compelling, ATS-friendly CV that showcases your value and gets you noticed by top tech companies.",
  },
  {
    icon: Target,
    title: "Career Coaching",
    description:
      "Feeling stuck or ready for the next leap? Together we'll define your goals, sharpen your personal brand, and create an actionable roadmap for your career growth.",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description:
      "Master behavioral and technical interviews with personalized mock sessions, feedback, and proven frameworks used by candidates hired at top-tier companies.",
  },
  {
    icon: ArrowRightLeft,
    title: "Career Transition Guidance",
    description:
      "Moving from one industry to tech? Switching roles? I'll guide you through the transition with clarity, from repositioning your profile to landing your new role.",
  },
];

export default function ServicesIndividuals() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            badge="For Professionals"
            title="Accelerate Your Career"
            subtitle="Whether you're job hunting, switching industries, or aiming for a leadership role — get the personalized support you need to stand out."
          />
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 100}>
              <Card className="h-full">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                  <service.icon size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
