"use client";

const BrandMarqueeSection = () => {
    const logos = [
        "1675659028832.jpg",
        "2528f482a681aa73e02c0180800786f6.jpg",
        "BD_(company)_logo.svg.png",
        "EDAN_LOGO20PXL.webp",
        "FPHcare-logo.svg.png",
        "images (1).png",
        "images (2).png",
        "images (3).png",
        "images (4).png",
        "images (5).png",
        "images (6).png",
        "images (7).png",
        "images.png",
        "LA-MED-LOGO.png",
        "logo__NihonKohden-2025.jpg",
        "logo_slider.png",
        "Neokraft.jpg.png",
        "nice_neotech_medical_systems_pvt_ltd_logo.jpg",
        "unnamed.jpg",
        "YNOS316770.jpg"
    ];
    
    return (
        <section className="pt-0 pb-12 bg-white overflow-hidden">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#044581]">Our Trusted Brands</h2>
            <div className="relative flex">
                <div className="flex animate-marquee whitespace-nowrap">
                    {logos.map((logo, index) => (
                        <div key={index} className="mx-3 md:mx-8 flex-shrink-0 w-20 md:w-28 h-10 md:h-16 flex items-center justify-center">
                            <img 
                                src={`/assets/logos/${logo}`} 
                                alt="Brand logo" 
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
                    {logos.map((logo, index) => (
                        <div key={index} className="mx-3 md:mx-8 flex-shrink-0 w-20 md:w-28 h-10 md:h-16 flex items-center justify-center">
                            <img 
                                src={`/assets/logos/${logo}`} 
                                alt="Brand logo" 
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                
                @media (min-width: 1024px) {
                    .animate-marquee {
                        animation: marquee 40s linear infinite;
                    }
                }
            `}</style>
        </section>
    );
};

export default BrandMarqueeSection;
