import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Advantages: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-gray-500 mb-2">WHY PEOPLE CHOOSE US</p>
                    <h2 className="text-5xl md:text-7xl font-bold">Advantages:</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimateOnScroll 
                      className="p-8 flex flex-col justify-between items-center text-center"
                    >
                        <p className="text-lg font-semibold">Expertise</p>
                        <h3 className="text-5xl font-bold my-8">CREO DESIGNERS</h3>
                        <p className="text-lg font-semibold">Experience</p>
                    </AnimateOnScroll>

                    <AnimateOnScroll 
                      className="relative rounded-lg overflow-hidden group h-64 md:h-auto"
                      delay={0.1}
                    >
                        <img src="https://images.unsplash.com/photo-1617103995396-7c6c596e1b2f?q=80&w=600&auto=format&fit=crop" alt="Unique Design" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-2xl font-semibold">Unique Design</h3>
                            <p>Aesthetic</p>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll 
                      className="p-8 rounded-lg flex items-center justify-center"
                      delay={0.2}
                    >
                       <div className="w-24 h-24 border-2 border-brand-accent rounded-full"></div>
                    </AnimateOnScroll>
                    
                    <AnimateOnScroll 
                      className="relative rounded-lg overflow-hidden group col-span-1 md:col-span-2 lg:col-span-1 h-64 md:h-auto"
                    >
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop" alt="Strong Portfolio" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                         <div className="absolute bottom-8 left-8 text-white">
                            <p className="text-4xl font-bold mb-2">304</p>
                            <p>Projects are launched</p>
                            <h3 className="text-2xl font-semibold mt-4">Strong Portfolio & Reputation</h3>
                        </div>
                    </AnimateOnScroll>
                    
                    <AnimateOnScroll 
                      className="relative rounded-lg overflow-hidden group h-64 md:h-auto"
                      delay={0.1}
                    >
                        <img src="https://images.unsplash.com/photo-1573496004814-437a85c6a188?q=80&w=600&auto=format&fit=crop" alt="Client-oriented" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                        <div className="absolute inset-0 bg-black/20"></div>
                         <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-2xl font-semibold">Client-oriented</h3>
                            <p>Approach</p>
                        </div>
                    </AnimateOnScroll>
                    
                    <AnimateOnScroll 
                      className="relative rounded-lg overflow-hidden group h-64 md:h-auto"
                      delay={0.2}
                    >
                        <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop" alt="Attention to Detail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                        <div className="absolute inset-0 bg-black/10"></div>
                         <div className="absolute top-8 left-8">
                            <span className="text-3xl font-bold text-brand-dark">+</span>
                            <h3 className="text-2xl font-semibold mt-2 text-brand-dark">Serious Attention to Detail</h3>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Advantages;