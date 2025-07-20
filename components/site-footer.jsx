import Image from "next/image";
import { Facebook, Youtube, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="bg-slate-800 text-white px-6 py-12 md:px-[230px] border-t border-white/30">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* //? Contact Info */}
                <div>
                    <Logo />
                    <p className="text-sm leading-6 mt-4">
                        CNS Tower, 43/R/5-A, 4th Floor, West Panthapath, Dhaka-1205 (Beside Square
                        Hospital)
                    </p>
                    <p className="mt-4 mb-1 text-sm flex items-center gap-[6px]">
                        <Mail className="w-[18px] h-[18px]" /> techlightclc@gmail.com
                    </p>
                    <p className="text-sm mb-6 flex items-center gap-1">
                        <Phone className="w-4 h-4" /> +8801886001973
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-teal-400">
                            <Facebook size={22} />
                        </a>
                        <a href="#" className="hover:text-teal-400">
                            <Youtube size={22} />
                        </a>
                        <a href="#" className="hover:text-teal-400">
                            <Linkedin size={22} />
                        </a>
                        <a href="#" className="hover:text-teal-400">
                            <Twitter size={22} />
                        </a>
                    </div>
                </div>

                {/* //? Quick Links */}
                <div className="md:mx-auto">
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:text-teal-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-teal-400">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#courses" className="hover:text-teal-400">
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-teal-400">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/clients" className="hover:text-teal-400">
                                Our Clients
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* //? Payment Info */}
                <div className="md:ml-auto">
                    <h3 className="text-xl font-semibold mb-4">Our Payment Merchant</h3>
                    <p className="text-sm font-medium text-yellow-500 mb-4">+8801711310768</p>
                    <Image
                        src="/accounts.webp"
                        alt="Payment Methods"
                        width={300}
                        height={100}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* //? QR Code */}
                <div className="md:ml-auto">
                    <h3 className="text-xl font-semibold mb-4">Scan to Pay</h3>
                    <Image
                        src="/TechLight_Bar_Code.png"
                        alt="QR Code"
                        width={160}
                        height={160}
                        className="bg-white p-2 rounded-xl"
                    />
                    <p className="text-xs text-gray-300 mt-3">
                        e-TIN: <span className="text-white font-bold">572113303278</span>
                        <br />
                        TRAD/DSCC/132971/2022
                    </p>
                </div>
            </div>

            <hr className="border-t border-gray-700 my-8" />
            <div className="text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Techlight IT Institute. All rights reserved.
            </div>
        </footer>
    );
}
