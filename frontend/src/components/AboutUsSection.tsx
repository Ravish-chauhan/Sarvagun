"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import aboutImg1 from "@/assets/about-img-1.webp";
import aboutImg2 from "@/assets/about-img-2.jpg";

const AboutUsSection = () => {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    "FDA-Approved Medical Equipment",
    "Bulk Wholesale Pricing",
    "24/7 Technical Support",
    "Fast Shipping",
  ];

  if (!mounted) return null;

  return (
    <section
      id="about"
      className="pt-12 pb-12 md:pt-12 md:pb-16 lg:pt-12 lg:pb-16 xl:pt-16 xl:pb-24 bg-white overflow-hidden"
    >
      <div className="w-full px-6 sm:px-12 lg:pl-16 xl:pl-32 lg:pr-16 xl:pr-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Images */}
          <div className="relative mt-0 lg:-mt-28 min-h-0">

            {/* Main Image Container */}
            <div className="relative md:ml-32 lg:ml-0">
              {/* Large Image */}
              <div className="relative z-10 rounded-[2rem] overflow-hidden w-full max-w-[350px] min-[425px]:max-w-[300px] min-[425px]:ml-8 sm:max-w-[350px] sm:ml-0 lg:max-w-[380px] xl:max-w-[430px] h-[240px] sm:h-[320px] md:h-[350px] lg:h-[360px] xl:h-[410px] group cursor-pointer">
                <Image
                  src={aboutImg1}
                  alt="Operating room with surgical equipment"
                  fill
                  className="object-cover"
                />
                {/* Glass shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12"></div>
                </div>
              </div>

              {/* Small Overlapping Image */}
              <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-16 lg:-bottom-36 right-[-20px] sm:right-8 md:right-[100px] lg:right-[-40px] xl:right-10 z-20 rounded-[2rem] overflow-hidden w-[180px] sm:w-[220px] md:w-[220px] lg:w-[320px] xl:w-[380px] h-[130px] sm:h-[160px] md:h-[160px] lg:h-[230px] xl:h-[270px] border-4 sm:border-6 border-white group cursor-pointer">
                <Image
                  src={aboutImg2}
                  alt="Medical consumables and surgical supplies"
                  fill
                  className="object-cover"
                />
                {/* Glass shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12"></div>
                </div>
              </div>

              {/* Rotating Experience Badge */}
              <div className="absolute top-[200px] min-[425px]:top-[185px] sm:top-[35px] md:top-[40px] lg:top-[50px] left-[20px] min-[425px]:left-[70px] sm:left-[260px] md:left-[290px] lg:left-[310px] xl:left-[360px] z-30">
                <div className="relative w-20 h-20 min-[375px]:w-24 min-[375px]:h-24 min-[425px]:w-28 min-[425px]:h-28 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40">
                  {/* Rotating Text Circle Strip */}
                  <svg
                    className="absolute inset-0 w-full h-full animate-spin"
                    style={{ animationDuration: '15s' }}
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -33, 0 a 33,33 0 1,1 66,0 a 33,33 0 1,1 -66,0"
                      />
                    </defs>
                    {/* Cyan circular strip with rounded ends */}
                    <circle cx="50" cy="50" r="37" fill="none" stroke="#3cacae" strokeWidth="16" strokeLinecap="round" />
                    <text className="text-[10px] md:text-[9px] uppercase tracking-[0.2em] fill-white font-bold">
                      <textPath href="#circlePath">
                        • 500+ PRODUCTS • TRUSTED SUPPLIER •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8 mt-12 lg:mt-0">
            <span className="text-[#3cacae] font-bold text-sm uppercase tracking-wider mb-2 block">
              ✦ About Sarvagun
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#044581] mb-6 leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-[#3cacae]">Medical Equipment</span> Supply
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Sarvagun Enterprises is a wholesale supplier of medical and surgical equipment, serving hospitals, clinics, diagnostic centers, and healthcare providers with quality-assured products and reliable sourcing.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We offer a comprehensive range that includes medical consumables, injectables, hospital chemicals, surgical supplies, and essential equipment. With a focus on consistency, transparent pricing, and responsive support, we help healthcare facilities meet their procurement needs efficiently.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#3cacae]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#3cacae]" />
                  </div>
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;