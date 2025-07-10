import { SessionProvider } from "next-auth/react";
import { Navbar } from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import QuizProvider from "@/providers/QuizProvider";

export default function DashboardLayout({ children }) {
    return (
        <div className="h-full">
            <div className="h-[80px] lg:pl-56 fixed inset-y-0 w-full z-50">
                <SessionProvider>
                    <Navbar />
                </SessionProvider>
            </div>
            <div className="hidden lg:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            <main className="lg:pl-56 pt-[80px] h-full">
                <QuizProvider>{children}</QuizProvider>
            </main>
        </div>
    );
}
