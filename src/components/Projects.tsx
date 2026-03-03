import React from 'react';
import { config } from '../config';

const Projects: React.FC = () => (
  <section id="projects">
    <div className="container">
      <h2 className="section-title">Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {config.projects.map((project, i) => (
          <div key={i} className="project-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>📁</span>
              <a href={project.url} target="_blank" rel="noreferrer" style={{ color: '#6c63ff', fontSize: '0.85rem', fontWeight: 600 }}>
                GitHub ↗
              </a>
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>{project.name}</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.75, marginBottom: '1.5rem' }}>{project.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.tech.map(t => (
                <span key={t} className="skill-chip" style={{ fontSize: '0.75rem' }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
