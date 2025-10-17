import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-screen min-h-[700px] text-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-black z-0"
        style={{ y }}
      >
        <img 
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop" 
          alt="Modern living room interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      {/* Animated lines */}
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }} style={{transformOrigin: 'left'}} className="absolute top-24 left-0 w-full h-px bg-white/20 hidden md:block" />
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }} style={{transformOrigin: 'right'}} className="absolute bottom-24 left-0 w-full h-px bg-white/20 hidden md:block" />
      <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }} style={{transformOrigin: 'top'}} className="absolute left-24 top-0 h-full w-px bg-white/20 hidden md:block" />
      <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }} style={{transformOrigin: 'bottom'}} className="absolute right-24 top-0 h-full w-px bg-white/20 hidden md:block" />

      <motion.div className="relative z-10 h-full flex items-center justify-center p-8" style={{ opacity }}>
        <div className="text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[140px] font-extrabold leading-none">
            Your House is
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[140px] font-extrabold leading-none">
            the Place of Mood
            </h1>
        </div>
      </motion.div>

       {/* Absolutely positioned info blocks */}
        <motion.div className="absolute top-8 left-8 md:left-32 z-20 hidden md:block" style={{ opacity }}>
            <p className="font-light">France, Paris</p>
            <p className="font-light">Str. Believein Yourself 29</p>
            <p className="font-light">App. 390</p>
        </motion.div>

        <motion.div className="absolute top-8 right-8 md:right-32 text-right z-20 hidden md:block" style={{ opacity }}>
            <p className="font-light">hi@housemood.com</p>
            <p className="font-light">(099) 791-00-75</p>
        </motion.div>

        <motion.div className="absolute bottom-8 left-8 md:left-32 z-20 hidden md:block" style={{ opacity }}>
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 border border-white/50 rounded-full flex items-center justify-center text-center">
                    <p className="text-sm">2021<br/>Interior</p>
                </div>
                <p className="font-semibold">Design Awards</p>
            </div>
            <p className="text-2xl font-semibold">We Craft Interiors</p>
            <p className="text-2xl font-light">Since 2014</p>
        </motion.div>

        <motion.div className="absolute bottom-8 right-8 md:right-32 text-right z-20 hidden md:block" style={{ opacity }}>
            <p className="font-light">Tech Specifications</p>
            <p className="font-light">Design Project</p>
            <p className="font-light">3D Visualisation</p>
        </motion.div>
    </section>
  );
};

export default Hero;
