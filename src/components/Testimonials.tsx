"use client";

import { Star, Quote } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn from "./ui/AnimateIn";

const testimonials = [
  {
    name: "Martín Delgado",
    role: "CTO, Fintech Startup",
    content:
      "Josefina helped us build our entire engineering team from scratch. She understood our culture from day one and found candidates who weren't just skilled — they were the perfect fit. Our retention rate speaks for itself.",
    rating: 5,
    initials: "MD",
    color: "bg-purple-500",
  },
  {
    name: "Lucía Fernández",
    role: "Senior Software Engineer",
    content:
      "I was stuck in a career rut and didn't know how to position myself for a leadership role. After just three coaching sessions with Josefina, I had a clear roadmap, a polished CV, and the confidence to go after it. I got the promotion within two months.",
    rating: 5,
    initials: "LF",
    color: "bg-purple-600",
  },
  {
    name: "Santiago Morales",
    role: "Head of People, SaaS Company",
    content:
      "The engagement survey Josefina designed gave us insights we'd been missing for years. Her action plan was practical and specific — not the generic advice we'd gotten before. Our team satisfaction scores jumped 30% in one quarter.",
    rating: 5,
    initials: "SM",
    color: "bg-purple-700",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            badge="Testimonials"
            title="What People Say"
            subtitle="Real results from startups, tech teams, and professionals who decided to invest in their people strategy."
          />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <AnimateIn key={testimonial.name} delay={i * 150}>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1 h-full flex flex-col">
                <Quote size={32} className="text-purple-200 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
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
                    className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white text-sm font-bold`}
                  >
                    {testimonial.initials}
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
