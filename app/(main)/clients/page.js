"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const clients = [
    { name: "a2i", logo: "/assets/images/clients/client1.png" },
    { name: "Graphics Arts Institute", logo: "/assets/images/clients/client2.png" },
    { name: "Green University", logo: "/assets/images/clients/client3.png" },
    { name: "University of Asia Pacific", logo: "/assets/images/clients/client4.png" },
    { name: "University of Liberal Arts", logo: "/assets/images/clients/client5.png" },
    { name: "IUB University", logo: "/assets/images/clients/client6.png" },
    { name: "BCS", logo: "/assets/images/clients/client7.png" },
    { name: "IIT University", logo: "/assets/images/clients/client8.png" },
    { name: "Dhaka Polytechnic Institute", logo: "/assets/images/clients/client9.png" },
    { name: "Mymensingh Polytechnic Institute", logo: "/assets/images/clients/client10.png" },
    { name: "East West University", logo: "/assets/images/clients/client11.png" },
    { name: "ICT Division", logo: "/assets/images/clients/client12.png" },
];

const testimonials = [
    {
        quote: "Techlight helped us upskill our technical team faster than any other training partner we've used.",
        name: "Green University",
    },
    {
        quote: "Their practical, job-focused IT courses made a measurable difference in our new hire productivity.",
        name: "Dhaka Polytechnic Institute",
    },
    {
        quote: "Very well-organized professional training methods with real-world examples. Our employees loved it!",
        name: "East West University",
    },
];

export default function ClientsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-900 text-white py-20 px-4 sm:px-10">
            {/* //? title */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto text-center mb-16"
            >
                <h1 className="text-5xl font-bold text-teal-400">Our Clients</h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                    Over the years, Techlight has had the privilege of working with some of
                    Bangladesh&apos;s leading companies and institutions. Here are a few of the
                    brands we&apos;ve collaborated with.
                </p>
            </motion.div>

            {/* //? Client Logos */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center"
            >
                {clients.map((client, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="bg-white/5 hover:bg-white/10 transition p-4  rounded-xl border border-white/10 shadow-md flex justify-center items-center h-24"
                    >
                        <Image
                            src={client.logo}
                            alt={client.name}
                            width={120}
                            height={60}
                            className="object-contain"
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* //? Testimonials */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="max-w-4xl mx-auto mt-24 text-center"
            >
                <h2 className="text-3xl font-bold text-white mb-8">What Our Clients Say</h2>

                <Carousel className="w-full max-w-3xl mx-auto">
                    <CarouselContent>
                        {testimonials.map((item, index) => (
                            <CarouselItem key={index}>
                                <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 text-gray-300 text-base shadow-md">
                                    <p className="italic mb-4">“{item.quote}”</p>
                                    <p className="text-teal-400 font-medium">— {item.name}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </motion.div>
        </main>
    );
}
