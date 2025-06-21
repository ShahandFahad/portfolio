import { ReactNode, useEffect, useState } from "react";
import { DataContext, DataContextType } from "../contexts/DataContext";
import data from "../../../public/data.json";

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [appData, setAppData] = useState<DataContextType>(data);

    useEffect(() => {
        setAppData(data);
    }, []);

    return (
        <DataContext.Provider value={appData}>
            {children}
        </DataContext.Provider>
    );
};


