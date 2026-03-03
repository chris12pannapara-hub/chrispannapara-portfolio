// src/components/Resume.tsx
import React from 'react';
import { config } from '../config';
import { motion } from 'framer-motion';

const Resume: React.FC = () => (
  <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="py-20 container mx-auto px-6">
    <h2 className="text-4xl font-bold mb-12 text-center">Resume</h2>
    <div className="max-w-2xl mx-auto text-center">
      <iframe src={config.resume} className="w-full h-96 border-0 rounded-lg shadow-xl" title="Resume" />
      <p className="mt-4 text-sm">Or <a href={config.resume} download className="text-blue-500 underline">download PDF</a>.</p>
    </div>
  </motion.section>
);

export default Resume;
