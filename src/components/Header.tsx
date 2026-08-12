"use client"
import Link from "next/link";
import { TypographyH1 } from "./ui/TypographyH1";
import { Button } from "./ui/button";
import { Menu, X, Volume2, VolumeX, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { portfolioData } from "@/data/portfolioData";
import { useSfx } from "@/hooks/useSfx";

/*
  Header
  01.About
  02.Experience
  03.Work
  04.Contact

  Resume
*/

/**
 * Header Component
 * Renders the sticky top navigation bar with logo and sidebar toggle for mobile.
 * Ingests configuration and links dynamically from `portfolioData.header`.
 */
export const Header = () => {
    const [sidebar, setSidebar] = useState('-translate-x-full');
    const { header } = portfolioData;
    const sfx = useSfx();
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    // Match `defaultTheme="dark"` (layout.tsx) until mounted, so the icon
    // doesn't flip between server and client renders — resolvedTheme is
    // only meaningful once next-themes has read localStorage on the client.
    const isDark = mounted ? resolvedTheme !== "light" : true;

    // add and remove '-translate-x-full' class accordingly
    const handleSidebar = () => {

        if (sidebar === '-translate-x-full') {
            setSidebar('');
        }

        if (sidebar !== '-translate-x-full') {
            setSidebar('-translate-x-full');
        }
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur py-5 md:px-4">
            <nav className="container mx-auto px-2 sm:px-4 lg:px-8 flex items-center justify-between h-16">

                <div className="flex items-center">
                    <TypographyH1 text={header.logoText} styles="lg:text-4xl md:text-2xl text-1xl text-accent" />
                </div>

                {/* Navbar Content */}
                <MenuBarContent style="hidden items-center space-x-6 md:flex" sfx={sfx} isDark={isDark} setTheme={setTheme} />

                {/* Open close side bar */}
                <button
                    type="button"
                    onClick={handleSidebar}
                    aria-expanded={sidebar === ''}
                    aria-controls="sidebar"
                    aria-label={sidebar === '' ? "Close menu" : "Open menu"}
                    className="md:hidden block text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded p-1"
                >
                    {sidebar === '' ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

            </nav>

            {/* Sidebar */}
            <div className={`${sidebar} absolute bg-card text-card-foreground border-r border-border shadow-2xl w-56 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300`}
                id="sidebar">
                {/* Sidebar Content */}
                <MenuBarContent style="p-4 flex flex-col space-y-6" sfx={sfx} isDark={isDark} setTheme={setTheme} />
            </div>
        </header>
    );
};



// Types of sidebar and navbar
type MenuBarTypes = {
    style: string;
    sfx: ReturnType<typeof useSfx>;
    isDark: boolean;
    setTheme: (theme: string) => void;
};

/**
 * MenuBarContent Sub-component
 * Renders the navigation list items and action buttons.
 * Shares mapping logic between main navbar and sidebar overlays.
 */
const MenuBarContent = ({ style, sfx, isDark, setTheme }: MenuBarTypes) => {
    const { header } = portfolioData;

    return (
        <div className={style}>
            {header.links.map((link, index) => (
                <Link
                    key={index}
                    onClick={() => {
                        sfx.play();
                        if (link.alertMsg) alert(link.alertMsg);
                    }}
                    href={link.href}
                    className="hover:text-accent transition-all duration-300 ease-in-out"
                >
                    {link.number && <span className="font-mono text-accent">{link.number}</span>} {link.label}
                </Link>
            ))}

            {header.statusText && (
                <div className="flex items-center gap-2" aria-label={`Status: ${header.statusText}`}>
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                        {header.statusText}
                    </span>
                </div>
            )}

            <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                title={isDark ? "Switch to light theme" : "Switch to dark theme"}
                className="text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded p-1"
            >
                {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <button
                type="button"
                onClick={sfx.toggle}
                aria-pressed={sfx.enabled}
                aria-label={sfx.enabled ? "Disable sound effects" : "Enable sound effects"}
                title={sfx.enabled ? "Sound effects on" : "Sound effects off"}
                className="text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded p-1"
            >
                {sfx.enabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>

            <Button
                onClick={() => alert(header.resumeAlertMsg)}
                className="bg-black text-accent rounded border border-accent/30 outline hover:border-accent hover:cursor-pointer transition-all duration-300 ease-in-out"
            >
                {header.resumeText}
            </Button>
        </div>
    );
}
