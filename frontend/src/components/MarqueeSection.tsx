"use client";

const MarqueeSection = () => {
    const items = ["CONSUMABLES", "SURGICAL", "ICU CARE", "DIAGNOSTICS", "INFRASTRUCTURE"];
    
    return (
        <section className="py-8 pb-16 overflow-hidden bg-blue-900">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        {items.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <span className="text-6xl md:text-8xl font-bold mx-8" style={{color: 'transparent', WebkitTextStroke: '2px white'}}>
                                    {item}
                                </span>
                                {index < items.length - 1 && (
                                    <span className="text-6xl md:text-8xl font-bold mx-4 text-white">
                                        +
                                    </span>
                                )}
                            </div>
                        ))}
                        {i < 2 && (
                            <span className="text-6xl md:text-8xl font-bold text-white mx-4">
                                +
                            </span>
                        )}
                    </div>
                ))}
            </div>
            
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default MarqueeSection;