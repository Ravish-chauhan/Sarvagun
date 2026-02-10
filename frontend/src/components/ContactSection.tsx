"use client";

import { useState } from 'react';
import { Mail, MessageCircle, MapPin, ArrowUpRight, Send } from 'lucide-react';

const ContactSection = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const contactInfo = [
        {
            icon: Mail,
            title: "Email us",
            detail: "sales@sarvagunenterprises.com",
        },
        {
            icon: MessageCircle,
            title: "WhatsApp us",
            detail: "+91 95550 88558",
        },
        {
            icon: MapPin,
            title: "Lucknow, UP, 226028",
        },
    ];

    return (
        <section className="relative pt-10 pb-4 min-[375px]:pb-10 md:py-16 lg:py-20 bg-[#eff8ff] overflow-hidden" id="contact">
            {/* Large Background Typography */}
            <div className="absolute inset-0 flex items-start justify-center pt-10 pointer-events-none">
                <h1 className="text-[17vw] md:text-[18vw] lg:text-[12vw] font-bold text-[#044581] opacity-[0.07] select-none tracking-widest leading-none">
                    CONTACT
                </h1>
                {/* Gradient overlaid to fade it out at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#eff8ff] to-transparent"></div>
            </div>

            {/* Hemisphere Glow Effect - Bulb Look */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {/* Outer Glow */}
                <div className="w-[90vw] h-[45vw] bg-[#3cacae] rounded-full opacity-20 blur-[80px]"></div>
                {/* Inner Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[22vw] bg-[#3cacae] rounded-full opacity-40 blur-[50px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10 pt-20 min-[376px]:pt-32 md:pt-48 lg:pt-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side - Content */}
                    <div className="space-y-10">
                        <div>
                            <span className="text-[#3cacae] font-bold text-sm uppercase tracking-wider mb-4 block">
                                ✦ Get in Touch
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#044581] mb-6 font-display">
                                Ready to <span className="text-[#3cacae]">Order?</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                                Have questions about bulk orders, hospital setups, or specific equipment? We are here to help you.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4 pt-4">
                            {contactInfo.map((item, index) => {
                                const isEmail = item.title === "Email us";
                                const isWhatsApp = item.title === "WhatsApp us";
                                const handleClick = () => {
                                    if (isEmail) {
                                        window.location.href = 'mailto:sales@sarvagunenterprises.com';
                                    } else if (isWhatsApp) {
                                        window.open('https://wa.me/919554657717?text=Hi, I want to enquire about your products', '_blank');
                                    }
                                };
                                
                                return (
                                    <div
                                        key={index}
                                        className="group relative bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-[#3cacae]/30 shadow-sm overflow-hidden"
                                        onMouseEnter={() => setHoveredCard(index)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                        onClick={handleClick}
                                    >
                                    {/* Hover Glow */}
                                    <div className={`absolute inset-0 bg-[#3cacae]/5 blur-xl transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`} />

                                    <div className="relative z-10 flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-3 md:gap-5 min-w-0 flex-1">
                                            <div className="shrink-0 w-12 h-12 rounded-xl bg-[#eff8ff] flex items-center justify-center border border-[#3cacae]/10 group-hover:scale-110 transition-transform duration-300">
                                                <item.icon className="w-5 h-5 text-[#3cacae]" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h4 className="text-[#044581] font-medium text-lg truncate">{item.title}</h4>
                                                <p className="text-gray-500 text-sm truncate">{item.detail}</p>
                                            </div>
                                        </div>
                                        <div className="shrink-0 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-[#3cacae] group-hover:border-[#3cacae] group-hover:text-white group-hover:rotate-45">
                                            <ArrowUpRight className="w-4 h-4 text-gray-400 transition-colors group-hover:text-white" />
                                        </div>
                                    </div>
                                </div>
                            );
                            })}
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="relative">
                        <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
                            {/* Corner decorations */}
                            <div className="absolute -top-px -right-px w-20 h-20 border-t border-r border-[#3cacae]/30 rounded-tr-3xl" />
                            <div className="absolute -bottom-px -left-px w-20 h-20 border-b border-l border-[#3cacae]/30 rounded-bl-3xl" />

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 ml-1">Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3cacae] focus:ring-2 focus:ring-[#3cacae]/10 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 ml-1">Phone</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 987..."
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3cacae] focus:ring-2 focus:ring-[#3cacae]/10 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="doctor@hospital.com"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3cacae] focus:ring-2 focus:ring-[#3cacae]/10 transition-all duration-300"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="We need a quote for..."
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3cacae] focus:ring-2 focus:ring-[#3cacae]/10 transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-[#044581] text-white font-bold rounded-xl hover:bg-[#033461] hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
