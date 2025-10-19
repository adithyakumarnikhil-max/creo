import React from 'react';
// FIX: Import Variants type from framer-motion to explicitly type animation variants.
// This helps TypeScript correctly interpret the properties like 'ease'.
import { motion, Variants } from 'framer-motion';

// FIX: Explicitly type containerVariants with the Variants type.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const Process: React.FC = () => {
    const processSteps = [
        { num: '01.', title: 'Tech specifications', description: 'Technical assignment, measuring site, and assessing remodeling needs.', image: 'https://images.unsplash.com/photo-1542892945-9311a8b03144?q=80&w=800&auto=format&fit=crop' },
        { num: '02.', title: 'Concept, sketches', description: 'A hand-drawn sketch typically outlines the style and layout of the future interior.', image: 'https://images.unsplash.com/photo-1558901357-ca42132d4399?q=80&w=800&auto=format&fit=crop' },
        { num: '03.', title: 'Design project', description: 'Details on color schemes, furniture, lighting placement, and technical layouts.', image: 'https://images.unsplash.com/photo-1572023984511-2a8f8d95107e?q=80&w=800&auto=format&fit=crop' },
        { num: '04.', title: '3D visualization', description: 'So that the client can see with his own eyes what he will ultimately receive.', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop' },
        { num: '05.', title: 'Estimation', description: 'The pricing details and the total cost of the customer\'s interior design project.', image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&auto=format&fit=crop' },
        { num: '06.', title: 'Materials, etc.', description: 'Building materials, components and furniture: everything you need for the interior.', image: 'https://images.unsplash.com/photo-1595834282029-7c4a1b0a5a2e?q=80&w=800&auto=format&fit=crop' },
        { num: '07.', title: 'Supervision', description: 'Supervises the work, making sure that the interior exactly as he intended.', image: 'https://images.unsplash.com/photo-1581092440715-52c7a92a543a?q=80&w=800&auto=format&fit=crop' },
    ];

    return (
        <section className="py-24 bg-brand-dark text-white">
            <div className="container mx-auto px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-gray-400 mb-2">HOW WE DO IT</p>
                    <p className="max-w-xs mx-auto text-gray-300 mb-8">Our work involves many intricate steps and stages.</p>
                    <h2 className="text-5xl md:text-7xl font-bold">The Process:*</h2>
                </div>
                
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {processSteps.map((step, index) => (
                        <motion.div key={index} variants={itemVariants} className={`space-y-4 ${index === 4 ? 'lg:col-start-2' : ''} ${index === 5 ? 'lg:col-start-3' : ''} ${index === 6 ? 'lg:col-start-4' : ''}`}>
                            <div className="flex items-center space-x-4 border-b border-gray-700 pb-4">
                               <span className="text-lg text-gray-500">{step.num}</span>
                               <img src={step.image} alt={step.title} className="w-24 h-12 object-cover rounded"/>
                            </div>
                            <h3 className="text-2xl font-semibold">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                     <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1 lg:col-start-1 flex flex-col justify-center items-center text-center p-8">
                        <span className="text-brand-accent text-3xl mb-4">*</span>
                        <p className="text-gray-300">Depends on your wishes</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;