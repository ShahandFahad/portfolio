import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolioData";

const fontDisplay = localFont({
  variable: "--font-shippori",
  display: "swap",
  src: [
    { path: "./fonts/ShipporiMincho-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/ShipporiMincho-700.woff2", weight: "700", style: "normal" },
  ],
});

const fontBody = localFont({
  variable: "--font-zen",
  display: "swap",
  src: [
    { path: "./fonts/ZenKakuGothicNew-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ZenKakuGothicNew-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ZenKakuGothicNew-700.woff2", weight: "700", style: "normal" },
  ],
});

const fontMono = localFont({
  variable: "--font-jbmono",
  display: "swap",
  src: [{ path: "./fonts/JetBrainsMono.woff2", weight: "400 700", style: "normal" }],
});

// Dedicated family for the fixed kanji glyph set (侍技開発結) used by the
// motif components. Kept separate from fontDisplay rather than added as a
// same-weight src entry: next/font/local has no per-src unicode-range, so a
// shared family risks the browser picking whichever face loads first for a
// given glyph. A standalone family sidesteps that ambiguity entirely.
const fontKanji = localFont({
  variable: "--font-shippori-kanji",
  display: "swap",
  src: [{ path: "./fonts/ShipporiMincho-Kanji.woff2", weight: "700", style: "normal" }],
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
    <html lang="en" suppressHydrationWarning>
      <body
      className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontDisplay.variable,
          fontBody.variable,
          fontMono.variable,
          fontKanji.variable
      )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
