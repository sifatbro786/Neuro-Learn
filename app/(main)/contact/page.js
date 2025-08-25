"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import "./contact.css";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-black py-16 px-4 sm:px-8">
            <h1 className="text-5xl font-bold text-center mb-20 text-black">
                Contact Techlight
            </h1>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start lg:items-center">
                {/* //? Contact Info & Map */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-10"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold mb-2">Let&apos;s Connect</h2>
                        <p className="text-lg text-gray-900 max-w-md">
                            Have a question, partnership idea or just want to say hi? Reach out —
                            we’re here to help.
                        </p>

                        <div className="space-y-5 text-base">
                            <div className="flex items-center gap-4">
                                <Mail className="text-black" />
                                <span>info@techlight.com.bd</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-black" />
                                <span>+8801886001973</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="text-black mt-1" />
                                <span>
                                    CNS Tower, 43/R/5-A,
                                    <br />
                                    4th Floor, West Panthapath,
                                    <br />
                                    Dhaka-1205
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden border-2 border-white/10 hover:border-teal-500 transition duration-300 shadow-xl">
                        <iframe
                            src="https://www.google.com/maps?q=CNS+Tower,+43%2FR%2F5-A,+West+Panthapath,+Dhaka-1205&output=embed"
                            width="100%"
                            height="300"
                            allowFullScreen
                            loading="lazy"
                            className="border-0 w-full grayscale-[15%] contrast-125"
                        ></iframe>
                    </div>
                </motion.div>

                {/* //? Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="self-center space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-red-500 hover:border-teal-500 transition-all duration-500"
                >
                    <h3 className="text-3xl font-semibold text-black mb-2">Send a Message</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="sexy-input"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="sexy-input"
                        />
                    </div>

                    <input type="text" placeholder="Subject" required className="sexy-input" />

                    <textarea
                        rows={5}
                        placeholder="Your Message"
                        required
                        className="sexy-input resize-none"
                    />

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-semibold py-3 rounded-xl shadow-md hover:shadow-cyan-400/40 transition-all duration-300"
                    >
                        🚀 Send Message
                    </motion.button>
                </motion.form>
            </div>
        </main>
    );
}
