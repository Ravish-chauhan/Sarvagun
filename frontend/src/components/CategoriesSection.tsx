"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

// Import local assets
import imgSurgery from "@/assets/surgical-cat.svg";
import imgOrthopedic from "@/assets/category-orthopedic.png";
import imgGynecology from "@/assets/category-gynecology.png";
import imgDiagnostic from "@/assets/category-diagnostic.png";
import imgDisposables from "@/assets/category-disposables.png";
import imgMedicalConsumable from "@/assets/medical-consumable.svg";
import imgHospitalInfra from "@/assets/hospital-infra.svg";

// Map slugs to local matched assets
const categoryImages: Record<string, StaticImageData> = {
    "medical-consumables": imgMedicalConsumable,
    "surgical-supplies": imgSurgery,
    "hospital-infrastructure": imgHospitalInfra,
    "icu-diagnostic-critical": imgDiagnostic,
    "orthopedic-supplies": imgOrthopedic,
};

const CategoriesSection = () => {
    return (
        <section className="relative pt-20 pb-8 lg:pt-24 lg:pb-12 bg-[#eff8ff] overflow-hidden">
            {/* Decorative Top Right Bars */}
            <div className="absolute top-0 right-0 z-0 flex gap-2 sm:gap-3 lg:gap-4 pr-4 sm:pr-8 lg:pr-12 opacity-20 pointer-events-none">
                {/* Bar 1 (Small) */}
                <div className="w-2.5 h-12 sm:w-3.5 sm:h-20 lg:w-4 lg:h-24 bg-[#3cacae]"></div>
                {/* Bar 2 (Big) */}
                <div className="w-2.5 h-20 sm:w-3.5 sm:h-28 lg:w-4 lg:h-36 bg-[#3cacae]"></div>
                {/* Bar 3 (Biggest) */}
                <div className="w-2.5 h-28 sm:w-3.5 sm:h-40 lg:w-4 lg:h-52 bg-[#3cacae]"></div>
            </div>

            {/* Decorative Plus Sign - Top Right */}
            <div className="absolute top-4 right-20 sm:top-6 sm:right-32 lg:top-10 lg:right-48 z-0 opacity-20 pointer-events-none text-[#3cacae] text-3xl sm:text-4xl lg:text-5xl font-black leading-none select-none">
                +
            </div>

            {/* Decorative Plus Sign - Bottom Left */}
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-12 lg:bottom-12 lg:left-20 z-0 opacity-40 pointer-events-none text-[#3cacae] text-4xl sm:text-5xl lg:text-6xl font-black leading-none select-none">
                +
            </div>

            {/* Container aligned with HeroSection margins */}
            <div className="relative z-10 w-full px-6 sm:px-12 lg:pl-16 xl:pl-32 lg:pr-16 xl:pr-32">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-up">
                    <span className="text-[#3cacae] font-bold text-sm uppercase tracking-wider">
                        ✦ Our Products
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#044581] mt-4 mb-6 tracking-tight">
                        Browse by Category
                    </h2>
                    <p className="text-gray-500 text-lg sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        Explore our comprehensive range of medical and surgical equipment, specialized by department for premium healthcare delivery.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 auto-rows-[160px] sm:auto-rows-[220px]">
                    {categories.slice(0, 4).map((category, index) => {
                        // Layout Logic:
                        // Mobile (2 cols):
                        // Row 1: Item 0 (2 cols) -> Full width
                        // Row 2: Item 1 (1 col) | Item 2 (1 col) -> Side by side
                        // Row 3: Item 3 (2 cols) -> Full width

                        // Desktop (4 cols):
                        // [ Item 0 (2x2) ] [ Item 1 (1x2) ] [ Item 2 (1x1) ]
                        // [   ...        ] [    ...       ] [ Item 3 (1x1) ]

                        const layoutClass = (() => {
                            switch (index) {
                                case 0: return "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2"; // Big item
                                case 1: return "col-span-1 row-span-1 lg:col-span-1 lg:row-span-2"; // Tall/Small
                                case 2: return "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1"; // Small
                                case 3: return "col-span-2 row-span-1 lg:col-span-1 lg:row-span-1"; // Wide/Small
                                default: return "col-span-1";
                            }
                        })();

                        return (
                            <Link
                                key={category.id}
                                href={`/products?category=${category.id}`}
                                className={`group relative overflow-hidden rounded-2xl ${layoutClass} shadow-sm hover:shadow-lg transition-all duration-300 ease-out border border-gray-100 block`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={categoryImages[category.id]}
                                        alt={category.name}
                                        fill
                                        className={`object-cover ${category.id === 'orthopedic-supplies' ? 'object-bottom' : 'object-top'} transition-transform duration-700 group-hover:scale-105`}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
                                    {/* Floating Badge */}
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-[#3cacae] text-white border border-[#3cacae] text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                                            {category.productCount}+
                                        </span>
                                    </div>

                                    <div className="transform group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className={`font-bold text-white leading-tight mb-0.5 ${index === 0 ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}>
                                            {category.name}
                                        </h3>

                                        {index === 0 && (
                                            <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 transition-opacity delay-75 duration-300 mb-2 font-medium">
                                                {category.description}
                                            </p>
                                        )}

                                        <div className={`flex items-center text-[#3cacae] font-semibold text-xs tracking-wide transition-opacity duration-300 w-max ${index !== 0 ? 'mt-1' : ''}`}>
                                            View Products
                                            <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* View All Link */}
                <div className="flex justify-end mt-6">
                    <Link
                        href="/products"
                        className="inline-flex items-center text-[#3cacae] font-semibold text-sm hover:text-[#3cacae]/80 transition-colors group"
                    >
                        View All
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default CategoriesSection;
