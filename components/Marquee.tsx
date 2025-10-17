import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
    const items = [
        "10% off to our Friends",
        "12% off selected Style",
        "25% off your first Project",
        "20% off to our Friends"
    ];

    const MarqueeContent = () => (
        <>
            {items.map((item, index) => (
                <div key={index} className="inline-flex items-center mx-8 shrink-0">
                    <span className="text-2xl font-semibold text-brand-dark">{item}</span>
                    <span className="text-2xl font-semibold text-brand-accent mx-4">++</span>
                </div>
            ))}
        </>
    );

    return (
        <div className="bg-brand-secondary py-8 overflow-hidden whitespace-nowrap">
            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-100%'],
                }}
                transition={{
                    ease: 'linear',
                    duration: 30,
                    repeat: Infinity,
                }}
            >
                <MarqueeContent />
                <MarqueeContent />
            </motion.div>
        </div>
    );
};

export default Marquee;