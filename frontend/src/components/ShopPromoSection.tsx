"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SectionGun from '@/assets/section-gun-2.svg';
import { ArrowRight } from 'lucide-react';

const ShopPromoSection = () => {
    return (
        <section className="relative w-full bg-[#eff8ff] py-6 md:py-10 overflow-visible mt-24 mb-16 lg:mt-32 lg:mb-20">
            {/* Image Container - Absolute positioning for Desktop to touch left and bottom */}
            {/* Reduced size slightly and lowered position to allow it to hang down */}
            <div className="hidden md:block absolute -bottom-12 left-0 z-20 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] animate-in fade-in slide-in-from-left-10 duration-700 pointer-events-none">
                <div className="relative w-full h-full">
                    <Image
                        src={SectionGun}
                        alt="Medical Supplies"
                        fill
                        className="object-contain object-bottom drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 h-full">
                <div className="flex flex-col md:flex-row items-center justify-end h-full">

                    {/* Mobile Image - Stacked */}
                    <div className="md:hidden relative w-[350px] h-[350px] -mt-24 mb-6 z-20">
                        <div className="absolute inset-0 bg-white/20 blur-[40px] rounded-full"></div>
                        <Image
                            src={SectionGun}
                            alt="Medical Supplies"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Content - Pushed to right on desktop */}
                    <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col items-center text-center text-[#044581]">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed tracking-wide mb-6 drop-shadow-sm">
                            Our product range covers essential consumables, surgical supplies, critical care, diagnostics, and hospital infrastructure.
                        </h2>

                        <Button
                            size="lg"
                            className="bg-[#044581] text-white hover:bg-[#033461] text-base md:text-lg font-bold px-8 py-3 md:px-10 md:py-4 rounded-full shadow-[0_10px_20px_rgba(4,69,129,0.15)] hover:shadow-[0_15px_25px_rgba(4,69,129,0.2)] transition-all transform hover:-translate-y-1 active:translate-y-0"
                        >
                            Shop Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>

                </div>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        </section>
    );
};

export default ShopPromoSection;
