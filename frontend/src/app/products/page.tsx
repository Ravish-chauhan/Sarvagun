"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { products, categories, Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Search, Filter, ArrowRight, Syringe, Pill, Stethoscope, Microscope, Activity } from 'lucide-react';
import Header from '@/components/Header';

const ProductsPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialCategory = searchParams.get('category') || 'all';

    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilter, setShowFilter] = useState(true);
    const [isLaptop, setIsLaptop] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLaptop(window.innerWidth >= 1024);
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
    
    const filteredProducts = products.filter((product) => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    return (
        <div className="min-h-screen flex flex-col">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#044581] to-[#3cacae] min-h-[80vh] flex items-center" style={{
                paddingTop: isLaptop ? '100px' : '128px',
                paddingBottom: window.innerWidth === 1024 ? '20px' : (isLaptop ? '40px' : '60px')
            }}>
                <div className="container mx-auto px-4 md:px-6 lg:px-20 relative z-20">
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
                            <div className="w-80 lg:w-full max-w-lg mx-auto lg:mx-0">
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
                                            className="flex-1 px-3 md:px-3 py-3 md:py-2.5 text-sm md:text-base bg-transparent border-0 focus:outline-none text-white placeholder-white/60"
                                        />
                                        <button className="bg-[#044581] hover:bg-[#3cacae] text-white px-4 py-3 md:px-6 md:py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-sm">
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
                                justifyContent: window.innerWidth >= 1440 ? 'flex-end' : undefined,
                                marginRight: window.innerWidth >= 1440 ? '0' : undefined
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
                                        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out transform ${
                                            index === currentImageIndex
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
                                    marginLeft: window.innerWidth >= 1440 ? '60px' : undefined,
                                    marginRight: window.innerWidth >= 1440 ? '0' : undefined
                                }}
                            >
                                {carouselImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 rounded-full transition-all duration-500 shadow-sm ${
                                            index === currentImageIndex
                                                ? 'bg-white h-12 shadow-[0_0_15px_rgba(255,255,255,0.5)] opacity-100'
                                                : 'bg-white/20 h-2 hover:bg-white/40 hover:h-4'
                                        }`}
                                        aria-label={`View image ${index + 1}`}
                                    />
                                ))}
                            </div>
                            
                            {/* Progress Indicators - Below images */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                                {carouselImages.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`h-1 rounded-full transition-all duration-300 ${
                                            index === currentImageIndex 
                                                ? 'w-8 bg-white' 
                                                : 'w-3 bg-white/40'
                                        }`}
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

                {/* Product Grid */}
                {
                    currentProducts.length > 0 ? (
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

                                        <Button className="w-full bg-[#044581] hover:bg-[#3cacae] text-white text-xs md:text-sm h-8 md:h-10 rounded-lg transition-colors duration-300 mt-auto">
                                            Enquire Now
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
                            <p className="text-gray-500 max-w-md mx-auto">
                                We couldn't find any products matching your search or category selection. Try adjusting your filters.
                            </p>
                            <Button
                                variant="outline"
                                className="mt-6"
                                onClick={() => {
                                    setActiveCategory('all');
                                    setSearchQuery('');
                                    router.push('/products');
                                }}
                            >
                                Reset Filters
                            </Button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ProductsPage;
