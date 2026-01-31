"use client";

import { useState, useEffect, useRef } from "react";
import { Package, Shield, Headphones, Globe } from "lucide-react";

const StatsSection = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      icon: Package,
      target: 100,
      suffix: "+",
      label: "Products"
    },
    {
      icon: Shield,
      target: 100,
      suffix: "%",
      label: "Quality Check"
    },
    {
      icon: Headphones,
      target: 24,
      suffix: "/7",
      label: "Support"
    },
    {
      icon: Globe,
      target: 50,
      suffix: "+",
      label: "Countries"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.target / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                current = stat.target;
                clearInterval(timer);
              }
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(current);
                return newCounts;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-12 bg-[#0f172a]">
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-8 h-8 text-[#3cacae]" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-gray-300 text-sm lg:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;