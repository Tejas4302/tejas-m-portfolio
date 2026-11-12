import type { Metadata } from "next";
import { Bebas_Neue, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
const mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Tejas M | AI-Native Engineer & AI Product Manager",
  description: "AI-native engineer and AI product manager building LLM-powered applications and leading enterprise AI delivery at Bosch. Snowflake CoCo CLI Hackathon finalist among the Top 9 teams.",
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

