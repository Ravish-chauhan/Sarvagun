"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { categories, products } from '@/data/products';

const ProductShowcaseSection = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const [maxProducts, setMaxProducts] = useState(9);

    // Responsive product count
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setMaxProducts(8); // Mobile/Tablet: 8 items
            } else {
                setMaxProducts(9); // Desktop: 9 items
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Filter products based on active category
    const categoryProducts = products.filter(p => p.category === activeCategory);

    // Display products based on screen size
    const displayProducts = categoryProducts.slice(0, maxProducts);

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
                        <div className="sticky top-32">
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
                                <button 
                                    onClick={() => window.open('https://wa.me/919554657717?text=Hi, I need custom medical equipment for bulk order', '_blank')}
                                    className="text-sm font-bold text-[#3cacae] hover:underline cursor-pointer"
                                >
                                    Contact Sales &rarr;
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Product Grid */}
                    <div className="w-full lg:w-3/4">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {displayProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-2 transform-gpu flex flex-col"
                                >
                                    {/* Image Placeholder */}
                                    <div className="w-full aspect-square bg-white flex items-center justify-center relative p-4 group-hover:bg-gray-50 transition-colors">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                        />
                                        {/* Essential Badge */}
                                        {product.isEssential && (
                                            <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
                                                ESSENTIAL
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-3 flex flex-col flex-1 border-t border-gray-100">
                                        <span className="text-[10px] sm:text-xs text-[#044581] font-medium uppercase mb-1">
                                            {categories.find(c => c.id === product.category)?.name || "Product"}
                                        </span>

                                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-2 line-clamp-2 leading-tight flex-1">
                                            {product.name}
                                        </h4>

                                        <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                                            {product.description}
                                        </p>

                                        <div className="mt-auto">
                                            <Button 
                                                className="w-full bg-[#044581] hover:bg-[#3cacae] text-white text-xs h-8 rounded-md transition-colors duration-300"
                                                onClick={() => window.open(`https://wa.me/919554657717?text=Hi, I want to know the price of ${encodeURIComponent(product.name)}`, '_blank')}
                                            >
                                                Ask Price
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {displayProducts.length === 0 && (
                            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                                <p className="text-gray-500">Products coming soon for this category.</p>
                            </div>
                        )}

                        {/* View All Button (Bottom) */}
                        <div className="mt-12 flex justify-center lg:justify-start">
                            <Link href={`/products?category=${activeCategory}`}>
                                <Button className="bg-[#044581] hover:bg-[#033461] text-white px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all">
                                    View All
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

