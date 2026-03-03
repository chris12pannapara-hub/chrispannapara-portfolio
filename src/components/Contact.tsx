import React, { useState } from 'react';
import { config } from '../config';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens default mail client with pre-filled email
    window.location.href = `mailto:${config.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.name} (${formData.email})`;
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ minHeight: '100vh', padding: '100px 0', background: '#0d1117' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: '#e6edf3' }}>Get In Touch</h2>
        <p style={{
          textAlign: 'center',
          color: '#8b949e',
          fontSize: '1.05rem',
          maxWidth: 500,
          margin: '0 auto 3rem',
          lineHeight: 1.7
        }}>
          I'm currently open to new opportunities. Whether you have a question,
          a project in mind, or just want to say hi — my inbox is always open!
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
          maxWidth: 900,
          margin: '0 auto'
        }}>

          {/* Left — Contact Info */}
          <div>
            <h3 style={{ color: '#e6edf3', fontSize: '1.3rem', fontWeight: 700, marginBottom: '2rem' }}>
              Contact Info
            </h3>

            {[
              { icon: '📧', label: 'Email', value: config.email, href: `mailto:${config.email}` },
              { icon: '💼', label: 'LinkedIn', value: 'chrispannapara', href: config.linkedin },
              { icon: '🐙', label: 'GitHub', value: 'chrispannapara-hub', href: config.github },
              { icon: '📍', label: 'Location', value: config.location, href: null },
            ].map((item) => (
              <div key={item.label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
                padding: '1rem 1.25rem',
                background: '#161b22',
                borderRadius: 12,
                border: '1px solid #30363d',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#6c63ff')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#30363d')}
              >
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <div>
                  <p style={{ color: '#8b949e', fontSize: '0.75rem', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" style={{
                      color: '#6c63ff', fontWeight: 500, fontSize: '0.9rem'
                    }}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: '#e6edf3', fontWeight: 500, fontSize: '0.9rem' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(63, 185, 80, 0.15)',
              border: '1px solid rgba(63, 185, 80, 0.4)',
              borderRadius: 20,
              padding: '8px 16px',
              marginTop: '0.5rem'
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#3fb950',
                display: 'inline-block',
                animation: 'pulse 2s infinite'
              }} />
              <span style={{ color: '#3fb950', fontSize: '0.85rem', fontWeight: 500 }}>
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div>
            <h3 style={{ color: '#e6edf3', fontSize: '1.3rem', fontWeight: 700, marginBottom: '2rem' }}>
              Send a Message
            </h3>

            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem',
                background: '#161b22',
                borderRadius: 16,
                border: '1px solid rgba(63, 185, 80, 0.4)',
              }}>
                <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</p>
                <p style={{ color: '#3fb950', fontSize: '1.1rem', fontWeight: 600 }}>Message sent!</p>
                <p style={{ color: '#8b949e', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                  className="btn-outline"
                  style={{ marginTop: '1.5rem', borderColor: '#6c63ff', color: '#6c63ff' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Name */}
                <div>
                  <label style={{ color: '#8b949e', fontSize: '0.85rem', display: 'block', marginBottom: 6 }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: '#161b22', border: '1px solid #30363d',
                      borderRadius: 8, color: '#e6edf3', fontSize: '0.95rem',
                      outline: 'none', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#6c63ff')}
                    onBlur={e => (e.target.style.borderColor = '#30363d')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ color: '#8b949e', fontSize: '0.85rem', display: 'block', marginBottom: 6 }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: '#161b22', border: '1px solid #30363d',
                      borderRadius: 8, color: '#e6edf3', fontSize: '0.95rem',
                      outline: 'none', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#6c63ff')}
                    onBlur={e => (e.target.style.borderColor = '#30363d')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ color: '#8b949e', fontSize: '0.85rem', display: 'block', marginBottom: 6 }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hi Chris, I'd love to connect about..."
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: '#161b22', border: '1px solid #30363d',
                      borderRadius: 8, color: '#e6edf3', fontSize: '0.95rem',
                      outline: 'none', resize: 'vertical', fontFamily: 'Inter, sans-serif',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#6c63ff')}
                    onBlur={e => (e.target.style.borderColor = '#30363d')}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                  Send Message 🚀
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          #contact .container > div[style*="grid"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
