"useclient"
import Link from "next/link";
import { TypographyH1 } from "./ui/TypographyH1";
import { Button } from "./ui/button";
import { SidebarClose, SidebarOpen } from "lucide-react";
import { useState } from "react";

/*
  Header
  01.About
  02.Experience
  03.Work
  04.Contact

  Resume
*/

export const Header = () => {
    const [sidebar, setSidebar] = useState('-translate-x-full');

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
                    <TypographyH1 text="Shah Fahad" styles="lg:text-4xl md:text-2xl text-1xl  text-orange-500" />
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

// Content of sidebar and navbar
const MenuBarContent = ({ style }: MenuBarTypes) => {

    const versionAlert = () => {
        alert("🚧 Under Work 🚀 | Part of v3.0.0 Update! 🔧✨");
    }

    return (
        <div className={style}>
            <Link href="#about" className="hover:text-orange-500 transition-all duration-300 ease-in-out">
                <span className="text-orange-500">01.</span> About
            </Link>

            <Link onClick={() => versionAlert()} href="#" className="hover:text-orange-500 transition-all duration-300 ease-in-out">
                <span className="text-orange-500">02.</span> Experience
            </Link>

            <Link href="#projects" className="hover:text-orange-500 transition-all duration-300 ease-in-out">
                <span className="text-orange-500">03.</span> Work
            </Link>

            <Link href="#contact" className="hover:text-orange-500 transition-all duration-300 ease-in-out">
                <span className="text-orange-500">04.</span> Contact
            </Link>

            <Button onClick={() => versionAlert()} className="bg-black text-orange-500 rounded border border-orange-900 outline hover:border-orange-500 hover:cursor-pointer transition-all duration-300 ease-in-out">
                Resume
            </Button>
        </div>
    );
}
