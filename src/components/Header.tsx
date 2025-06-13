import { ThemeController } from "./ThemeController";

export const Header = () => {
    return (

        <div className="navbar shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Fahad</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li className="hidden md:block"><a href="#contact">Contact</a></li>

                    <li>
                        <ThemeController />
                    </li>

                </ul>
            </div>
        </div>
    )
};
