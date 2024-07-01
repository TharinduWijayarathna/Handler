import Header from '@/components/main/Header';
import Footer from '@/components/main/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import React, { ReactNode, useState } from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '@/components/main/Sidebar';

const AppLayout: React.FC<{ children: ReactNode; title?: string }> = ({ children, title }) => {
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
            <Head>
                <title>{title ? title : 'Hey its'}</title>
                <meta name="description" content="Its Handler" />
            </Head>

            <ThemeProvider>
                <div className="flex min-h-screen w-full flex-col bg-muted/40">
                    <Sidebar />
                    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                        <Header />
                        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                            {children}
                        </main>
                    </div>
                    <Footer />
                </div>
            </ThemeProvider>
        </>
    );
};

// Export the main component
export default AppLayout;
