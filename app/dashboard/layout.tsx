import SideNav from '@/app/ui/dashboard/sidenav';
// import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    // useEffect(() => {
    //     console.log('WKS-9999 3');
    //     return () => {
    //         console.log('WKS-9999 4');
    //     }
    // }, []);

    // console.log('WKS-9999 2');
    
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}
