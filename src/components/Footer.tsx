import React from 'react';
import { config } from '../config';

const Footer: React.FC = () => (
  <footer style={{
    background: '#0d1117', color: '#e6edf3',
    padding: '3rem 24px', textAlign: 'center',
  }}>
    <div className="container">
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#6c63ff' }}>
        {config.name}
      </h3>
      <p style={{ opacity: 0.6, marginBottom: '1.5rem', fontSize: '0.9rem' }}>{config.title}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
        <a href={config.linkedin} target="_blank" rel="noreferrer" style={{ color: '#6c63ff', fontWeight: 600 }}>LinkedIn</a>
        <a href={config.github} target="_blank" rel="noreferrer" style={{ color: '#6c63ff', fontWeight: 600 }}>GitHub</a>
        <a href={`mailto:${config.email}`} style={{ color: '#6c63ff', fontWeight: 600 }}>Email</a>
        <a href={config.resume} download style={{ color: '#6c63ff', fontWeight: 600 }}>Resume</a>
      </div>
      <p style={{ opacity: 0.4, fontSize: '0.8rem' }}>© 2026 {config.name}. Built with React & TypeScript.</p>
    </div>
  </footer>
);

export default Footer;
