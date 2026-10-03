import type { AboutProfile } from '../types/about.ts';

export const aboutProfile: AboutProfile = {
  name: 'Uzair Ahmad',
  title: 'Quantitative AI & Product Engineer',
  eyebrow: 'ENGINEERING IDENTITY // RESEARCH & PRODUCTION',
  location: 'Peshawar, Pakistan',
  shortBio:
    'Designing software systems where mathematical modeling, statistical intelligence, and reliable full-stack web architectures intersect.',
  narrativeParagraphs: [
    'I am a software and machine learning engineer focused on building systems that bridge statistical learning, quantitative finance, and modern distributed web architectures. Rather than treating machine learning as an isolated theoretical exercise or frontend engineering as cosmetic presentation, I focus on the complete operational lifecycle: from data ingestion and non-stationary signal processing to deterministic execution guardrails, API contracts, and high-performance user experiences.',
    'My technical inquiries center on temporal memory preservation, unsupervised market regime detection, and multi-agent coordination with bounded state machines. I approach software engineering through the lens of verifiable evidence—evaluating architectures by their resilience to structural regime shifts, concurrency bottlenecks, and latency constraints.',
    'Full-stack ownership means mastering the stack end-to-end: from PyTorch tensor manipulation and SQLAlchemy asynchronous session lifecycles down to PostgreSQL relational integrity, Zero-CLS design tokens, and semantic accessible HTML5.',
  ],
  focusAreas: [
    {
      id: 'focus-quant-modeling',
      title: 'Quantitative Systems & Market Modeling',
      domain: 'Quantitative Finance',
      description:
        'Engineering end-to-end prediction pipelines, fractional differencing memory preservation, and walk-forward backtesting frameworks.',
      canonicalHref: '/research/market-regimes',
      evidenceType: 'research',
      keyTechnologies: ['Python', 'PyTorch', 'NumPy', 'Pandas', 'Scikit-Learn'],
    },
    {
      id: 'focus-agentic-intelligence',
      title: 'Multi-Agent Orchestration & Deterministic Guardrails',
      domain: 'Artificial Intelligence',
      description:
        'Architecting bounded execution graphs, Pydantic runtime schema validation, and autonomous multi-agent lead enrichment pipelines.',
      canonicalHref: '/work/multi-agent-prospect-intelligence',
      evidenceType: 'project',
      keyTechnologies: ['LangGraph', 'TypeScript', 'Pydantic', 'FastAPI'],
    },
    {
      id: 'focus-distributed-web',
      title: 'Distributed Web & Healthcare Operations Software',
      domain: 'Full-Stack Systems',
      description:
        'Designing multi-tenant hospital management systems, transactional billing pipelines, and accessible static-first web applications.',
      canonicalHref: '/work/curasphere-hms',
      evidenceType: 'project',
      keyTechnologies: ['Next.js', 'React', 'PostgreSQL', 'TypeScript', 'Astro'],
    },
    {
      id: 'focus-lab-benchmarks',
      title: 'Empirical Lab Benchmarking & Algorithmic Tools',
      domain: 'Applied Research',
      description:
        'Developing standalone CLI utilities, low-latency Server-Sent Events orderbooks, and HMM regime stability probes.',
      canonicalHref: '/lab',
      evidenceType: 'lab',
      keyTechnologies: ['Python CLI', 'SSE', 'HMM', 'CSS Subgrid'],
    },
  ],
  principles: [
    {
      number: '01',
      title: 'Verifiable Evidence Over Abstract Claims',
      summary:
        'Working code, public GitHub repositories, reproducible pipelines, and verified deployments speak louder than inflated buzzwords. Every project on this platform represents actual software with source code.',
      application:
        'All projects and research inquiries link directly to verifiable repositories and public deployment evidence.',
    },
    {
      number: '02',
      title: 'Production-Minded Modeling',
      summary:
        'A statistical model is only as valuable as its stability in production. I build research algorithms with expanding walk-forward cross-validation, zero lookahead leakage, and strict latency budgets.',
      application:
        'Research workflows enforce temporal purges and stationarity statistical tests (ADF/KPSS) before neural network training.',
    },
    {
      number: '03',
      title: 'Deterministic Guardrails Over Open-Ended Chaos',
      summary:
        'Autonomous agent systems require bounded state machines, immutable schema validation, and structured fallbacks to prevent non-deterministic failure modes and hallucinations.',
      application:
        'Multi-agent workflows are constrained by finite state machines and strict Pydantic parsing contracts.',
    },
    {
      number: '04',
      title: 'Full-Stack Architectural Ownership',
      summary:
        'Understanding the complete stack—from deep learning tensor pipelines down to DOM rendering performance and semantic accessibility—enables cohesive, lean architectures with zero bloat.',
      application:
        'Designing unified systems spanning database query plans, asynchronous event loops, and accessible UI components.',
    },
  ],
  education: [
    {
      institution: 'Institute of Management Sciences (IMSciences)',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'Peshawar, Pakistan',
      period: '2021 – 2025',
      focus: [
        'Quantitative Systems & Financial Engineering',
        'Machine Learning & Deep Neural Networks',
        'Data Structures & Algorithm Design',
        'Distributed Database Systems & Web Technologies',
      ],
    },
  ],
  collaborationInterests: [
    {
      id: 'collab-quant-ai',
      area: 'Quantitative & ML Systems',
      roleType: 'Full-Time / Research Collaboration',
      description:
        'Designing predictive feature pipelines, time-series forecasting models, market regime classification engines, and backtesting systems.',
    },
    {
      id: 'collab-fullstack-systems',
      area: 'Full-Stack & Distributed Platforms',
      roleType: 'Engineering Roles / Product Development',
      description:
        'Architecting high-throughput microservices, multi-tenant software platforms, and data-intensive Next.js / TypeScript web applications.',
    },
    {
      id: 'collab-agentic-intelligence',
      area: 'Multi-Agent AI & Workflows',
      roleType: 'Systems Architecture & Implementation',
      description:
        'Building deterministic multi-agent state machines, automated data extraction workflows, and LLM guardrail architectures.',
    },
  ],
  socialLinks: {
    github: 'https://github.com/UzairAhmad88',
    linkedin: 'https://www.linkedin.com/in/uzair-ahmad-58007a266/',
    email: 'imuzairahmad8@gmail.com',
    whatsapp: 'https://wa.me/923103148117',
  },
};
