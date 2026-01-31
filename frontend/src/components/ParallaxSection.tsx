"use client";

import { MessageCircle } from "lucide-react";
import aboutImg1 from "@/assets/about-img-1.webp";

const ParallaxSection = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${aboutImg1.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-2xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Can't Find the Product You Need?
        </h2>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
          Tell us your requirement.
        </p>

        <a
          href="https://wa.me/919876543210?text=Hello!%20I%20need%20a%20specific%20medical%20product.%20Please%20help%20me%20find%20it."
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 md:gap-3 bg-[#3cacae] hover:bg-[#3cacae]/90 text-white font-semibold px-4 py-2 md:px-8 md:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-lg"
        >
          <MessageCircle className="w-4 h-4 md:w-6 md:h-6" />
          Contact Us on WhatsApp
          <svg className="w-3 h-3 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ParallaxSection;