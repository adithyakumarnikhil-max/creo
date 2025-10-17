import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Team: React.FC = () => {
    const teamMembers = [
        { name: 'Valeria Novikova', role: 'Designer', image: 'https://i.pravatar.cc/400?img=4' },
        { name: 'Alex Podzemsky', role: 'Designer', image: 'https://i.pravatar.cc/400?img=5' },
        { name: 'Helen Reeves', role: 'Designer', image: 'https://i.pravatar.cc/400?img=6' },
        { name: 'Tanya Rodriguez', role: 'HR', image: 'https://i.pravatar.cc/400?img=7' },
    ];
    
    return (
        <section className="py-24 bg-brand-light">
            <div className="container mx-auto px-8">
                <div className="text-left mb-16 max-w-lg">
                    <p className="text-sm font-semibold text-gray-500 mb-2">WHO WORK FOR YOU</p>
                    <p className="text-gray-600 mb-4">The team which changes the world of interior design</p>
                    <h2 className="text-5xl md:text-7xl font-bold">The Team:</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                    <AnimateOnScroll className="lg:col-span-2 space-y-4">
                       <div className="w-12 h-12 border-2 border-brand-accent rounded-full"></div>
                       <p className="text-2xl md:text-3xl leading-snug">We are a passionate team of designers dedicated to transforming your vision into beautifully crafted spaces.</p>
                    </AnimateOnScroll>

                    {teamMembers.map((member, index) => (
                        <AnimateOnScroll 
                            key={index} 
                            className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg p-4"
                            delay={0.1 * (index + 1)}
                        >
                            <img src={member.image} alt={member.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                            <h3 className="font-semibold text-lg">{member.name}</h3>
                            <p className="text-gray-500">{member.role}</p>
                        </AnimateOnScroll>
                    ))}
                    
                    <AnimateOnScroll 
                        className="lg:col-span-2 bg-black text-white rounded-lg p-8 flex flex-col justify-between items-start h-full min-h-[300px] relative overflow-hidden"
                    >
                        <img src="https://i.pravatar.cc/600/400?img=8" alt="Mark Jackson" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                        <div className="relative z-10">
                            <h3 className="font-semibold text-xl">Mark Jackson</h3>
                            <p className="text-gray-300">Owner</p>
                        </div>
                        <p className="relative z-10 text-2xl md:text-3xl max-w-sm">We are here to create space that will inspire you.</p>
                    </AnimateOnScroll>

                    <AnimateOnScroll 
                        className="lg:col-start-4 flex flex-col items-center justify-center bg-white p-8 rounded-lg text-center border-2 border-dashed border-brand-gray"
                        delay={0.2}
                    >
                        <p className="text-7xl font-bold">50+</p>
                        <p className="text-gray-500 mt-2">People in business</p>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Team;