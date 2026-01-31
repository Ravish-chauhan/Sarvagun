"use client";

import { useRef, useState, useEffect } from "react";
import { Building2, Package, Headphones, ShieldCheck } from "lucide-react";

const statsData = [
    { number: 500, label: "Hospitals Served", suffix: "+", icon: Building2 },
    { number: 10000, label: "Products Available", suffix: "+", icon: Package },
    { number: 24, label: "Hour Support", suffix: "/7", icon: Headphones },
    { number: 100, label: "Quality Check", suffix: "%", icon: ShieldCheck }
];

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
        <div ref={counterRef} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-600">
                {count.toLocaleString()}{suffix}
            </div>
        </div>
    );
};

const WhyChooseUsSection = () => {
    return (
        <section className="py-16 bg-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-cyan-500 font-bold text-sm uppercase tracking-wider">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                        Your Trusted Medical Partner
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Experience excellence in medical supply with our commitment to quality, service, and innovation
                    </p>
                </div>

                {/* Stats Section */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {statsData.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="w-8 h-8 text-cyan-600" />
                                    </div>
                                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                                    <p className="text-gray-600 text-sm mt-2 font-medium">{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;