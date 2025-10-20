import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

const footerVariants: Variants = {
  hidden: { y: '50%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
  }
};

const Footer: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <motion.footer
      id={id}
      className="bg-brand-dark text-white py-24 overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-8">
        <AnimateOnScroll 
            className="text-center mb-24"
        >
            <p className="text-gray-400 mb-2">+91 9705075741</p>
            <a href="mailto:creoarchitects1@gmail.com" className="text-4xl md:text-6xl lg:text-8xl font-bold hover:text-brand-accent transition-colors">
                creoarchitects1@gmail.com
            </a>
        </AnimateOnScroll>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-8 md:mb-0">
                <p className="text-gray-400">© All rights Reserved</p>
            </div>
             <div className="flex space-x-8 mb-8 md:mb-0">
                <a href="#" className="hover:text-brand-accent transition-colors">Privacy policy</a>
                <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
            </div>
            <div>
                 <p className="font-light">No 37, 21st Main Road, Marenahalli</p>
                 <p className="font-light">JP Nagar 2nd Phase</p>
                 <p className="font-light">Bangalore 560078</p>
            </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;