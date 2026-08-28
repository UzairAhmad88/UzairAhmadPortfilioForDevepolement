'use client';

import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Zap, Sparkles, BookOpen } from 'lucide-react';

export function About() {
  const evolutionSteps = [
    { title: 'Computer Science', sub: 'Foundational CS & Logic' },
    { title: 'Software Engineering', sub: 'Architecture & Clean Code' },
    { title: 'Web Development', sub: 'Full-stack & Responsive UI' },
    { title: 'Data & Analytics', sub: 'Preprocessing & Insights' },
    { title: 'Machine Learning', sub: 'Supervised & Unsupervised' },
    { title: 'Deep Learning', sub: 'CNN & RNN Architecture' },
    { title: 'Time Series', sub: 'Sequential & Financial Models' },
    { title: 'Quantitative Finance', sub: 'Stochastics & Risk Valuation' },
    { title: 'Technical Research', sub: 'Systems & Mathematical Models' },
  ];

  const qualities = [
    { icon: Terminal, title: 'Intelligent Systems', text: 'Focus on understanding how systems work from first principles.' },
    { icon: Zap, title: 'Modern Architecture', text: 'Clean separation of concerns, modular designs, and high-performance UI.' },
    { icon: Sparkles, title: 'Experimental Drive', text: 'Willingness to explore neural architectures, stochastic algorithms, and web 3D.' },
    { icon: ShieldCheck, title: 'Professional Rigor', text: 'Committed to documentation, unit testing, and maintainable software standards.' },
  ];

  return (
    <section id="about" className="section">
      <div className="eyebrow">01 / PERSONAL IDENTITY</div>
      <h2>Building software. Exploring intelligence. Understanding quantitative systems.</h2>
      <p className="lede">
        I am a Computer Science student and technology enthusiast dedicated to building software, studying intelligent models,
        and exploring the intersection of technology, mathematics, and finance. Rather than focusing on a single tool, my goal
        is to understand systems from the ground up and turn that understanding into practical engineering.
      </p>

      {/* Developer Evolution Timeline Pipeline */}
      <div style={{ marginTop: '36px' }}>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--text)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BookOpen size={18} style={{ color: 'var(--accent)' }} /> Technical Growth Pipeline
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px',
          }}
        >
          {evolutionSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="card-glass"
              style={{ padding: '16px 18px', position: 'relative' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  fontWeight: 700,
                  marginBottom: '4px',
                }}
              >
                0{idx + 1}
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.98rem', color: 'var(--text)' }}>{step.title}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>{step.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Engineering Qualities */}
      <div className="grid-2" style={{ marginTop: '32px' }}>
        {qualities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="card-glass" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-light)',
                  border: '1px solid rgba(37, 99, 235, 0.2)',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '6px', color: 'var(--text)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
