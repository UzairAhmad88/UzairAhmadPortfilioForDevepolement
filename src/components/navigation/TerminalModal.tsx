'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2 } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  command?: string;
  output: string | React.ReactNode;
  type: 'cmd' | 'res' | 'error';
}

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<LogEntry[]>([
    { type: 'res', output: 'Uzair Ahmad Interactive Developer Shell v1.0.0' },
    { type: 'res', output: 'Type "help" or "ls" to view available commands.' },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const lower = cmd.toLowerCase();
    const newLogs: LogEntry[] = [{ type: 'cmd', command: `$ ${cmd}`, output: '' }];

    switch (lower) {
      case 'help':
        newLogs.push({
          type: 'res',
          output: (
            <div style={{ color: 'var(--text-muted)' }}>
              <div>Available Commands:</div>
              <div style={{ paddingLeft: '12px', marginTop: '4px' }}>
                <div><span style={{ color: 'var(--accent-cyan)' }}>whoami</span> - Developer bio and current identity</div>
                <div><span style={{ color: 'var(--accent-cyan)' }}>skills</span> - List primary engineering and AI skills</div>
                <div><span style={{ color: 'var(--accent-cyan)' }}>projects</span> - Display list of key portfolio projects</div>
                <div><span style={{ color: 'var(--accent-cyan)' }}>hms</span> - HMS case study summary</div>
                <div><span style={{ color: 'var(--accent-cyan)' }}>curespare</span> - Curespare case study summary</div>
                <div><span style={{ color: 'var(--accent-cyan)' }}>quant</span> - Quantitative finance & stochastic topics</div>
                <div><span style={{ color: 'var(--accent-cyan)' }}>clear</span> - Clear terminal screen</div>
                <div><span style={{ color: 'var(--accent-cyan)' }}>exit</span> - Close terminal shell</div>
              </div>
            </div>
          ),
        });
        break;

      case 'whoami':
        newLogs.push({
          type: 'res',
          output: 'Uzair Ahmad — Computer Science Student, Software & Web Developer, AI/ML Learner & Quantitative Finance Enthusiast.',
        });
        break;

      case 'skills':
        newLogs.push({
          type: 'res',
          output: 'Primary Domains: Software Architecture, React/Next.js, Python, TensorFlow/PyTorch, CNN/RNN, Quantitative Modeling, Monte Carlo, Option Pricing, Technical Writing.',
        });
        break;

      case 'projects':
        newLogs.push({
          type: 'res',
          output: 'Featured Projects:\n1. HMS (Healthcare Management System)\n2. Curespare (Product Software Case Study)\n3. AI Analytics & ML Pipeline\n4. CNN Image Classification\n5. RNN Time-Series Forecasting\n6. Quantitative Finance & Stochastic Models',
        });
        break;

      case 'hms':
        newLogs.push({
          type: 'res',
          output: 'HMS: Healthcare Management System — Full-stack system architecture covering patient records, appointments, user authentication, and data administration.',
        });
        break;

      case 'curespare':
        newLogs.push({
          type: 'res',
          output: 'Curespare: Product/Software case study from initial user requirements and database schema to responsive frontend implementation.',
        });
        break;

      case 'quant':
        newLogs.push({
          type: 'res',
          output: 'Quant Studies: Stochastic Processes, Brownian Motion, Monte Carlo simulations, Option Pricing (Black-Scholes), Yield Curve dynamics.',
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        newLogs.push({
          type: 'error',
          output: `Command not found: "${cmd}". Type "help" for available commands.`,
        });
    }

    setHistory(prev => [...prev, ...newLogs]);
    setInput('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '720px',
          background: '#0a0d14',
          border: '1px solid var(--accent-glow)',
          boxShadow: '0 0 40px rgba(99, 102, 241, 0.2)',
          fontFamily: 'var(--font-mono)',
          padding: 0,
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            background: '#121622',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--panel-border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            <Terminal size={16} style={{ color: 'var(--accent-cyan)' }} />
            <span>uzair@digital-lab:~</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={16} />
          </button>
        </div>

        {/* Terminal Logs */}
        <div
          style={{
            padding: '20px',
            minHeight: '280px',
            maxHeight: '400px',
            overflowY: 'auto',
            fontSize: '0.88rem',
            lineHeight: 1.6,
          }}
        >
          {history.map((item, i) => (
            <div key={i} style={{ marginBottom: '8px' }}>
              {item.type === 'cmd' && <div style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>{item.command}</div>}
              {item.type === 'res' && <div style={{ color: 'var(--text)' }}>{item.output}</div>}
              {item.type === 'error' && <div style={{ color: '#f87171' }}>{item.output}</div>}
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleCommand} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
            <span style={{ color: 'var(--accent-emerald)', fontWeight: 'bold' }}>$</span>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              autoFocus
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                width: '100%',
              }}
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
