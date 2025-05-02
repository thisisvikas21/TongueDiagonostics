import React from "react";

const Header = () => {
    return (
        <header className="sticky top-0 p-6 bg-black/95 bg-opacity-80 text-white z-[100] h-20">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-3xl font-bold">VaaniAI</div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#home" className="hover:text-amber-500">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-amber-500">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-amber-500">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#github" className="hover:text-amber-500">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
