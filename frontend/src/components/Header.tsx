"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Product", path: "/products" },
        { name: "Catalog", path: "/catalog" },
        { name: "About Us", path: "/#about" },
        { name: "Contact", path: "/#contact" },
    ];

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname?.startsWith(path);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
            {/* Top Bar */}
            <div className="hidden min-[950px]:block bg-cyan-500 text-white py-2">
                <div className="w-full px-4 sm:px-12 lg:px-12 xl:px-24 2xl:px-24 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a href="tel:+919555088558" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Phone className="w-4 h-4" />
                            <span>+91 95550 88558</span>
                        </a>
                        <a href="mailto:sales@sarvagunenterprises.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Mail className="w-4 h-4" />
                            <span>sales@sarvagunenterprises.com</span>
                        </a>
                    </div>
                    <p className="opacity-90">Trusted by 500+ Hospitals Nationwide</p>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="w-full px-4 sm:px-12 lg:px-12 xl:px-24 2xl:px-24">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center mt-2">
                        <div className="w-50 h-16 xl:w-72 xl:h-20">
                            <Image
                                src="/logonew-tight.svg"
                                alt="Sarvagun Logo"
                                width={108}
                                height={80}
                                className="w-full h-full object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden min-[950px]:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`nav-link relative inline-flex flex-col items-center justify-center px-1 pb-1 text-base font-bold transition-colors duration-300 ${isActive(link.path) ? "text-[#044581] active" : "text-gray-700 hover:text-[#044581]"
                                    }`}
                            >
                                {link.name}
                                {/* Active/Hover Border */}
                                <span className="nav-border absolute bottom-0 left-1 h-[3px] w-0 bg-[#044581] rounded-full transition-all duration-300" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden min-[950px]:flex items-center gap-4">
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#044581] text-white font-bold rounded-lg hover:bg-[#033461] hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm shadow-md"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="min-[950px]:hidden p-2 text-gray-700"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="min-[950px]:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "py-2 font-medium transition-colors hover:text-[#044581]",
                                        isActive(link.path) ? "text-[#044581]" : "text-gray-700"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/#contact"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#044581] text-white font-bold rounded-lg hover:bg-[#033461] hover:shadow-md transition-all text-sm text-center mt-2"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header >
    );
};

export default Header;