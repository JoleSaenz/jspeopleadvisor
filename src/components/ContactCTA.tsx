"use client";

import { useState } from "react";
import { Send, ArrowRight, CheckCircle } from "lucide-react";
import Button from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-purple-200 bg-white/10 rounded-full backdrop-blur-sm">
            Let&apos;s Talk
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Ready to Transform Your
            <br />
            People Strategy?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a startup founder or a professional looking for your
            next move — let&apos;s connect and build something great together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20 animate-fade-in-up">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <CheckCircle size={32} className="text-green-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Message Sent!
              </h3>
              <p className="text-purple-200 text-lg">
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-purple-200 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. María García"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-300/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-purple-200 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="maria@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-300/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-purple-200 mb-2"
                >
                  I&apos;m looking for help with...
                </label>
                <select
                  id="type"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all appearance-none"
                >
                  <option value="" className="text-gray-900">Select an option</option>
                  <option value="career" className="text-gray-900">Career Coaching / CV Optimization</option>
                  <option value="interview" className="text-gray-900">Interview Preparation</option>
                  <option value="engagement" className="text-gray-900">Employee Engagement Survey</option>
                  <option value="team" className="text-gray-900">Team Coaching & Development</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
              </div>
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-purple-200 mb-2"
                >
                  Tell me a bit about your situation
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="What are you working on? What challenges are you facing?"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-300/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-purple-700 rounded-xl hover:bg-purple-50 transition-all duration-300 hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-purple-700"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          )}

          <div className="mt-8 text-center">
            <p className="text-purple-200 text-sm mb-4">
              Prefer to schedule directly?
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-purple-200 transition-colors"
            >
              Book a free 30-minute call
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
