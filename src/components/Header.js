import React from 'react';

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Anmol Sansi</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-yellow-500">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-500">Skills</a></li>
          <li><a href="#experience" className="hover:text-yellow-500">Experience</a></li>
          <li><a href="#education" className="hover:text-yellow-500">Education</a></li>
          <li><a href="#projects" className="hover:text-yellow-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
