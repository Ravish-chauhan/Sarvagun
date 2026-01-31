"use client";

import { MessageCircle, ChevronRight } from "lucide-react";
import Image from "next/image";
import selectIcon from "@/assets/select.png";
import contactIcon from "@/assets/contact.png";
import reviewIcon from "@/assets/review.png";
import deliveryIcon from "@/assets/delivery.png";

const steps = [
  {
    icon: selectIcon,
    title: "Browse & Select",
    description: "Explore our certified medical equipment catalog.",
  },
  {
    icon: contactIcon,
    title: "Request Quote",
    description: "Get personalized bulk pricing via WhatsApp.",
  },
  {
    icon: reviewIcon,
    title: "Review & Confirm",
    description: "Finalize order with transparent pricing.",
  },
  {
    icon: deliveryIcon,
    title: "Safe Delivery",
    description: "Secure delivery to your doorstep.",
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#eff8ff] relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(#3cacae 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* Soft Blurred Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3cacae]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#044581]/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="w-full px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#3cacae] font-bold text-sm uppercase tracking-wider mb-2 block">
            ✦ How We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#044581] mb-4">
            Simple <span className="text-[#044581]">4-Step Process</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto my-20">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 group relative">
              {/* Step */}
              <div className="text-center relative z-10">
                <div className="w-28 h-28 lg:w-32 lg:h-32 mx-auto mb-6 relative transition-transform duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-white/50 rounded-full blur-xl scale-75 group-hover:scale-100 transition-all duration-300"></div>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-contain relative z-10 drop-shadow-md"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#044581] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block relative -top-8 opacity-40">
                  <ChevronRight className="w-8 h-8 text-[#3cacae] animate-pulse" />
                </div>
              )}
              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="lg:hidden my-2 opacity-40">
                  <ChevronRight className="w-8 h-8 text-[#3cacae] rotate-90 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="https://wa.me/919876543210?text=Hello!%20I'm%20interested%20in%20your%20medical%20equipment.%20Please%20share%20the%20pricing%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#3cacae] hover:bg-[#3cacae]/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            <MessageCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Start Your Order Today</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;