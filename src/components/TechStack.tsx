"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon, CodeIcon } from "lucide-react";

function TechStack() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden">
                            {/* Placeholder for model visualization */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <CodeIcon className="h-12 w-12 text-gray-400" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">
                            Advanced Computer Vision
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Our model analyzes tongue color, coating, texture,
                            using convolutional neural networks trained on
                            50,000+ clinical images.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Color Analysis",
                                "Texture Mapping",
                                "Shape Recognition",
                                "Coating Thickness",
                            ].map((tech, i) => (
                                <div key={i} className="flex items-center">
                                    <CheckCircleIcon className="h-5 w-5 text-rose-500 mr-2" />
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default TechStack;
