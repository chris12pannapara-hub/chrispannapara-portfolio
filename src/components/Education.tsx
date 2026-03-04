import React, { useState, useEffect } from 'react';
import { config } from '../config';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education: React.FC = () => {
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
  <section id="experience" style={{ 
    background: isDark ? 'var(--bg-dark)' : '#f3f0ff',
    transition: 'background-color 0.3s ease'
  }}>
    <div className="container">
      <h2 className="section-title">Education</h2>
      <VerticalTimeline>
        {config.Education.map((exp, i) => (
          <VerticalTimelineElement
            key={i}
            date={exp.date}
            iconStyle={{ background: '#6c63ff', color: '#fff' }}
            icon={<span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>🎓</span>}
            contentStyle={{ 
              borderTop: '3px solid #6c63ff', 
              borderRadius: 12,
              background: isDark ? 'var(--card-dark)' : 'var(--card-light)',
              color: 'inherit'
            }}
          >
            <h3 style={{ fontWeight: 700, marginBottom: 4, color: 'inherit' }}>{exp.title}</h3>
            <h4 style={{ color: '#6c63ff', fontWeight: 500, marginBottom: 12 }}>{exp.school}</h4>
            <p style={{ fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', lineHeight: 1.7, color: 'inherit' }}>{exp.location}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>

    <style>{`
      @media (max-width: 640px) {
        .vertical-timeline::before {
          left: 15px;
        }

        .vertical-timeline-element {
          margin-bottom: 20px !important;
        }

        .vertical-timeline-element--left,
        .vertical-timeline-element--right {
          padding-left: 60px !important;
          padding-right: 0 !important;
        }

        .vertical-timeline-element--left::before,
        .vertical-timeline-element--right::before {
          left: -22px !important;
        }
      }
    `}</style>
  </section>
  );
};

export default Education;
