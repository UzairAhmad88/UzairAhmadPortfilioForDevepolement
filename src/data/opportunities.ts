import type { ProfessionalOpportunity } from '@/types/opportunity';

export const professionalOpportunities: ProfessionalOpportunity[] = [
  {
    id: 'full-stack-eng',
    slug: 'full-stack-engineering',
    title: 'Full-Stack Web Architecture & Development',
    category: 'project',
    description:
      'Engineering robust web platforms, APIs, and accessible component architectures with TypeScript, Astro, React, Node.js, and Python.',
    suitableFor: ['Founders', 'Product Teams', 'Startups'],
    capabilities: [
      'Accessible UI/UX Design Systems',
      'RESTful & GraphQL API Engineering',
      'Database Schema Design & Optimization',
      'High-Performance Static & SSR Applications',
    ],
    relatedProjects: ['curasphere-hms', 'rafaqatbaber-co', 'healix-platform'],
    expectations: [
      'Clear project brief and target requirements',
      'Defined milestone timelines and deliverables',
      'Collaborative async feedback loop',
    ],
    ctaLabel: 'Discuss a Web Project',
    ctaHref: '/contact?type=project',
  },
  {
    id: 'applied-ai-systems',
    slug: 'applied-ai-systems',
    title: 'Applied AI & Multi-Agent State Graph Workflows',
    category: 'consulting',
    description:
      'Architecting deterministic multi-agent state machines, structured schema validation pipelines, and LLM automation with robust guardrails.',
    suitableFor: ['AI Startups', 'Enterprise Teams', 'Technical Leaders'],
    capabilities: [
      'LangGraph Directed State Graph Orchestration',
      'Pydantic & JSON Schema Deterministic Validation',
      'Multi-Agent Tool Integration & Dispatching',
      'Zero-Hallucination Pipeline Design',
    ],
    relatedProjects: ['multi-agent-prospect-intelligence'],
    relatedResearch: ['agentic-systems'],
    expectations: [
      'Problem specification and data format boundaries',
      'Evaluation criteria for agent accuracy and speed',
    ],
    ctaLabel: 'Discuss AI Architecture',
    ctaHref: '/contact?type=consulting',
  },
  {
    id: 'quant-research-collab',
    slug: 'quantitative-research-collaboration',
    title: 'Quantitative Finance & Time-Series Research',
    category: 'research',
    description:
      'Empirical inquiry into fractional differentiation, statistical stationarity testing, and latent volatility regime detection for time-series modeling.',
    suitableFor: ['Researchers', 'Quantitative Developers', 'Academics'],
    capabilities: [
      'Fractional Differencing Memory Preservation',
      'Gaussian Mixture Model Regime Classification',
      'Walk-Forward Temporal Cross-Validation',
      'Statistical Hypothesis Testing (ADF / KPSS)',
    ],
    relatedProjects: ['deep-learning-stock-return-prediction', 'market-regime-engine'],
    relatedResearch: ['signal-research', 'market-regimes'],
    expectations: [
      'Explicit mathematical or algorithmic hypothesis',
      'Open-source or verifiable empirical data source',
    ],
    ctaLabel: 'Propose Research Collaboration',
    ctaHref: '/contact?type=research',
  },
  {
    id: 'fulltime-engineering-role',
    slug: 'fulltime-engineering-role',
    title: 'Full-Time Engineering & Quantitative Roles',
    category: 'employment',
    description:
      'Open to high-impact technical roles across Quantitative Development, Applied AI / Machine Learning, and Full-Stack Software Engineering.',
    suitableFor: ['Hiring Managers', 'Technical Recruiters', 'Engineering Directors'],
    capabilities: [
      'Clean Code & Strict TypeScript / Python Typing',
      'Microservice & REST API Systems Design',
      'Continuous Integration, Docker & Automated Testing',
      'Empirical Mathematical & Algorithmic Problem Solving',
    ],
    relatedProjects: [
      'deep-learning-stock-return-prediction',
      'multi-agent-prospect-intelligence',
      'curasphere-hms',
    ],
    expectations: [
      'Defined role scope and core technical stack',
      'Compensation range and remote / location parameters',
    ],
    ctaLabel: 'Discuss an Engineering Role',
    ctaHref: '/contact?type=employment',
  },
];
