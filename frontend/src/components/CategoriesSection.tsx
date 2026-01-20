"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

// Import local assets
import imgSurgery from "@/assets/category-surgery.png";
import imgOrthopedic from "@/assets/category-orthopedic.png";
import imgGynecology from "@/assets/category-gynecology.png";
import imgDiagnostic from "@/assets/category-diagnostic.png";
import imgDisposables from "@/assets/category-disposables.png";

// Map slugs to local matched assets
const categoryImages: Record<string, StaticImageData> = {
    "general-surgery": imgSurgery,
    "orthopedic": imgOrthopedic,
    "gynecology": imgGynecology,
    "diagnostic": imgDiagnostic,
    "disposables": imgDisposables,
};

const CategoriesSection = () => {
    return (
        <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gray-50">
            {/* Container aligned with HeroSection margins */}
            <div className="w-full px-6 sm:px-12 lg:pl-16 xl:pl-32 lg:pr-16 xl:pr-32">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-up">
                    <span className="text-accent font-bold text-sm uppercase tracking-wider">
                        Our Products
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-4 mb-6 tracking-tight">
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

                        // let mobileClass = "col-span-2";
                        // let desktopClass = "";

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
                                href={`/category/${category.slug}`}
                                className={`group relative overflow-hidden rounded-2xl ${layoutClass} shadow-sm hover:shadow-lg transition-all duration-300 ease-out border border-gray-100 block`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={categoryImages[category.slug]}
                                        alt={category.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        placeholder="blur"
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
                                    {/* Floating Badge */}
                                    <div className="absolute top-3 right-3 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                                        <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                                            {category.productCount}+
                                        </span>
                                    </div>

                                    <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className={`font-bold text-white leading-tight mb-0.5 ${index === 0 ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}>
                                            {category.name}
                                        </h3>

                                        {index === 0 && (
                                            <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-300 mb-2 font-medium">
                                                {category.description}
                                            </p>
                                        )}

                                        <div className={`flex items-center text-accent font-semibold text-xs tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-max ${index !== 0 ? 'mt-1' : ''}`}>
                                            View All
                                            <ArrowRight className="ml-1 h-3 w-3" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;
