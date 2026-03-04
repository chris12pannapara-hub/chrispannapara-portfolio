import React, { useState, useEffect } from 'react';
import { config } from '../config';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setDarkMode(saved);
    if (saved) document.body.classList.add('dark');

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Close mobile menu when window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('darkMode', next.toString());
    document.body.classList.toggle('dark');
  };

  const navLinks = ['About', 'Experience', 'Education', 'Projects', 'Resume', 'Contact'];

  const handleNavClick = () => {
    setMenuOpen(false); // Close menu when nav item is clicked
  };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? (darkMode ? 'rgba(13,17,23,0.95)' : 'rgba(255,255,255,0.95)') : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? `1px solid ${darkMode ? '#30363d' : '#e1e4e8'}` : 'none',
      transition: 'all 0.3s ease',
      padding: '0 16px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <a href="#home" style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', fontWeight: 700, color: '#6c63ff' }}>
        <span style={{ color: darkMode ? '#e6edf3' : '#212529' }}>{config.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontSize: '0.9rem', fontWeight: 500,
                color: darkMode ? '#e6edf3' : '#212529',
                transition: 'color 0.2s',
                padding: '8px 12px',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#6c63ff')}
              onMouseLeave={e => (e.currentTarget.style.color = darkMode ? '#e6edf3' : '#212529')}
            >
              {link}
            </a>
          ))}

          {/* Theme Toggle */}
          <button onClick={toggleTheme} style={{
            background: 'none', border: `1px solid ${darkMode ? '#30363d' : '#e1e4e8'}`,
            borderRadius: 8, padding: '8px 12px', cursor: 'pointer',
            color: darkMode ? '#e6edf3' : '#212529', fontSize: '1rem',
            minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }} title="Toggle dark mode">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>

        {/* Mobile Menu Controls */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }} className="mobile-controls">
          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} style={{
            background: 'none', border: `1px solid ${darkMode ? '#30363d' : '#e1e4e8'}`,
            borderRadius: 8, padding: '8px', cursor: 'pointer',
            color: darkMode ? '#e6edf3' : '#212529', fontSize: '1rem',
            minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }} title="Toggle dark mode">
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '1.5rem', color: darkMode ? '#e6edf3' : '#212529',
              padding: '8px', minWidth: '44px', minHeight: '44px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            title="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav style={{
          display: 'flex', flexDirection: 'column', gap: '12px',
          padding: '16px', borderTop: `1px solid ${darkMode ? '#30363d' : '#e1e4e8'}`,
          background: darkMode ? '#161b22' : '#ffffff',
          animation: 'slideDown 0.3s ease-out',
        }}>
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={handleNavClick}
              style={{
                fontSize: '1rem', fontWeight: 500,
                color: darkMode ? '#e6edf3' : '#212529',
                padding: '12px',
                borderRadius: '8px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(108, 99, 255, 0.1)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {link}
            </a>
          ))}
        </nav>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
            align-items: center;
            gap: 2rem;
          }

          .mobile-controls {
            display: none !important;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
