// src/components/Projects.tsx
import React from 'react';
import { config } from '../config';
import { motion } from 'framer-motion';

const Projects: React.FC = () => (
  <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="py-20 container mx-auto px-6 bg-gray-50 dark:bg-gray-800">
    <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {config.projects.map((project, i) => (
        <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
          <p>{project.desc}</p>
          <a href={project.url} className="mt-4 inline-block text-blue-500 font-semibold">View on GitHub →</a>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Projects;
