import React from 'react';
import ProjectCard from './ProjectCard';
// FIX: Import Variants type from framer-motion to explicitly type animation variants.
// This helps TypeScript correctly interpret the properties like 'ease'.
import { motion, Variants } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

// FIX: Explicitly type containerVariants with the Variants type.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// FIX: Explicitly type itemVariants with the Variants type.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Projects: React.FC = () => {
  const projects = [
    { image: 'https://images.unsplash.com/photo-1588854337236-6889d631f379?q=80&w=2070&auto=format&fit=crop', title: 'Pixy Agency Office', location: 'Berlin, Germany', year: '2024' },
    { image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop', title: 'Old Cousine', location: 'Copenhagen, Denmark', year: '2024' },
    { image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop', title: 'Sweden melody', location: 'Paris, France', year: '2019' },
  ];

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center mb-12">
          <AnimateOnScroll>
            <p className="text-sm font-semibold text-gray-500 mb-2">WHAT WE PROUD OF</p>
            <h2 className="text-5xl md:text-7xl font-bold">Our Projects:</h2>
          </AnimateOnScroll>
          <div className="flex items-center space-x-4">
            <button className="w-12 h-12 rounded-full border border-brand-gray flex items-center justify-center transition-colors hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <span className="hidden md:inline text-gray-600">Previous page</span>
            <button className="w-12 h-12 rounded-full border border-brand-gray flex items-center justify-center transition-colors hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
             <motion.div key={index} variants={itemVariants}>
                <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
         <div className="mt-16 text-center">
            <button className="text-2xl font-semibold flex items-center mx-auto space-x-4 group">
                <span>All the Projects</span>
                <div className="bg-brand-accent w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;