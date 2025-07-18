"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import { X, Menu } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Logo } from "./logo";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import DemoUser from "/public/demoUser.png";

export function MainNav({ items, children }) {
    const { data: session } = useSession();

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [loginSession, setLoginSession] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState(null);

    if (session?.error === "RefreshAccessTokenError") {
        redirect("/login");
    }

    useEffect(() => {
        setLoginSession(session);

        async function fetchMe() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/me`);
                const data = await response.json();

                setLoggedInUser(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchMe();
    }, [session]);

    return (
        <>
            <div className="flex gap-6 lg:gap-10 w-full">
                <Logo />

                {items?.length ? (
                    <nav className="hidden lg:flex flex-1 justify-center gap-6">
                        {items?.map((item, index) => (
                            <Link
                                key={index}
                                href={item.disabled ? "#" : item.href}
                                className={cn(
                                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                                )}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                ) : null}

                {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
            </div>

            <nav className="flex items-center gap-3">
                {!loginSession && (
                    <div className="items-center gap-3 hidden lg:flex">
                        <Link href="/login" className={cn(buttonVariants({ size: "sm" }), "px-4")}>
                            Login
                        </Link>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                    Register
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56 mt-4">
                                <DropdownMenuItem className="cursor-pointer">
                                    <Link href="/register/student">Student</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                    <Link href="/register/instructor">Instructor</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                )}

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="cursor-pointer">
                            <Avatar>
                                <Image
                                    src={
                                        loggedInUser?.profilePicture ||
                                        session?.user?.image ||
                                        DemoUser
                                    }
                                    alt={session?.user?.email}
                                    height={40}
                                    width={40}
                                />
                                <AvatarFallback>
                                    {loggedInUser?.firstName.slice(0, 1).toUpperCase() +
                                        loggedInUser?.lastName.slice(0, 1).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 mt-4">
                        <DropdownMenuItem className="cursor-pointer" asChild>
                            <Link href="/account">Profile</Link>
                        </DropdownMenuItem>
                        {loggedInUser?.role === "instructor" && (
                            <DropdownMenuItem className="cursor-pointer" asChild>
                                <Link href="/dashboard">Dashboard</Link>
                            </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="cursor-pointer" asChild>
                            <Link href="/account/enrolled-courses">My Courses</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer" asChild>
                            <Link href="">Testimonials & Certificates</Link>
                        </DropdownMenuItem>
                        {loginSession && (
                            <DropdownMenuItem className="cursor-pointer" asChild>
                                <button onClick={() => signOut()}>Logout</button>
                            </DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>

                <button
                    className="flex items-center space-x-2 lg:hidden"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    {showMobileMenu ? <X /> : <Menu />}
                </button>
            </nav>
        </>
    );
}
