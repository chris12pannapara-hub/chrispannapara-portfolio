// src/components/About.tsx
import React from 'react';
import { config } from '../config';
import { motion } from 'framer-motion';

const About: React.FC = () => (
  <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="inline-block bg-opacity-20 backdrop-blur px-6 py-3 rounded-full m-2 border border-white/30 hover:bg-white/30 transition">
    <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
    <div className="max-w-4xl mx-auto text-lg">
      <p className="mb-8">Software Developer & QA Automation Engineer based in Toronto, ON. Expert in full-stack development with React, TypeScript, Node.js, Java, and test automation using Selenium, Playwright, and Jenkins CI/CD pipelines.</p>
      <h3 className="text-2xl font-semibold mb-6">Skills</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {config.skills.map((skill, i) => (
          <li key={i} className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">{skill}</li>
        ))}
      </ul>
    </div>
  </motion.section>
);

export default About;
