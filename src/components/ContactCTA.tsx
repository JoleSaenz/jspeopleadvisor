"use client";

import { useState } from "react";
import { Send, ArrowRight, CheckCircle } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

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
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.contact.titleLine1}
            <br />
            {t.contact.titleLine2}
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20 animate-fade-in-up">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <CheckCircle size={32} className="text-green-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {t.contact.successTitle}
              </h3>
              <p className="text-purple-200 text-lg">
                {t.contact.successMessage}
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
                    {t.contact.labelName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder={t.contact.placeholderName}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-300/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-purple-200 mb-2"
                  >
                    {t.contact.labelEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder={t.contact.placeholderEmail}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-300/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-purple-200 mb-2"
                >
                  {t.contact.labelType}
                </label>
                <select
                  id="type"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all appearance-none"
                >
                  <option value="" className="text-gray-900">{t.contact.selectDefault}</option>
                  <option value="career" className="text-gray-900">{t.contact.optionCareer}</option>
                  <option value="interview" className="text-gray-900">{t.contact.optionInterview}</option>
                  <option value="engagement" className="text-gray-900">{t.contact.optionEngagement}</option>
                  <option value="team" className="text-gray-900">{t.contact.optionTeam}</option>
                  <option value="other" className="text-gray-900">{t.contact.optionOther}</option>
                </select>
              </div>
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-purple-200 mb-2"
                >
                  {t.contact.labelMessage}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={t.contact.placeholderMessage}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-300/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-purple-700 rounded-xl hover:bg-purple-50 transition-all duration-300 hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-purple-700"
              >
                {t.contact.submit}
                <Send size={20} />
              </button>
            </form>
          )}

          <div className="mt-8 text-center">
            <p className="text-purple-200 text-sm mb-4">
              {t.contact.scheduleDirectly}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-purple-200 transition-colors"
            >
              {t.contact.bookFreeCall}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
