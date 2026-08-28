'use client';

import { ProjectCaseStudy } from '@/data/projects';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '840px', padding: '32px', background: '#ffffff' }}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <span
              className="tag-pill"
              style={{
                color: 'var(--accent)',
                borderColor: 'rgba(37, 99, 235, 0.25)',
                background: 'var(--accent-light)',
                fontSize: '0.78rem',
                marginBottom: '8px',
              }}
            >
              {project.category}
            </span>
            <h2 style={{ fontSize: '1.8rem', margin: '8px 0 4px 0', color: 'var(--text)' }}>{project.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            style={{
              background: '#f1f5f9',
              border: '1px solid var(--panel-border)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-muted)',
              padding: '8px',
              cursor: 'pointer',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Action Links */}
        <div style={{ display: 'flex', gap: '14px', marginBottom: '24px' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tool"
              style={{ padding: '8px 16px', color: 'var(--text)', background: '#f8fafc' }}
            >
              <Github size={16} /> GitHub Repository
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tool"
              style={{ padding: '8px 16px', borderColor: 'var(--accent)', color: 'var(--accent)', background: 'var(--accent-light)' }}
            >
              <ExternalLink size={16} /> Live Application / Lab
            </a>
          )}
        </div>

        {/* 14-Section Case Study Grid Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Section 01 & 02: Overview & Problem */}
          <div className="grid-2">
            <div className="card-glass" style={{ padding: '18px' }}>
              <div style={{ fontWeight: 600, color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '6px' }}>01 / OVERVIEW</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text)', margin: 0, lineHeight: 1.6 }}>{project.overview}</p>
            </div>

            <div className="card-glass" style={{ padding: '18px' }}>
              <div style={{ fontWeight: 600, color: '#dc2626', fontSize: '0.85rem', marginBottom: '6px' }}>02 / THE PROBLEM</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{project.problem}</p>
            </div>
          </div>

          {/* Section 03 & 04: Motivation & Requirements */}
          <div className="card-glass" style={{ padding: '20px' }}>
            <div style={{ fontWeight: 600, color: 'var(--accent-emerald)', fontSize: '0.85rem', marginBottom: '8px' }}>
              03 & 04 / MOTIVATION & REQUIREMENTS
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text)', marginBottom: '14px' }}>{project.motivation}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {project.requirements.map((req, rIdx) => (
                <div key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', marginTop: '2px', flexShrink: 0 }} />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 05 & 06: Architecture & Technologies */}
          <div className="card-glass" style={{ padding: '20px' }}>
            <div style={{ fontWeight: 600, color: 'var(--accent-violet)', fontSize: '0.85rem', marginBottom: '8px' }}>
              05 & 06 / SYSTEM ARCHITECTURE & STACK
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text)', fontFamily: 'var(--font-mono)', background: '#f8fafc', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--panel-border)' }}>
              {project.architecture}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '14px' }}>
              {project.technologies.map(tech => (
                <span key={tech} className="tag-pill" style={{ background: 'var(--accent-light)', borderColor: 'rgba(37, 99, 235, 0.2)', color: 'var(--accent)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section 07 & 08: Implementation & Challenges */}
          <div className="grid-2">
            <div className="card-glass" style={{ padding: '18px' }}>
              <div style={{ fontWeight: 600, color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '6px' }}>07 / IMPLEMENTATION</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{project.implementation}</p>
            </div>

            <div className="card-glass" style={{ padding: '18px' }}>
              <div style={{ fontWeight: 600, color: 'var(--accent-amber)', fontSize: '0.85rem', marginBottom: '6px' }}>08 / ENGINEERING CHALLENGES</div>
              {project.challenges.map((c, cIdx) => (
                <div key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  <AlertTriangle size={14} style={{ color: 'var(--accent-amber)', marginTop: '3px', flexShrink: 0 }} />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 09, 10, 11 & 12: Testing, Results, Learning & Future */}
          <div className="card-glass" style={{ padding: '20px' }}>
            <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.85rem', marginBottom: '14px' }}>
              09 - 12 / TESTING, RESULTS, LESSONS & FUTURE WORK
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <div>
                <strong style={{ color: 'var(--accent)' }}>Testing Strategy:</strong> <span style={{ color: 'var(--text-muted)' }}>{project.testing}</span>
              </div>

              <div>
                <strong style={{ color: 'var(--accent-emerald)' }}>Empirical Results:</strong> <span style={{ color: 'var(--text-muted)' }}>{project.results}</span>
              </div>

              <div>
                <strong style={{ color: 'var(--accent-violet)' }}>Key Lessons Learned:</strong> <span style={{ color: 'var(--text-muted)' }}>{project.learning}</span>
              </div>

              <div>
                <strong style={{ color: 'var(--accent-amber)' }}>Future Improvements:</strong>
                <ul style={{ margin: '4px 0 0 20px', padding: 0, color: 'var(--text-muted)' }}>
                  {project.future.map((f, fIdx) => (
                    <li key={fIdx}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
