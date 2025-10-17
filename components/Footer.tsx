import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-24">
      <div className="container mx-auto px-8">
        <AnimateOnScroll 
            className="text-center mb-24"
        >
            <p className="text-gray-400 mb-2">(099) 791-00-75</p>
            <a href="mailto:hi@housemood.com" className="text-4xl md:text-6xl lg:text-8xl font-bold hover:text-brand-accent transition-colors">
                hi@housemood.com
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
                 <p className="font-light">France, Paris</p>
                 <p className="font-light">Str. Believein Yourself 29</p>
                 <p className="font-light">App. 390</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
