import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denis Milev — AI Solutions Architect",
  description:
    "Архитектор AI-решений и Full-Stack разработчик. Специализируюсь на интеграции LLM, автоматизации бизнес-процессов и создании AI-агентов.",
  keywords: [
    "AI Solutions Architect",
    "Full-Stack Developer",
    "LLM Integration",
    "Automation",
    "Denis Milev",
    "Милев Денис",
  ],
  authors: [{ name: "Denis Milev" }],
  openGraph: {
    title: "Denis Milev — AI Solutions Architect",
    description:
      "Архитектор AI-решений. LLM Integration • Automation • Full-Stack AI Development",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denis Milev — AI Solutions Architect",
    description: "Архитектор AI-решений. LLM • Automation • Full-Stack",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark">
      <body className="bg-[#0a0a0a] text-white overflow-x-hidden">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
