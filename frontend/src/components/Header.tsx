"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
            {/* Top Bar */}
            <div className="hidden md:block bg-primary text-primary-foreground py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a href="tel:+911234567890" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Phone className="w-4 h-4" />
                            <span>+91 123 456 7890</span>
                        </a>
                        <a href="mailto:info@medsupply.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Mail className="w-4 h-4" />
                            <span>info@medsupply.com</span>
                        </a>
                    </div>
                    <p className="opacity-90">Trusted by 500+ Hospitals Nationwide</p>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-16 h-16 xl:w-20 xl:h-20">
                            <Image
                                src="/logo6-cropped.svg"
                                alt="Sarvagun Ion Logo"
                                width={64}
                                height={64}
                                className="w-full h-full object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col leading-none">
                            <h1 className="text-xl md:text-2xl font-bold font-montserrat uppercase leading-none" style={{color: '#0b2e4f'}}>Sarvagun</h1>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-none">Enterprises</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={cn(
                                    "text-sm font-medium transition-colors duration-200 hover:text-primary",
                                    isActive(link.path) ? "text-primary" : "text-gray-700 dark:text-gray-300"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://wa.me/911234567890?text=Hello,%20I%20would%20like%20to%20enquire%20about%20your%20medical%20equipment."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors text-sm"
                        >
                            WhatsApp Us
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "py-2 font-medium transition-colors hover:text-primary",
                                        isActive(link.path) ? "text-primary" : "text-gray-700 dark:text-gray-300"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/911234567890?text=Hello,%20I%20would%20like%20to%20enquire%20about%20your%20medical%20equipment."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors text-sm text-center mt-2"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
