"use client";

import { Facebook, Youtube, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
    return (
        <div className="w-full bg-slate-800 backdrop-blur-md text-white text-sm py-2 px-4 md:px-8 border-b border-white/10">
            <div className="flex items-center justify-between">
                {/* //? Email */}
                <div className="flex items-center gap-2 text-white hover:text-teal-400 transition duration-300 font-medium">
                    <Mail className="w-5 h-5" />{" "}
                    <a href="mailto:info@techlightbd.com" className="hover:underline">
                        info@techlight.com.bd
                    </a>
                </div>

                {/* //? Social Icons */}
                <div className="flex gap-2 md:gap-4 items-center text-gray-300">
                    <Link href="https://facebook.com" target="_blank">
                        <Facebook
                            className="hover:text-teal-400 transition duration-300"
                            size={18}
                        />
                    </Link>
                    <Link href="https://youtube.com" target="_blank">
                        <Youtube
                            className="hover:text-teal-400 transition duration-300"
                            size={19}
                        />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank">
                        <Linkedin
                            className="hover:text-teal-400 transition duration-300"
                            size={18}
                        />
                    </Link>
                    <Link href="https://x.com" target="_blank">
                        <Twitter
                            className="hover:text-teal-400 transition duration-300"
                            size={18}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
