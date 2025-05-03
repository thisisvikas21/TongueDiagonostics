"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Parallax effects
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Scale down title on scroll
    const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

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
        <div
            ref={ref}
            className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-50"
        >
            {/* Animated background elements */}
            <motion.div
                style={{ y: yBg, opacity: opacityBg }}
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-100 via-blue-50 to-white"></div>
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-rose-50 opacity-60"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                />
            </motion.div>

            {/* Add near your floating particles */}
            <motion.div
                className="absolute right-[10%] top-[30%] z-10 hidden lg:block"
                initial={{ opacity: 0, y: -50 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                }}
            >
                <div className="relative w-64 h-96 bg-white rounded-3xl shadow-2xl border-8 border-gray-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-blue-100 opacity-80"></div>
                    <div className="absolute top-4 left-0 right-0 flex justify-center">
                        <div className="h-6 w-24 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-rose-300 to-blue-300"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: Math.random() * 100 - 50,
                        y: Math.random() * 100 - 50,
                        opacity: 0,
                    }}
                    animate={{
                        y: [0, Math.random() * 100 - 50],
                        x: [0, Math.random() * 100 - 50],
                        opacity: [0, 0.8, 0],
                        transition: {
                            duration: 5 + Math.random() * 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: Math.random() * 5,
                        },
                    }}
                    className="absolute z-10 h-1 w-1 rounded-full bg-rose-400"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}

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
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="mr-2 h-2 w-2 rounded-full bg-rose-500"
                    />
                    Revolutionizing Traditional Diagnostics
                    <motion.span
                        className="ml-2"
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "linear",
                        }}
                    >
                        <Sparkles className="h-4 w-4 text-rose-400" />
                    </motion.span>
                </motion.div>

                <motion.h1
                    variants={item}
                    style={{ scale: titleScale, y: titleY }}
                    className={cn(
                        "text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl",
                        "bg-gradient-to-r from-gray-900 via-rose-800 to-gray-900 bg-clip-text text-transparent"
                    )}
                >
                    AI-Powered Tongue{" "}
                    <motion.span
                        className="whitespace-nowrap"
                        animate={{
                            textShadow: "0 0 8px rgba(225, 29, 72, 0.5)",
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 2,
                        }}
                    >
                        Diagnostics
                    </motion.span>
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
                        className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg transition-all hover:scale-105 md:hidden"
                    >
                        <Link href="/camera">
                            <motion.span
                                whileHover={{ x: 2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center"
                            >
                                Take a Picture{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.span>
                        </Link>
                    </Button>
                    <Button
                        asChild
                        className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg transition-all hover:scale-105 hidden lg:flex"
                    >
                        <Link href="/send-image">
                            <motion.span
                                whileHover={{ x: 2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center"
                            >
                                Choose a Picture{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.span>
                        </Link>
                    </Button>
                    <motion.div whileHover={{ scale: 1.05 }}>
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
            </motion.div>

            {/* Add near your stats preview */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute left-[10%] top-[30%] z-10 hidden xl:block"
            >
                <div className="relative w-56 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                    <h4 className="text-xs font-semibold text-gray-500 mb-3">
                        HEALTH METRICS
                    </h4>
                    {[
                        { name: "Moisture", value: 78, color: "bg-blue-400" },
                        { name: "Coating", value: 62, color: "bg-rose-400" },
                        { name: "Color", value: 84, color: "bg-emerald-400" },
                        { name: "Texture", value: 71, color: "bg-purple-400" },
                    ].map((metric, i) => (
                        <div key={i} className="mb-3 last:mb-0">
                            <div className="flex justify-between text-xs mb-1">
                                <span>{metric.name}</span>
                                <span>{metric.value}%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                    className={`h-full ${metric.color} rounded-full`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${metric.value}%` }}
                                    transition={{
                                        duration: 1.5,
                                        delay: 1.5 + i * 0.2,
                                        ease: "easeOut",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
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
                    className="grid grid-cols-3 gap-8 rounded-2xl bg-white/80 p-6 backdrop-blur-md shadow-lg"
                >
                    {[
                        { value: "95%", label: "Accuracy" },
                        { value: "~5s", label: "Analysis Time" },
                        { value: "4", label: "Health Metrics" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={statItem}
                            whileHover={{ scale: 1.05 }}
                            className="text-center"
                        >
                            <motion.p
                                className="text-3xl font-bold text-rose-600"
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.5,
                                }}
                            >
                                {stat.value}
                            </motion.p>
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
