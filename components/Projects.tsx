import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

const projects = [
    { image: 'https://images.unsplash.com/photo-1588854337236-6889d631f379?q=80&w=2070&auto=format&fit=crop', title: 'Pixy Agency Office', location: 'Berlin, Germany', year: '2024' },
    { image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop', title: 'Old Cousine', location: 'Copenhagen, Denmark', year: '2024' },
    { image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop', title: 'Sweden melody', location: 'Paris, France', year: '2019' },
    { image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2070&auto=format&fit=crop', title: 'Minimalist Loft', location: 'New York, USA', year: '2023' },
    { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', title: 'Coastal Retreat', location: 'Sydney, Australia', year: '2022' },
    { image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070&auto=format&fit=crop', title: 'Urban Apartment', location: 'Tokyo, Japan', year: '2021' },
];

const PROJECTS_PER_PAGE = 3;

// FIX: Explicitly type variants with the Variants type for consistency.
const variants: Variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
      };
    },
};


const Projects: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const numPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const pageIndex = ((page % numPages) + numPages) % numPages;

  const currentProjects = projects.slice(
      pageIndex * PROJECTS_PER_PAGE,
      (pageIndex + 1) * PROJECTS_PER_PAGE
  );

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center mb-12">
          <AnimateOnScroll>
            <p className="text-sm font-semibold text-gray-500 mb-2">WHAT WE PROUD OF</p>
            <h2 className="text-5xl md:text-7xl font-bold">Our Projects:</h2>
          </AnimateOnScroll>
          <div className="flex items-center space-x-4">
            <button onClick={() => paginate(-1)} className="w-12 h-12 rounded-full border border-brand-gray flex items-center justify-center transition-colors hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <span className="hidden md:inline text-gray-600">{`Page ${pageIndex + 1} of ${numPages}`}</span>
            <button onClick={() => paginate(1)} className="w-12 h-12 rounded-full border border-brand-gray flex items-center justify-center transition-colors hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="relative h-[620px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 absolute w-full"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                >
                    {currentProjects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>

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