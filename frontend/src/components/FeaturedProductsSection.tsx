"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { products, categories } from "@/data/products";

const FeaturedProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(6);

  // Hot selling products from different categories - 20 products
  const featuredProducts = [
    // Medical Consumables - 8 products
    products.find(p => p.id === "mc-001"), // IV Cannula
    products.find(p => p.id === "mc-007"), // Blue Latex Gloves
    products.find(p => p.id === "mc-013"), // Face Masks
    products.find(p => p.id === "mc-010"), // Disposable Syringes
    products.find(p => p.id === "mc-002"), // IV Infusion Set
    products.find(p => p.id === "mc-021"), // N95 Mask
    products.find(p => p.id === "mc-017"), // Gauze Swabs
    products.find(p => p.id === "mc-004"), // Bandage Roll
    // Medical Injectable - 2 products
    products.find(p => p.id === "mi-034"), // Normal Saline
    products.find(p => p.id === "mi-008"), // Ceftriaxone
    // Hospital Infrastructure - 7 products
    products.find(p => p.id === "hi-001"), // Oxygen Concentrator
    products.find(p => p.id === "hi-013"), // ECG Machine
    products.find(p => p.id === "hi-026"), // Patient Monitor
    products.find(p => p.id === "hi-010"), // Defibrillator
    products.find(p => p.id === "hi-033"), // ICU Ventilator
    products.find(p => p.id === "hi-019"), // Infusion Pump
    products.find(p => p.id === "hi-002"), // Syringe Pump
    // Surgical Supplies - 2 products
    products.find(p => p.id === "ss-043"), // Electronic BP Apparatus
    products.find(p => p.id === "ss-001"), // Stethoscope
    // Orthopedic - 1 product
    products.find(p => p.id === "os-012"), // Bone Plates
  ].filter(Boolean); // Remove any undefined products

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(6);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(2);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxSlide = Math.max(0, featuredProducts.length - itemsPerView);
  const totalPages = Math.ceil(featuredProducts.length / itemsPerView);

  const getCurrentPage = () => {
    if (currentSlide >= maxSlide - 1) {
      return Math.max(0, totalPages - 1);
    }
    return Math.floor(currentSlide / itemsPerView);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentSlide);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentSlide);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (startX - x) / 100;
    const newSlide = Math.round(scrollLeft + walk);
    setCurrentSlide(Math.max(0, Math.min(newSlide, maxSlide)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (startX - x) / 100;
    const newSlide = Math.round(scrollLeft + walk);
    setCurrentSlide(Math.max(0, Math.min(newSlide, maxSlide)));
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="w-full px-4 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#3cacae] font-bold text-sm uppercase tracking-wider mb-2 block">
            ✦ Featured Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#044581] mb-4">
            Hot Selling Products
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Trending medical equipment and supplies across all categories
          </p>
        </div>

        {/* Universal Carousel - All Screen Sizes */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="overflow-hidden py-4 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${(currentSlide * 100) / itemsPerView}%)`,
                transitionDuration: isDragging ? '0ms' : '500ms'
              }}
            >
              {featuredProducts.map((product) => product && (
                <div 
                  key={product.id} 
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-2 transform-gpu h-full flex flex-col">
                    <div className="w-full aspect-square relative bg-white flex items-center justify-center p-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain pointer-events-none"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        draggable={false}
                      />
                      {product.isEssential && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
                          ESSENTIAL
                        </div>
                      )}
                    </div>
                    <div className="p-3 flex flex-col flex-1 border-t border-gray-100">
                      <span className="text-[10px] text-[#044581] font-medium uppercase mb-1 hidden lg:block">{categories.find(c => c.id === product.category)?.name}</span>
                      <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 leading-tight flex-1">{product.name}</h3>
                      <div className="mt-auto">
                        <Button 
                          size="sm" 
                          className="w-full bg-[#3cacae] hover:bg-[#3cacae]/90 text-xs h-8"
                          onClick={() => window.open(`https://wa.me/919554657717?text=Hi, I want to know the price of ${encodeURIComponent(product.name)}`, '_blank')}
                        >
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Ask Price
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            style={{ width: '40px', height: '40px' }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg z-10 p-0"
          >
            <ChevronLeft className="w-5 h-5 text-[#044581]" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            style={{ width: '40px', height: '40px' }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg z-10 p-0"
          >
            <ChevronRight className="w-5 h-5 text-[#044581]" />
          </button>

          {/* Page Progress Indicators - Hidden on Mobile */}
          <div className="mt-8 hidden md:flex justify-center space-x-1">
            {Array.from({ length: totalPages }).map((_, index) => {
              const currentPage = getCurrentPage();
              return (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index * itemsPerView)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentPage ? 'bg-[#3cacae] w-8' : 'bg-gray-300 w-2'
                    }`}
                />
              );
            })}
          </div>

          {/* View All Button - All Sizes */}
          <div className="mt-6 flex justify-end">
            <a 
              href="/products" 
              className="text-[#3cacae] hover:text-[#044581] font-semibold text-sm flex items-center gap-1 transition-colors"
            >
              View All
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;