import React from 'react';

const Marquee: React.FC = () => {
    const items = [
        "10% off to our Friends",
        "12% off selected Style",
        "25% off your first Project",
        "20% off to our Friends"
    ];

    const marqueeContent = [...items, ...items, ...items];

    return (
        <div className="bg-brand-secondary py-8 overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
                {marqueeContent.map((item, index) => (
                    <div key={index} className="inline-flex items-center mx-8">
                        <span className="text-2xl font-semibold text-brand-dark">{item}</span>
                        <span className="text-2xl font-semibold text-brand-accent mx-4">++</span>
                    </div>
                ))}
            </div>
             <div className="inline-block animate-marquee" aria-hidden="true">
                {marqueeContent.map((item, index) => (
                    <div key={index} className="inline-flex items-center mx-8">
                        <span className="text-2xl font-semibold text-brand-dark">{item}</span>
                        <span className="text-2xl font-semibold text-brand-accent mx-4">++</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;