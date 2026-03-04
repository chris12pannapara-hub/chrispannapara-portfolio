import React, { useState, useEffect } from 'react';
import { config } from '../config';

const About: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.body.classList.contains('dark'));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
  <section id="about" style={{ 
    background: isDark ? 'var(--bg-dark)' : 'var(--bg-light)',
    transition: 'background-color 0.3s ease'
   }}>
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 90vw, 450px), 1fr))', 
        gap: 'clamp(2rem, 5vw, 4rem)', 
        alignItems: 'center' 
      }}>
        {/* Left: Bio */}
        <div>
          <p style={{ 
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            color: 'inherit'
          }}>
            {config.about}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flexDirection: window.innerWidth < 640 ? 'column' : 'row' }}>
            <a href={config.resume} download className="btn-primary">📄 Download Resume</a>
            <a href={`mailto:${config.email}`} className="btn-outline">✉️ Contact Me</a>
          </div>
        </div>

        {/* Right: Skills */}
        <div>
          {config.skills.map((group) => (
            <div key={group.category} style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: 'clamp(0.8rem, 2vw, 0.85rem)', fontWeight: 600, letterSpacing: '0.1em', color: '#6c63ff', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
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
};

export default About;
