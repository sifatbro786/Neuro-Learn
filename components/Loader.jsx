"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Loader() {
    return (
        <div className="flex justify-center items-center min-h-[200px]">
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 1,
                }}
            >
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
            </motion.div>
        </div>
    );
}
