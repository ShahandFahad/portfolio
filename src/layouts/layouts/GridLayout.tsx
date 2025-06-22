import { ReactNode } from "react";

interface GridLayoutProps {
    children: ReactNode;
};

export const GridLayout: React.FC<GridLayoutProps> = ({ children }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 justify-items-center">
            {children}
        </div>
    );
};
