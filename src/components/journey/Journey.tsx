'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface Milestone {
  year: string;
  stage: string;
  headline: string;
  summary: string;
  details: string[];
  keyTechnologies: string[];
}

export function Journey() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const milestones: Milestone[] = [
    {
      year: 'Phase 01',
      stage: 'Computer Science Foundations',
      headline: 'Algorithmic Thinking & Software Logic',
      summary: 'Focused on fundamental data structures, memory management, discrete math, and object-oriented programming.',
      details: [
        'Mastered core algorithms: sorting, graph traversal, dynamic programming.',
        'Developed clean software design habits using object-oriented principles.',
        'Built initial command-line utility tools and algorithmic problem solvers.',
      ],
      keyTechnologies: ['C++', 'Java', 'Data Structures', 'OOP'],
    },
    {
      year: 'Phase 02',
      stage: 'Software & Web Development',
      headline: 'Full-Stack Applications & API Engineering',
      summary: 'Expanded into full-stack web applications, modern C# / .NET API engineering, TypeScript, and RESTful APIs.',
      details: [
        'Engineered Healthcare Management System (HMS) with .NET Core & C# APIs.',
        'Developed POS & Curespare product case studies with persistent state & schema design.',
        'Implemented responsive, accessible user interfaces with Next.js and Tailwind CSS.',
      ],
      keyTechnologies: ['.NET Core', 'C#', 'React', 'Next.js', 'TypeScript', 'SQL Server'],
    },
    {
      year: 'Phase 03',
      stage: 'Data Processing & Machine Learning',
      headline: 'Statistical Learning & Predictive Models',
      summary: 'Transitioned into data engineering pipelines, feature extraction, supervised/unsupervised machine learning.',
      details: [
        'Built AI Analytics workflow covering data cleaning, exploratory analysis, and model evaluation.',
        'Trained regression and classification models using scikit-learn & Pandas.',
        'Implemented cross-validation, hyperparameter tuning, and metric visualization.',
      ],
      keyTechnologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
    },
    {
      year: 'Phase 04',
      stage: 'Deep Learning & Neural Networks',
      headline: 'Computer Vision & Sequential Modeling',
      summary: 'Explored neural network architectures, convolution operations, and recurrent networks for sequential data.',
      details: [
        'Constructed Convolutional Neural Network (CNN) for image recognition with max-pooling layers.',
        'Engineered Recurrent Neural Network (RNN/LSTM) for windowed time-series predictions.',
        'Analyzed feature maps, activation functions (ReLU, Sigmoid), and loss convergence.',
      ],
      keyTechnologies: ['TensorFlow', 'PyTorch', 'CNN', 'RNN', 'Keras'],
    },
    {
      year: 'Phase 05',
      stage: 'Quantitative Finance & Stochastics',
      headline: 'Stochastic Processes & Risk Valuation',
      summary: 'Investigating financial mathematics, Geometric Brownian Motion, Monte Carlo option pricing, and yield curves.',
      details: [
        'Built interactive Monte Carlo stock path simulator for stochastic path forecasting.',
        'Implemented Black-Scholes European option pricing calculator with sensitivity Greeks.',
        'Modeled yield curve dynamics and interest rate term structures.',
      ],
      keyTechnologies: ['Stochastic Calculus', 'Monte Carlo', 'Black-Scholes', 'Time Series'],
    },
  ];

  return (
    <section id="journey" className="section">
      <div className="eyebrow">03 / CONTINUOUS PROGRESSION</div>
      <h2>Learning Journey Timeline</h2>
      <p className="lede">
        A documented evolution from fundamental computer science to software engineering, deep learning, and quantitative finance.
        This timeline represents active learning and demonstrated progress rather than static claims.
      </p>

      <div style={{ marginTop: '36px' }}>
        {milestones.map((item, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={item.stage}
              className="card-glass"
              style={{
                marginBottom: '18px',
                borderLeft: isExpanded ? '4px solid var(--text-hero)' : '1px solid var(--panel-border)',
                background: isExpanded ? 'var(--accent-light)' : '#ffffff',
              }}
            >
              <div
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span
                    className="tag-pill"
                    style={{
                      background: 'var(--text-hero)',
                      color: '#ffffff',
                      borderColor: 'var(--text-hero)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                    }}
                  >
                    {item.year}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-hero)', fontWeight: 700 }}>{item.stage}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '4px 0 0 0', fontWeight: 500 }}>{item.headline}</p>
                  </div>
                </div>

                <button style={{ background: 'none', border: 'none', color: 'var(--text-hero)', cursor: 'pointer' }}>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              {isExpanded && (
                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--panel-border)' }}>
                  <p style={{ color: 'var(--text)', fontSize: '0.96rem', lineHeight: '1.6', fontWeight: 500 }}>{item.summary}</p>

                  <div style={{ marginTop: '16px' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-hero)', marginBottom: '8px' }}>
                      Key Milestones & Achievements:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {item.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '0.9rem',
                            color: 'var(--text-muted)',
                            marginBottom: '6px',
                            fontWeight: 500,
                          }}
                        >
                          <ArrowRight size={14} style={{ color: 'var(--text-hero)', marginTop: '4px', flexShrink: 0 }} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {item.keyTechnologies.map(tech => (
                      <span key={tech} className="tag-pill" style={{ fontSize: '0.78rem', background: '#ffffff', color: 'var(--text-hero)', borderColor: 'var(--panel-border)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
