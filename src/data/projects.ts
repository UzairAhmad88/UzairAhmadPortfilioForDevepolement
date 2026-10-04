import type { Project } from '@/types/project';

export const featuredProject: Project = {
  id: 'quant-research-dashboard',
  slug: 'quant-research-portfolio-dashboard',
  title: 'Quant Research & Portfolio Dashboard',
  shortDescription: 'Interactive quantitative research platform for portfolio analytics, factor models, and backtest visualization.',
  category: ['quant', 'engineering', 'product'],
  projectType: 'Quantitative Research Platform',
  domain: 'Quantitative Finance',
  type: 'Product',
  status: 'active',
  presentationLevel: 'A',
  problem: 'Quantitative researchers and portfolio managers need a unified interface to analyze multi-asset returns, calculate risk factors (Sharpe, Sortino, VaR), and inspect historical backtest trajectories without switching between disconnected scripts.',
  solution: 'Engineered an interactive quantitative analytics platform in Python and React that connects factor calculation pipelines, portfolio optimization routines, and real-time visualization dashboards.',
  system: 'Modular data pipeline and analytics engine computing factor loadings, portfolio frontiers, and drawdown distributions with sub-second dashboard rendering.',
  product: 'Full-stack quantitative research dashboard providing interactive asset allocation, factor sensitivity curves, and risk decomposition metrics.',
  outcome: 'Delivered an extensible quantitative research tool streamlining portfolio risk assessment and strategy evaluation.',
  featured: true,
  featuredSubheading: 'Featured Quantitative System',
  isLatest: true,
  publishedAt: '2024-11-01',
  updatedAt: '2025-02-15',
  archive: {
    state: 'active',
    originalYear: '2024',
  },
  source: 'github+vercel',
  githubUrl: 'https://github.com/UzairAhmad88/Quant-Research---Portfolio-Dashboard',
  githubRepo: 'UzairAhmad88/Quant-Research---Portfolio-Dashboard',
  vercelUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
  liveUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
  repositoryStatus: 'public',
  deploymentStatus: 'production',
  repositoryUpdatedAt: '2025-02-15T12:00:00Z',
  technologies: ['Python', 'TypeScript', 'React', 'FastAPI', 'Pandas', 'NumPy'],
  tools: ['Git', 'REST APIs', 'Vercel'],
  role: 'Lead Quantitative & Full-Stack Developer',
  team: 'Individual Project',
  timeline: '2024 – Present',
  context: 'Personal Engineering',
  deployment: 'Vercel (Frontend) + Python Engine',
  order: 1,
  relatedProjects: ['deep-learning-stock-return-prediction', 'market-regime-engine'],
  relatedResearch: ['signal-research', 'market-regimes'],
  caseStudy: {
    overview: 'A full-stack quantitative research and portfolio analytics dashboard designed to compute risk factors, optimal asset weightings, and backtest telemetry with real-time interactive charts.',
    context: 'Quantitative workflows frequently require bridging statistical Python libraries with accessible web interfaces for exploratory strategy analysis.',
    objectives: [
      'Calculate historical risk statistics including Sharpe Ratio, Sortino Ratio, Maximum Drawdown, and Value at Risk (VaR).',
      'Implement Markowitz mean-variance optimization and risk-parity asset allocation models.',
      'Provide interactive visual charting for return distributions and rolling drawdown curves.'
    ],
    role: 'Sole Architect & Developer — Responsible for statistical models, API services, and React dashboard engineering.',
    team: 'Individual Project',
    timeline: 'Active Development (2024–Present)',
    approach: 'Built a decoupled architecture with a Python statistical computation engine and a lightweight React frontend communicating over optimized JSON endpoints.',
    architectureDiagram: `┌───────────────────────┐      ┌─────────────────────────┐      ┌───────────────────────┐
│ React / TS Dashboard  │◄────►│ FastAPI Analytics Core  │◄────►│ Financial Data Store  │
│ (Interactive Charts)  │      │ (Risk Factors / Frontiers)│      │ (OHLCV & Portfolios)  │
└───────────────────────┘      └─────────────────────────┘      └───────────────────────┘`,
    keyDecisions: [
      {
        decision: 'Decoupled Python Analytics Microservice',
        rationale: 'Heavy matrix calculations and portfolio optimization routines execute in NumPy/Python rather than blocking the Node.js or browser UI thread.',
        tradeoffs: 'Introduces a lightweight HTTP API contract between the client dashboard and analytics server.'
      }
    ],
    results: [
      {
        status: 'Implemented',
        description: 'Production-ready dashboard supporting multi-asset portfolio input, risk factor breakdown, and backtest curves.'
      }
    ],
    outcomes: [
      'Public GitHub repository with verified Vercel web deployment.',
      'Modular factor computation engine capable of evaluating custom portfolio weight configurations.'
    ],
    lessonsLearned: [
      'Pre-computing rolling statistical metrics on the backend substantially reduces client UI latency during multi-asset backtest playback.'
    ]
  }
};

