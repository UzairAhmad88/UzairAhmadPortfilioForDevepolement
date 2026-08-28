'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = process.env.NEXT_PUBLIC_EMAIL || 'imuzairahmad8@gmail.com';
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || '+923103148117';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_USERNAME
    ? `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
    : 'https://github.com/UzairAhmad88';
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/uzair-ahmad-58007a266/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section contact" style={{ position: 'relative' }}>
      <div className="eyebrow">10 / CONNECT & COLLABORATE</div>
      <h2>Let's Build Something Meaningful</h2>
      <p className="lede">
        Open to software engineering roles, research opportunities, quantitative modeling collaborations, and technical discussions.
      </p>

      <div className="grid-2" style={{ marginTop: '36px' }}>
        {/* Direct Links Panel */}
        <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-hero)', marginBottom: '20px' }}>Direct Professional Links</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tool"
                style={{
                  padding: '14px 20px',
                  fontSize: '0.95rem',
                  color: '#ffffff',
                  background: '#25D366',
                  borderColor: '#25D366',
                  fontWeight: 600,
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                }}
              >
                <MessageSquare size={18} style={{ color: '#ffffff' }} /> Chat on WhatsApp (+92 310 3148117)
              </a>

              <a
                href={`mailto:${email}`}
                className="btn-tool"
                style={{ padding: '14px 20px', fontSize: '0.95rem', color: 'var(--text-hero)', borderColor: 'var(--text-hero)' }}
              >
                <Mail size={18} style={{ color: 'var(--text-hero)' }} /> {email}
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tool"
                style={{ padding: '14px 20px', fontSize: '0.95rem', color: 'var(--text-hero)' }}
              >
                <Github size={18} style={{ color: 'var(--text-hero)' }} /> GitHub (@UzairAhmad88)
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tool"
                style={{ padding: '14px 20px', fontSize: '0.95rem', color: 'var(--text-hero)' }}
              >
                <Linkedin size={18} style={{ color: 'var(--text-hero)' }} /> LinkedIn Profile
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tool"
                style={{ padding: '14px 20px', fontSize: '0.95rem', color: 'var(--text-hero)', borderColor: 'var(--text-hero)', background: 'var(--accent-light)' }}
              >
                <FileText size={18} /> Download Official Résumé (PDF)
              </a>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '20px', marginTop: '24px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Location: Available Remotely & Globally
          </div>
        </div>

        {/* Contact Message Form */}
        <div className="card-glass">
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-hero)', marginBottom: '20px' }}>Send a Message</h3>

          {formSubmitted ? (
            <div style={{ padding: '30px', textAlign: 'center', background: 'var(--accent-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--panel-border)' }}>
              <CheckCircle2 size={40} style={{ color: 'var(--text-hero)', marginBottom: '12px' }} />
              <h4 style={{ color: 'var(--text-hero)', fontSize: '1.2rem', marginBottom: '8px' }}>Message Received!</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Thank you for reaching out, Uzair will respond to your message promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Your Name:</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Uzair Ahmad"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: '#ffffff',
                    border: '1px solid var(--panel-border)',
                    color: 'var(--text)',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Your Email:</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="uzair@example.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: '#ffffff',
                    border: '1px solid var(--panel-border)',
                    color: 'var(--text)',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Message:</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: '#ffffff',
                    border: '1px solid var(--panel-border)',
                    color: 'var(--text)',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                    resize: 'none',
                  }}
                />
              </div>

              <button className="btn-primary" type="submit" style={{ justifyContent: 'center', marginTop: '8px' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Floating Quick WhatsApp Chat Action Button (Fixed Bottom Right) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 150,
          background: '#25D366',
          color: '#ffffff',
          borderRadius: '50px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 700,
          fontSize: '0.88rem',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
          textDecoration: 'none',
          transition: 'transform 0.2s ease',
        }}
        title="Chat with Uzair on WhatsApp"
      >
        <MessageSquare size={18} /> WhatsApp Chat
      </a>

      {/* Footer */}
      <footer
        style={{
          marginTop: '80px',
          paddingTop: '32px',
          borderTop: '1px solid var(--panel-border)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          color: 'var(--text-dim)',
          fontSize: '0.85rem',
        }}
      >
        <div>
          <strong style={{ color: 'var(--text-hero)' }}>Uzair Ahmad</strong> — Software • AI • Quant • Research
        </div>
        <div>Developed by Uzair | © {new Date().getFullYear()} Uzair Ahmad. All rights reserved. Built with Next.js & Three.js</div>
      </footer>
    </section>
  );
}
