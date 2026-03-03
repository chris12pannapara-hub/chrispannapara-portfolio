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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('darkMode', next.toString());
    document.body.classList.toggle('dark');
  };

  const navLinks = ['About', 'Experience', 'Projects', 'Resume', 'Contact'];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? (darkMode ? 'rgba(13,17,23,0.95)' : 'rgba(255,255,255,0.95)') : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? `1px solid ${darkMode ? '#30363d' : '#e1e4e8'}` : 'none',
      transition: 'all 0.3s ease',
      padding: '0 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <a href="#home" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#6c63ff' }}>
          {config.name.split(' ')[0]}<span style={{ color: darkMode ? '#e6edf3' : '#212529' }}>.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontSize: '0.9rem', fontWeight: 500,
                color: darkMode ? '#e6edf3' : '#212529',
                transition: 'color 0.2s',
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
            borderRadius: 8, padding: '6px 12px', cursor: 'pointer',
            color: darkMode ? '#e6edf3' : '#212529', fontSize: '1rem',
          }}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
