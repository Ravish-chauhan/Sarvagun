"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, FileDown, MessageCircle } from "lucide-react";

// Custom WhatsApp Icon Component for the "Actual" look
const WhatsAppIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="white"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M17.472 14.382C17.119 14.205 15.385 13.351 15.061 13.234C14.738 13.116 14.502 13.057 14.267 13.411C14.031 13.765 13.355 14.56 13.149 14.796C12.943 15.032 12.737 15.061 12.384 14.884C12.031 14.707 10.894 14.334 9.545 13.131C8.487 12.188 7.772 11.024 7.566 10.67C7.36 10.317 7.544 10.126 7.72 9.95C7.878 9.791 8.071 9.537 8.248 9.331C8.423 9.125 8.484 8.977 8.6 8.742C8.719 8.506 8.66 8.3 8.571 8.123C8.483 7.947 7.776 6.208 7.482 5.501C7.197 4.814 6.906 4.912 6.69 4.912C6.494 4.912 6.268 4.903 6.042 4.903C5.816 4.903 5.453 4.991 5.148 5.325C4.844 5.659 3.98 6.464 3.98 8.103C3.98 9.742 5.197 11.332 5.373 11.568C5.55 11.803 7.806 15.281 11.242 16.765C12.06 17.118 12.697 17.329 13.195 17.487C13.98 17.736 14.706 17.707 15.284 17.621C15.926 17.525 17.265 16.809 17.541 16.033C17.816 15.257 17.816 14.599 17.737 14.462C17.659 14.325 17.472 14.237 17.119 14.06H17.472V14.382ZM11.996 24C9.882 24 7.828 23.468 6.004 22.433L5.641 22.217L1.144 23.406L2.344 19.019L2.107 18.643C0.979 16.848 0.384 14.77 0.384 12.625C0.384 6.214 5.592 0.999 11.996 0.999C15.101 0.999 18.016 2.209 20.208 4.401C22.4 6.593 23.608 9.508 23.608 12.615C23.608 19.016 18.4 24 11.996 24Z"
            fill="currentColor"
        />
    </svg>
);

const FloatingActionButton: React.FC = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Pages to hide the FAB
    // const hiddenPages = [
    //     "/login",
    //     "/register",
    //     "/admin",
    //     "/dashboard",
    // ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const fab = document.getElementById("fab-wrapper");
            if (fab && !fab.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    // if (hiddenPages.includes(pathname)) return null;

    // Contact Number
    const whatsappNumber = "919555088558";

    return (
        <div
            id="fab-wrapper"
            className="fixed bottom-8 right-6 z-[9999] flex flex-col items-end pointer-events-none"
            onClick={(e) => { if (open) e.stopPropagation(); }}
        >
            {/* Options */}
            <div
                className={`flex flex-col items-end mb-4 space-y-3 transition-all duration-300 transform ${open
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-8 scale-95 pointer-events-none"
                    }`}
            >
                {/* Download Catalogue */}
                <button
                    onClick={() => {
                        // TODO: Implement download logic
                        console.log("Download Catalogue clicked");
                    }}
                    className="group px-4 py-2 bg-slate-900/90 rounded-full backdrop-blur-md border border-white/10 shadow-lg flex items-center gap-3 transition-transform duration-200 hover:-translate-x-1 hover:bg-slate-900"
                >
                    <span className="font-semibold text-white">Download Catalogue</span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-[#3cacae] transition-colors">
                        <FileDown size={18} className="text-white" />
                    </div>
                </button>

                {/* WhatsApp Us */}
                <button
                    onClick={() => {
                        const message = encodeURIComponent("Hi! I'm interested in your medical equipment. Could you please assist me?");
                        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
                    }}
                    className="group flex items-center gap-3 px-4 py-2 bg-slate-900/90 rounded-full backdrop-blur-md border border-white/10 shadow-lg transition-transform duration-200 hover:-translate-x-1 hover:bg-slate-900"
                >
                    <span className="font-semibold text-white">WhatsApp Us</span>
                    <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform shadow-lg">
                        <WhatsAppIcon size={18} className="text-white" />
                    </div>
                </button>
            </div>

            {/* Main Floating Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen(!open);
                }}
                className={`w-16 h-16 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] relative pointer-events-auto flex items-center justify-center transition-all duration-300 ${open ? "rotate-90 bg-gray-800" : "hover:-translate-y-1 hover:scale-105"}`}
                aria-label="Contact Options"
            >
                {open ? (
                    <X size={32} strokeWidth={2.5} className="text-white" />
                ) : (
                    <WhatsAppIcon size={38} className="text-white drop-shadow-md" />
                )}

                {/* Pulse Effect Rings (Only when closed) */}
                {!open && (
                    <>
                        <span className="absolute inset-0 rounded-full border border-[#25D366] opacity-0 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                        <span className="absolute inset-0 rounded-full border border-white/50 opacity-0 animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite] delay-75"></span>
                    </>
                )}
            </button>
        </div>
    );
};

export default FloatingActionButton;