export const fypProject: Project = {
  id: 'multi-agent-prospect-intelligence',
  slug: 'multi-agent-prospect-intelligence',
  title: 'Multi-Agent Decision Support for Prospect Intelligence',
  shortDescription: 'Final Year Project (FYP): Autonomous multi-agent AI system for prospect research, lead qualification, and retention decision support.',
  category: ['ai', 'engineering', 'product'],
  projectType: 'Final Year Project (FYP) & AI System',
  domain: 'Multi-Agent Intelligence',
  type: 'Academic',
  status: 'academic',
  presentationLevel: 'A',
  problem: 'B2B client acquisition and retention workflows suffer from manual prospect research, fragmented intelligence across disparate web sources, and lack of automated decision support for high-priority lead scoring.',
  solution: 'Architected a multi-agent decision support system utilizing collaborative LLM agents with deterministic guardrails to autonomously discover prospect data, evaluate acquisition readiness, and recommend targeted retention actions.',
  system: 'Hierarchical agent architecture with orchestrator, web research agent, intelligence synthesis agent, and decision recommendation scoring engine.',
  product: 'Interactive decision support dashboard providing structured prospect profiles, retention risk alerts, and automated briefing reports.',
  outcome: 'Developed a working multi-agent prototype with verified task decomposition, automated data extraction, and structured JSON output contracts.',
  featured: true,
  featuredSubheading: 'Academic Final Year Project (FYP)',
  isLatest: true,
  publishedAt: '2024-11-01',
  updatedAt: '2025-02-15',
  archive: {
    state: 'active',
    reason: 'ACADEMIC_HISTORY',
    originalYear: '2024',
  },
  source: 'github',
  githubUrl: 'https://github.com/UzairAhmad88/Multi-Modal-Quantitative-AI-Development',
  githubRepo: 'UzairAhmad88/Multi-Modal-Quantitative-AI-Development',
  repositoryStatus: 'public',
  deploymentStatus: 'preview',
  repositoryUpdatedAt: '2025-02-15T10:00:00Z',
  technologies: ['Python', 'TypeScript', 'Multi-Agent AI', 'LangGraph', 'FastAPI', 'React'],
  tools: ['Git', 'REST APIs', 'JSON Schema'],
  role: 'Lead Architect & AI Systems Engineer',
  team: 'Academic Team Project (FYP)',
  timeline: '2024 – 2025',
  context: 'Academic (FYP)',
  deployment: 'Python / LangGraph Agent Runtime',
  order: 2,
  relatedProjects: ['curasphere-hms', 'deep-learning-stock-return-prediction'],
  relatedResearch: ['agentic-systems'],
  caseStudy: {
    overview: 'A Final Year Project (FYP) exploring collaborative multi-agent architectures to streamline business prospect research, automated data synthesis, and client retention decision support.',
    context: 'Traditional CRM systems store static data but lack active intelligence. Sales and customer success teams spend hours conducting manual online research to qualify leads and detect churn signals.',
    objectives: [
      'Design a multi-agent orchestration graph with distinct specialist agents (Research, Enrichment, Scoring, Recommendation).',
      'Implement deterministic validation guardrails to prevent agent hallucination in prospect data extraction.',
      'Provide actionable retention risk scoring and automated briefing generation.'
    ],
    role: 'Lead Systems Architect & Core Developer. Responsible for agent workflow graphs, state management, API endpoints, and decision logic.',
    team: 'Academic Final Year Project Team',
    timeline: 'Final Year Project (2024–2025)',
    approach: 'Employed a directed state graph where an Orchestrator agent breaks down research goals, dispatches sub-tasks to specialized worker agents, validates JSON schema responses, and aggregates findings into a unified decision matrix.',
    architectureDiagram: `┌────────────────────┐      ┌─────────────────────────┐      ┌───────────────────────┐
│ User Query /       │─────►│ Orchestrator Agent      │─────►│ Worker Agent Graph    │
│ Target Domain      │      │ (State Graph / Router)  │      │ (Research/Scoring)    │
└────────────────────┘      └─────────────────────────┘      └───────────┬───────────┘
                                                                         │
                            ┌─────────────────────────┐                  ▼
                            │ Decision Briefing UI    │◄─────┌───────────────────────┐
                            │ (Profiles & Actions)    │      │ Guardrail Validator   │
                            └─────────────────────────┘      │ (JSON Schema / State) │
                                                             └───────────────────────┘`,
    results: [
      {
        status: 'Implemented',
        description: 'Functional multi-agent prototype with automated prospect research, scoring, and dashboard presentation.'
      }
    ],
    outcomes: [
      'Successfully demonstrated automated multi-agent research pipeline for prospect intelligence.',
      'Structured academic deliverable satisfying university FYP technical requirements.'
    ],
    lessonsLearned: [
      'Multi-agent systems require rigorous deterministic boundaries and schema validation to be viable in business decision contexts.'
    ]
  }
};

