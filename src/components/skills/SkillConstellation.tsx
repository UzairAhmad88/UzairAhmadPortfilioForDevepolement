'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowUpRight, Box, Cpu, Layers } from 'lucide-react';

interface SkillNode {
  name: string;
  category: 'Software' | 'Web' | 'AI / ML' | 'Deep Learning' | 'Quant' | 'Data / Math';
  connectedTo: string[];
  description: string;
  targetProjectHash: string;
  targetProjectName: string;
}

export function SkillConstellation() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const skillNodes: SkillNode[] = [
    // Software Development
    {
      name: '.NET Core & C#',
      category: 'Software',
      connectedTo: ['ASP.NET Core', 'SQL Server'],
      description: 'C# enterprise software development, LINQ queries, Entity Framework Core & async tasks.',
      targetProjectHash: '#projects',
      targetProjectName: 'HMS & POS Projects',
    },
    {
      name: 'Software Architecture',
      category: 'Software',
      connectedTo: ['System Design', 'APIs'],
      description: 'Modular system organization, separation of concerns, repository pattern & clean architecture.',
      targetProjectHash: '#architecture',
      targetProjectName: 'Architecture Lab',
    },
    {
      name: 'System Design',
      category: 'Software',
      connectedTo: ['APIs', 'Database'],
      description: 'Scalable service architecture, data flow, microservices & security practices.',
      targetProjectHash: '#architecture',
      targetProjectName: 'Architecture Lab',
    },
    {
      name: 'APIs & Microservices',
      category: 'Software',
      connectedTo: ['ASP.NET Core', 'REST APIs'],
      description: 'RESTful endpoint design, JWT authorization controllers & JSON response models.',
      targetProjectHash: '#projects',
      targetProjectName: 'HMS Case Study',
    },
    {
      name: 'Git / GitHub',
      category: 'Software',
      connectedTo: ['Testing', 'Documentation'],
      description: 'Version control, feature branching, pull requests & collaborative repository workflows.',
      targetProjectHash: '#github',
      targetProjectName: 'GitHub Record',
    },

    // Web Development
    {
      name: 'HTML5 / CSS3',
      category: 'Web',
      connectedTo: ['JavaScript', 'Responsive UI'],
      description: 'Semantic structure, CSS custom properties, grid/flexbox & accessibility.',
      targetProjectHash: '#projects',
      targetProjectName: 'Curespare Project',
    },
    {
      name: 'JavaScript / TypeScript',
      category: 'Web',
      connectedTo: ['React / Next.js'],
      description: 'Strong typing, ES6+ async/await, DOM manipulation & state management.',
      targetProjectHash: '#projects',
      targetProjectName: 'Curespare Case Study',
    },
    {
      name: 'React / Next.js',
      category: 'Web',
      connectedTo: ['Framer Motion', 'Three.js'],
      description: 'App router, server/client components, state hooks & responsive view rendering.',
      targetProjectHash: '#projects',
      targetProjectName: 'Curespare & Portfolio',
    },

    // Artificial Intelligence & Machine Learning
    {
      name: 'Machine Learning',
      category: 'AI / ML',
      connectedTo: ['Supervised Learning', 'Feature Engineering'],
      description: 'Regression models, classification algorithms & pattern discovery.',
      targetProjectHash: '#ai-lab',
      targetProjectName: 'AI Analytics & Lab',
    },
    {
      name: 'Feature Engineering',
      category: 'AI / ML',
      connectedTo: ['Pandas / NumPy'],
      description: 'Data transformation, scaling, missing value handling & feature creation.',
      targetProjectHash: '#ai-lab',
      targetProjectName: 'AI Analytics Pipeline',
    },

    // Deep Learning
    {
      name: 'Neural Networks',
      category: 'Deep Learning',
      connectedTo: ['CNN', 'RNN'],
      description: 'Multi-layer perceptrons, forward/backward propagation & activation functions.',
      targetProjectHash: '#ai-lab',
      targetProjectName: 'Neural Model Lab',
    },
    {
      name: 'CNN (Convolutional Networks)',
      category: 'Deep Learning',
      connectedTo: ['Computer Vision'],
      description: 'Feature maps, spatial convolutions, max pooling & image classification.',
      targetProjectHash: '#projects',
      targetProjectName: 'CNN Case Study',
    },
    {
      name: 'RNN (Recurrent Networks)',
      category: 'Deep Learning',
      connectedTo: ['Time Series'],
      description: 'Sequential memory, LSTM/GRU cells, windowing & time-series forecasting.',
      targetProjectHash: '#projects',
      targetProjectName: 'RNN Case Study',
    },

    // Quantitative Finance
    {
      name: 'Stochastic Processes',
      category: 'Quant',
      connectedTo: ['Brownian Motion', 'Time Series'],
      description: 'Random walk models, Wiener processes & stochastic differential equations.',
      targetProjectHash: '#quant-lab',
      targetProjectName: 'Quant Simulator Lab',
    },
    {
      name: 'Monte Carlo Simulation',
      category: 'Quant',
      connectedTo: ['Option Pricing'],
      description: 'Path sampling, probability distributions & numerical risk simulation.',
      targetProjectHash: '#quant-lab',
      targetProjectName: 'Monte Carlo Canvas',
    },
    {
      name: 'Option Pricing (Black-Scholes)',
      category: 'Quant',
      connectedTo: ['Risk Valuation'],
      description: 'European Call/Put pricing models & sensitivity Greeks (Delta, Gamma, Vega).',
      targetProjectHash: '#quant-lab',
      targetProjectName: 'Black-Scholes Pricer',
    },

    // Data & Mathematics
    {
      name: 'Python',
      category: 'Data / Math',
      connectedTo: ['NumPy', 'Pandas'],
      description: 'Primary language for data science, AI model training & quant simulation.',
      targetProjectHash: '#ai-lab',
      targetProjectName: 'AI & Data Pipeline',
    },
    {
      name: 'Probability & Statistics',
      category: 'Data / Math',
      connectedTo: ['Stochastic Processes'],
      description: 'Hypothesis testing, probability distributions, expectation & variance.',
      targetProjectHash: '#quant-lab',
      targetProjectName: 'Quant Mathematics',
    },
  ];

  const categories = ['All', 'Software', 'Web', 'AI / ML', 'Deep Learning', 'Quant', 'Data / Math'];

  const filteredSkills = skillNodes.filter(node => {
    const matchesCategory = activeCategory === 'All' || node.category === activeCategory;
    const matchesSearch =
      node.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      node.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleJumpToProject = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="skills" className="section">
      <div className="eyebrow">02 / TECHNICAL CAPABILITIES</div>
      <h2>Technical Constellation</h2>
      <p className="lede">
        Skills organized as inter-connected domain nodes rather than arbitrary proficiency percentages.
        Every capability links directly to real engineering projects, mathematical models, and code repositories.
      </p>

      {/* Filter & Search Bar */}
      <div
        style={{
          marginTop: '36px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="tag-pill"
              style={{
                background: activeCategory === cat ? 'var(--text-hero)' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-hero)',
                borderColor: 'var(--panel-border)',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'var(--transition-fast)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', minWidth: '240px' }}>
          <Search
            size={16}
            style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }}
          />
          <input
            type="text"
            placeholder="Filter skills..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px 8px 36px',
              borderRadius: 'var(--radius-full)',
              background: '#ffffff',
              border: '1px solid var(--panel-border)',
              color: 'var(--text)',
              outline: 'none',
              fontSize: '0.88rem',
              fontFamily: 'var(--font-body)',
            }}
          />
        </div>
      </div>

      {/* 3D Motion Skill Cards Grid */}
      <div className="grid-3" style={{ marginTop: '28px' }}>
        {filteredSkills.map((node, sIdx) => (
          <motion.div
            key={node.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ duration: 0.35, delay: sIdx * 0.03 }}
            className="card-glass"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Box size={16} style={{ color: 'var(--text-hero)' }} />
                  <h3 style={{ fontSize: '1.12rem', margin: 0, color: 'var(--text-hero)', fontWeight: 700 }}>{node.name}</h3>
                </div>
                <span className="tag-pill" style={{ fontSize: '0.72rem', padding: '2px 8px', background: 'var(--accent-light)', borderColor: 'var(--panel-border)', color: 'var(--text-hero)' }}>
                  {node.category}
                </span>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: '0 0 14px 0', lineHeight: 1.5, fontWeight: 500 }}>
                {node.description}
              </p>
            </div>

            {/* Touch / Click Link to Project */}
            <div style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '12px', marginTop: 'auto' }}>
              <button
                onClick={() => handleJumpToProject(node.targetProjectHash)}
                className="btn-tool"
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  background: 'var(--accent-light)',
                  borderColor: 'var(--panel-border)',
                  color: 'var(--text-hero)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '6px 12px',
                }}
                title={`Touch to jump to ${node.targetProjectName}`}
              >
                <span>Touch to jump to {node.targetProjectName}</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
