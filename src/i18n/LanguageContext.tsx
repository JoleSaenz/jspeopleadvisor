"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import en, { type Translations } from "./en";
import es from "./es";

export type Locale = "en" | "es";

type LanguageContextType = {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const dictionaries: Record<Locale, Translations> = { en, es };

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "en" ? "es" : "en";
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider
      value={{ locale, t: dictionaries[locale], setLocale, toggleLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}
