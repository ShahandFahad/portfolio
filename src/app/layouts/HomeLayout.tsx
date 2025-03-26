import { ReactNode } from "react";
import { useTheme } from "../hooks/useTheme";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

interface HomeLayoutProps {
    children: ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    const { isDarkMode } = useTheme();
    return (
        <div data-theme={isDarkMode ? "night" : "winter"}>
            <Header />
            <Hero />
            <main className="p-4 md:p-12 flex flex-col gap-24">{children}</main>
            <Footer />
        </div>
    );
};
