import { MainNav } from "@/components/main-nav";
import SiteFooter  from "@/components/site-footer";
import TopHeader from "@/components/top-header";
import { SessionProvider } from "next-auth/react";

const navLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Courses",
        href: "/#courses",
    },
    {
        title: "About Us",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
    {
        title: "Clients",
        href: "/clients",
    },
];

export default async function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
                <TopHeader />
                <SessionProvider>
                    <div className="container flex h-20 items-center justify-between py-6">
                        <MainNav items={navLinks} />
                    </div>
                </SessionProvider>
            </header>

            <main className="flex-1 pt-20 flex flex-col">{children}</main>

            <SiteFooter />
        </div>
    );
}
