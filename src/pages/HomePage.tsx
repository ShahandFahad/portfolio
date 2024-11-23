import HomeLayout from "../layout/HomeLayout";
import Header from "../components/Header/Header";
import React from "react";
import AboutSection from "../components/Sections/About/AboutSection";
import ExperienceSection from "../components/Sections/Experience/ExperienceSection";
import ProjectSection from "../components/Sections/Project/ProjectSection";
import CertificationSection from "../components/Sections/Certification/CertificationSection";
import Footer from "../components/Footer/Footer";
/**
 * This is the Home Page and it consists of multiple sections
 * Header Component:
 * -> This is component covers the complete left page with 3 components
 * -> Hero Section, Navigation, Social Links with Icons
 *
 * Main Component:
 * -> This consists of multiple sections like
 * -> About
 * -> Experience
 * -> Projects etc
 *
 * All these Sections, are wrapped in the main layout to form a single page app
 *
 * @returns Home Page
 */
export default function HomePage() {
  return (
    <HomeLayout>
      <Header />
      {/* Main */}
      <main id="main-content" className="pt-24 lg:w-1/2 lg:py-24">
        {/* Contains defferent sections*/}
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <CertificationSection />
        {/* Footer */}
        <Footer />
      </main>
    </HomeLayout>
  );
}
