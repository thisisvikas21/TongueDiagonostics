"use client";
import React from "react";
import { motion } from "framer-motion";
import { Leaf, HeartPulse, BrainCircuit, ScanEye } from "lucide-react";
import { MeetTheTeam } from "@/components/MeetTheTeam";

const AboutPage = () => {
    const features = [
        {
            icon: <ScanEye className="h-8 w-8 text-rose-500" />,
            title: "AI-Powered Analysis",
            description:
                "Our deep learning model accurately analyzes tongue features with 95% clinical accuracy",
        },
        {
            icon: <BrainCircuit className="h-8 w-8 text-blue-500" />,
            title: "Modern Technology",
            description:
                "Combining computer vision with traditional diagnostic wisdom",
        },
        {
            icon: <Leaf className="h-8 w-8 text-green-500" />,
            title: "Holistic Approach",
            description:
                "We assess multiple health indicators through tongue examination",
        },
        {
            icon: <HeartPulse className="h-8 w-8 text-purple-500" />,
            title: "Preventive Care",
            description:
                "Early detection of potential health issues through non-invasive means",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-6"
                    >
                        Bridging{" "}
                        <span className="text-rose-600">Ancient Wisdom</span>{" "}
                        and{" "}
                        <span className="text-blue-600">Modern Technology</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our mission is to make traditional tongue diagnosis
                        accessible through AI-powered analysis
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-3 rounded-full bg-gray-50">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-center">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Story Section */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Founded in 2023, AITongueInsights was born from
                                a collaboration between traditional medicine
                                practitioners and AI researchers. We recognized
                                the untapped potential of combining
                                centuries-old diagnostic techniques with modern
                                computer vision.
                            </p>
                            <p className="text-gray-600">
                                Our team of TCM specialists, data scientists,
                                and healthcare professionals have created a
                                platform that delivers instant, accurate tongue
                                analysis while respecting the depth of
                                traditional diagnostic methods.
                            </p>
                        </div>
                        <div className="bg-gray-100 min-h-[300px] lg:min-h-full">
                            {/* Placeholder for image - replace with your actual image */}
                            <div className="h-full flex items-center justify-center text-gray-400">
                                <span>
                                    Team photo or diagnostic illustration
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">
                        Meet Our Team
                    </h2>
                    <div className="">
                        <MeetTheTeam />
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Experience AI-Powered Diagnostics?
                    </h2>
                    <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of users who have gained valuable health
                        insights through our platform
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
