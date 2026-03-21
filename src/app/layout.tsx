import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Josefina Saenz | HR & Talent Consulting for Startups & Tech",
  description:
    "Strategic HR consulting for startups, tech companies, and modern professionals. Career coaching, talent strategy, and team development by Josefina Saenz.",
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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
