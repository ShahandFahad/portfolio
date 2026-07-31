"use client"
import Link from "next/link";
import { TypographyH1 } from "./ui/TypographyH1";
import { Button } from "./ui/button";
import { SidebarClose, SidebarOpen } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

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
        <header className="border sticky top-0 z-50 backdrop-blur border-none py-5 md:px-4">
            <nav className="container mx-auto px-2 sm:px-4 lg:px-8 flex items-center justify-between h-16 border-slate-900 border shadow-xl border-gray-800">

                <div className="flex items-center">
                    <TypographyH1 text={header.logoText} styles="lg:text-4xl md:text-2xl text-1xl  text-orange-500" />
                </div>

                {/* Navbar Content */}
                <MenuBarContent style="flex items-center space-x-6 md:block hidden" />

                {/* Open close side bar */}
                <div className="md:hidden block">
                    {
                        sidebar !== '' ?
                            <SidebarClose onClick={handleSidebar} />
                            :
                            <SidebarOpen onClick={handleSidebar} />
                    }
                </div>

            </nav>

            {/* Sidebar */}
            <div className={`${sidebar} absolute bg-gradient-to-r from-black via-slate-950 to-slate-900 md:to-black text-white w-56 min-h-screen overflow-y-auto transition-transform transform  ease-in-out duration-300`}
                id="sidebar">
                {/* Sidebar Content */}
                <MenuBarContent style="p-4 flex flex-col space-y-6" />
            </div>
        </header>
    );
};



// Types of sidebar and navbar
type MenuBarTypes = {
    style: string;
    // handleSidebar: () => void;
};

/**
 * MenuBarContent Sub-component
 * Renders the navigation list items and action buttons.
 * Shares mapping logic between main navbar and sidebar overlays.
 */
const MenuBarContent = ({ style }: MenuBarTypes) => {
    const { header } = portfolioData;

    return (
        <div className={style}>
            {header.links.map((link, index) => (
                <Link
                    key={index}
                    onClick={link.alertMsg ? () => alert(link.alertMsg) : undefined}
                    href={link.href}
                    className="hover:text-orange-500 transition-all duration-300 ease-in-out"
                >
                    {link.number && <span className="font-mono text-orange-500">{link.number}</span>} {link.label}
                </Link>
            ))}

            {header.statusText && (
                <div className="flex items-center gap-2" aria-label={`Status: ${header.statusText}`}>
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wide text-slate-400">
                        {header.statusText}
                    </span>
                </div>
            )}

            <Button
                onClick={() => alert(header.resumeAlertMsg)}
                className="bg-black text-orange-500 rounded border border-orange-900 outline hover:border-orange-500 hover:cursor-pointer transition-all duration-300 ease-in-out"
            >
                {header.resumeText}
            </Button>
        </div>
    );
}
