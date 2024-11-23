import React, { useEffect, useState } from "react";
import data from "../assets/data/data.json";
import { DataContext, AppDataContextType } from "../context/Context";

/**
 * This is custom data provider for the app.
 * It reads data from json file, Stored in Services folder.
 * Provide it to the context
 *
 * @param {*} any
 * @returns app wrapped with data
 */
export default function DataProvider({ children }: any) {
  const [appData, setAppData] = useState<AppDataContextType>(data);

  // Run this effect on mount
  useEffect(() => {
    setAppData(data);
  }, []);

  //   Returns the data provider
  return (
    <DataContext.Provider value={appData}>{children}</DataContext.Provider>
  );
}
