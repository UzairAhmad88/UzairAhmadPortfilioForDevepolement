# Content Authoring & Publishing Guide

**Project**: Uzair Ahmad Personal Professional Website  
**Content Engine**: TypeScript-First Strongly Typed Collections  
**Audience**: Technical Authors, Collaborators, Maintainers  

---

## 1. Content Philosophy & Truth Standards

1. **Zero Exaggeration**: Every claim must be supported by code, data, or verifiable experience.
2. **Clear Project Classifications**: Explicitly designate whether a project is *Active Research*, *Academic Project (FYP)*, *Completed Project*, or *Client Platform*.
3. **Transparent Trade-offs**: Case studies must document real engineering trade-offs and known limitations.
4. **Structured Mathematical Formulations**: Research notes should state explicit formulas, statistical assumptions, and literature references with DOIs.

---

## 2. Authoring a Project Case Study

Projects are defined in `src/data/projects.ts`. Example schema implementation:

```typescript
import type { Project } from '@/types/project';

export const myNewProject: Project = {
  id: 'my-new-system',
  slug: 'my-new-system',
  title: 'High-Throughput Order Book Simulator',
  shortDescription: 'C++ & Python tick-level matching engine simulation.',
  category: ['quant', 'engineering'],
  projectType: 'Quantitative Market Infrastructure',
  domain: 'Quantitative Finance',
  type: 'System',
  status: 'active',
  presentationLevel: 'A',
  problem: 'Simulating order execution at sub-millisecond resolutions requires realistic queue position and fill probability modeling.',
  solution: 'Engineered an in-memory L3 limit order book simulator with synthetic latency injection.',
  githubUrl: 'https://github.com/UzairAhmad88/my-new-system',
  technologies: ['C++', 'Python', 'PyBind11', 'CMake'],
  tools: ['Git', 'Google Benchmark'],
  role: 'Lead Systems Developer',
  team: 'Individual Project',
  timeline: '2025 – Present',
  order: 7,
  relatedProjects: ['deep-learning-stock-return-prediction'],
  relatedResearch: ['market-regimes'],
  caseStudy: {
    overview: 'High-performance order matching engine for strategy backtesting.',
    context: 'Standard backtest frameworks assume infinite liquidity at top of book.',
    objectives: [
      'Implement price-time priority order matching in C++.',
      'Expose zero-copy Python bindings via PyBind11.'
    ],
    role: 'Sole Architect & Developer.',
    challenges: [
      {
        challenge: 'Memory Allocation Overhead during Rapid Cancels',
        solution: 'Pre-allocated object pools for Order and Limit structs.'
      }
    ],
    keyDecisions: [
      {
        decision: 'Doubly-Linked List for Limit Queues',
        context: 'Need O(1) order insertion and cancellation.',
        rationale: 'Allows instantaneous deletion without array shifting.',
        tradeOff: 'Slightly higher pointer memory overhead.'
      }
    ],
    results: [
      { status: 'Implemented', description: 'Benchmarked 2.4 million orders/second.' }
    ],
    outcomes: ['Sub-millisecond latency simulation capabilities.'],
    limitations: ['Does not model hidden iceberg order replenishment.'],
    lessonsLearned: ['Cache locality dominates algorithmic complexity at high throughputs.']
  }
};
```

---

## 3. Authoring a Research Lab Inquiry

Research inquiries are defined in `src/data/research.ts`. Example:

```typescript
import type { ResearchItem } from '@/types/research';

export const newInquiry: ResearchItem = {
  id: 'volatility-surface-arbitrage',
  slug: 'volatility-surface-arbitrage',
  badge: 'Exploring',
  title: 'No-Arbitrage SVI Volatility Surface Interpolation',
  summary: 'Investigating stochastic volatility inspired (SVI) parameterizations for smooth, arbitrage-free implied volatility surface calibration.',
  domain: 'Quantitative Finance',
  status: 'Exploring',
  publishedAt: '2025-03-01',
  question: 'How can raw option market quotes be fitted without violating butterfly or calendar spread arbitrage bounds?',
  context: 'Naive cubic spline interpolation creates negative risk-neutral probability densities in option pricing.',
  hypothesis: 'Quasi-explicit SVI calibration guarantees zero static arbitrage while minimizing root mean square error.',
  approach: 'Numerical optimization using Python SciPy on historical equity index options data.',
  methodology: [
    'Raw SVI parameterization $w(k) = a + b(\rho(k-m) + \sqrt{(k-m)^2 + \sigma^2})$.',
    'Gatheral & Jacquier (2014) no-arbitrage parameter bounds enforcement.'
  ],
  mathematicalFormulation: `Total Implied Variance Formulation:
w(k; \chi) = a + b * (\rho * (k - m) + \sqrt{(k - m)^2 + \sigma^2})`,
  dataSources: ['Historical SPX option chain EOD quotes.'],
  findings: [
    { status: 'Active', description: 'Eliminated negative butterfly density spikes across out-of-the-money strikes.' }
  ],
  limitations: ['Extreme strike wings with low open interest require regularization.'],
  conclusion: 'SVI parameterization provides reliable arbitrage-free implied volatility surfaces.',
  references: [
    {
      citation: 'Gatheral, J., & Jacquier, A. (2014). Arbitrage-free SVI volatility surfaces. Quantitative Finance, 14(1), 59-71.',
      url: 'https://doi.org/10.1080/14697688.2013.819986'
    }
  ],
  relatedProjects: ['deep-learning-stock-return-prediction'],
  relatedResearch: ['signal-research'],
  githubUrl: 'https://github.com/UzairAhmad88',
  featured: false
};
```

---

## 4. Publishing Checklist
1. Validate TypeScript syntax: `npm run check`.
2. Run data integrity unit tests: `npm test`.
3. Confirm build compiles cleanly: `npm run build`.
4. Check that new slugs are unique and cross-referenced in related collections.
