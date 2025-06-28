"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MobileSidebar } from "./mobile-sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import DemoUser from "/public/demoUser.png";

export const Navbar = () => {
    const { data: session } = useSession();
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        async function fetchMe() {
            try {
                const response = await fetch("api/me");
                const data = await response.json();

                setLoggedInUser(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchMe();
    }, []);

    return (
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
            <MobileSidebar />
            <div className="flex items-center justify-end  w-full">
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
                        <DropdownMenuItem className="cursor-pointer">
                            <Link href="/">Home</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            <Link href="#" onClick={() => signOut()}>
                                Logout
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};
