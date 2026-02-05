"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { products, categories } from "@/data/products";

const FeaturedProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use only medical consumables for now as requested
  const featuredProducts = products.filter(p => p.category === "medical-consumables");

  const itemsPerView = 6;
  const maxSlide = Math.max(0, featuredProducts.length - itemsPerView);

  // Calculate which "page" we're on based on visible products
  const totalPages = Math.ceil(featuredProducts.length / itemsPerView);

  const getCurrentPage = () => {
    if (currentSlide >= maxSlide - 1) {
      return Math.max(0, totalPages - 1); // Show last page indicator when near the end
    }
    return Math.floor(currentSlide / itemsPerView);
  };


  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="w-full px-4 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#3cacae] font-bold text-sm uppercase tracking-wider mb-2 block">
            ✦ Featured Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#044581] mb-4">
            Popular Medical Consumables
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover our most requested products with competitive wholesale pricing
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block relative">
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${(currentSlide * 100) / itemsPerView}%)` }}
            >
              {featuredProducts.map((product) => (
                <div key={product.id} className="w-1/6 flex-shrink-0 px-2">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-2 transform-gpu h-full flex flex-col">
                    <div className="w-full aspect-square relative bg-white flex items-center justify-center p-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="16vw"
                      />
                      {/* Essential Badge */}
                      {product.isEssential && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
                          ESSENTIAL
                        </div>
                      )}
                    </div>
                    <div className="p-3 flex flex-col flex-1 border-t border-gray-100">
                      <span className="text-[10px] text-[#044581] font-medium uppercase mb-1">{categories.find(c => c.id === product.category)?.name}</span>
                      <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 leading-tight flex-1">{product.name}</h3>
                      <div className="mt-auto">
                        <Button size="sm" className="w-full bg-[#3cacae] hover:bg-[#3cacae]/90 text-xs h-8">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Enquire
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md z-10"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md z-10"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>

          {/* Desktop Page Progress */}
          <div className="mt-8 flex justify-center space-x-1">
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
        </div>

        {/* Mobile Grid Layout (2 items per row) */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-3">
            {featuredProducts.slice(0, 6).map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="w-full aspect-square relative bg-white flex items-center justify-center p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="50vw"
                  />
                  {product.isEssential && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10">
                      ESSENTIAL
                    </div>
                  )}
                </div>
                <div className="p-3 flex flex-col flex-1 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 leading-tight flex-1">{product.name}</h3>
                  <div className="mt-auto pt-2">
                    <Button size="sm" className="w-full bg-[#3cacae] hover:bg-[#3cacae]/90 text-xs h-8 px-0">
                      Enquire
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View More Button for Mobile if limited */}
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-[#3cacae] text-[#3cacae]" onClick={() => window.location.href = '/products'}>View All Products</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;