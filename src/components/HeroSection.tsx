"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const statsContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
                delay: 1,
            },
        },
    };

    const statItem = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-50">
            {/* Background elements */}
            <div className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-white [mask-image:radial-gradient(transparent,white)]" />

            {/* Content container */}
            <motion.div
                initial="hidden"
                animate="show"
                variants={container}
                className="relative z-20 mx-auto max-w-6xl px-4 text-center"
            >
                <motion.div
                    variants={item}
                    className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm"
                >
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="mr-2 h-2 w-2 rounded-full bg-rose-500"
                    />
                    Revolutionizing Traditional Diagnostics
                </motion.div>

                <motion.h1
                    variants={item}
                    className={cn(
                        "text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl",
                        "bg-gradient-to-r from-gray-900 via-rose-800 to-gray-900 bg-clip-text text-transparent"
                    )}
                >
                    AI-Powered Tongue{" "}
                    <span className="whitespace-nowrap">Diagnostics</span>
                </motion.h1>

                <motion.p
                    variants={item}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
                >
                    Tongue analysis has long been used in Eastern medicine as a
                    window into the body's internal health. Our deep learning
                    model digitizes this ancient practice to deliver real-time
                    health insights.
                </motion.p>

                <motion.div
                    variants={item}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button
                        asChild
                        className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg transition-all hover:scale-105"
                    >
                        <Link href="/camera">
                            <motion.span
                                whileHover={{ x: 2 }}
                                className="flex items-center"
                            >
                                Take a Picture{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.span>
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        className="rounded-full px-8 py-6 text-lg font-semibold"
                    >
                        <motion.span whileHover={{ x: 2 }}>
                            Learn How It Works
                        </motion.span>
                    </Button>
                </motion.div>
            </motion.div>

            {/* Stats preview */}
            <motion.div
                initial="hidden"
                animate="show"
                variants={statsContainer}
                className="absolute bottom-10 left-0 right-0 z-20 mx-auto hidden max-w-7xl px-6 md:block"
            >
                <motion.div
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    className="grid grid-cols-3 gap-8 rounded-2xl bg-white/80 p-6 backdrop-blur-md"
                >
                    {[
                        { value: "95%", label: "Accuracy" },
                        { value: "~10ms", label: "Analysis Time" },
                        { value: "20+", label: "Health Indicators" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={statItem}
                            whileHover={{ scale: 1.05 }}
                            className="text-center"
                        >
                            <p className="text-3xl font-bold text-rose-600">
                                {stat.value}
                            </p>
                            <p className="mt-1 text-sm font-medium text-gray-500">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
