'use client';

import { useState } from 'react';
import { Layers, ShieldCheck, Cpu, Database, Server, Globe } from 'lucide-react';

interface ArchLayer {
  id: string;
  name: string;
  type: string;
  icon: any;
  tech: string[];
  responsibilities: string[];
  security: string[];
}

export function ArchitectureLab() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('gateway');

  const layers: ArchLayer[] = [
    {
      id: 'client',
      name: '01 / Presentation & Client Layer',
      type: 'Frontend Single Page Application',
      icon: Globe,
      tech: ['React', 'Next.js', 'TypeScript', 'Zustand', 'Tailwind CSS'],
      responsibilities: [
        'Render responsive user interface components with accessible DOM structure.',
        'Manage client-side application state and optimistic UI updates.',
        'Execute dynamic form validations and handle client error boundaries.',
      ],
      security: ['Strict Content Security Policy (CSP)', 'XSS protection & HTML sanitization', 'HTTPS TLS 1.3 encryption'],
    },
    {
      id: 'gateway',
      name: '02 / API Service & Gateway Layer',
      type: 'Backend REST API & Controllers',
      icon: Server,
      tech: ['.NET Core', 'C#', 'ASP.NET Core Web API', 'Node.js', 'Express', 'JWT'],
      responsibilities: [
        'Authenticate API requests via cryptographically signed JWT bearer tokens.',
        'Route endpoint requests to application business logic service handlers.',
        'Enforce rate limiting and request payload validation schemas.',
      ],
      security: ['JWT authentication with short TTL', 'CORS origin policy restrictions', 'Rate limiting middleware'],
    },
    {
      id: 'services',
      name: '03 / Application Business Logic Services',
      type: 'Domain Services & CQRS Handlers',
      icon: Cpu,
      tech: ['C# MediatR', 'Dependency Injection', 'Repository Pattern', 'Service Classes'],
      responsibilities: [
        'Execute domain business logic workflows and transactional operations.',
        'Orchestrate external API integrations and third-party webhooks.',
        'Handle background job scheduling and asynchronous event processing.',
      ],
      security: ['Role-based authorization checks', 'Input sanitization & parametrized queries', 'Audit logging'],
    },
    {
      id: 'database',
      name: '04 / Persistence & Database Layer',
      type: 'Relational & Key-Value Storage',
      icon: Database,
      tech: ['SQL Server', 'Entity Framework Core', 'PostgreSQL', 'Redis'],
      responsibilities: [
        'Store 3NF normalized relational entities with strict referential constraints.',
        'Cache high-frequency query lookups in Redis memory store.',
        'Maintain database migrations and automated transaction rollbacks.',
      ],
      security: ['AES-256 database encryption at rest', 'Non-root database user permissions', 'SSL/TLS encrypted DB connections'],
    },
  ];

  const currentLayer = layers.find(l => l.id === selectedLayerId) || layers[1];

  return (
    <section id="architecture" className="section">
      <div className="eyebrow">07 / SYSTEM ENGINEERING</div>
      <h2>Software Architecture & System Design</h2>
      <p className="lede">
        Interactive system design diagram detailing multi-layer enterprise architecture from presentation client to .NET C# API gateway,
        business logic services, and SQL Server persistence layer.
      </p>

      <div className="grid-2" style={{ marginTop: '36px' }}>
        {/* Layer Selection Diagram Stack */}
        <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-hero)', marginBottom: '8px', fontWeight: 700 }}>
            Architecture Diagram (Click Layer to Inspect)
          </h3>

          {layers.map(layer => {
            const Icon = layer.icon;
            const isSelected = layer.id === selectedLayerId;
            return (
              <div
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  background: isSelected ? 'var(--accent-light)' : '#ffffff',
                  border: isSelected ? '2px solid var(--text-hero)' : '1px solid var(--panel-border)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'var(--transition-fast)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-md)',
                      background: isSelected ? 'var(--text-hero)' : '#f1f5f9',
                      color: isSelected ? '#ffffff' : 'var(--text-hero)',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-hero)' }}>{layer.name}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>{layer.type}</div>
                  </div>
                </div>

                <span
                  className="tag-pill"
                  style={{
                    fontSize: '0.72rem',
                    background: isSelected ? 'var(--text-hero)' : '#f1f5f9',
                    color: isSelected ? '#ffffff' : 'var(--text-hero)',
                    fontWeight: 600,
                  }}
                >
                  {isSelected ? 'Selected' : 'Inspect'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Layer Details & Security Specification */}
        <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Layers size={22} style={{ color: 'var(--text-hero)' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-hero)', margin: 0, fontWeight: 700 }}>
                Layer Inspection & Specifications
              </h3>
            </div>

            {/* Responsibilities */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-hero)', marginBottom: '8px' }}>
                Key Responsibilities:
              </div>
              <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {currentLayer.responsibilities.map((resp, idx) => (
                  <li key={idx} style={{ fontWeight: 500 }}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* Security Controls */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-hero)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} style={{ color: 'var(--text-hero)' }} /> Layer Security Controls:
              </div>
              <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                {currentLayer.security.map((sec, idx) => (
                  <li key={idx} style={{ fontWeight: 500 }}>{sec}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Badges */}
          <div style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '16px' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>Technologies Used:</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {currentLayer.tech.map(t => (
                <span key={t} className="tag-pill" style={{ background: 'var(--accent-light)', borderColor: 'var(--panel-border)', color: 'var(--text-hero)', fontWeight: 600 }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
