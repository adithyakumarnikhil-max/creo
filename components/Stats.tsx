import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

interface AnimatedNumberProps {
  to: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ to }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(0, to, {
        duration: 2,
        ease: 'easeOut',
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        }
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={nodeRef}>0</span>;
};


const Stats: React.FC = () => {
  const stats = [
    { number: '2014', title: 'Year of establishment', description: 'More than 10 years in the field' },
    { number: '304', title: 'Projects are launched', description: 'A lot of projects are done' },
    { number: '189', title: 'Clients are satisfied', description: 'These people love us' },
    { number: '12', title: 'Projects in work', description: 'What we do right now' },
  ];

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-8">
        <div className="max-w-xl mb-16">
          <AnimateOnScroll>
            <p className="text-sm font-semibold text-gray-500 mb-2">2025</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="text-2xl md:text-3xl leading-snug">
              Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to life.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-2xl md:text-3xl font-bold leading-snug mt-2">
              Our numbers speak better than words:
            </p>
          </AnimateOnScroll>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <h2 className="text-7xl font-bold mb-2"><AnimatedNumber to={parseInt(stat.number)} /></h2>
              <h3 className="text-xl font-semibold mb-1">{stat.title}</h3>
              <p className="text-gray-500">{stat.description}</p>
              <div className="flex -space-x-2 mt-4">
                  <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border-2 border-white object-cover"/>
                  <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border-2 border-white object-cover"/>
                  <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border-2 border-white object-cover"/>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll className="mt-16 flex items-center space-x-4" delay={0.5}>
          <p className="text-lg">Want your own Design?</p>
          <button className="bg-brand-accent text-brand-dark w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Slots are available</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Stats;