"use client";

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { products, categories, Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Search, Filter, ArrowRight, Syringe, Pill, Stethoscope, Microscope, Activity, FlaskConical, TestTubes, Droplets, Wind, ShieldCheck, Scan, Wrench, BadgeCheck, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';

const ProductsContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialCategory = searchParams.get('category') || 'all';

    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilter, setShowFilter] = useState(true);
    const [isLaptop, setIsLaptop] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLaptop(window.innerWidth >= 1024);
            setWindowWidth(window.innerWidth);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
                    setShowFilter(false);
                } else {
                    setShowFilter(true);
                }
                lastScrollY.current = window.scrollY;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const category = searchParams.get('category');
        if (category) {
            setActiveCategory(category);
        } else {
            setActiveCategory('all');
        }
    }, [searchParams]);

    const handleCategoryChange = (categoryId: string) => {
        setActiveCategory(categoryId);
        setCurrentPage(1); // Reset to page 1 when category changes
        if (categoryId === 'all') {
            router.push('/products', { scroll: false });
        } else {
            router.push(`/products?category=${categoryId}`, { scroll: false });
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [screenSize, setScreenSize] = useState('mobile');

    useEffect(() => {
        const updateScreenSize = () => {
            if (window.innerWidth >= 1024) {
                setScreenSize('laptop');
            } else if (window.innerWidth >= 768) {
                setScreenSize('tablet');
            } else {
                setScreenSize('mobile');
            }
        };

        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);
        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    const productsPerPage = screenSize === 'laptop' ? 16 : 12;

    // Image carousel state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const carouselImages = [
        '/assets/mask-nobg.png',
        '/assets/wheelchair-nobg.png',
        '/assets/coat-nobg.png',
        '/assets/dr-nobg.png'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [carouselImages.length]);

    // Original categories with unique product images (shown in "All Products")
    const mainCategoryIds = [
        'medical-consumables',
        'surgical-supplies',
        'medical-injectable',
        'hospital-infrastructure',
        'orthopedic-supplies',
    ];

    const filteredProducts = products.filter((product) => {
        const matchesCategory = activeCategory === 'all'
            ? mainCategoryIds.includes(product.category) // "All" only shows main categories
            : product.category === activeCategory;       // Specific category shows all its products
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    return (
        <div className="min-h-screen flex flex-col">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#044581] to-[#3cacae] min-h-[65vh] md:min-h-[80vh] flex items-center" style={{
                background: 'var(--gradient-hero)',
                paddingTop: isLaptop ? '100px' : (windowWidth >= 768 ? '120px' : '120px'),
                paddingBottom: windowWidth === 1024 ? '20px' : (isLaptop ? '40px' : (windowWidth >= 768 ? '60px' : '40px'))
            }}>
                <div className="container mx-auto px-2 min-[400px]:px-4 md:px-6 lg:px-20 relative z-20">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left side - Content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                                Our Products
                            </h1>
                            <p className="text-base md:text-lg text-white/90 mb-8 font-light max-w-2xl mx-auto lg:mx-0">
                                Premium Medical Equipment & Solutions for Healthcare Excellence
                            </p>

                            {/* Search Bar */}
                            <div className="w-72 min-[375px]:w-80 lg:w-full max-w-lg mx-auto lg:mx-0">
                                <div className="bg-white/20 backdrop-blur-md rounded-full p-2 md:p-2 shadow-2xl border border-white/30">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 pl-3 md:pl-3">
                                            <Search className="h-4 w-4 md:h-5 md:w-5 text-white/70" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Search equipment..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="flex-1 min-w-0 px-3 md:px-3 py-3 md:py-2.5 text-sm md:text-base bg-transparent border-0 focus:outline-none text-white placeholder-white/60"
                                        />
                                        <button className="flex-shrink-0 bg-[#044581] hover:bg-[#3cacae] text-white px-4 py-3 md:px-6 md:py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-sm">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Changing Medical Images */}
                        <div
                            className="hidden lg:flex items-center justify-center relative"
                            style={{
                                justifyContent: windowWidth >= 1440 ? 'flex-end' : undefined,
                                marginRight: windowWidth >= 1440 ? '0' : undefined
                            }}
                        >
                            {/* Image Container */}
                            <div className="relative w-[400px] h-[400px]">
                                {/* Glow effect behind image */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white/20 blur-[60px] rounded-full animate-pulse" />

                                {/* Individual images with transitions */}
                                {carouselImages.map((imageSrc, index) => (
                                    <div
                                        key={imageSrc}
                                        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out transform ${index === currentImageIndex
                                            ? 'opacity-100 scale-100 translate-x-0'
                                            : 'opacity-0 scale-95 translate-x-8'
                                            }`}
                                    >
                                        <Image
                                            src={imageSrc}
                                            alt="Medical Equipment"
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            priority={index === 0}
                                            sizes="400px"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Vertical Progress Bar - Right of images */}
                            <div
                                className="flex flex-col gap-4 ml-6 lg:ml-4 xl:ml-6"
                                style={{
                                    marginLeft: windowWidth >= 1440 ? '60px' : undefined,
                                    marginRight: windowWidth >= 1440 ? '0' : undefined
                                }}
                            >
                                {carouselImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 rounded-full transition-all duration-500 shadow-sm ${index === currentImageIndex
                                            ? 'bg-white h-12 shadow-[0_0_15px_rgba(255,255,255,0.5)] opacity-100'
                                            : 'bg-white/20 h-2 hover:bg-white/40 hover:h-4'
                                            }`}
                                        aria-label={`View image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8 flex-1">
                {/* Category Controls Row */}
                <div className="flex justify-between items-center mb-6">
                    <div className="text-gray-600 text-sm">
                        {filteredProducts.length} products
                    </div>
                    <select
                        value={activeCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md focus:outline-none text-sm"
                    >
                        <option value="all">All Products</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Product Grid / Chemical Table */}
                {
                    activeCategory === 'medical-chemicals' ? (
                        /* ── Medical Chemicals: Grouped Table View ── */
                        (() => {
                            const chemicalProducts = filteredProducts.filter(p => p.category === 'medical-chemicals');

                            const subcategoryConfig: Record<string, { icon: React.ReactNode; accent: string; bg: string; border: string }> = {
                                'Disinfectants & Antiseptics': { icon: <ShieldCheck className="w-5 h-5" />, accent: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' },
                                'Medical Gases': { icon: <Wind className="w-5 h-5" />, accent: 'text-sky-700', bg: 'bg-sky-50', border: 'border-sky-200' },
                                'Laboratory Chemicals': { icon: <FlaskConical className="w-5 h-5" />, accent: 'text-violet-700', bg: 'bg-violet-50', border: 'border-violet-200' },
                                'Pathology & Histology': { icon: <Microscope className="w-5 h-5" />, accent: 'text-rose-700', bg: 'bg-rose-50', border: 'border-rose-200' },
                                'Cleaning & Sterilization': { icon: <Droplets className="w-5 h-5" />, accent: 'text-cyan-700', bg: 'bg-cyan-50', border: 'border-cyan-200' },
                                'IV & Dialysis Solutions': { icon: <TestTubes className="w-5 h-5" />, accent: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200' },
                                'Radiology & Imaging': { icon: <Scan className="w-5 h-5" />, accent: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200' },
                                'Maintenance & Emergency': { icon: <Wrench className="w-5 h-5" />, accent: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200' },
                                'Quality Control': { icon: <BadgeCheck className="w-5 h-5" />, accent: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200' },
                            };

                            // Group by subcategory
                            const grouped: Record<string, Product[]> = {};
                            chemicalProducts.forEach(p => {
                                const sub = p.subcategory || 'Other';
                                if (!grouped[sub]) grouped[sub] = [];
                                grouped[sub].push(p);
                            });

                            // Filter by search
                            const filteredGrouped: Record<string, Product[]> = {};
                            Object.entries(grouped).forEach(([sub, items]) => {
                                const filtered = items.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
                                if (filtered.length > 0) filteredGrouped[sub] = filtered;
                            });

                            return Object.keys(filteredGrouped).length > 0 ? (
                                <div className="space-y-6 animate-fade-up">
                                    {Object.entries(filteredGrouped).map(([subcategory, items]) => {
                                        const config = subcategoryConfig[subcategory] || { icon: <FlaskConical className="w-5 h-5" />, accent: 'text-teal-700', bg: 'bg-teal-50', border: 'border-teal-200' };
                                        return (
                                            <div key={subcategory} className={`rounded-xl border ${config.border} overflow-hidden shadow-sm`}>
                                                {/* Subcategory Header */}
                                                <div className={`${config.bg} px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 border-b ${config.border}`}>
                                                    <div className={`${config.accent}`}>
                                                        {config.icon}
                                                    </div>
                                                    <h3 className={`font-semibold text-sm md:text-base ${config.accent}`}>
                                                        {subcategory}
                                                    </h3>
                                                    <span className="text-xs text-gray-400 ml-auto">
                                                        {items.length} {items.length === 1 ? 'item' : 'items'}
                                                    </span>
                                                </div>

                                                {/* Chemical Rows */}
                                                <div className="bg-white divide-y divide-gray-100">
                                                    {items.map((product, idx) => (
                                                        <div
                                                            key={product.id}
                                                            className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 hover:bg-gray-50/80 transition-colors duration-200 group"
                                                        >
                                                            {/* Number */}
                                                            <span className="text-xs text-gray-300 font-mono w-5 text-right flex-shrink-0">
                                                                {idx + 1}
                                                            </span>

                                                            {/* Chemical Info */}
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="font-medium text-gray-900 text-sm md:text-base truncate">
                                                                    {product.name}
                                                                </h4>
                                                                <p className="text-gray-400 text-xs md:text-sm truncate mt-0.5 hidden sm:block">
                                                                    {product.description}
                                                                </p>
                                                            </div>

                                                            {/* Ask Price Button */}
                                                            <button
                                                                onClick={() => window.open(`https://wa.me/919554657717?text=Hi, I want to know the price of ${encodeURIComponent(product.name)} (Medical Chemical)`, '_blank')}
                                                                className="flex-shrink-0 flex items-center gap-1.5 bg-[#044581] hover:bg-[#3cacae] text-white text-xs font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all duration-300 hover:shadow-md"
                                                            >
                                                                <MessageCircle className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                                                <span className="hidden min-[400px]:inline">Ask Price</span>
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-20 text-center">
                                    <div className="text-gray-300 mb-4">
                                        <Search className="h-16 w-16 mx-auto" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No chemicals found</h3>
                                    <p className="text-gray-500 max-w-md mx-auto mb-6">
                                        We couldn&apos;t find any chemicals matching &quot;{searchQuery}&quot;. Try a different search term.
                                    </p>
                                    <Button
                                        variant="outline"
                                        onClick={() => setSearchQuery('')}
                                    >
                                        Clear Search
                                    </Button>
                                </div>
                            );
                        })()
                    ) : currentProducts.length > 0 ? (
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 animate-fade-up">
                                {currentProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col hover:-translate-y-1"
                                    >
                                        {/* Image Container */}
                                        <div className="relative aspect-square w-full bg-white flex items-center justify-center p-4">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain group-hover:scale-110 transition-transform duration-500"
                                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                            />

                                            {/* Essential Badge */}
                                            {product.isEssential && (
                                                <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full shadow-sm z-10">
                                                    ESSENTIAL
                                                </div>
                                            )}

                                            {/* Category Badge (Optional, small) */}
                                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                                                {categories.find(c => c.id === product.category)?.name}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-3 md:p-4 flex flex-col flex-1 border-t border-gray-100">
                                            <h3 className="font-semibold text-gray-900 text-sm md:text-lg mb-1 md:mb-2 line-clamp-2 leading-tight">
                                                {product.name}
                                            </h3>

                                            <p className="text-gray-500 text-xs md:text-sm line-clamp-2 mb-3 flex-1">
                                                {product.description}
                                            </p>

                                            <Button
                                                className="w-full bg-[#044581] hover:bg-[#3cacae] text-white text-xs md:text-sm h-8 md:h-10 rounded-lg transition-colors duration-300 mt-auto"
                                                onClick={() => window.open(`https://wa.me/919554657717?text=Hi, I want to know the price of ${encodeURIComponent(product.name)}`, '_blank')}
                                            >
                                                Ask Price
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center mt-8 mb-12 gap-2">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-3 py-2 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Previous
                                    </button>

                                    <span className="px-4 py-2 text-sm">
                                        Page {currentPage} of {totalPages}
                                    </span>

                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-3 py-2 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="text-gray-300 mb-4">
                                <Search className="h-16 w-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                            <p className="text-gray-500 max-w-md mx-auto mb-6">
                                We couldn't find any products matching your search. Try adjusting your filters or contact us directly.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setActiveCategory('all');
                                        setSearchQuery('');
                                        router.push('/products');
                                    }}
                                >
                                    Reset Filters
                                </Button>
                                <Button
                                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
                                    onClick={() => window.open('https://wa.me/919554657717?text=Hi, I am looking for a specific product', '_blank')}
                                >
                                    Ask on WhatsApp
                                </Button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

const ProductsPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Products...</div>}>
            <ProductsContent />
        </Suspense>
    );
};

export default ProductsPage;
