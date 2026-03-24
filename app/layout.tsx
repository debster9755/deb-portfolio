import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deb Roy | AI Product Manager & Solutions Architect",
  description:
    "Triple-Certified Analyst and AI Product Manager with cross-domain expertise spanning Fintech, SaaS, OTT Media, Cloud, and Cybersecurity.",
  keywords: [
    "Product Manager",
    "AI",
    "Solutions Architect",
    "SaaS",
    "Cloud",
    "Cybersecurity",
    "GenAI",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
