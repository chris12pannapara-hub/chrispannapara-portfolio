import React from 'react';
import { config } from '../config';

const Hero: React.FC = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative', overflow: 'hidden',
      paddingTop: '64px',
    }}>
      {/* Animated blobs */}
      {[...Array(5)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: `${100 + i * 60}px`, height: `${100 + i * 60}px`,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          top: `${10 + i * 15}%`, left: `${5 + i * 18}%`,
          animation: `float ${4 + i}s ease-in-out infinite alternate`,
        }} />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '3rem' }}>
        <div style={{ color: 'white' }}>
          <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 500, marginBottom: '1rem', opacity: 0.85, letterSpacing: '0.1em' }}>
            👋 Hi, I'm
          </p>
          <h1 style={{
            fontSize: 'clamp(2rem, 8vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            {config.name}
          </h1>
          <h2 style={{
            fontSize: 'clamp(1rem, 3vw, 1.8rem)',
            fontWeight: 400,
            opacity: 0.9,
            marginBottom: '1rem',
            maxWidth: 600,
            lineHeight: 1.4,
          }}>
            {config.title}
          </h2>
          <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', opacity: 0.75, marginBottom: '2.5rem' }}>
            📍 {config.location}
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            flexWrap: 'wrap',
            flexDirection: window.innerWidth < 640 ? 'column' : 'row',
          }}>
            <a href="#projects" className="btn-primary" style={{ background: 'white', color: '#6c63ff' }}>
              View My Work →
            </a>
            <a href={config.linkedin} target="_blank" rel="noreferrer" className="btn-outline" style={{ borderColor: 'white', color: 'white' }}>
              LinkedIn
            </a>
            <a href={config.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ borderColor: 'white', color: 'white' }}>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          from { transform: translateY(0px) rotate(0deg); }
          to { transform: translateY(-20px) rotate(10deg); }
        }

        @media (max-width: 640px) {
          .btn-primary,
          .btn-outline {
            width: 100%;
            justify-content: center;
          }

          #home {
            padding-top: 80px;
            min-height: 100vh;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
