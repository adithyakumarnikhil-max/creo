import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const lineAnimation = (origin: 'left' | 'right' | 'top' | 'bottom') => ({
      initial: { scaleX: origin === 'left' || origin === 'right' ? 0 : 1, scaleY: origin === 'top' || origin === 'bottom' ? 0 : 1 },
      animate: { scaleX: 1, scaleY: 1 },
      // FIX: Added 'as const' to the ease array to fix TypeScript type inference.
      // Framer Motion expects a tuple for cubic-bezier easing, but TypeScript infers it as number[].
      transition: { duration: 1.5, delay: 0.7, ease: [0.6, 0.01, -0.05, 0.95] as const }
  });

  return (
    <section ref={targetRef} className="relative h-screen min-h-[700px] text-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img 
          src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1932&auto=format&fit=crop" 
          alt="Modern living room interior with light wood" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <motion.div className="relative z-20 h-full flex items-center justify-center p-8" style={{ opacity }}>
        <div className="text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[140px] font-bold leading-none">
                Your House is<br/>the Place of Mood
            </h1>
        </div>
      </motion.div>

       {/* Container for all aligned overlay elements */}
       <motion.div 
          className="absolute inset-0 z-20 container mx-auto px-8 hidden md:block pointer-events-none" 
          style={{ opacity }}
        >
         <div className="relative w-full h-full">

            {/* Animated Blueprint Lines */}
            <motion.div 
                {...lineAnimation('left')}
                style={{ transformOrigin: 'left' }}
                className="absolute top-24 left-0 right-0 h-[1px] bg-white/30" 
            />
            <motion.div 
                {...lineAnimation('right')}
                style={{ transformOrigin: 'right' }}
                className="absolute bottom-40 left-0 right-0 h-[1px] bg-white/30" 
            />
            <motion.div 
                {...lineAnimation('top')}
                style={{ transformOrigin: 'top' }}
                className="absolute top-24 bottom-40 left-0 w-[1px] bg-white/30" 
            />
            <motion.div 
                {...lineAnimation('bottom')}
                style={{ transformOrigin: 'bottom' }}
                className="absolute top-24 bottom-40 right-0 w-[1px] bg-white/30" 
            />

            {/* Info Blocks */}
            <div className="absolute top-24 pt-4 left-0 text-white/80">
                <p className="font-light">No 37, 21st Main Road</p>
                <p className="font-light">Marenahalli, JP Nagar 2nd Phase</p>
                <p className="font-light">Bangalore 560078</p>
            </div>

            <div className="absolute top-24 pt-4 right-0 text-right text-white/80">
                <p className="font-light">creoarchitects1@gmail.com</p>
                <p className="font-light">+91 9705075741</p>
            </div>

            <div className="absolute bottom-16 left-0 text-white/80 pointer-events-auto">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center text-center">
                        <p className="text-sm">2021<br/>Interior</p>
                    </div>
                    <p className="font-semibold text-white">Design Awards</p>
                </div>
                <p className="text-2xl font-semibold text-white">We Craft Interiors</p>
                <p className="text-2xl font-light text-white">Since 2014</p>
            </div>

            <div className="absolute bottom-16 right-0 text-right text-white/80">
                <p className="font-light">Tech Specifications</p>
                <p className="font-light">Design Project</p>
                <p className="font-light">3D Visualisation</p>
            </div>
          </div>
        </motion.div>
    </section>
  );
};

export default Hero;