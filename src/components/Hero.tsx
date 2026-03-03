// src/components/Hero.tsx
import React from 'react';
import { config } from '../config';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => (  
<motion.section className="hero flex flex-col items-center justify-center text-center text-white relative">
  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
    <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
      Chris Pannapara
    </h1>
    <p className="text-2xl md:text-3xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
      Full-Stack Developer & QA Engineer <span className="text-blue-300">Toronto, ON</span>
    </p>
    <div className="flex flex-col sm:flex-row gap-6">
      <Link to="/projects" className="px-12 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300">
        Latest Work
      </Link>
      <a href={config.linkedin} className="px-12 py-4 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
        Let's Talk
      </a>
    </div>
  </motion.div>
</motion.section>
);

export default Hero;
