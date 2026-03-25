"use client";

import { Star, Quote } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn from "./ui/AnimateIn";
import { useTranslation } from "@/i18n/LanguageContext";

const meta = [
  { rating: 5, initials: "MD", color: "bg-purple-500" },
  { rating: 5, initials: "LF", color: "bg-purple-600" },
  { rating: 5, initials: "SM", color: "bg-purple-700" },
];

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            badge={t.testimonials.badge}
            title={t.testimonials.title}
            subtitle={t.testimonials.subtitle}
          />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, i) => (
            <AnimateIn key={i} delay={i * 150}>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1 h-full flex flex-col">
                <Quote size={32} className="text-purple-200 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: meta[i].rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className={`w-10 h-10 rounded-full ${meta[i].color} flex items-center justify-center text-white text-sm font-bold`}
                  >
                    {meta[i].initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
