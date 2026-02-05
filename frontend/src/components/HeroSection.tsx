"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
    "FDA Approved Products",
    "Bulk Order Specialists",
    "24/7 Support",
];

// Using direct public paths as fallback for visibility
const equipmentItems = [
    { src: "/assets/mask-nobg.png", alt: "Medical Mask", label: "Medical Masks" },
    { src: "/assets/wheelchair-nobg.png", alt: "Wheelchair", label: "Wheelchairs" },
    { src: "/assets/coat-nobg.png", alt: "Medical Coat", label: "Medical Coats" },
    { src: "/assets/dr-nobg.png", alt: "Doctor Equipment", label: "Professional Gear" },
];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % equipmentItems.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    if (!isMounted) return null;

    return (
        <section className="relative min-h-screen overflow-hidden flex flex-col lg:flex-row items-center pt-24 md:pt-44 xl:pt-32 pb-24 sm:pb-32">
            {/* Background with Medical Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-bg.jpg"
                    alt="Medical equipment background"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/95 via-[#003366]/90 to-[#0066CC]/70 backdrop-blur-[2px]" />
            </div>

            {/* Content - Full Width Grid */}
            <div className="w-full relative z-10 h-full flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-[60%_40%] lg:gap-0 lg:items-center">
                {/* Left side - Text content */}
                <div className="animate-fade-up text-center lg:text-left px-6 sm:px-12 lg:pl-12 xl:pl-24 2xl:pl-24 lg:pr-0 xl:pr-0 w-full xl:-mt-12">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white tracking-tight">
                        Premium Medical
                        <span className="block mt-2">
                            & Surgical
                            <span className="relative ml-3 inline-block text-white">
                                Equipment
                                <svg
                                    className="absolute -bottom-2 left-0 w-full text-accent"
                                    viewBox="0 0 200 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))" }}
                                >
                                    <path
                                        d="M2 8C30 4 70 2 100 6C130 10 170 8 198 4"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </span>
                    </h1>

                    <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl xl:max-w-4xl mx-auto lg:mx-0 font-medium leading-relaxed">
                        Your trusted partner for bulk medical supplies. From disposables to advanced surgical instruments — we deliver quality healthcare solutions worldwide.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
                        <Button size="lg" className="h-12 px-8 text-base bg-accent hover:bg-accent/90 text-white shadow-[0_4px_14px_0_rgba(20,184,166,0.39)] transition-all hover:scale-105">
                            Request Bulk Quote
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/50 transition-all">
                            Explore Products
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start">
                        {features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm font-semibold text-white/90">
                                <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                                </div>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side - Desktop Strip Effect & Images (Flush Right) */}
                <div className="relative hidden lg:flex items-center justify-end h-[600px] w-full perspective-1000 2xl:justify-center 2xl:mr-16">

                    {/* Hemi-Circle Strips (No Fill, Flush Right) */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[800px] overflow-hidden z-10 pointer-events-none">
                        {/* Main outer strip */}
                        <div className="w-[800px] h-[800px] rounded-full border-[6px] border-white/20 border-dashed absolute right-[-400px] top-0 opacity-60 animate-spin-slow" style={{ animationDuration: '120s' }}></div>

                        {/* Inner strip 1 */}
                        <div className="absolute top-[100px] right-[-400px] w-[600px] h-[600px] rounded-full border-[2px] border-white/30 absolute opacity-70"></div>

                        {/* Inner strip 2 (accent) */}
                        <div className="absolute top-[200px] right-[-400px] w-[400px] h-[400px] rounded-full border-[8px] border-l-accent border-t-transparent border-b-transparent border-r-transparent opacity-90 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
                    </div>

                    {/* Floating equipment images - Pushed to right - Removed Spacing */}
                    <div className="relative w-[500px] h-[500px] flex items-center justify-center z-20 2xl:-ml-24">
                        {equipmentItems.map((item, index) => (
                            <div
                                key={item.alt}
                                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out transform ${index === currentIndex
                                    ? 'opacity-100 scale-100 translate-x-0'
                                    : 'opacity-0 scale-95 translate-x-8'
                                    }`}
                            >
                                <div className="relative w-[450px] h-[450px]">
                                    {/* Glow behind the active item */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-accent/20 blur-[80px] rounded-full animate-pulse" />

                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority={index === 0}
                                        sizes="(max-width: 1024px) 100vw, 500px"
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Label for current item */}
                        <div className="absolute -bottom-16 xl:-bottom-6 left-1/2 -translate-x-1/2 z-30 min-w-[200px] text-center">
                            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-xl">
                                <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shadow-lg">
                                    {currentIndex + 1}
                                </div>
                                <span className="font-semibold text-white tracking-wide text-lg">
                                    {equipmentItems[currentIndex].label}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation dots - Pushed further right - Removed/Reduced spacing */}
                    <div className="absolute right-[20px] top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30 2xl:right-[40px]">
                        {equipmentItems.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 rounded-full transition-all duration-500 shadow-sm ${index === currentIndex
                                    ? 'bg-accent h-12 shadow-[0_0_15px_var(--accent)] opacity-100'
                                    : 'bg-white/20 h-2 hover:bg-white/40 hover:h-4'
                                    }`}
                                aria-label={`View ${equipmentItems[index].label}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile version - Clean Carousel below text */}
                <div className="lg:hidden relative h-[350px] w-full flex items-center justify-center mt-8 pb-8">
                    <div className="relative w-[280px] h-[280px]">
                        {equipmentItems.map((item, index) => (
                            <div
                                key={item.alt}
                                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${index === currentIndex
                                    ? 'opacity-100 scale-100 z-10'
                                    : 'opacity-0 scale-90 z-0'
                                    }`}
                            >
                                <div className="relative w-[240px] h-[240px]">
                                    {/* Removed Background Glow for cleaner look on mobile */}
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-contain drop-shadow-xl"
                                        sizes="(max-width: 768px) 300px, 100vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Mobile Label */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-max">
                        <p className="font-semibold text-sm text-white/90 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                            {equipmentItems[currentIndex].label}
                        </p>
                    </div>
                </div>
            </div>
            {/* Wavy Bottom Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 translate-y-[1px]">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[60px] sm:h-[100px] lg:h-[120px]"
                >
                    <path
                        d="M0,60 C400,160 800,-40 1200,60 V0 H0 Z"
                        className="fill-white"
                        opacity="1"
                        transform="rotate(180 600 60)"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;