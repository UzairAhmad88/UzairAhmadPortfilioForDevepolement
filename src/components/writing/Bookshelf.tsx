'use client';

import { useState } from 'react';
import { BookOpen, X, ChevronRight, FileText } from 'lucide-react';

interface BookItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  spineColor: string;
  excerpt: string;
  chapters: string[];
}

export function Bookshelf() {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  const manuscripts: BookItem[] = [
    {
      id: 'book-1',
      title: 'Engineering Intelligence',
      category: 'Software & Systems',
      subtitle: 'From First Principles to Scalable Software Architecture',
      spineColor: 'linear-gradient(135deg, #1b3240, #2c4b5e)',
      excerpt:
        'Software engineering is the art of structuring complexity into clear, deterministic abstractions. This manuscript explores modular system boundaries, C# enterprise design patterns, and database normalization.',
      chapters: [
        'Chapter 01: Systems from First Principles',
        'Chapter 02: Modular Boundary Separation',
        'Chapter 03: Database Normalization & Relational Integrity',
        'Chapter 04: C# .NET API Controller Design Patterns',
      ],
    },
    {
      id: 'book-2',
      title: 'Deep Learning Dynamics',
      category: 'Artificial Intelligence',
      subtitle: 'Convolutional Kernels & Sequential Recurrent Neural Nets',
      spineColor: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
      excerpt:
        'Understanding deep neural networks requires diving into activation manifolds, gradient backpropagation through time, receptive field spatial operations, and tensor matrix calculus.',
      chapters: [
        'Chapter 01: Tensors & Matrix Differential Operations',
        'Chapter 02: Spatial Feature Maps in Convolutional Networks',
        'Chapter 03: Vanishing Gradients & Long Short-Term Memory Gating',
        'Chapter 04: Empirical Model Evaluation & Overfitting Bound Metrics',
      ],
    },
    {
      id: 'book-3',
      title: 'Stochastic Calculus & Finance',
      category: 'Quantitative Research',
      subtitle: 'Brownian Motion, Ito Lemma & Black-Scholes Valuation',
      spineColor: 'linear-gradient(135deg, #059669, #10b981)',
      excerpt:
        'Quantitative finance bridges mathematical probability with computational simulation. This work details Geometric Brownian Motion, Ito Lemma derivations, and Monte Carlo option pricing engines.',
      chapters: [
        'Chapter 01: Probability Distributions & Wiener Processes',
        'Chapter 02: Ito Lemma Derivation for Continuous Derivatives',
        'Chapter 03: Black-Scholes Differential Equation Formulation',
        'Chapter 04: Monte Carlo Path Trajectory Generation & Option Greeks',
      ],
    },
  ];

  return (
    <section id="bookshelf" className="section">
      <div className="eyebrow">08 / TECHNICAL MANUSCRIPTS</div>
      <h2>Digital Bookshelf & Writing</h2>
      <p className="lede">
        A collection of written technical notes, manuscript chapters, and theoretical research summaries documenting my study
        in software architecture, neural network dynamics, and quantitative mathematical modeling.
      </p>

      <div className="grid-3" style={{ marginTop: '36px' }}>
        {manuscripts.map(book => (
          <div key={book.id} className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* 3D Spine Header */}
              <div
                style={{
                  height: '140px',
                  background: book.spineColor,
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                  boxShadow: '0 8px 20px rgba(27, 50, 64, 0.12)',
                }}
              >
                <span className="tag-pill" style={{ background: 'rgba(255, 255, 255, 0.25)', color: '#ffffff', borderColor: 'transparent', fontSize: '0.72rem' }}>
                  {book.category}
                </span>

                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}>
                  {book.title}
                </div>
              </div>

              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-hero)', marginBottom: '8px', fontWeight: 700 }}>{book.subtitle}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>{book.excerpt}</p>
            </div>

            <button
              onClick={() => setSelectedBook(book)}
              className="btn-tool"
              style={{
                width: '100%',
                justifyContent: 'center',
                borderColor: 'var(--panel-border)',
                color: 'var(--text-hero)',
                background: 'var(--accent-light)',
                fontWeight: 600,
              }}
            >
              <BookOpen size={16} /> Read Manuscript Preview <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Manuscript Reader Modal */}
      {selectedBook && (
        <div className="modal-overlay" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '700px', padding: '28px', background: '#ffffff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <span className="tag-pill" style={{ background: 'var(--accent-light)', color: 'var(--text-hero)', fontSize: '0.75rem', marginBottom: '6px' }}>
                  {selectedBook.category}
                </span>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-hero)', margin: '6px 0 4px 0', fontWeight: 700 }}>{selectedBook.title}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{selectedBook.subtitle}</p>
              </div>

              <button
                onClick={() => setSelectedBook(null)}
                style={{ background: '#f1f5f9', border: '1px solid var(--panel-border)', borderRadius: 'var(--radius-md)', color: 'var(--text-hero)', padding: '8px', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <div className="card-glass" style={{ marginBottom: '20px', padding: '18px' }}>
              <div style={{ fontWeight: 700, color: 'var(--text-hero)', fontSize: '0.85rem', marginBottom: '6px' }}>EXCERPT</div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text)', margin: 0, lineHeight: '1.6', fontWeight: 500 }}>{selectedBook.excerpt}</p>
            </div>

            <div className="card-glass" style={{ padding: '18px' }}>
              <div style={{ fontWeight: 700, color: 'var(--text-hero)', fontSize: '0.85rem', marginBottom: '10px' }}>TABLE OF CHAPTERS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedBook.chapters.map((ch, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    <FileText size={14} style={{ color: 'var(--text-hero)' }} />
                    <span>{ch}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
