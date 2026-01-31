"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Sample products data - 20 products total
  const products = [
    { id: 1, name: "Digital Blood Pressure Monitor", category: "Diagnostic Equipment", price: "₹2,500", description: "Professional grade digital BP monitor with LCD display and memory function." },
    { id: 2, name: "Surgical Scissors Set", category: "Surgical Instruments", price: "₹1,200", description: "High-quality stainless steel surgical scissors for precision cutting." },
    { id: 3, name: "Disposable Syringes (100pcs)", category: "Medical Consumables", price: "₹450", description: "Sterile disposable syringes with safety lock mechanism." },
    { id: 4, name: "Patient Monitor", category: "ICU Equipment", price: "₹45,000", description: "Multi-parameter patient monitor with ECG, SpO2, and NIBP." },
    { id: 5, name: "Examination Table", category: "Hospital Furniture", price: "₹8,500", description: "Adjustable examination table with comfortable padding." },
    { id: 6, name: "Stethoscope", category: "Diagnostic Equipment", price: "₹1,800", description: "Professional acoustic stethoscope with dual head." },
    { id: 7, name: "Surgical Gloves (100pcs)", category: "Medical Consumables", price: "₹350", description: "Latex-free surgical gloves with powder-free design." },
    { id: 8, name: "Defibrillator", category: "Emergency Equipment", price: "₹85,000", description: "Automated external defibrillator with voice prompts." },
    { id: 9, name: "Wheelchair", category: "Mobility Aids", price: "₹12,000", description: "Lightweight folding wheelchair with comfortable seating." },
    { id: 10, name: "Oxygen Concentrator", category: "Respiratory Equipment", price: "₹35,000", description: "Portable oxygen concentrator with adjustable flow rate." },
    { id: 11, name: "Thermometer Digital", category: "Diagnostic Equipment", price: "₹250", description: "Fast-reading digital thermometer with fever alarm." },
    { id: 12, name: "Surgical Mask (50pcs)", category: "Medical Consumables", price: "₹150", description: "3-layer surgical masks with ear loops." },
    { id: 13, name: "ECG Machine", category: "Diagnostic Equipment", price: "₹55,000", description: "12-lead ECG machine with interpretation software." },
    { id: 14, name: "Hospital Bed", category: "Hospital Furniture", price: "₹25,000", description: "Electric hospital bed with side rails and mattress." },
    { id: 15, name: "Nebulizer", category: "Respiratory Equipment", price: "₹3,500", description: "Ultrasonic nebulizer for respiratory treatments." },
    { id: 16, name: "Pulse Oximeter", category: "Diagnostic Equipment", price: "₹1,500", description: "Fingertip pulse oximeter with OLED display." },
    { id: 17, name: "IV Stand", category: "Hospital Furniture", price: "₹2,200", description: "Adjustable IV stand with 4-hook top and wheels." },
    { id: 18, name: "Surgical Forceps", category: "Surgical Instruments", price: "₹800", description: "Precision surgical forceps with serrated tips." },
    { id: 19, name: "Blood Glucose Meter", category: "Diagnostic Equipment", price: "₹1,200", description: "Digital blood glucose meter with test strips." },
    { id: 20, name: "Suction Machine", category: "Emergency Equipment", price: "₹15,000", description: "Portable suction machine for airway clearance." }
  ];

  const itemsPerView = 6;
  const maxSlide = Math.max(0, products.length - itemsPerView);

  // Calculate which "page" we're on based on visible products
  const getCurrentPage = () => {
    if (currentSlide >= maxSlide - 1) {
      return totalPages - 1; // Show last page indicator when near the end
    }
    return Math.floor(currentSlide / itemsPerView);
  };

  const totalPages = Math.ceil(products.length / itemsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };



  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="w-full px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#3cacae] font-bold text-sm uppercase tracking-wider mb-2 block">
            ✦ Featured Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#044581] mb-4">
            Popular Medical Equipment
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
              {products.map((product) => (
                <div key={product.id} className="w-1/6 flex-shrink-0 px-1.5">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-2 transform-gpu">
                    <div className="w-full h-44 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                      <span className="text-gray-400 text-sm">Product Image</span>
                    </div>
                    <div className="p-2.5">
                      <span className="text-xs text-[#044581] font-medium uppercase">{product.category}</span>
                      <h3 className="font-semibold text-gray-900 text-sm mt-1 mb-1 line-clamp-2 leading-tight">{product.name}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-base font-bold text-gray-900">{product.price}</span>
                        <Button size="sm" className="bg-[#3cacae] hover:bg-[#3cacae]/90 text-xs px-2 py-1 h-6">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Query
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
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
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentPage ? 'bg-[#3cacae] w-8' : 'bg-gray-300 w-2'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="overflow-x-auto scrollbar-hide py-4" style={{ touchAction: 'pan-x' }}>
            <div 
              className="flex gap-3"
              style={{ width: 'max-content' }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-44 flex-shrink-0">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 transform-gpu">
                    <div className="w-full h-36 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Product Image</span>
                    </div>
                    <div className="p-2.5">
                      <span className="text-xs text-[#044581] font-medium uppercase">{product.category}</span>
                      <h3 className="font-semibold text-gray-900 text-sm mt-1 mb-2 line-clamp-2 leading-tight">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-base font-bold text-gray-900">{product.price}</span>
                        <Button size="sm" className="bg-[#3cacae] hover:bg-[#3cacae]/90 text-xs px-2 py-1 h-6">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Query
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Page Progress */}
          <div className="mt-6 flex justify-center space-x-1">
            {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;