import { Github } from "lucide-react";
import Link from "next/link";
export const Footer = () => {

    return (
        <footer className="container mx-auto text-sm text-center leading-7 transition-all duration-400 ease-in-out py-6">
            <Link
                className="flex flex-col justify-center items-center gap-2 hover:text-orange-500"
                href="https://github.com/ShahandFahad/portfolio"
            >
                <span>
                    Designed & Built by Shah Fahad
                </span>
                <Github strokeWidth={1} />
            </Link>
        </footer>
    );
};
