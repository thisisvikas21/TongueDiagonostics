"use client";

import { LoaderButton } from "@/components/MultiStepLoader";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    UploadCloud,
    Camera,
    ScanEye,
    X,
    CheckCircle,
    XCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const analysisSteps = [
    { text: "Uploading image" },
    { text: "Analyzing tongue color" },
    { text: "Checking coating thickness" },
    { text: "Mapping texture patterns" },
    { text: "Assessing shape features" },
    { text: "Comparing with health database" },
    { text: "Generating diagnostic report" },
    { text: "Finalizing recommendations" },
];

const SendImage = () => {
    const router = useRouter();
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [message, setMessage] = useState<{
        text: string;
        type: "success" | "error";
    } | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const storedImage = sessionStorage.getItem("capturedImage");
        if (storedImage) setImageUrl(storedImage);

        return () => {
            setIsAnalyzing(false);
        };
    }, []);

    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            setIsUploading(true);
            setMessage(null);

            if (file.size > 100 * 1024 * 1024) {
                throw new Error("Image too large (max 5MB)");
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result as string;
                sessionStorage.setItem("capturedImage", base64Image);
                setImageUrl(base64Image);
                setIsUploading(false);
            };
            reader.onerror = () => {
                throw new Error("Failed to read file");
            };
            reader.readAsDataURL(file);
        } catch (error) {
            setIsUploading(false);
            setMessage({
                text:
                    error instanceof Error
                        ? error.message
                        : "Failed to load image",
                type: "error",
            });
        }
    };

    const analyzeImage = async () => {
        if (!imageUrl) return;

        setIsAnalyzing(true);
        setMessage(null);

        try {
         
            const analysisResults = await mockAPICall(imageUrl);

            sessionStorage.setItem(
                "analysisResults",
                JSON.stringify(analysisResults)
            );

            router.push("/result");
        } catch (error) {
            setMessage({
                text: "Analysis failed. Please try again.",
                type: "error",
            });
        } finally {
            setIsAnalyzing(false);
        }
    };

    const mockAPICall = async (imageUrl: string) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return {
            score: 7.5,
            metrics: {
                color: 8,
                coating: 7,
                texture: 6,
                shape: 8,
            },
            recommendations: [
                "Increase water intake",
                "Practice tongue scraping daily",
                "Reduce spicy foods",
            ],
        };
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center px-4 min-h-screen bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="w-full max-w-md py-12">
                <motion.h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
                    {imageUrl ? "Review Your Image" : "Upload Tongue Photo"}
                </motion.h1>

                <AnimatePresence mode="wait">
                    {imageUrl ? (
                        <motion.div
                            key="image-preview"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative group mb-8">
                                <Image
                                    src={imageUrl}
                                    alt="Captured tongue image"
                                    className="shadow-xl border-4 border-white rounded-xl w-full h-auto object-cover"
                                    width={400}
                                    height={400}
                                    unoptimized={true}
                                />
                            </div>

                            <div className="w-full space-y-4">
                                <LoaderButton
                                    onClick={analyzeImage}
                                    loadingStates={analysisSteps}
                                    duration={1500}
                                    loading={isAnalyzing}
                                    onComplete={() => {
                                        setIsAnalyzing(false);
                                    }}
                                    onCancel={() => {
                                        setIsAnalyzing(false);
                                        setMessage({
                                            text: "Analysis cancelled",
                                            type: "error",
                                        });
                                    }}
                                    buttonText="Analyze Image"
                                    buttonClass={`w-full py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 ${
                                        isAnalyzing
                                            ? "bg-gray-300 text-gray-600"
                                            : "bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg hover:shadow-rose-200"
                                    }`}
                                    buttonIcon={<ScanEye className="h-5 w-5" />}
                                />

                                <button
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="w-full py-3 px-6 rounded-xl font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Camera className="h-5 w-5" />
                                    Use Different Image
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="upload-prompt"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="flex flex-col items-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full aspect-square max-w-xs bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                            >
                                <UploadCloud className="h-12 w-12 text-gray-400 mb-4" />
                                <p className="text-gray-500 font-medium">
                                    Click to upload
                                </p>
                                <p className="text-gray-400 text-sm mt-1">
                                    or drag and drop
                                </p>
                            </motion.div>

                            <p className="mt-6 text-gray-500 text-center">
                                Upload a clear photo of your tongue for analysis
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Hidden File Input */}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                    capture="environment"
                />

                {/* Status Message */}
                <AnimatePresence>
                    {message && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className={`mt-6 p-4 rounded-xl flex items-center gap-3 ${
                                message.type === "success"
                                    ? "bg-green-50 text-green-700"
                                    : "bg-red-50 text-red-700"
                            }`}
                        >
                            {message.type === "success" ? (
                                <CheckCircle className="h-5 w-5" />
                            ) : (
                                <XCircle className="h-5 w-5" />
                            )}
                            <span>{message.text}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {message?.type === "success" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 w-full"
                    >
                        <Link
                            href="/"
                            className="block py-3 px-6 rounded-xl font-medium bg-gray-900 text-white text-center hover:bg-gray-800 transition-colors"
                        >
                            View Detailed Results
                        </Link>
                    </motion.div>
                )}

                <motion.div
                    whileHover={{ x: 3 }}
                    className="mt-8 text-gray-500 hover:text-gray-700 flex items-center justify-center gap-1 transition-colors"
                >
                    <Link href="/">← Back to home</Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SendImage;
