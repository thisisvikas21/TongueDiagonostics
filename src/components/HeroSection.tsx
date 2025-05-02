"use client";

import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
            <Vortex
                backgroundColor="transparent"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full relative"
            >
                <motion.h2
                    className="text-white text-2xl md:text-6xl font-bold text-center"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Unlock the Power of Language Recognition
                </motion.h2>
                <motion.p
                    className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    Detect any Indian language from just a voice clip. A
                    seamless and intuitive solution powered by AI and Deep
                    Learning.
                </motion.p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    {/* Call to Action Buttons */}
                    <motion.button
                        className="px-6 py-3 bg-amber-500 hover:bg-amber-600 transition duration-300 rounded-lg text-white shadow-md transform hover:scale-105"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Get Started
                    </motion.button>
                    <motion.button
                        className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg transition duration-300 hover:bg-white hover:text-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Learn More
                    </motion.button>
                </div>
            </Vortex>
        </div>
    );
}
