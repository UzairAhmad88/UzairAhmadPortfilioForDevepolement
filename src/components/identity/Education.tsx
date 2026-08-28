'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export function Education() {
  const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Operating Systems & Architecture',
    'Computer Networks & Protocols',
    'Software Engineering Methodologies',
    'Artificial Intelligence & ML',
    'Probability & Stochastic Math',
  ];

  return (
    <section id="education" className="section">
      <div className="eyebrow">ACADEMIC FOUNDATION</div>
      <h2>Education & Specializations</h2>

      <div className="grid-2" style={{ marginTop: '32px' }}>
        {/* Main Degree Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glass"
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-light)',
                  border: '1px solid var(--panel-border)',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--text-hero)',
                }}
              >
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="tag-pill" style={{ fontSize: '0.75rem', padding: '2px 8px', color: 'var(--text-hero)' }}>
                  Undergraduate Degree
                </span>
                <h3 style={{ fontSize: '1.45rem', margin: '4px 0 0 0', color: 'var(--text-hero)', fontWeight: 700 }}>
                  Bachelor of Science in Computer Science
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Rigorous 4-year computer science program focused on algorithmic problem solving, software engineering principles,
              database systems, artificial intelligence, and quantitative mathematical modeling.
            </p>

            <div style={{ display: 'flex', gap: '20px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div>
                <strong style={{ color: 'var(--text-hero)' }}>Focus:</strong> Software & AI Engineering
              </div>
              <div>
                <strong style={{ color: 'var(--text-hero)' }}>Status:</strong> Active Student / Researcher
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '24px',
              paddingTop: '16px',
              borderTop: '1px solid var(--panel-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-hero)',
              fontSize: '0.85rem',
              fontWeight: 600,
            }}
          >
            <Award size={16} /> Continuous Academic & Technical Project Execution
          </div>
        </motion.div>

        {/* Coursework & Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="card-glass"
        >
          <h4 style={{ fontSize: '1.1rem', color: 'var(--text-hero)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
            <BookOpen size={18} style={{ color: 'var(--text-hero)' }} /> Core Coursework & Foundations
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {coursework.map(course => (
              <div
                key={course}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.85rem',
                  color: 'var(--text)',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-light)',
                  border: '1px solid var(--panel-border)',
                  fontWeight: 500,
                }}
              >
                <CheckCircle2 size={14} style={{ color: 'var(--text-hero)', flexShrink: 0 }} />
                <span>{course}</span>
              </div>
            ))}
          </div>

          {/* Research Track */}
          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--panel-border)' }}>
            <div style={{ fontWeight: 700, color: 'var(--text-hero)', fontSize: '0.9rem', marginBottom: '8px' }}>
              Specialized Elective Tracks:
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="tag-pill" style={{ color: 'var(--text-hero)', background: 'var(--accent-light)' }}>
                Systems & Architecture (.NET / C#)
              </span>
              <span className="tag-pill" style={{ color: 'var(--text-hero)', background: 'var(--accent-light)' }}>
                AI & Stochastic Models
              </span>
              <span className="tag-pill" style={{ color: 'var(--text-hero)', background: 'var(--accent-light)' }}>
                Full-Stack Web Engineering
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
