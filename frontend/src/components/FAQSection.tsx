"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
    {
        question: "Do you supply equipment for entire hospital setups?",
        answer: "Yes, we specialize in turnkey hospital infrastructure projects. From ICU setups to operating theaters and general wards, we can supply and install the complete range of necessary medical equipment and furniture."
    },
    {
        question: "Are your medical products certified?",
        answer: "Absolutely. All our products undergo rigorous quality checks and are CE/ISO certified. Many of our critical care and surgical items are also FDA approved to ensure the highest safety standards for patient care."
    },
    {
        question: "What is your typical delivery timeline for bulk orders?",
        answer: "For in-stock items, we dispatch within 24-48 hours. For large bulk orders or specialized equipment, typical delivery ranges from 1-2 weeks depending on your location and customization requirements."
    },
    {
        question: "Do you offer post-sales service and warranty?",
        answer: "We carry a standard 1-3 year warranty on most electronic equipment. We also have a dedicated biomedical engineering team for installation, calibration, and on-site annual maintenance contracts (AMC)."
    },
    {
        question: "Can I request a demo before purchasing?",
        answer: "Yes, for high-value equipment like ventilators, patient monitors, or surgical lights, we can arrange virtually guided demos or on-site demonstrations in select major cities."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            {/* Abstract Background Shapes - to look creative/custom */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3cacae]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#044581]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Side: Creative Header & CTA Card */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-start gap-12">
                        <div>
                            <span className="text-[#3cacae] font-bold text-sm uppercase tracking-wider mb-3 block">
                                ✦ Support Center
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#044581] mb-6 leading-[1.1]">
                                Questions? <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#044581] to-[#3cacae]">
                                    We're Here.
                                </span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Everything you need to know about our products, billing, and warranty services.
                            </p>
                        </div>

                        {/* Creative Contact Card */}
                        <div className="bg-[#044581] text-white p-8 rounded-3xl relative overflow-hidden group shadow-xl">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#3cacae] rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700 ease-in-out" />
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold mb-2">Still need help?</h4>
                                <p className="text-white/80 mb-6 text-sm">Our expert support team is just a message away.</p>
                                <Link href="/contact" className="inline-flex">
                                    <Button className="bg-white text-[#044581] hover:bg-[#3cacae] hover:text-white border-0 rounded-full px-6 font-semibold transition-all duration-300">
                                        <MessageCircle className="w-4 h-4 mr-2" />
                                        Chat with Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Custom Accordion */}
                    <div className="w-full lg:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className={`transition-all duration-300 border-b-2 ${index === faqs.length - 1 ? "border-transparent" : "border-gray-100"
                                            }`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full text-left py-6 flex items-start justify-between gap-4 group"
                                        >
                                            <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? "text-[#044581]" : "text-gray-800 group-hover:text-[#044581]"
                                                }`}>
                                                {faq.question}
                                            </span>
                                            <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                                                ? "text-[#3cacae] rotate-180"
                                                : "text-gray-400 group-hover:text-[#3cacae]"
                                                }`}>
                                                {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                            </span>
                                        </button>

                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <div className="pb-8 pt-0 pr-8">
                                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
