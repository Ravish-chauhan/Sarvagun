"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// Mock Data for Categories (matching existing data structure concepts)
const categories = [
    { id: "medical-consumables", name: "Medical Consumables" },
    { id: "surgical-supplies", name: "Surgical Supplies" },
    { id: "hospital-infrastructure", name: "Hospital Infrastructure" },
    { id: "icu-diagnostic-critical", name: "ICU & Diagnostics" },
    { id: "rehabilitation-aids", name: "Rehabilitation Aids" },
];

// Mock Data for Products (6 per category for demo)
const allProducts = [
    // Medical Consumables
    { id: 1, category: "medical-consumables", name: "N95 Surgical Masks", price: "₹250", desc: "High-filtration masks for medical use." },
    { id: 2, category: "medical-consumables", name: "Latex Examination Gloves", price: "₹450", desc: "Powder-free disposable gloves box." },
    { id: 3, category: "medical-consumables", name: "Disposable Syringes (5ml)", price: "₹120", desc: "Sterile single-use syringes pack." },
    { id: 4, category: "medical-consumables", name: "Sterile Gauze Pads", price: "₹80", desc: "Absorbent cotton gauze for wounds." },
    { id: 5, category: "medical-consumables", name: "IV Cannula Set", price: "₹65", desc: "Standard sterile IV cannula." },
    { id: 6, category: "medical-consumables", name: "Surgical Tape", price: "₹40", desc: "Hypoallergenic paper tape." },

    // Surgical Supplies
    { id: 7, category: "surgical-supplies", name: "Scalpel Handle #3", price: "₹150", desc: "Stainless steel surgical handle." },
    { id: 8, category: "surgical-supplies", name: "Surgical Forceps", price: "₹220", desc: "Precision thumb forceps." },
    { id: 9, category: "surgical-supplies", name: "Needle Holder", price: "₹350", desc: "Mayo-Hegar needle holder." },
    { id: 10, category: "surgical-supplies", name: "Surgical Scissors", price: "₹280", desc: "Sharp/Blunt operating scissors." },
    { id: 11, category: "surgical-supplies", name: "Retractors", price: "₹550", desc: "Self-retaining retractors." },
    { id: 12, category: "surgical-supplies", name: "Suture Kit", price: "₹400", desc: "Complete practice suture kit." },

    // Hospital Infrastructure
    { id: 13, category: "hospital-infrastructure", name: "Hospital Bed (Manual)", price: "₹15,000", desc: "Standard semi-fowler bed." },
    { id: 14, category: "hospital-infrastructure", name: "IV Stand", price: "₹1,200", desc: "Adjustable height IV pole." },
    { id: 15, category: "hospital-infrastructure", name: "Bedside Locker", price: "₹3,500", desc: "Metal bedside cabinet." },
    { id: 16, category: "hospital-infrastructure", name: "Examination Couch", price: "₹5,000", desc: "Padded examination table." },
    { id: 17, category: "hospital-infrastructure", name: "Overbed Table", price: "₹2,200", desc: "Adjustable food table." },
    { id: 18, category: "hospital-infrastructure", name: "Crash Cart", price: "₹12,000", desc: "Emergency crash cart trolley." },

    // ICU & Diagnostics
    { id: 19, category: "icu-diagnostic-critical", name: "Pulse Oximeter", price: "₹800", desc: "Finger tip oxygen monitor." },
    { id: 20, category: "icu-diagnostic-critical", name: "Digital Thermometer", price: "₹200", desc: "Fast reading thermometer." },
    { id: 21, category: "icu-diagnostic-critical", name: "Stethoscope", price: "₹1,500", desc: "Classic dual-head stethoscope." },
    { id: 22, category: "icu-diagnostic-critical", name: "BP Monitor", price: "₹1,800", desc: "Digital blood pressure gauge." },
    { id: 23, category: "icu-diagnostic-critical", name: "Nebulizer Machine", price: "₹1,200", desc: "Compact compressor nebulizer." },
    { id: 24, category: "icu-diagnostic-critical", name: "Glucometer Kit", price: "₹900", desc: "Blood glucose monitoring system." },
];

