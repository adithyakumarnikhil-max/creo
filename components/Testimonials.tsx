import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Exceptional service and impeccable design! They transformed my space beyond what I could have imagined.",
    name: "Kendal Morrison",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/100?img=9",
    story: "Kendal, a driven entrepreneur, needed a space that balanced productivity and comfort. We designed an elegant, functional environment that fuels her focus and creativity."
  },
  {
    quote: "The attention to detail was incredible. Every corner of our home now feels personal and beautifully curated.",
    name: "John & Jane Doe",
    role: "Homeowners",
    image: "https://i.pravatar.cc/100?img=10",
    story: "Looking for a family-friendly yet sophisticated home, John and Jane entrusted us to create a warm and inviting space for their growing family."
  },
  {
    quote: "Working with HOUSEMOOD was a seamless experience. They listened to our vision and executed it flawlessly.",
    name: "Samantha Lee",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/100?img=11",
    story: "Samantha required an innovative office space that would inspire her team. We delivered a dynamic and collaborative workspace that reflects her company's culture."
  }
];

const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
};

const Testimonials: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  
  const testimonialIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length;
  const currentTestimonial = testimonials[testimonialIndex];

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-8">
        <p className="text-sm font-semibold text-gray-500 mb-2">OUR CLIENTS SAY</p>
        <p className="text-gray-600 mb-12">The warm words of our clients let us achieve more</p>
        
        <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-1/3">
                <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-24 h-24 rounded-full mb-4 object-cover"/>
                <h3 className="text-xl font-semibold">{currentTestimonial.name}</h3>
                <p className="text-gray-500">{currentTestimonial.role}</p>
            </div>
            <div className="w-full md:w-2/3">
                 <div className="relative h-56 overflow-hidden">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full"
                        >
                            <span className="text-7xl font-bold text-gray-200">"</span>
                            <p className="text-3xl font-semibold leading-snug -mt-8 mb-8">{currentTestimonial.quote}</p>
                            <p className="text-gray-600 leading-relaxed">{currentTestimonial.story}</p>
                        </motion.div>
                    </AnimatePresence>
                 </div>
                 <div className="flex items-center space-x-4 mt-8">
                    <button onClick={() => paginate(-1)} className="w-12 h-12 rounded-full border border-brand-gray flex items-center justify-center transition-colors hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <button onClick={() => paginate(1)} className="w-12 h-12 rounded-full border border-brand-gray flex items-center justify-center transition-colors hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;