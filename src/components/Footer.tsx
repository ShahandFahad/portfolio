import { Github } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { SealStamp } from "./motifs/SealStamp";

/**
 * Footer Component
 * Renders the global page footer with design/build credits and GitHub links.
 * Content is dynamically bound to `portfolioData.footer`.
 */
export const Footer = () => {
    const { footer } = portfolioData;

    return (
        <footer className="container mx-auto text-sm text-center leading-7 transition-all duration-400 ease-in-out py-6">
            <div className="flex flex-col items-center gap-3">
                <SealStamp mark="結" label="Sign-off" />
                <Link
                    className="flex flex-col justify-center items-center gap-2 text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    href={footer.githubLink}
                    target="_blank"
                >
                    <p className="font-mono text-sm">
                        <span className="text-seal">$</span> {footer.text}
                    </p>
                    <Github strokeWidth={1} />
                </Link>
            </div>
        </footer>
    );
};
