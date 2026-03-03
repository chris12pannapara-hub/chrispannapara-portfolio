import React from 'react';
import { config } from '../config';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience: React.FC = () => (
  <section id="experience" style={{ background: '#f3f0ff' }}>
    <div className="container">
      <h2 className="section-title">Experience</h2>
      <VerticalTimeline>
        {config.experience.map((exp, i) => (
          <VerticalTimelineElement
            key={i}
            date={exp.date}
            iconStyle={{ background: '#6c63ff', color: '#fff' }}
            icon={<span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '1.2rem' }}>💼</span>}
            contentStyle={{ borderTop: '3px solid #6c63ff', borderRadius: 12 }}
          >
            <h3 style={{ fontWeight: 700, marginBottom: 4 }}>{exp.title}</h3>
            <h4 style={{ color: '#6c63ff', fontWeight: 500, marginBottom: 12 }}>{exp.company}</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.8 }}>{exp.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  </section>
);

export default Experience;
