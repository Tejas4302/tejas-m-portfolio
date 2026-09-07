import type { Metadata } from "next";
import { Bebas_Neue, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
const mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Tejas M - AI Project Manager | GenAI Platforms",
  description: "AI Project Manager shipping enterprise GenAI and LLM-powered platforms from discovery and AI-assisted prototyping through security governance and production launch.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
