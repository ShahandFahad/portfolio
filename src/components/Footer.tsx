import { Github } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { TerminalPrompt } from "./ui/TerminalPrompt";

/**
 * Footer Component
 * Renders the global page footer with design/build credits and GitHub links.
 * Content is dynamically bound to `portfolioData.footer`.
 */
export const Footer = () => {
    const { footer } = portfolioData;

    return (
        <footer className="container mx-auto text-sm text-center leading-7 transition-all duration-400 ease-in-out py-6">
            <Link
                className="flex flex-col justify-center items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                href={footer.githubLink}
                target="_blank"
            >
                <TerminalPrompt prefix="$" styles="text-sm">
                    {footer.text}
                </TerminalPrompt>
                <Github strokeWidth={1} />
            </Link>
        </footer>
    );
};
