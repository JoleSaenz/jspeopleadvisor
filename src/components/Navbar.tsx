"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import Button from "./ui/Button";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, locale, toggleLocale } = useTranslation();

  const links = [
    { label: t.navbar.services, href: "#services" },
    { label: t.navbar.howItWorks, href: "#process" },
    { label: t.navbar.whyMe, href: "#why" },
    { label: t.navbar.testimonials, href: "#testimonials" },
    { label: t.navbar.about, href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110">
              D
            </div>
            <span className="text-xl font-bold text-gray-900">
              Deserve<span className="text-purple-600"></span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 cursor-pointer"
              aria-label="Switch language"
            >
              <Globe size={16} />
              <span className="uppercase text-xs font-bold tracking-wide">
                {locale === "en" ? "ES" : "EN"}
              </span>
            </button>
            <Button href="#contact" size="sm">
              {t.navbar.bookACall}
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLocale}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Switch language"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label={t.navbar.toggleMenu}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button href="#contact" className="w-full" onClick={() => setOpen(false)}>
                {t.navbar.bookACall}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
