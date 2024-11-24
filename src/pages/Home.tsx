// src/pages/Home.tsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar'; // Import the Navbar component

const projects = [
    {
      title: 'Project 1',
      description: `This project is a personal blog platform where users can create, edit, and share their own blog posts. The blog features a clean and modern design, with a focus on readability and user experience. Users can categorize their posts, add tags, and include images to enhance their content. The platform also includes a commenting system, allowing readers to engage with the authors and provide feedback. This project was built using React, TypeScript, and Tailwind CSS, with a backend powered by Node.js and MongoDB.`,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      imageUrl: 'https://via.placeholder.com/400', // Replace with actual image URL
    },
    {
      title: 'Project 2',
      description: `This project is a fully functional e-commerce website that allows users to browse, search, and purchase products online. The website features a responsive design, ensuring a seamless shopping experience across all devices. Users can create accounts, add items to their cart, and proceed to checkout with a secure payment gateway. The admin panel provides tools for managing products, orders, and users. This project was developed using React, TypeScript, and Material UI, with a backend built on Express.js and PostgreSQL.`,
      technologies: ['React', 'TypeScript', 'Material UI', 'Express.js', 'PostgreSQL'],
      imageUrl: 'https://via.placeholder.com/400', // Replace with actual image URL
    },
    {
      title: 'Project 3',
      description: `This project is a fully functional e-commerce website that allows users to browse, search, and purchase products online. The website features a responsive design, ensuring a seamless shopping experience across all devices. Users can create accounts, add items to their cart, and proceed to checkout with a secure payment gateway. The admin panel provides tools for managing products, orders, and users. This project was developed using React, TypeScript, and Material UI, with a backend built on Express.js and PostgreSQL.`,
      technologies: ['React', 'TypeScript', 'Material UI', 'Express.js', 'PostgreSQL'],
      imageUrl: 'https://via.placeholder.com/400', // Replace with actual image URL
    },
  ];

  const Home: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleScroll = (event: React.WheelEvent) => {
        if ((event.target as HTMLElement).closest('.project-card')) {
            if (event.deltaY > 0) {
            // Scroll down
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
            } else {
            // Scroll up
            setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
            }
        }
    };

  return (
    <div>
      <Navbar /> {/* Add the Navbar component here */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-500 to-blue-800 animate-gradient bg-[length:400%_400%]"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative h-screen flex flex-col items-center justify-center">
        <section id="projects" className="flex-grow flex items-center justify-center pt-96" onWheel={handleScroll}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card absolute w-full flex justify-center transition-transform duration-500 ${
                index === currentIndex ? 'transform translate-y-0 z-30' :
                index === (currentIndex + 1) % projects.length ? 'transform -translate-y-1/4 z-20' :
                index === (currentIndex + 2) % projects.length ? 'transform -translate-y-1/2 z-10' :
                'transform -translate-y-full z-0'
              }`}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                scale={index === currentIndex ? 1 : index === (currentIndex + 1) % projects.length ? 0.9 : 0.8}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
