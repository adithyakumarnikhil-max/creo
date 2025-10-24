import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border-b border-brand-gray py-6"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className="w-full flex justify-between items-center text-left text-2xl font-semibold"
      >
        <span>{question}</span>
        <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <PlusIcon />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
             <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto', marginTop: '16px' },
                  collapsed: { opacity: 0, height: 0, marginTop: '0px' },
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
             >
                <div className="text-gray-600 leading-relaxed pr-8">
                {children}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const handleScrollToContact = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo('#contact');
    }
  };

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-8">
        <div className="mb-12">
            <p className="text-sm font-semibold text-gray-500 mb-2">YOU MIGHT ASK US</p>
            <h2 className="text-7xl font-bold">FAQ:</h2>
        </div>
        
        <div className="max-w-4xl">
            <FaqItem question="What interior design services do you offer?">
                <p>We offer a comprehensive range of interior design services, including conceptual development, space planning, 3D visualization, material selection, and project supervision. We cater to residential, commercial, and office projects.</p>
            </FaqItem>
            <FaqItem question="How does the design process work from start to finish?">
                <p>Our process begins with an initial consultation to understand your needs. It's followed by concept development, design detailing, material selection, and finally, supervision of the on-site execution to ensure everything aligns with the approved design.</p>
            </FaqItem>
            <FaqItem question="How long does an interior design project typically take?">
                <p>The timeline for a project varies depending on its scope and complexity. A single room design might take a few weeks, while a full home or commercial project can take several months. We provide a detailed timeline after the initial consultation.</p>
            </FaqItem>
            <FaqItem question="Can you help design small spaces or single rooms?">
                <p>Absolutely. We believe great design can transform any space, regardless of its size. We are happy to take on projects for single rooms, small apartments, or specific areas of a home or office.</p>
            </FaqItem>
            <FaqItem question="How do you determine the project budget?">
                <p>The budget is determined in collaboration with you. We discuss your financial comfort zone and then create a design proposal that aligns with it, providing a detailed breakdown of costs for transparency.</p>
            </FaqItem>
        </div>
        
        <div className="mt-12 flex items-center space-x-4">
            <p className="text-lg">If you want to know anything else:</p>
            <button onClick={handleScrollToContact} className="text-xl font-semibold flex items-center group">
                <span>Ask your Question</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;