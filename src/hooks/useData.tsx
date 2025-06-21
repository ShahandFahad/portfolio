import { useContext } from "react"
import { DataContext } from "../contexts/DataContext";

// custom hook to use data
export const useData = () => {
    const context = useContext(DataContext);

    if(!context){
        throw new Error("Please! provide Data Context");
    }

    return context;
}
