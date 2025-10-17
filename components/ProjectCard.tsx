import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  year: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, location, year }) => {
  return (
    <div className="group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <div className="overflow-hidden rounded-lg mb-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[500px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <h3 className="text-3xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-500">{location}</p>
      <p className="text-gray-500">{year}</p>
    </div>
  );
};

export default ProjectCard;
