import type { CollaborationProfile } from '../types/collaboration.ts';

export const collaborationProfile: CollaborationProfile = {
  title: 'Engineering Collaboration & Technical Opportunities',
  eyebrow: 'COLLABORATION & ENGAGEMENT // EVIDENCE-DRIVEN',
  introduction:
    'I collaborate with technical teams, founders, and research groups on systems where engineering rigor, mathematical modeling, and production stability matter. Rather than offering generic agency services, I engage deeply on specific technical challenges across quantitative systems, multi-agent AI, and data-intensive web platforms.',
  positioningStatement:
    'Problem-first, evidence-grounded engineering. I am most interested in projects where understanding the underlying system mechanics—from statistical non-stationarity to API contracts and state machine invariants—is central to building it.',
  areas: [
    {
      id: 'area-quant-systems',
      title: 'Quantitative Systems & Financial Engineering',
      domain: 'Quantitative Finance & Statistical ML',
      shortExplanation:
        'Designing end-to-end time-series forecasting pipelines, memory-preserving fractional differentiation transforms, and walk-forward backtest frameworks.',
      relevantProblems: [
        'Non-stationary signal processing and memory preservation (ADF/KPSS verified)',
        'Unsupervised regime classification with deterministic variance anchoring',
        'Leakage-free walk-forward cross-validation and risk metric evaluation',
        'Streaming tick/bar data ingestion and low-latency feature extraction',
      ],
      projectSlugs: ['deep-learning-stock-return-prediction', 'market-regime-engine'],
      researchSlugs: ['signal-research', 'market-regimes'],
      labSlugs: ['fractional-diff-cli', 'gmm-regime-stability-probe', 'streaming-orderbook-sse'],
      technologyIds: ['python', 'pytorch', 'pandas', 'numpy', 'scikit-learn'],
      potentialCollaboration:
        'Architecting predictive feature stores, building backtesting risk engines, or engineering time-series ML models with strict stationarity guardrails.',
    },
    {
      id: 'area-multi-agent-ai',
      title: 'Multi-Agent AI & Deterministic Workflows',
      domain: 'Artificial Intelligence & Systems Architecture',
      shortExplanation:
        'Architecting bounded execution graphs, Pydantic type-guarded state transitions, and structured autonomous multi-agent pipelines that avoid stochastic failure loops.',
      relevantProblems: [
        'Eliminating infinite hallucination/critique loops in autonomous agent swarms',
        'Enforcing immutable Pydantic schema validation at every graph transition edge',
        'Automating structured data extraction, enrichment, and cross-citation synthesis',
        'Designing deterministic fallback and escalation pathways for LLM tool calling',
      ],
      projectSlugs: ['multi-agent-prospect-intelligence'],
      researchSlugs: ['agentic-systems'],
      labSlugs: ['multi-agent-pydantic-state-machine'],
      technologyIds: ['langgraph', 'fastapi', 'pydantic', 'typescript', 'python'],
      potentialCollaboration:
        'Designing production-grade multi-agent workflows, tool-calling pipelines, or deterministic guardrail architectures for complex data ingestion.',
    },
    {
      id: 'area-distributed-web',
      title: 'Distributed Web & Operations Platforms',
      domain: 'Full-Stack Software Engineering',
      shortExplanation:
        'Building multi-tenant enterprise platforms, transactional billing architectures, and accessible, high-performance web applications with zero layout shift.',
      relevantProblems: [
        'Multi-tenant relational database schemas and asynchronous session lifecycles',
        'Deterministic state management across complex role-based operational workflows',
        'WCAG 2.2 AA accessibility, Zero-CLS design tokens, and subgrid alignment',
        'High-performance static-first rendering (SSG) with progressive client enhancement',
      ],
      projectSlugs: ['curasphere-hms'],
      researchSlugs: [],
      labSlugs: ['css-subgrid-editorial-alignment'],
      technologyIds: ['react', 'typescript', 'postgresql', 'astro', 'tailwindcss', 'html5-css3'],
      potentialCollaboration:
        'Full-stack engineering for data-dense operational web apps, complex dashboard interfaces, or scalable Next.js/PostgreSQL platforms.',
    },
    {
      id: 'area-prototyping-lab',
      title: 'Technical Prototyping & Lab Benchmarks',
      domain: 'Applied Research & 0-to-1 Systems',
      shortExplanation:
        'Engineering focused proof-of-concept tools, CLI utilities, and empirical benchmarks to de-risk architectural decisions before full-scale deployment.',
      relevantProblems: [
        'Evaluating algorithmic feasibility through isolated CLI instruments',
        'Benchmarking low-latency streaming protocols (SSE vs. WebSockets)',
        'Testing optimization stability and convergence under edge constraints',
        'Validating mathematical proofs and empirical assumptions on real datasets',
      ],
      projectSlugs: ['market-regime-engine', 'deep-learning-stock-return-prediction'],
      researchSlugs: ['signal-research'],
      labSlugs: ['fractional-diff-cli', 'streaming-orderbook-sse', 'stochastic-volatility-heston-calibration'],
      technologyIds: ['python', 'numpy', 'scikit-learn', 'astro'],
      potentialCollaboration:
        'Rapid, disciplined 0-to-1 prototype engineering to stress-test technical hypotheses, data pipelines, or algorithmic assumptions.',
    },
  ],
  engagementTypes: [
    {
      id: 'eng-systems-engineering',
      title: 'Technical Systems Engineering & Full-Stack Products',
      category: 'project',
      description:
        'End-to-end engineering of production software, data-intensive web applications, and backend services with typed APIs, clean database migrations, and rigorous testing.',
      suitableFor: [
        'Multi-tenant SaaS & operational management platforms',
        'High-performance TypeScript / React / Next.js web applications',
        'FastAPI & asynchronous Python backend microservices',
        'Database architecture and PostgreSQL schema optimization',
      ],
      evidenceSlugs: [
        { type: 'project', slug: 'curasphere-hms', label: 'CuraSphere HMS' },
        { type: 'project', slug: 'multi-agent-prospect-intelligence', label: 'Prospect Intelligence' },
      ],
      contactType: 'project',
      ctaLabel: 'Discuss a Systems Project',
    },
    {
      id: 'eng-quant-research',
      title: 'Applied Research & Quantitative Modeling',
      category: 'research',
      description:
        'Collaborative research, feature engineering, and statistical modeling on time-series datasets, volatility regimes, or non-stationary signal processing.',
      suitableFor: [
        'Empirical time-series forecasting & feature engineering',
        'Market regime classification and variance stability analysis',
        'Deep learning architecture design (LSTM, GRU, Hybrid)',
        'Backtesting framework design and lookahead leakage prevention',
      ],
      evidenceSlugs: [
        { type: 'project', slug: 'deep-learning-stock-return-prediction', label: 'Stock Return Prediction' },
        { type: 'research', slug: 'market-regimes', label: 'Market Regimes Inquiry' },
      ],
      contactType: 'research',
      ctaLabel: 'Explore Research Collaboration',
    },
    {
      id: 'eng-mvp-prototyping',
      title: '0-to-1 Technical MVP & Architecture Prototyping',
      category: 'project',
      description:
        'Disciplined, rapid construction of working technical proof-of-concepts, isolated algorithmic tools, or architectural prototypes to validate viability before scale.',
      suitableFor: [
        'Early-stage founders validating complex technical mechanics',
        'Isolated CLI utilities for data transformation & analysis',
        'Multi-agent proof-of-concept workflows with bounded state',
        'Benchmarking latency, concurrency, and memory consumption',
      ],
      evidenceSlugs: [
        { type: 'project', slug: 'market-regime-engine', label: 'Market Regime Engine' },
        { type: 'lab', slug: 'fractional-diff-cli', label: 'Fractional Diff CLI' },
      ],
      contactType: 'project',
      ctaLabel: 'Scope a Prototype',
    },
    {
      id: 'eng-technical-consulting',
      title: 'Architecture Review & Technical Exploration',
      category: 'consulting',
      description:
        'In-depth review of existing system architectures, model validation protocols, API contracts, or accessibility and frontend performance audits.',
      suitableFor: [
        'Reviewing ML data pipelines for temporal lookahead leakage',
        'State machine design for deterministic agent orchestration',
        'Web performance auditing (Zero-CLS, SSG token optimization)',
        'Accessibility compliance (WCAG 2.2 AA verification)',
      ],
      evidenceSlugs: [
        { type: 'research', slug: 'agentic-systems', label: 'Agentic Systems Inquiry' },
        { type: 'lab', slug: 'css-subgrid-editorial-alignment', label: 'CSS Subgrid Alignment' },
      ],
      contactType: 'consulting',
      ctaLabel: 'Request Architecture Review',
    },
  ],
  preferredProblems: [
    'Problems with clear mathematical, statistical, or architectural constraints rather than ambiguous open-ended specs.',
    'Systems where data integrity, temporal ordering, or type validation directly affects production outcomes.',
    'Projects where clean software craftsmanship (reproducibility, typed contracts, modular architecture) is valued.',
    'Technical challenges that benefit from empirical experimentation, prototyping, and measurable benchmarks.',
    'Web products that demand genuine accessibility, zero layout shift, and high-performance rendering.',
  ],
  nonGoals: [
    'Generic marketing websites, brochure pages, or cosmetic theme re-skins without technical depth.',
    'Unconstrained AI hype projects with no interest in guardrails, evaluation metrics, or ground truth.',
    'Fixed-scope work with undefined problem statements and unsupported domain requirements.',
    'Projects requiring opaque proprietary platforms rather than clean, open, maintainable code.',
  ],
  process: [
    {
      step: '01',
      title: 'Understand',
      summary:
        'Deep inquiry into the problem context, technical constraints, existing codebases, and domain invariants before proposing solutions.',
      principle: 'Diagnosis precedes prescription. Every system is constrained by its operational context.',
    },
    {
      step: '02',
      title: 'Define',
      summary:
        'Formalizing explicit data schemas, API contracts, success metrics, and architectural boundaries to eliminate ambiguity early.',
      principle: 'Strong typing and explicit boundaries prevent costly downstream rework.',
    },
    {
      step: '03',
      title: 'Explore',
      summary:
        'Prototyping critical algorithmic mechanics, evaluating stationarity/latency trade-offs, and testing edge hypotheses in isolation.',
      principle: 'Isolated experiments de-risk core assumptions before committing to full build cycles.',
    },
    {
      step: '04',
      title: 'Build',
      summary:
        'Engineering clean, modular, and type-safe software with comprehensive error boundaries, asynchronous safety, and documented interfaces.',
      principle: 'Production software must be maintainable, legible, and verifiable by other engineers.',
    },
    {
      step: '05',
      title: 'Validate',
      summary:
        'Rigorous testing spanning walk-forward validation, deterministic replay, accessibility audits, and cross-browser responsive checks.',
      principle: 'Verifiable evidence over assumptions. Systems must pass empirical stress tests.',
    },
    {
      step: '06',
      title: 'Iterate',
      summary:
        'Refining and optimizing based on observable telemetry, user feedback, and measurable performance benchmarks.',
      principle: 'Software evolves through measured observations and continuous hardening.',
    },
  ],
  briefQuestions: [
    {
      number: '01',
      prompt: 'What core technical problem or system need are you solving?',
      guidance: 'Describe the functional bottleneck, modeling challenge, or product requirement in concrete technical terms.',
      example: 'e.g. "We need to ingest non-stationary sensor feeds and train a multi-horizon forecasting model without lookahead bias."',
    },
    {
      number: '02',
      prompt: 'What exists today (code, data, architecture, or research)?',
      guidance: 'Outline existing repositories, data availability, legacy constraints, or preliminary experiments.',
      example: 'e.g. "We have 3 years of clean tick data in PostgreSQL and a legacy Python script that overfits in backtesting."',
    },
    {
      number: '03',
      prompt: 'What technical constraints matter most?',
      guidance: 'Highlight latency requirements, throughput goals, compliance standards, tech stack preferences, or compute limits.',
      example: 'e.g. "Inference latency must remain under 100ms on CPU, and the frontend must adhere to WCAG 2.2 AA standards."',
    },
    {
      number: '04',
      prompt: 'What does a successful, observable outcome look like?',
      guidance: 'Define the target deliverable, whether it is a working MVP, a validated model backtest, a microservice, or a report.',
      example: 'e.g. "A fully tested FastAPI service with a walk-forward validation notebook and reproducible Docker setup."',
    },
  ],
  availability: {
    state: 'selective',
    badgeLabel: 'Selectively Available',
    note: 'Selectively open for high-impact technical roles, quantitative systems projects, and applied research collaborations.',
    updatedAt: '2026-10-01',
  },
  contactGuidance: [
    'Include your project context, timeline, and primary technical constraints.',
    'Reference any specific projects, research inquiries, or lab experiments from this platform that align with your needs.',
    'Direct emails and structured messages receive thoughtful, technical responses within 24–48 hours.',
  ],
  updatedAt: '2026-10-01',
};
