'use client';

import { useState, useEffect } from 'react';
import { Search, Terminal, Menu, X, Compass, ArrowRight } from 'lucide-react';
import { CommandPalette } from './CommandPalette';
import { TerminalModal } from './TerminalModal';

export function Navigation() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#journey' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI Lab', href: '#ai-lab' },
    { label: 'Quant Lab', href: '#quant-lab' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Bookshelf', href: '#bookshelf' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className="nav-header"
        style={{
          background: scrolled ? 'rgba(157, 192, 206, 0.96)' : 'rgba(157, 192, 206, 0.88)',
          boxShadow: scrolled ? '0 4px 20px -5px rgba(27, 50, 64, 0.12)' : 'none',
        }}
      >
        <div className="nav-container">
          {/* Brand Logo */}
          <a href="#top" className="nav-brand">
            <span className="nav-brand-icon">UA</span>
            <span>Uzair Ahmad</span>
          </a>

          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tools & Mobile Toggle Actions */}
          <div className="nav-actions">
            <button className="btn-tool" onClick={() => setIsCommandOpen(true)} title="Open Command Palette (Ctrl+K)">
              <Search size={14} />
              <span className="kbd-badge">⌘K</span>
            </button>

            <button className="btn-tool" onClick={() => setIsTerminalOpen(true)} title="Open CLI Terminal">
              <Terminal size={14} />
              <span>CLI</span>
            </button>

            {/* Mobile Menu Hamburger Toggle — Hidden on Desktop */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Navigation"
              title="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} style={{ color: 'var(--text-hero)' }} /> : <Menu size={22} style={{ color: 'var(--text-hero)' }} />}
            </button>
          </div>
        </div>

        {/* Compact Glassmorphic Mobile Menu Drawer (Only on Mobile) */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-item"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Compass size={16} style={{ color: 'var(--text-hero)' }} />
                    <span>{link.label}</span>
                  </div>
                  <ArrowRight size={14} style={{ opacity: 0.5 }} />
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  );
}
