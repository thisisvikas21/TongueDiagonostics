"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        {
            name: "GitHub",
            href: "#github",
            icon: <Github className="h-5 w-5" />,
        },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-[100] h-16 bg-black/95 backdrop-blur-sm p-4 text-white shadow-lg"
        >
            <div className="container mx-auto flex items-center justify-between h-full">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-600 bg-clip-text text-transparent"
                >
                    <Link href="/">AITongueInsights</Link>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-300"
                                >
                                    {item.icon && (
                                        <span className="mr-1">
                                            {item.icon}
                                        </span>
                                    )}
                                    {item.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </motion.button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm shadow-lg"
                        >
                            <ul className="flex flex-col space-y-4 p-4">
                                {navItems.map((item) => (
                                    <motion.li
                                        key={item.name}
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-2 text-lg hover:text-violet-400 transition-colors duration-300 py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.icon && (
                                                <span>{item.icon}</span>
                                            )}
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;
