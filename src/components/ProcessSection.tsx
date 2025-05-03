"use client"

import React from "react";
import { Timeline } from "./ui/timeline";
import { motion } from "framer-motion";
import { ActivityIcon, CameraIcon, CpuIcon } from "lucide-react";

const blankImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAQlBMVEU0NDSenp4xMTEqKiqamppUVFRjY2N/f3+lpaWHh4ctLS2ioqKLi4tMTEwhISEYGBhBQUF3d3c8PDyUlJRaWlpra2uLUZmMAAABgElEQVR4nO3Z246CMBRA0V65tIJC4f9/dVqZ8RKtGeeFHGevF2N86Q49hKJSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgfzD2BbP36t50al44yaoxPjpdE33Ye31vMb5LbdUg7cp0/agqIxMKQT3nmNnXLfPeS/y9EnP0sTo2uvNyLs13jDtUOIExvQlPHXuJMer5kkdi9nKNKffimx+2RxmhMWqNrrnWjOtSImTGGJ+07i/PYnZI7Wwkx8RLjFFtTEOQGqPM2qXlZ2zGSTu9CI6xxzHYZi2DPzZOuzjlfSY1Jn+xi4urzQNz0M7pss/kxoRTnx/Sck0bXVb2mdgYo6YckWtWXVrO+0xsTGi2CL19lH0mNsbmm7O7oxepMTYPzH1L2WdCY9TUPRzM0iD0CDAPj7y8K3PYZubZ8UzYrVnNy2A/5TyjTDDhY2KyHFN9EZjkxejqK1oXhcWY1y/P917emz7qbw0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBXX03UGMBymTrgAAAAAElFTkSuQmCC";
function HowItWorks() {
    const steps = [
        {
            title: "Capture Image",
            description:
                "Take a photo of your tongue using your smartphone camera",
            icon: <CameraIcon className="h-8 w-8" />,
        },
        {
            title: "AI Analysis",
            description:
                "Our deep learning model processes 20+ health indicators",
            icon: <CpuIcon className="h-8 w-8" />,
        },
        {
            title: "Get Insights",
            description:
                "Receive immediate health feedback with actionable recommendations",
            icon: <ActivityIcon className="h-8 w-8" />,
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Traditional Diagnostics Meet AI
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Combining centuries-old Eastern medicine with
                        cutting-edge computer vision
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-xl p-8 text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="bg-rose-100 p-4 rounded-full">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
