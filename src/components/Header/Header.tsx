import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Social from "../Social/Social";
/**
 * Header comonent stick to the to on large screens and scrollable on small screend
 * It contains 3 sections:
 * -> Title, Subtitle and Small Description
 * -> Navigation
 * -> Social Icons
 *
 * @returns header, nav and socials icons
 */
export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      {/* On Large Screen Stick to Top and On Small Screen Doesnot Stick */}
      <div>
        <Hero />
        <Navbar />
      </div>
      <Social />
    </header>
  );
}
