import React from 'react';
import { config } from '../config';

const Projects: React.FC = () => (
  <section id="projects">
    <div className="container">
      <h2 className="section-title">Projects</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 90vw, 350px), 1fr))', 
        gap: 'clamp(1.5rem, 4vw, 2rem)',
      }}>
        {config.projects.map((project, i) => (
          <div key={i} className="project-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>📁</span>
              <a href={project.url} target="_blank" rel="noreferrer" style={{ color: '#6c63ff', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', fontWeight: 600 }}>
                GitHub ↗
              </a>
            </div>
            <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 700, marginBottom: '0.75rem', wordBreak: 'break-word' }}>{project.name}</h3>
            <p style={{ fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', lineHeight: 1.7, opacity: 0.75, marginBottom: '1.5rem' }}>{project.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.tech.map(t => (
                <span key={t} className="skill-chip">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
