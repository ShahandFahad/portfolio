import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// custom hook to use theme
export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("No ThemeContext! Please provide the theme Context");
    }

    return context;
};
