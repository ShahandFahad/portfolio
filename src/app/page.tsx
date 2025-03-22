'use client'
import { HomeLayout } from "./layouts/HomeLayout";
import { DataProvider } from "./provider/DataProvider";
import { ThemeProvider } from "./provider/ThemeProvider";

export default function Home() {
    return (
        <DataProvider>
            <ThemeProvider>
                <HomeLayout>
                    <h1>HOME</h1>
                </HomeLayout>
            </ThemeProvider>
        </DataProvider>
    );
};
