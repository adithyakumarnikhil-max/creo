import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Team: React.FC = () => {
    const teamMembers = [
        { name: 'Ar. PavanKumar.K', role: 'Principal Architect, Founder', image: 'https://i.pravatar.cc/400?img=50' },
        { name: 'Ar. Jeevan Babu', role: 'Principal Architect', image: 'https://i.pravatar.cc/400?img=51' },
        { name: 'Ar. Lakshmi Prasad', role: 'Associate Architect', image: 'https://i.pravatar.cc/400?img=52' },
    ];
    
    return (
        <section className="py-24 bg-brand-light">
            <div className="container mx-auto px-8">
                <div className="text-left mb-16 max-w-2xl">
                    <p className="text-sm font-semibold text-gray-500 mb-2">WHO WORK FOR YOU</p>
                    <h2 className="text-5xl md:text-7xl font-bold">The Team:</h2>
                    <p className="text-xl text-gray-600 mt-6">
                        The team at CREO DESIGNERS includes our principal architects, associates, and a talented crew of designers and engineers dedicated to bringing your vision to life.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {teamMembers.map((member, index) => (
                        <AnimateOnScroll 
                            key={index} 
                            className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg p-4"
                            delay={0.1 * index}
                        >
                            <img src={member.image} alt={member.name} className="w-full h-80 object-cover rounded-lg mb-4" />
                            <h3 className="font-semibold text-lg">{member.name}</h3>
                            <p className="text-gray-500">{member.role}</p>
                        </AnimateOnScroll>
                    ))}
                </div>

                <AnimateOnScroll className="mt-16 text-center bg-gray-100 p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold">And other architects, interior designers, and engineers.</h3>
                    <p className="text-gray-600 mt-2">Our collective expertise ensures every project is handled with the utmost creativity and precision.</p>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default Team;