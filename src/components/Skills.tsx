// src/components/Skills.tsx
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaJenkins  } from 'react-icons/fa';
import { SiTypescript,  } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 color="#E34F26" />},
  { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> }, 
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> }, 
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> }, 
  { name: 'React', icon: <FaReact color="#61DAFB" /> }, 
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> }, 
  { name: 'Python', icon: <FaPython color="#3776AB" /> }, 
  { name: 'Java', icon: <FaJava color="#007396" /> },
  { name: 'Jenkins', icon: <FaJenkins /> },
];

const Skills: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center m-4 transform transition-transform duration-200 hover:scale-125">
          <div className="text-6xl ">{skill.icon}</div>
          <p className="mt-2 text-xl">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
