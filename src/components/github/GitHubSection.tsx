'use client';

import { Github, ExternalLink, Star, GitFork, BookOpen } from 'lucide-react';

export function GitHubSection() {
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'UzairAhmad88';

  const repos = [
    {
      name: 'rafaqat-babar-co',
      desc: 'Chartered Accountancy corporate web platform with financial advisory catalogs, audit services & consultation booking.',
      lang: 'TypeScript / Next.js',
      stars: 16,
      forks: 5,
      url: `https://github.com/${githubUsername}/rafaqat-babar-co`,
    },
    {
      name: 'event-management-system',
      desc: 'Enterprise corporate event scheduling, attendee registration & ticketing management system.',
      lang: 'C# / .NET Core',
      stars: 14,
      forks: 4,
      url: `https://github.com/${githubUsername}/event-management-system`,
    },
    {
      name: 'hms-healthcare-system',
      desc: 'Full-stack enterprise medical operations platform built with .NET Core, C# REST APIs, SQL Server & React.',
      lang: 'C# / TypeScript',
      stars: 12,
      forks: 4,
      url: `https://github.com/${githubUsername}/hms-healthcare-system`,
    },
    {
      name: 'pos-point-of-sale-system',
      desc: 'High-speed retail transaction processing software system with barcode scanning & inventory tracking.',
      lang: 'C# / .NET',
      stars: 15,
      forks: 5,
      url: `https://github.com/${githubUsername}/pos-point-of-sale-system`,
    },
    {
      name: 'curespare-web',
      desc: 'Pharmaceutical supply discovery and local pharmacy medicine availability search index application.',
      lang: 'TypeScript / Next.js',
      stars: 18,
      forks: 6,
      url: `https://github.com/${githubUsername}/curespare-web`,
    },
    {
      name: 'ai-analytics-pipeline',
      desc: 'Machine learning data cleaning, feature engineering, and ensemble model predictive pipeline.',
      lang: 'Python / Scikit-Learn',
      stars: 9,
      forks: 2,
      url: `https://github.com/${githubUsername}/ai-analytics-pipeline`,
    },
    {
      name: 'cnn-image-classifier',
      desc: 'Deep convolutional neural network implemented for spatial pattern extraction and image classification.',
      lang: 'Python / TensorFlow',
      stars: 14,
      forks: 3,
      url: `https://github.com/${githubUsername}/cnn-image-classifier`,
    },
    {
      name: 'quantitative-finance-suite',
      desc: 'Monte Carlo stock path simulation, Geometric Brownian Motion, and Black-Scholes derivative pricer.',
      lang: 'Python / NumPy',
      stars: 22,
      forks: 7,
      url: `https://github.com/${githubUsername}/quantitative-finance-suite`,
    },
  ];

  return (
    <section id="github" className="section">
      <div className="eyebrow">09 / SOURCE EVIDENCE</div>
      <h2>GitHub Repositories & Open Evidence</h2>
      <p className="lede">
        Verifiable source code, repository structures, and software commits on GitHub.
      </p>

      {/* GitHub Profile Banner Card */}
      <div className="card-glass" style={{ marginTop: '36px', padding: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent-light)', border: '1px solid var(--panel-border)', display: 'grid', placeItems: 'center', color: 'var(--text-hero)' }}>
            <Github size={24} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-hero)' }}>@{githubUsername}</div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500 }}>Software Developer • AI Researcher • Quant Enthusiast</div>
          </div>
        </div>

        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ padding: '10px 22px' }}
        >
          <Github size={16} /> View GitHub Profile <ExternalLink size={14} />
        </a>
      </div>

      {/* Repository Cards Grid */}
      <div className="grid-3" style={{ marginTop: '24px' }}>
        {repos.map(repo => (
          <div key={repo.name} className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'var(--text-hero)', fontWeight: 700, fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <BookOpen size={16} style={{ color: 'var(--text-hero)' }} />
                  {repo.name}
                </a>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px', fontWeight: 500 }}>{repo.desc}</p>
            </div>

            <div style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span className="tag-pill" style={{ fontSize: '0.72rem', padding: '2px 8px', background: 'var(--accent-light)', borderColor: 'var(--panel-border)', color: 'var(--text-hero)', fontWeight: 600 }}>
                {repo.lang}
              </span>

              <div style={{ display: 'flex', gap: '12px', fontFamily: 'var(--font-mono)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-hero)', fontWeight: 600 }}>
                  <Star size={12} /> {repo.stars}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-hero)', fontWeight: 600 }}>
                  <GitFork size={12} /> {repo.forks}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
