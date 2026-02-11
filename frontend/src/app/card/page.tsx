"use client";

import React, { useState } from 'react';
import { 
  Globe, 
  Star, 
  Mail, 
  Phone,
  Download,
  ArrowRight,
  Heart,
  Building2,
  Package
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

const DigitalCard = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
  const handleWebsiteClick = () => {
    window.open('/', '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your medical equipment. Please assist me.");
    window.open(`https://wa.me/919554657717?text=${message}`, '_blank');
  };

  const handleCatalogDownload = () => {
    window.open('/catalog.pdf', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:sales@sarvagunenterprises.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919555088558';
  };

  const handleProductsClick = () => {
    window.open('/products', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#044581]/10 to-[#3cacae]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#3cacae]/10 to-[#044581]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="px-6 py-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-6 relative">
              <div className="w-32 h-32 mx-auto flex items-center justify-center relative group">
                <Image 
                  src="/logonew-tight.svg" 
                  alt="Sarvagun Logo" 
                  width={112}
                  height={112}
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                />
              </div>
            </div>
            
            <h1 className="text-4xl font-black text-[#044581] mb-3">
              Sarvagun Enterprises
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Your trusted partner for bulk medical supplies
            </p>
            
            <div className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-500">
              <Heart className="w-4 h-4 text-[#3cacae]" />
              <span>Trusted by 500+ Hospitals Nationwide</span>
            </div>
          </div>
        </div>

        <div className="px-6 mb-8">
          <div className="max-w-md mx-auto space-y-4">
            <button
              onClick={handleWebsiteClick}
              onMouseEnter={() => setHoveredButton('website')}
              onMouseLeave={() => setHoveredButton(null)}
              className="w-full bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 hover:shadow-xl hover:bg-white transition-all duration-300 flex items-center justify-between group transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center transition-all duration-300 ${hoveredButton === 'website' ? 'scale-110 shadow-lg' : ''}`}>
                  <Globe className="w-6 h-6 text-[#044581]" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Visit Website</h3>
                  <p className="text-sm text-gray-600">Explore our products</p>
                </div>
              </div>
              <ArrowRight className={`w-5 h-5 text-gray-400 group-hover:text-[#044581] transition-all duration-300 ${hoveredButton === 'website' ? 'translate-x-1' : ''}`} />
            </button>

            <button
              onClick={handleWhatsAppClick}
              onMouseEnter={() => setHoveredButton('whatsapp')}
              onMouseLeave={() => setHoveredButton(null)}
              className="w-full bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 hover:shadow-xl hover:bg-white transition-all duration-300 flex items-center justify-between group transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl flex items-center justify-center transition-all duration-300 ${hoveredButton === 'whatsapp' ? 'scale-110 shadow-lg' : ''}`}>
                  <FaWhatsapp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">WhatsApp Chat</h3>
                  <p className="text-sm text-gray-600">Instant support</p>
                </div>
              </div>
              <ArrowRight className={`w-5 h-5 text-gray-400 group-hover:text-green-600 transition-all duration-300 ${hoveredButton === 'whatsapp' ? 'translate-x-1' : ''}`} />
            </button>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={handleProductsClick}
                onMouseEnter={() => setHoveredButton('products')}
                onMouseLeave={() => setHoveredButton(null)}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col items-center space-y-2 transform hover:scale-105"
              >
                <div className={`w-10 h-10 bg-gradient-to-br from-cyan-100 to-teal-200 rounded-xl flex items-center justify-center transition-all duration-300 ${hoveredButton === 'products' ? 'scale-110 rotate-12' : ''}`}>
                  <Package className="w-5 h-5 text-[#3cacae]" />
                </div>
                <span className="text-sm font-bold text-gray-700">Products</span>
              </button>

              <button
                onClick={handleCatalogDownload}
                onMouseEnter={() => setHoveredButton('catalog')}
                onMouseLeave={() => setHoveredButton(null)}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col items-center space-y-2 transform hover:scale-105"
              >
                <div className={`w-10 h-10 bg-gradient-to-br from-purple-100 to-violet-200 rounded-xl flex items-center justify-center transition-all duration-300 ${hoveredButton === 'catalog' ? 'scale-110 rotate-12' : ''}`}>
                  <Download className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-sm font-bold text-gray-700">Catalog</span>
              </button>

              <button
                onClick={handlePhoneClick}
                onMouseEnter={() => setHoveredButton('phone')}
                onMouseLeave={() => setHoveredButton(null)}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col items-center space-y-2 transform hover:scale-105"
              >
                <div className={`w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-200 rounded-xl flex items-center justify-center transition-all duration-300 ${hoveredButton === 'phone' ? 'scale-110 rotate-12' : ''}`}>
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-sm font-bold text-gray-700">Call Us</span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 mb-8">
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Your Healthcare Supply Partner
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We supply quality medical equipment, consumables, and surgical supplies to hospitals, clinics, and healthcare facilities.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Building2 className="w-6 h-6 text-[#044581]" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">500+</p>
                  <p className="text-xs text-gray-500">Hospitals</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-[#3cacae]" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">273+</p>
                  <p className="text-xs text-gray-500">Products</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Quality</p>
                  <p className="text-xs text-gray-500">Assured</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-8">
          <div className="max-w-md mx-auto space-y-3">
            <h3 className="text-lg font-bold text-gray-900 text-center mb-4">
              Get In Touch
            </h3>
            
            <button
              onClick={handleEmailClick}
              onMouseEnter={() => setHoveredButton('email')}
              onMouseLeave={() => setHoveredButton(null)}
              className="w-full text-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 relative overflow-hidden group bg-[#044581]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#033461]"></div>
              <Mail className={`w-5 h-5 relative z-10 transition-transform duration-300 ${hoveredButton === 'email' ? 'animate-pulse' : ''}`} />
              <span className="font-bold relative z-10">Send Email</span>
            </button>
          </div>
        </div>

        <div className="px-6 pb-6 text-center">
          <p className="text-sm text-gray-600 font-medium">
            © 2025 Sarvagun Enterprises. Quality Healthcare Solutions.
          </p>
          <div className="flex items-center justify-center gap-1 mt-2">
            <span className="text-xs text-gray-500">Made with</span>
            <Heart className="w-3 h-3 text-[#3cacae] animate-pulse" />
            <span className="text-xs text-gray-500">for healthcare</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalCard;
