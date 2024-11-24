// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 flex justify-between items-center z-50">
      <div className="text-xl font-bold">Matan Golani</div>
      <div className="space-x-4">
        <a href="#experience" className="hover:text-gray-400">Experience</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#about" className="hover:text-gray-400">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
