import Header from '@/components/main/Header';
import Footer from '@/components/main/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import React, { ReactNode, useState } from 'react';

const AppLayout: React.FC<{ children: ReactNode; title?: string }> = ({ children, title }) => {
    // const { url } = usePage();

    const [preloaderVisible, setPreloaderVisible] = useState(false);

    const startPreloader = () => {
        setPreloaderVisible(true);
    };

    const stopPreloader = () => {
        setPreloaderVisible(false);
    };

    useState(() => {
        startPreloader();
        setTimeout(() => {
            stopPreloader();
        }, 1000);
    }
    );

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <div className="flex min-h-screen w-full flex-col">

                    <Header />
                    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                        {children}
                    </main>
                 <Footer />
                </div>
            </ThemeProvider>
        </>
    );
};

// Export the main component
export default AppLayout;
