"use client";

import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  const footerLinks = [
    { label: t.navbar.services, href: "#services" },
    { label: t.navbar.howItWorks, href: "#process" },
    { label: t.navbar.whyMe, href: "#why" },
    { label: t.navbar.testimonials, href: "#testimonials" },
    { label: t.navbar.about, href: "#about" },
    { label: t.footer.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg">
                HF
              </div>
              <span className="text-xl font-bold text-white">
                HiveForward<span className="text-purple-400">.</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.getInTouch}
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hiveforwardsolutions@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
              >
                <Mail size={16} />
                hiveforwardsolutions@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/josefina-saenz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
              >
                <Linkedin size={16} />
                {t.footer.linkedinProfile}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="text-xs">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
