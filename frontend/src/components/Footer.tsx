"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUpRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const footerLinks = {
        company: [
            { label: "About Us", href: "/#about" },
            { label: "Products", href: "/products" },
            { label: "Digital Card", href: "/card" },
            { label: "Contact", href: "/#contact" },
        ],
        products: [
            { label: "Medical Consumables", href: "/products?category=medical-consumables" },
            { label: "Surgical Supplies", href: "/products?category=surgical-supplies" },
            { label: "Medical Injectable", href: "/products?category=medical-injectable" },
            { label: "Hospital Infrastructure", href: "/products?category=hospital-infrastructure" },
            { label: "Orthopedic Supplies", href: "/products?category=orthopedic-supplies" },
        ],
        support: [
            { label: "Help Center", href: "#faq" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Return Policy", href: "/returns" },
        ]
    };

    return (
        <footer className="bg-[#044581] text-white pt-20 pb-8 relative overflow-hidden">
            {/* Subtle decorative background - Not a cheap gradient, but a clean texture */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                {/* Top Section: CTA & Brand */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-b border-white/10 pb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Ready to Upgrade?
                        </h2>
                        <p className="text-xl text-white/70 max-w-lg">
                            Equip your facility with premium medical solutions today.
                        </p>
                    </div>
                    <div>
                        <Button
                            onClick={scrollToContact}
                            className="bg-white text-[#044581] hover:bg-[#3cacae] hover:text-white rounded-full px-8 py-7 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl group"
                        >
                            Get a Quote
                            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                        </Button>
                    </div>
                </div>

                {/* Main Footer Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 pb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <h1 className="text-3xl font-bold tracking-wider text-white">SARVAGUN<span className="text-[#3cacae]">.</span></h1>
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-xs">
                            Your trusted partner for comprehensive medical infrastructure and hospital supplies. Committed to excellence in healthcare delivery.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3cacae] hover:text-white transition-all duration-300 border border-white/10 hover:border-[#3cacae]">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#3cacae]">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-white hover:text-[#3cacae] transition-colors flex items-center group">
                                        <span className="w-0 overflow-hidden group-hover:w-2 mr-0 group-hover:mr-2 transition-all duration-300 h-[2px] bg-[#3cacae]"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#3cacae]">Products</h4>
                        <ul className="space-y-4">
                            {footerLinks.products.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-white hover:text-[#3cacae] transition-colors flex items-center group">
                                        <span className="w-0 overflow-hidden group-hover:w-2 mr-0 group-hover:mr-2 transition-all duration-300 h-[2px] bg-[#3cacae]"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#3cacae]">Contact</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-[#3cacae] shrink-0" />
                                <span className="text-white">
                                    H No.58-Kh-No-359/1 Ward-Bharwara, Malhaur, Mohalla-Nizampur, Lucknow, UP, 226028
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-[#3cacae] shrink-0 mt-1" />
                                <span className="text-white">
                                    +91 95550 88558, +91 73552 29509,<br />+91 93359 12006
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-[#3cacae] shrink-0" />
                                <span className="text-white break-all">sales@sarvagunenterprises.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    {/* Go to Top - Mobile: Top, Desktop: Center */}
                    <div className="flex justify-center mb-4 md:mb-6">
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-white hover:text-[#3cacae] transition-colors group"
                        >
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            Go to Top
                        </button>
                    </div>

                    {/* Copyright and Links */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                        <p>&copy; {currentYear} Sarvagun Enterprises. All rights reserved.</p>
                        <div className="flex items-center gap-8">
                            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
