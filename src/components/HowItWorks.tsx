"use client";

import { MessageCircle, Search, Lightbulb, Rocket } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn from "./ui/AnimateIn";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Book a Discovery Call",
    description:
      "We start with a free, no-pressure conversation to understand your needs, goals, and where you're at right now.",
  },
  {
    icon: Search,
    step: "02",
    title: "Deep-Dive Assessment",
    description:
      "I analyze your situation — whether it's your career profile, team dynamics, or people processes — to identify what matters most.",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Custom Strategy",
    description:
      "You receive a tailored, actionable plan designed specifically for your goals. No cookie-cutter solutions — ever.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Execute & Grow",
    description:
      "We work together to implement the plan, track progress, and iterate. I'm with you every step of the way.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            badge="Process"
            title="How It Works"
            subtitle="A simple, structured approach to get you from where you are to where you want to be."
          />
        </AnimateIn>

        <div className="relative">
          <div className="hidden lg:block absolute top-[12.5%] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((item, i) => (
              <AnimateIn key={item.step} delay={i * 150}>
                <div className="relative text-center">
                  <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <span className="inline-block text-xs font-bold text-purple-600 tracking-widest uppercase mb-2">
                    Step {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
