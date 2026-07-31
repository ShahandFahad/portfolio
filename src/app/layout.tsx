import type { Metadata } from "next";
import { Inter as FontSans, JetBrains_Mono as FontMono } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolioData";

const fontSans = FontSans({
    variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = FontMono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.hero.name} Portfolio`,
  description: `Cooked by ${portfolioData.hero.name.split(" ")[1] || portfolioData.hero.name}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
      )}
      >
        {children}
      </body>
    </html>
  );
}
