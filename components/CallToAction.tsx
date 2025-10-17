import React from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

const CallToAction: React.FC = () => {
    return (
        <section className="relative py-48 bg-gray-800 text-white overflow-hidden">
            <motion.img 
              src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1920&auto=format&fit=crop"
              alt="Cozy interior" 
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
            <AnimateOnScroll 
              className="relative container mx-auto px-8 text-center"
            >
                <p className="text-lg mb-4">Crafting Environments That Inspire</p>
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">It's so Easy to</h2>
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">Change the Mood</h2>
                <button className="mt-12 text-xl font-semibold flex items-center mx-auto space-x-4 group">
                    <span>Order the Design</span>
                    <div className="bg-brand-accent w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>
                </button>
            </AnimateOnScroll>
        </section>
    );
}

export default CallToAction;