const ProductShowcaseSection = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);

    // Extend products to 9 items by repeating or mocking if necessary for the demo
    const categoryProducts = allProducts.filter(p => p.category === activeCategory);
    // Ensure we have enough items for the demo (9 needed)
    const extendedProducts = [...categoryProducts];
    if (categoryProducts.length > 0 && categoryProducts.length < 9) {
        // Naive repetition to fill to 9 for demo purposes since we only have 6 hardcoded
        let i = 0;
        while (extendedProducts.length < 9) {
            const original = categoryProducts[i % categoryProducts.length];
            extendedProducts.push({ ...original, id: original.id + 1000 + extendedProducts.length });
            i++;
        }
    }

    // Slice 9 items total (we will control visibility with CSS)
    const displayProducts = extendedProducts.slice(0, 9);


    // Fallback if category has no products in our mock list
    if (displayProducts.length === 0 && activeCategory === 'rehabilitation-aids') {
        // Just fill with generic placeholders for demo
        for (let i = 1; i <= 9; i++) {
            displayProducts.push({ id: 100 + i, category: 'rehabilitation-aids', name: `Rehab Product ${i}`, price: "₹--", desc: "Description coming soon." });
        }
    }

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">

                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-[#3cacae] font-bold text-sm uppercase tracking-wider mb-2 block">
                        ✦ Complete Catalog
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#044581] mb-6">
                        Browse Our Products
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Select a category to view our range of specialized medical equipment.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Left Sidebar - Categories */}
                    <div className="w-full lg:w-1/4 shrink-0">
                        <div className="sticky top-24">
                            <h3 className="text-2xl font-bold text-[#044581] mb-6 hidden lg:block">Categories</h3>

                            {/* Desktop Sidebar List */}
                            <div className="hidden lg:flex flex-col gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`text-left px-5 py-4 rounded-xl transition-all duration-300 font-medium text-lg border ${activeCategory === cat.id
                                            ? "bg-[#044581] text-white border-[#044581] shadow-lg transform translate-x-2"
                                            : "bg-white text-gray-600 border-transparent hover:border-[#3cacae]/30 hover:bg-white/80"
                                            }`}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile Dropdown */}
                            <div className="lg:hidden mb-6 relative">
                                <label htmlFor="category-select" className="block text-sm font-semibold text-gray-700 mb-2">Select Category</label>
                                <div className="relative">
                                    <select
                                        id="category-select"
                                        value={activeCategory}
                                        onChange={(e) => setActiveCategory(e.target.value)}
                                        className="w-full appearance-none bg-white border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3cacae]"
                                    >
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <ChevronDown className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements for Sidebar Area */}
                            <div className="hidden lg:block mt-8 p-6 bg-[#3cacae]/10 rounded-2xl border border-[#3cacae]/20">
                                <h4 className="font-semibold text-[#044581] mb-2">Need Custom Equipment?</h4>
                                <p className="text-sm text-gray-600 mb-4">We supply bulk orders for specialized hospital requirements.</p>
                                <Link href="/contact" className="text-sm font-bold text-[#3cacae] hover:underline">Contact Sales &rarr;</Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Product Grid */}
                    <div className="w-full lg:w-3/4">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {displayProducts.map((product, index) => (
                                <div
                                    key={product.id}
                                    className={`bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-2 transform-gpu flex-col ${index >= 6 ? 'hidden lg:flex' : 'flex'}`}
                                >
                                    {/* Image Placeholder */}
                                    <div className="w-full h-44 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                                        <span className="text-gray-400 text-xs sm:text-sm opacity-50">Product Image</span>
                                    </div>

                                    <div className="p-3 flex flex-col flex-1">
                                        <span className="text-[10px] sm:text-xs text-[#044581] font-medium uppercase mb-1">
                                            {categories.find(c => c.id === product.category)?.name || "Product"}
                                        </span>

                                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-3 line-clamp-2 leading-tight flex-1">
                                            {product.name}
                                        </h4>

                                        <div className="mt-auto">
                                            <Button className="w-full bg-[#044581] hover:bg-[#3cacae] text-white text-xs h-8 rounded-md transition-colors duration-300">
                                                Ask Price
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All Button (Bottom) */}
                        <div className="mt-12 flex justify-center lg:justify-start">
                            <Link href="/products">
                                <Button className="bg-[#044581] hover:bg-[#033461] text-white px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all">
                                    View All Products
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductShowcaseSection;
