import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 p-4 md:px-8 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className={`text-2xl font-bold transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}>HOUSEMOOD</div>
          <span className={`hidden md:inline font-semibold transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}>Paris</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm">
           <a href="mailto:hi@housemood.com" className={`transition-colors ${scrolled ? 'text-brand-dark hover:text-black' : 'text-white hover:text-gray-200'}`}>hi@housemood.com</a>
           <a href="tel:0997910075" className={`transition-colors ${scrolled ? 'text-brand-dark hover:text-black' : 'text-white hover:text-gray-200'}`}>(099) 791-00-75</a>
        </div>
        <button className="bg-brand-accent text-brand-dark py-2 pl-6 pr-2 rounded-full flex items-center space-x-4 transition-transform hover:scale-105">
          <span className="font-semibold text-sm">Say "Hello"</span>
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;