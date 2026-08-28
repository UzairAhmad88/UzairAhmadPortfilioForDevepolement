'use client';

import { useState, useEffect } from 'react';
import { Search, Compass, Terminal, Code, Cpu, LineChart, BookOpen, Layers, Github, Mail, X } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: any;
  action: () => void;
}

export function CommandPalette({ isOpen, onClose, onOpenTerminal }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigateTo = (hash: string) => {
    onClose();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandItem[] = [
    { id: 'hero', title: 'Hero / Home', category: 'Navigation', icon: Compass, action: () => navigateTo('#top') },
    { id: 'about', title: 'About & Core Narrative', category: 'Navigation', icon: Compass, action: () => navigateTo('#about') },
    { id: 'skills', title: 'Technical Skills Constellation', category: 'Navigation', icon: Code, action: () => navigateTo('#skills') },
    { id: 'journey', title: 'Learning Journey Timeline', category: 'Navigation', icon: Compass, action: () => navigateTo('#journey') },
    { id: 'projects', title: 'Projects & Case Studies', category: 'Navigation', icon: Code, action: () => navigateTo('#projects') },
    { id: 'ai-lab', title: 'AI / ML / Deep Learning Lab', category: 'Interactive Lab', icon: Cpu, action: () => navigateTo('#ai-lab') },
    { id: 'quant-lab', title: 'Quantitative Finance & Time Series Lab', category: 'Interactive Lab', icon: LineChart, action: () => navigateTo('#quant-lab') },
    { id: 'architecture', title: 'Software Architecture Lab', category: 'Interactive Lab', icon: Layers, action: () => navigateTo('#architecture') },
    { id: 'bookshelf', title: 'Digital Bookshelf & Writing', category: 'Knowledge', icon: BookOpen, action: () => navigateTo('#bookshelf') },
    { id: 'github', title: 'GitHub Engineering Evidence', category: 'Evidence', icon: Github, action: () => navigateTo('#github') },
    { id: 'contact', title: 'Contact & Resume', category: 'Connect', icon: Mail, action: () => navigateTo('#contact') },
    {
      id: 'terminal',
      title: 'Open Developer CLI Terminal ($ whoami, $ quant)',
      category: 'Developer Tool',
      icon: Terminal,
      action: () => {
        onClose();
        onOpenTerminal();
      },
    },
  ];

  const filteredCommands = commands.filter(
    cmd =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setQuery('');
          setSelectedIndex(0);
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose, onOpenTerminal]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '640px', padding: 0, background: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--panel-border)' }}>
          <Search size={18} style={{ color: 'var(--text-dim)', marginRight: '12px' }} />
          <input
            type="text"
            placeholder="Type a section name or command..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            autoFocus
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--text)',
              fontSize: '1rem',
              fontFamily: 'var(--font-body)',
              width: '100%',
            }}
          />
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '12px 8px', maxHeight: '380px', overflowY: 'auto' }}>
          {filteredCommands.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-dim)' }}>
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    background: isSelected ? 'var(--accent-light)' : 'transparent',
                    border: isSelected ? '1px solid rgba(37, 99, 235, 0.25)' : '1px solid transparent',
                    color: isSelected ? 'var(--accent)' : 'var(--text)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Icon size={18} style={{ color: isSelected ? 'var(--accent)' : 'var(--text-dim)' }} />
                    <span style={{ fontWeight: isSelected ? 600 : 400, color: isSelected ? 'var(--accent)' : 'var(--text)' }}>
                      {cmd.title}
                    </span>
                  </div>
                  <span className="tag-pill" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                    {cmd.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        <div
          style={{
            padding: '12px 20px',
            borderTop: '1px solid var(--panel-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.78rem',
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span>Use ↑ ↓ to navigate, Enter to select</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
