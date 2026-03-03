// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode') === 'true');
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.body.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center backdrop-blur">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">{config.name}</Link>
        <ul className="flex space-x-6">
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-500">Projects</Link></li>
          <li><Link to="/resume" className="hover:text-blue-500">Resume</Link></li>
          <li><a href={config.linkedin} className="hover:text-blue-500">LinkedIn</a></li>
        </ul>
        <button onClick={toggleTheme} className="p-2 rounded">🌙</button>
      </nav>
    </header>
  );
};

export default Header;
