import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deserve | HR & Talent Consulting for Startups & Tech",
  description:
    "Strategic HR consulting for startups, tech companies, and modern professionals. Career coaching, talent strategy, and team development by Deserve.",
  keywords: [
    "HR consulting",
    "talent acquisition",
    "career coaching",
    "startups",
    "tech companies",
    "team coaching",
    "employee engagement",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
