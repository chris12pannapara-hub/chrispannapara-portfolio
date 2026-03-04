import React, { useState, useEffect } from 'react';
import { config } from '../config';

const Resume: React.FC = () => {
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
  <section id="resume" style={{ 
    background: isDark ? 'var(--bg-dark)' : '#f3f0ff', 
    minHeight: '100vh', 
    padding: '100px 0',
    transition: 'background-color 0.3s ease'
  }}>
    <div className="container">
      <h2 className="section-title">Resume</h2>

      {/* Buttons */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <a
          href={config.resume}
          download="ChrisPannapara_Resume.pdf"
          className="btn-primary"
        >
          📥 Download PDF
        </a>
        <a
          href={config.resumeViewer}
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          🔗 Open in New Tab
        </a>
      </div>

      {/* Google Docs Viewer - renders PDF reliably in all browsers */}
      <div style={{
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(108, 99, 255, 0.2)',
        background: '#fff',
        maxWidth: 900,
        margin: '0 auto',
      }}>
        <iframe
          src={config.resumeViewer}
          title="Chris Pannapara Resume"
          width="100%"
          height="900px"
          style={{ display: 'block', border: 'none' }}
          allow="autoplay"
        />
      </div>

      <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'inherit' }}>
        Can't see it?{' '}
        <a
          href={config.resumeViewer}
          target="_blank"
          rel="noreferrer"
          style={{ color: '#6c63ff' }}
        >
          Open in new tab ↗
        </a>
      </p>
    </div>
  </section>
  );
};

export default Resume;
