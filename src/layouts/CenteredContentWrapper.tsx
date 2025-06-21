import { ReactNode } from "react";

interface CenteredContentWrapperProps {
    children: ReactNode;
}

// pushes content to the middle
export const CenteredContentWrapper: React.FC<CenteredContentWrapperProps> = ({ children }) => {
    return (
        <div className="min-h-screen">
            {/*
                md:w-4/5: On medium screens and up, it takes 80% of the width (4/5 = 80%).
            */}
            <div className="mx-auto w-full md:w-4/5 max-w-screen-xl px-4">
                {children}
            </div>
        </div>
    );
};


/*
    // Temp wrapper code
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="mx-auto w-full md:w-3/5 max-w-screen-xl px-4 py-8 rounded-lg shadow-md bg-white">
        {children}
      </div>
    </div>
*/
