import React from 'react';
import { config } from '../config';

const About: React.FC = () => (
  <section id="about" style={{ background: 'var(--bg-light)' }}>
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        {/* Left: Bio */}
        <div>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', opacity: 0.85 }}>
            {config.about}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={config.resume} download className="btn-primary">📄 Download Resume</a>
            <a href={`mailto:${config.email}`} className="btn-outline">✉️ Contact Me</a>
          </div>
        </div>

        {/* Right: Skills */}
        <div>
          {config.skills.map((group) => (
            <div key={group.category} style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', color: '#6c63ff', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                {group.category}
              </h4>
              <div>
                {group.items.map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
