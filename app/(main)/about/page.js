"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white py-12 pt-24 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* //? left content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                        Empowering Through IT Excellence
                    </h1>

                    <p className="text-lg text-gray-300">
                        The Information Technology - is capturing almost all spheres of economic
                        activities in every minute and this has posed a challenge for us to keep
                        pace with the speed of transformation.
                    </p>
                    <p className="text-lg text-gray-300">
                        The vision of <span className="font-semibold text-teal-400">Techlight</span>{" "}
                        is to be the number one choice for job-oriented training for our huge number
                        of manpower as per market demand.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <BadgeCheck className="text-teal-400 mt-1 w-8 h-8" />
                            <p>
                                Techlight provides a wide range of{" "}
                                <span className="text-white font-medium">
                                    job-oriented and professional development training
                                </span>{" "}
                                for both skilled and unskilled people.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <Lightbulb className="text-yellow-400 mt-1 w-10 h-10" />
                            <p>
                                Our courses are interactive, challenging, and bridge academic theory
                                with real-world practice to enhance work performance and practical
                                skills.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <BadgeCheck className="text-teal-400 mt-1 w-9 h-9" />
                            <p>
                                Established in 2012,{" "}
                                <span className="text-white font-medium">
                                    Techlight IT Institute
                                </span>{" "}
                                is a leading training and testing center in Bangladesh, committed to
                                delivering world-class technical education.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* //? right image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-lg"
                >
                    <Image
                        src="/ripon.jpg"
                        alt="Techlight IT Institute"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </div>
        </main>
    );
}