export const projects: Project[] = [
  featuredProject,
  fypProject,
  {
    id: 'rafaqatbaber-co',
    slug: 'rafaqatbaber-co',
    title: 'RafaqatBaber & Co Web Platform',
    shortDescription: 'Professional corporate digital platform engineered for Rafaqat Baber & Co chartered accountancy and advisory firm.',
    category: ['engineering', 'product'],
    projectType: 'Client & Real-World Platform',
    domain: 'Full-Stack Engineering',
    type: 'Product',
    status: 'completed',
    presentationLevel: 'A',
    problem: 'An established accounting, auditing, and corporate advisory firm required a modern, highly credible digital presence to present their service portfolio, partner credentials, and client advisory intake.',
    solution: 'Engineered a modern, responsive corporate web platform featuring accessible service catalogs, practice area overviews, partner directories, and secure client inquiry channels.',
    product: 'Responsive corporate web application with high-contrast editorial typography, fast load times, and mobile-optimized inquiry forms.',
    system: 'Clean component-based frontend architecture with semantic HTML5, zero layout shift, and search-engine optimized metadata.',
    outcome: 'Delivered a verified production website establishing digital presence for the professional services firm.',
    featured: true,
    featuredSubheading: 'Client & Real-World Platform',
    publishedAt: '2024-08-15',
    updatedAt: '2024-12-20',
    archive: {
      state: 'active',
      originalYear: '2024',
    },
    source: 'github+vercel',
    githubUrl: 'https://github.com/UzairAhmad88/RafaqatBaber---Co',
    githubRepo: 'UzairAhmad88/RafaqatBaber---Co',
    vercelUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
    liveUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
    repositoryStatus: 'public',
    deploymentStatus: 'production',
    repositoryUpdatedAt: '2024-12-20T14:00:00Z',
    technologies: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design'],
    tools: ['Git', 'Vercel', 'Figma'],
    role: 'Lead Web Engineer & Designer',
    team: 'Client Project',
    timeline: 'Completed Client Engagement',
    context: 'Client Platform',
    deployment: 'Vercel (Production)',
    order: 3,
    relatedProjects: ['healix-platform', 'curasphere-hms'],
    caseStudy: {
      overview: 'A bespoke corporate web platform developed for Rafaqat Baber & Co, highlighting professional audit services, tax advisory capabilities, and regulatory compliance expertise.',
      context: 'Professional accounting and financial advisory firms require high trust, clean editorial design, and seamless accessibility across client devices.',
      objectives: [
        'Design a refined, professional visual identity reflecting financial advisory credibility.',
        'Implement responsive service matrices and partner credential showcases.',
        'Ensure zero layout shift, rapid page load times, and accessible contact intake.'
      ],
      role: 'Full-Stack Engineer & UI Designer — Responsible for architecture, component implementation, typography, and production deployment.',
      team: 'Client Engagement',
      timeline: 'Completed (2024)',
      results: [
        {
          status: 'Implemented',
          description: 'Deployed corporate web platform with full service navigation, team directory, and client inquiry forms.'
        }
      ],
      outcomes: [
        'Verified live deployment on Vercel with clean public GitHub codebase.',
        'Mobile-friendly responsive performance with 100% semantic HTML compliance.'
      ],
      lessonsLearned: [
        'Professional services platforms demand clear visual hierarchy and generous whitespace to build client confidence.'
      ]
    }
  },
  {
    id: 'healix-platform',
    slug: 'healix-platform',
    title: 'HEALIX Healthcare Management Platform',
    shortDescription: 'Modern digital healthcare portal for patient appointment management, clinician scheduling, and medical records.',
    category: ['engineering', 'product'],
    projectType: 'Healthcare Web Platform',
    domain: 'Full-Stack Engineering',
    type: 'Product',
    status: 'completed',
    presentationLevel: 'A',
    problem: 'Healthcare clinics require an intuitive, accessible web platform for patients to discover medical specialists, schedule consultations, and access care information without friction.',
    solution: 'Built a clean, accessible healthcare platform with department categorization, doctor profiles, appointment scheduling flows, and patient resource portals.',
    product: 'Responsive healthcare web application designed with high accessibility, clear appointment pathways, and fast page loads.',
    system: 'Component-driven frontend architecture with accessible form validation and role-oriented patient navigation.',
    outcome: 'Shipped an intuitive healthcare web application improving patient discovery and appointment booking ergonomics.',
    featured: true,
    featuredSubheading: 'Featured Healthcare Application',
    publishedAt: '2024-07-10',
    updatedAt: '2024-11-30',
    archive: {
      state: 'active',
      originalYear: '2024',
    },
    source: 'github+vercel',
    githubUrl: 'https://github.com/UzairAhmad88/HEALIX-By-Uzaii-',
    githubRepo: 'UzairAhmad88/HEALIX-By-Uzaii-',
    vercelUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
    liveUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
    repositoryStatus: 'public',
    deploymentStatus: 'production',
    repositoryUpdatedAt: '2024-11-30T16:00:00Z',
    technologies: ['React', 'TypeScript', 'CSS3', 'Node.js', 'REST APIs'],
    tools: ['Git', 'Vercel', 'Postman'],
    role: 'Full-Stack Developer',
    team: 'Individual Project',
    timeline: 'Completed',
    context: 'Personal Engineering',
    deployment: 'Vercel (Production)',
    order: 4,
    relatedProjects: ['curasphere-hms', 'rafaqatbaber-co'],
    caseStudy: {
      overview: 'HEALIX is a modern healthcare web platform engineered to simplify clinical consultation discovery, patient intake, and specialist appointment scheduling.',
      context: 'Patient-facing healthcare software requires immediate clarity, high contrast readability, and intuitive form design to support diverse patient demographics.',
      objectives: [
        'Build an accessible, mobile-first appointment booking interface.',
        'Implement structured doctor and department directories with instant filtering.',
        'Maintain zero layout shift and sub-second page rendering.'
      ],
      role: 'Full-Stack Web Engineer.',
      team: 'Individual Project',
      timeline: 'Completed (2024)',
      results: [
        {
          status: 'Implemented',
          description: 'Deployed web application with interactive doctor profiles, department catalogs, and appointment booking forms.'
        }
      ],
      outcomes: [
        'Live production deployment on Vercel backed by public GitHub repository.',
        'Accessible, high-contrast healthcare UI tested across desktop and mobile devices.'
      ],
      lessonsLearned: [
        'In healthcare UX, reducing form complexity and validating inputs progressively prevents patient booking drop-off.'
      ]
    }
  },
  {
    id: 'stock-return-prediction',
    slug: 'deep-learning-stock-return-prediction',
    title: 'Deep Learning Stock Return Prediction',
    shortDescription: 'Multi-horizon quantitative trading and return forecasting pipeline built in PyTorch.',
    category: ['quant', 'ai', 'product'],
    projectType: 'Quantitative Research & System',
    domain: 'Quantitative Finance',
    type: 'Research',
    status: 'active',
    presentationLevel: 'A',
    problem: 'Financial asset returns exhibit extreme non-stationarity, regime-dependent variance, and very low signal-to-noise ratios, causing naive linear models to overfit noise while collapsing out-of-sample.',
    solution: 'Engineered an end-to-end quantitative forecasting pipeline in Python and PyTorch that ingests multi-asset price histories, extracts stationarized statistical features, trains deep neural architectures, and performs walk-forward backtest risk evaluation.',
    system: 'End-to-end quantitative pipeline encompassing market data ingestion, stationarized feature engineering, neural network training, return forecasting, and backtest risk evaluation.',
    product: 'Modular Python quantitative trading framework with reusable components for feature calculation, model training, and out-of-sample signal analysis.',
    outcome: 'Engineered an extensible deep learning research platform with verifiable out-of-sample backtesting metrics, directional accuracy metrics, and walk-forward cross-validation.',
    featured: true,
    featuredSubheading: 'Quantitative Research & Deep Learning',
    isLatest: true,
    publishedAt: '2024-09-01',
    updatedAt: '2025-01-15',
    archive: {
      state: 'active',
      originalYear: '2024',
    },
    source: 'github',
    githubUrl: 'https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    githubRepo: 'UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    repositoryStatus: 'public',
    deploymentStatus: 'not_deployed',
    repositoryUpdatedAt: '2025-01-15T18:30:00Z',
    technologies: ['Python', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
    tools: ['Jupyter', 'Git', 'CUDA'],
    role: 'Lead Quantitative AI Engineer',
    team: 'Individual Research Project',
    timeline: '2024 – Present',
    context: 'Independent Research',
    deployment: 'Local Research / GPU (CUDA)',
    order: 5,
    relatedProjects: ['market-regime-engine', 'news-market-trading-signal'],
    relatedResearch: ['signal-research', 'market-regimes'],
    caseStudy: {
      overview: 'A deep-learning-based quantitative system designed to evaluate predictive structure in financial asset returns using neural time-series modeling, custom loss formulations, and rigorous backtest validation.',
      context: 'Financial market prediction requires strict elimination of lookahead bias and rigorous stationarity transformations before feeding price series to deep neural networks.',
      objectives: [
        'Build a leakage-free feature engineering pipeline for multi-horizon asset return series.',
        'Implement deep neural architectures (LSTM, GRU, Dense) trained on stationarized financial indicators.',
        'Establish a strict walk-forward cross-validation protocol to eliminate lookahead bias.'
      ],
      role: 'Sole Architect & Developer. Responsible for mathematical modeling, data extraction, neural network design, training pipelines, and backtest evaluation.',
      team: 'Individual Project',
      timeline: 'Active Research Project',
      results: [
        {
          status: 'Implemented',
          description: 'Complete end-to-end data ingestion, feature generation, model training, and signal evaluation pipeline.'
        }
      ],
      outcomes: [
        'Complete modular codebase with public verifiable GitHub repository.',
        'Demonstrated consistent directional precision improvements over naive random walk baselines in backtesting.'
      ],
      lessonsLearned: [
        'Feature engineering quality and clean data normalization have far greater impact on predictive stability than model parameter count.'
      ]
    }
  },
  {
    id: 'news-market-trading-signal',
    slug: 'news-market-trading-signal',
    title: 'News & Market Trading Signal Platform',
    shortDescription: 'Multi-modal quantitative research platform fusing financial news sentiment with numerical price series.',
    category: ['quant', 'ai'],
    projectType: 'Multi-Modal Quantitative Research',
    domain: 'Quantitative Finance',
    type: 'Research',
    status: 'active',
    presentationLevel: 'B',
    problem: 'Market sentiment from breaking financial headlines moves asset prices before technical indicators reflect the trend, but raw unstructured news text contains high noise and inconsistent entity references.',
    solution: 'Designed a multi-modal quantitative research platform combining natural language processing (NLP) sentiment scoring with price series momentum features to generate fused trading signals.',
    system: 'Python data pipeline extracting financial news feeds, computing sentiment polarity scores, and evaluating cross-sectional signal correlation with forward asset returns.',
    product: 'Modular quantitative research framework for multi-modal signal fusion and backtesting.',
    outcome: 'Engineered an empirical pipeline validating headline sentiment correlation with short-horizon price volatility.',
    publishedAt: '2024-10-20',
    updatedAt: '2025-01-20',
    source: 'github',
    githubUrl: 'https://github.com/UzairAhmad88/News-Market-Trading-Signal---Multi-Modal-Quantitative-Research-Platform-ByUzaii',
    githubRepo: 'UzairAhmad88/News-Market-Trading-Signal---Multi-Modal-Quantitative-Research-Platform-ByUzaii',
    repositoryStatus: 'public',
    deploymentStatus: 'not_deployed',
    repositoryUpdatedAt: '2025-01-20T15:00:00Z',
    technologies: ['Python', 'NLP', 'Pandas', 'NumPy', 'Scikit-Learn', 'Transformers'],
    tools: ['Jupyter', 'Git'],
    role: 'Quantitative Research Engineer',
    team: 'Individual Research Project',
    timeline: '2024 – Present',
    context: 'Independent Research',
    deployment: 'Local Research Pipeline',
    order: 6,
    relatedProjects: ['deep-learning-stock-return-prediction', 'market-regime-engine'],
    relatedResearch: ['signal-research', 'market-regimes'],
    caseStudy: {
      overview: 'A multi-modal research project exploring whether textual sentiment from financial news feeds can provide orthogonal alpha when fused with traditional technical market indicators.',
      objectives: [
        'Ingest and preprocess real-time financial headline feeds.',
        'Extract sentiment polarity and entity impact metrics using NLP models.',
        'Backtest multi-modal signal strategies against technical-only baselines.'
      ],
      role: 'Research & Implementation Engineer.',
      team: 'Individual Project',
      results: [
        {
          status: 'Implemented',
          description: 'Working data extraction, sentiment scoring, and signal fusion backtesting pipeline.'
        }
      ],
      outcomes: [
        'Public GitHub repository with reproducible Python signal analysis scripts.'
      ],
      lessonsLearned: [
        'News sentiment signals decay rapidly; multi-modal strategies must account for latency and publication timestamp precision.'
      ]
    }
  },
  {
    id: 'market-regime-engine',
    slug: 'market-regime-engine',
    title: 'Market Regime Detection Engine',
    shortDescription: 'Unsupervised statistical clustering engine for financial market volatility regime detection.',
    category: ['quant', 'ai'],
    projectType: 'Quantitative Market Intelligence',
    domain: 'Quantitative Finance',
    type: 'System',
    status: 'active',
    presentationLevel: 'B',
    problem: 'Quantitative trading models often suffer catastrophic drawdowns when market conditions shift from calm trending regimes into volatile mean-reverting states without warning.',
    solution: 'Designed an unsupervised machine learning engine that clusters multi-asset volatility, volume, and momentum indicators to classify market regimes dynamically.',
    system: 'Python algorithmic pipeline utilizing Gaussian Mixture Models (GMM) and Hidden Markov Models (HMM) for regime state transition detection.',
    outcome: 'Engineered an automated detection module providing regime classification signals to downstream risk management systems.',
    publishedAt: '2024-10-05',
    updatedAt: '2025-02-01',
    source: 'github',
    githubUrl: 'https://github.com/UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    githubRepo: 'UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    repositoryStatus: 'public',
    deploymentStatus: 'not_deployed',
    repositoryUpdatedAt: '2025-02-01T14:20:00Z',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'GMM', 'HMM'],
    tools: ['Jupyter', 'Git'],
    role: 'Quantitative Machine Learning Engineer',
    team: 'Individual Research Project',
    timeline: 'Active Research',
    context: 'Independent Research',
    deployment: 'Local Research / Jupyter Engine',
    order: 7,
    relatedProjects: ['deep-learning-stock-return-prediction', 'quant-research-portfolio-dashboard'],
    relatedResearch: ['market-regimes', 'signal-research'],
    caseStudy: {
      overview: 'An algorithmic framework for discovering latent market states (Low-volatility bull, High-volatility bear, Sideways consolidation) using unsupervised statistical clustering.',
      objectives: [
        'Extract robust statistical moments (realized volatility, ATR, volume variance, returns kurtosis).',
        'Fit probabilistic clustering models (GMM/HMM) to partition historical market data into distinct regimes.',
        'Evaluate transition probability matrices for forward risk estimation.'
      ],
      role: 'Research & Implementation Engineer.',
      team: 'Individual Project',
      results: [
        {
          status: 'Implemented',
          description: 'Functional Python package extracting rolling statistical moments and clustering market states.'
        }
      ],
      outcomes: [
        'Validated clustering separation on historical asset data with clear volatility partitioning.'
      ],
      lessonsLearned: [
        'Ordering latent cluster labels by variance is essential for consistent downstream risk throttle automation.'
      ]
    }
  },
  {
    id: 'north-client-acquisition',
    slug: 'north-client-acquisition-platform',
    title: 'North Client Acquisition Platform',
    shortDescription: 'Full-stack client acquisition platform with lead enrichment, CRM pipelines, and automated outreach tracking.',
    category: ['engineering', 'product'],
    projectType: 'Client Acquisition SaaS',
    domain: 'Full-Stack Engineering',
    type: 'Product',
    status: 'completed',
    presentationLevel: 'B',
    problem: 'Growth agencies and B2B service teams need a streamlined system to manage client prospecting, track qualification stages, and monitor campaign outreach without complex enterprise software overhead.',
    solution: 'Engineered a modern, responsive web application for managing B2B prospect pipelines, enriched lead scoring, and automated outreach staging.',
    product: 'Full-stack client acquisition platform with Kanban pipeline stages, contact management, and outreach analytics.',
    system: 'React and TypeScript application with modular API endpoints and relational contact storage.',
    outcome: 'Shipped a fast, responsive lead pipeline tool improving sales qualification productivity.',
    publishedAt: '2024-05-18',
    updatedAt: '2024-10-15',
    source: 'github',
    githubUrl: 'https://github.com/UzairAhmad88/North-Client-Acquisition-Platform',
    githubRepo: 'UzairAhmad88/North-Client-Acquisition-Platform',
    repositoryStatus: 'public',
    deploymentStatus: 'not_deployed',
    repositoryUpdatedAt: '2024-10-15T11:00:00Z',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'TailwindCSS'],
    tools: ['Git', 'REST APIs', 'Postman'],
    role: 'Full-Stack Engineer',
    team: 'Individual Project',
    timeline: 'Completed Project',
    context: 'Personal Engineering',
    deployment: 'Web Application',
    order: 8,
    relatedProjects: ['multi-agent-prospect-intelligence', 'curasphere-hms'],
    caseStudy: {
      overview: 'North Client Acquisition Platform is an end-to-end B2B sales development tool designed to track prospect lifecycles from initial discovery to qualification and closed engagements.',
      objectives: [
        'Build an interactive Kanban-style pipeline for moving leads across qualification stages.',
        'Implement structured contact models with enriched firmographic data.',
        'Provide conversion metrics and outreach campaign tracking.'
      ],
      role: 'Full-Stack Developer.',
      team: 'Individual Project',
      results: [
        {
          status: 'Implemented',
          description: 'Working CRM web application with drag-and-drop pipeline stages and contact enrichment.'
        }
      ],
      outcomes: [
        'Public GitHub repository demonstrating clean TypeScript component architecture and REST API integration.'
      ],
      lessonsLearned: [
        'Intuitive drag-and-drop state management requires optimistic UI updates to feel responsive during high-volume lead reviews.'
      ]
    }
  },
  {
    id: 'curasphere-hms',
    slug: 'curasphere-hms',
    title: 'CuraSphere HMS',
    shortDescription: 'Modern, responsive Healthcare Management System with role-based access control and patient records.',
    category: ['engineering', 'product'],
    projectType: 'Healthcare Management SaaS',
    domain: 'Full-Stack Engineering',
    type: 'Product',
    status: 'completed',
    presentationLevel: 'B',
    problem: 'Healthcare clinics and hospital departments suffer from fragmented patient record management, slow intake workflows, and uncoordinated appointment scheduling across medical staff.',
    solution: 'Engineered a modern, responsive Healthcare Management System (HMS) with role-based access control, electronic medical records (EMR), patient queue tracking, and administrative dashboards.',
    product: 'Full-stack hospital and clinic management platform with specialized portals for doctors, nurses, administrative staff, and patients.',
    system: 'Role-based application architecture built with modern web standards, secure API endpoints, and relational patient record data models.',
    outcome: 'Delivered an intuitive, responsive web application streamlining patient registration, consultation tracking, and billing operations.',
    publishedAt: '2024-06-12',
    updatedAt: '2024-12-18',
    archive: {
      state: 'active',
      reason: 'COMPLETED_HISTORICAL',
      originalYear: '2024',
    },
    source: 'github+vercel',
    githubUrl: 'https://github.com/UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    githubRepo: 'UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    vercelUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
    liveUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
    repositoryStatus: 'public',
    deploymentStatus: 'production',
    repositoryUpdatedAt: '2024-12-18T11:45:00Z',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'TailwindCSS', 'PostgreSQL'],
    tools: ['Git', 'REST APIs', 'Postman'],
    role: 'Full-Stack Web Engineer',
    team: 'Individual Project',
    timeline: 'Completed Project',
    context: 'Personal Engineering',
    deployment: 'Vercel (Production)',
    order: 9,
    relatedProjects: ['healix-platform', 'rafaqatbaber-co'],
    caseStudy: {
      overview: 'CuraSphere HMS is an end-to-end digital health management system designed to coordinate clinical operations, physician scheduling, patient history tracking, and administrative invoicing.',
      objectives: [
        'Design a clear, accessible UI for medical receptionists and physicians operating in fast-paced clinical environments.',
        'Implement role-based authorization (Admin, Doctor, Nurse, Reception).',
        'Provide instant search and filtering across patient records, appointments, and prescriptions.'
      ],
      role: 'Full-Stack Developer — UI design, component engineering, REST API architecture, and database modeling.',
      team: 'Individual Project',
      results: [
        {
          status: 'Implemented',
          description: 'Working hospital management prototype with role-based portals and patient encounter workflows.'
        }
      ],
      outcomes: [
        'Complete working HMS platform with authenticated clinician portals and patient record management on Vercel.',
        'Zero-layout-shift UI tested across desktop workstations and tablet form factors.'
      ],
      lessonsLearned: [
        'Healthcare software prioritizes clarity, error prevention, and high contrast over complex animations.'
      ]
    }
  }
];

export const projectFilters = [
  { id: 'all', label: 'All Work' },
  { id: 'quant', label: 'Quantitative & Finance' },
  { id: 'client', label: 'Client & Real-World' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'engineering', label: 'Full-Stack Systems' },
] as const;

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getLatestProjects(): Project[] {
  return projects.filter((p) => p.isLatest);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getActiveProjects(): Project[] {
  return projects.filter((p) => {
    const state = p.archive?.state || (p.status === 'archived' ? 'archived' : 'active');
    return state === 'active';
  });
}

export function getArchivedProjects(): Project[] {
  return projects.filter((p) => {
    const state = p.archive?.state || (p.status === 'archived' ? 'archived' : 'active');
    return state === 'archived' || state === 'superseded' || state === 'legacy' || state === 'paused' || state === 'abandoned';
  });
}
