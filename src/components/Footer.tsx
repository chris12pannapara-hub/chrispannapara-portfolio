// src/components/Footer.tsx
import React from 'react';
import { config } from '../config';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12 mt-20">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-2xl font-bold mb-4">{config.name}</h3>
      <p className="mb-6">© 2026 Chris Pannapara. Built with React.</p>
      <div className="space-x-6">
        <a href={config.linkedin} className="hover:text-blue-400">LinkedIn</a>
        <a href={config.github} className="hover:text-blue-400">GitHub</a>
        <a href={`mailto:${config.email}`} className="hover:text-blue-400">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
