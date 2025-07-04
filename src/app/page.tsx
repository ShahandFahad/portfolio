'use client'

import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Toaster } from "sonner";

// Small 1px dots in the background
const AnimatedBackground = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            backgroundPosition: ["0px", "0px", "-200px", "-200px"],
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
            },
        });
    }, [controls]);

    return (
        <motion.div
            className="absolute inset-0 z-0"
            style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
                backgroundSize: "100px 100px",
            }}
            animate={controls}
        />
    );
};
// TODO: Use this for project card bg: from-black via-pink-950 to-pink-800
export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black via-slate-900 to-black text-white font-sans relative overflow-hidden">
            <AnimatedBackground />
            <div className="relative z-10">
                {/*Header*/}
                <Header />

                <main className="">
                    <Toaster />

                    {/*Sections*/}
                    <HeroSection />
                    <AboutSection />

                    {/* TODO: Put Experience Section Here */}
                    {/* <ExperienceSection /> */}

                    <ProjectSection />
                    <ContactSection />
                </main>

                {/*Footer*/}
                <Footer />
            </div>
        </div>
    );
};
