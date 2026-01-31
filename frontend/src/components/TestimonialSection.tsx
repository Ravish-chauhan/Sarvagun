"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, User, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
// Mock images or placeholders since we don't have the assets referenced in the prompt
// Using gradients or standard placeholders instead of local imports that might fail

interface Testimonial {
    id: number;
    quote: string;
    name: string;
    role: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "The best medical equipment supplier we've partnered with! The team was professional and responsive, and the quality of disposables exceeded our expectations. Highly recommend! Their bulk pricing and timely delivery have made them our go-to supplier.",
        name: "Rajesh Kumar",
        role: "Hospital Administrator",
        rating: 5,
    },
    {
        id: 2,
        quote: "Outstanding service and premium quality products. The surgical instruments are top-notch and meet all our clinical standards. Their customer support team is always available to help with any queries.",
        name: "Dr. Priya Sharma",
        role: "Chief Medical Officer",
        rating: 5,
    },
    {
        id: 3,
        quote: "We've been sourcing our medical supplies from them for over 3 years now. Consistent quality, competitive prices, and reliable delivery. They understand the urgency of medical procurement.",
        name: "Amit Patel",
        role: "Procurement Manager",
        rating: 4,
    },
];

export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                    }`}
            />
        ));
    };

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#eff8ff] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="inline-flex items-center gap-2 text-[#3cacae] font-bold text-sm tracking-wider uppercase mb-4">
                        <span className="text-[#3cacae]">✦</span> TESTIMONIALS
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#044581] mb-6 font-display">
                        What our <span className="text-[#044581]">Clients Say</span>
                    </h2>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
                    {/* Left - Image with Rating Card */}
                    <div className="relative order-2 lg:order-1 hidden lg:block">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[380px] md:h-[480px] w-full lg:-ml-16 bg-gray-100 group">
                            {/* Main Image - A professional medical setting or doctor */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#044581]/20 to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800"
                                alt="Medical Professional"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                        </div>

                        {/* Rating Card Overlay */}
                        <div className="absolute -bottom-8 left-6 right-6 md:left-auto md:right-0 md:w-80 bg-[#3cacae] border-[4px] border-white rounded-2xl p-6 z-20">
                            <div className="flex items-start gap-4">
                                <div className="text-white">
                                    <span className="text-4xl md:text-5xl font-bold font-display">4.9/5</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-white/90 text-sm font-medium leading-tight pt-1">
                                        Trusted by<br />
                                        <span className="text-white font-bold">500+ Hospitals</span>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                                <div className="flex gap-1">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-white/80 text-xs font-medium ml-auto">
                                    Excellence
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Testimonial Content */}
                    <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left relative">
                        {/* Quote Icon - Watermark */}
                        <div
                            className="absolute -top-10 left-0 lg:-left-6 -z-10 opacity-20 animate-bounce"
                            style={{ animationDuration: '2s' }}
                        >
                            <Quote className="w-16 h-16 md:w-20 md:h-20 text-gray-400 rotate-180" />
                        </div>

                        {/* Quote Text */}
                        <blockquote className="text-lg md:text-2xl text-[#044581] leading-relaxed mb-8 md:mb-10 font-medium relative z-10">
                            "{currentTestimonial.quote}"
                        </blockquote>

                        {/* Client Info */}
                        <div className="flex items-center justify-center lg:justify-start w-full gap-4 md:gap-5 mb-8 md:mb-10 border-t border-gray-100 pt-6 md:pt-8">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#044581] to-[#3cacae] flex items-center justify-center text-white shadow-lg shrink-0">
                                <User className="w-6 h-6 md:w-8 md:h-8" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-bold text-[#044581] text-base md:text-lg font-display">
                                    {currentTestimonial.name}
                                </h4>
                                <p className="text-[#3cacae] font-medium text-xs md:text-sm">{currentTestimonial.role}</p>
                                <div className="flex gap-1 mt-1 lg:hidden">
                                    {renderStars(currentTestimonial.rating)}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex justify-center lg:justify-start w-full gap-3 md:gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={prevTestimonial}
                                className="h-10 w-10 md:h-12 md:w-12 rounded-full border-gray-200 text-gray-500 hover:border-[#3cacae] hover:text-[#3cacae] hover:bg-white transition-all duration-300"
                            >
                                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                            </Button>
                            <Button
                                variant="default"
                                size="icon"
                                onClick={nextTestimonial}
                                className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#044581] hover:bg-[#3cacae] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
