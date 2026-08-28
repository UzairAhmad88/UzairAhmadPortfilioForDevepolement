'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, ProjectCaseStudy } from '@/data/projects';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Github, FileText, Monitor, CheckCircle2, Activity } from 'lucide-react';

export function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const categories = [
    'All',
    'Software Development',
    'Product / Web',
    'AI / ML',
    'Deep Learning',
    'Quantitative Finance',
  ];

  const filteredProjects = projects.filter(p => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="section">
      <div className="eyebrow">04 / ENGINEERING EVIDENCE</div>
      <h2>Projects & Case Studies</h2>
      <p className="lede">
        Every major project is presented as an engineered case study covering problem statement, system architecture,
        technology stack, C# / .NET & AI implementations, empirical results, and future improvements.
      </p>

      {/* Category Filter Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '32px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className="tag-pill"
            style={{
              background: selectedCategory === cat ? 'var(--text-hero)' : '#ffffff',
              color: selectedCategory === cat ? '#ffffff' : 'var(--text-hero)',
              borderColor: 'var(--panel-border)',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 600,
              padding: '8px 16px',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid with Animated Project Background Screenshot Cards */}
      <div className="grid-2" style={{ marginTop: '32px' }}>
        {filteredProjects.map((project, pIdx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: pIdx * 0.05 }}
            className="card-glass project-card"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 0 }}
          >
            {/* Animated Project Active Screenshot Background Header */}
            <div
              style={{
                height: '150px',
                background: project.screenshotBg || 'linear-gradient(135deg, #1b3240, #6da8b7)',
                position: 'relative',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}
            >
              {/* Animated Code / Interface Lines Background overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                <span
                  className="tag-pill"
                  style={{
                    fontSize: '0.75rem',
                    color: '#ffffff',
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    background: 'rgba(27, 50, 64, 0.65)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {project.category}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.72rem',
                      color: '#ffffff',
                      background: 'rgba(16, 185, 129, 0.85)',
                      padding: '2px 8px',
                      borderRadius: '999px',
                      fontWeight: 600,
                    }}
                  >
                    <Activity size={12} /> Active Live
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        color: '#1b3240',
                        borderRadius: '50%',
                        padding: '6px',
                        display: 'grid',
                        placeItems: 'center',
                      }}
                      title="View GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Preview Window Mockup Bar */}
              <div style={{ zIndex: 2, display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', opacity: 0.9 }}>
                <Monitor size={16} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600 }}>
                  {project.slug}.uzair.dev
                </span>
              </div>
            </div>

            {/* Project Content Body */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-hero)', margin: '0 0 6px 0' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '14px', fontWeight: 500 }}>
                  {project.subtitle}
                </p>

                <p style={{ color: 'var(--text)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '18px' }}>
                  {project.overview}
                </p>

                {/* Technologies Badges (Includes C# and .NET for HMS & POS) */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.technologies.map(tech => (
                    <span key={tech} className="tag-pill" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read Case Study Action */}
              <div style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '16px', marginTop: 'auto' }}>
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="btn-tool"
                  style={{
                    background: 'var(--accent-light)',
                    borderColor: 'var(--panel-border)',
                    color: 'var(--text-hero)',
                    width: '100%',
                    justifyContent: 'center',
                    fontWeight: 600,
                  }}
                >
                  <FileText size={16} /> Read Full 14-Section Case Study <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
    </section>
  );
}
