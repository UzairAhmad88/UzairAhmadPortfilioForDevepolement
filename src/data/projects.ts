import type { Project } from '@/types/project';

export const featuredProject: Project = {
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
  problem: 'Financial asset returns exhibit extreme non-stationarity, regime-dependent variance, and very low signal-to-noise ratios, causing naive linear and unregularized machine learning models to overfit in-sample noise while collapsing in live evaluation.',
  solution: 'Engineered an end-to-end quantitative research and forecasting pipeline in Python and PyTorch that ingests multi-asset price histories, extracts stationarized statistical features, trains deep neural architectures, and performs walk-forward backtest risk evaluation.',
  system: 'End-to-end quantitative pipeline encompassing market data ingestion, stationarized feature engineering, neural network training, return forecasting, and backtest risk evaluation.',
  product: 'Modular Python quantitative trading framework with reusable components for feature calculation, model training, and out-of-sample signal analysis.',
  outcome: 'Engineered an extensible deep learning research platform with verifiable out-of-sample backtesting metrics, directional accuracy metrics, and walk-forward cross-validation.',
  featured: true,
  featuredSubheading: 'Featured Quantitative Case Study',
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
  order: 1,
  relatedProjects: ['market-regime-engine', 'multi-agent-prospect-intelligence'],
  relatedResearch: ['signal-research', 'market-regimes'],
  relatedNotes: [
    'fractional-differentiation-memory-stationarity',
    'gmm-state-flipping-variance-ordering',
  ],
  relatedLab: ['fractional-diff-cli', 'streaming-orderbook-sse'],
  originatedFromLab: 'fractional-diff-cli',
  caseStudy: {
    overview: 'A deep-learning-based quantitative system designed to evaluate predictive structure in financial asset returns. The project explores neural time-series modeling, custom loss formulations, and rigorous backtest validation.',
    context: 'Financial market prediction is inherently challenging due to low signal-to-noise ratio, regime changes, and lookahead bias risks. Standard naive machine learning approaches frequently overfit in-sample data while collapsing out-of-sample.',
    objectives: [
      'Build a leakage-free feature engineering pipeline for multi-horizon asset return series.',
      'Implement deep neural architectures (LSTM, GRU, Dense) trained on stationarized financial indicators.',
      'Establish a strict walk-forward cross-validation protocol to eliminate lookahead bias.',
      'Quantify predictive metrics including Sharpe ratio, directional accuracy, and maximum drawdown.'
    ],
    role: 'Sole Architect & Developer. Responsible for mathematical modeling, data extraction, neural network design, training pipelines, and backtest evaluation.',
    team: 'Individual Project',
    timeline: 'Active Research Project',
    approach: 'Structured the system into 4 distinct architectural layers: Data Extraction, Feature Transformation, Neural Modeling, and Risk/Backtest Analytics. Applied fractional differentiation and log-return normalization to preserve memory while achieving stationarity.',
    architectureDiagram: `┌────────────────┐    ┌─────────────────────┐    ┌──────────────────────┐    ┌─────────────────────┐
│ Historical     │───►│ Feature Store &     │───►│ Deep Learning Neural │───►│ Signal Evaluator    │
│ Market Data    │    │ Normalization (GARCH│    │ Architecture         │    │ & Backtest Engine   │
│ (OHLCV Series) │    │ Technical Features) │    │ (PyTorch/GPU)        │    │ (Sharpe, Returns)   │
└────────────────┘    └─────────────────────┘    └──────────────────────┘    └─────────────────────┘`,
    architectureNotes: 'Data flows sequentially with strict chronological boundaries to guarantee no future data leaks into feature calculations or training batches.',
    visualizations: [
      {
        id: 'stock-return-pipeline',
        type: 'pipeline',
        title: 'End-to-End Quantitative ML & Walk-Forward Forecasting Pipeline',
        status: 'actual',
        description: 'Chronologically partitioned pipeline processing multi-asset historical price series into stationarized indicators, deep neural representations, and walk-forward backtest risk analytics.',
        caption: 'Data flows with strict chronological boundaries to guarantee no future data leaks into training batches or normalization statistics.',
        sourceEvidence: 'Public GitHub Repository: UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
        textAlternative: 'A four-stage sequential pipeline moving from Historical Market Data ingestion, to Stationarized Feature Store extraction and normalization, to PyTorch Deep Neural Architecture model training on GPU, and finally to Walk-Forward Signal & Backtest Engine risk evaluation.',
        nodes: [
          {
            id: 'market-data',
            label: 'Historical Market Data',
            subLabel: 'Multi-asset OHLCV price series',
            role: 'input',
            badge: 'Ingestion',
            details: ['Yahoo / AlphaVantage Feeds', 'Adjusted Close Prices', 'Strict Temporal Splits']
          },
          {
            id: 'feature-store',
            label: 'Stationarized Feature Store',
            subLabel: 'Rolling normalization & statistical features',
            role: 'process',
            badge: 'Transformation',
            details: ['Log Returns & Fractional Diff', 'GARCH Volatility Estimator', '30+ Technical Indicators (RSI, MACD)']
          },
          {
            id: 'neural-arch',
            label: 'Deep Neural Architecture',
            subLabel: 'PyTorch temporal models on GPU',
            role: 'model',
            badge: 'PyTorch / CUDA',
            details: ['LSTM / GRU / Dense Layers', 'Dropout & Gradient Clipping', 'Custom Directional Loss Penalties']
          },
          {
            id: 'signal-backtest',
            label: 'Signal & Backtest Engine',
            subLabel: 'Walk-forward risk & portfolio evaluation',
            role: 'output',
            badge: 'Evaluation',
            details: ['Sharpe Ratio & Max Drawdown', 'Zero-Lookahead Validation', 'Directional Precision Metrics']
          }
        ]
      }
    ],
    implementationHighlights: [
      'Engineered 30+ technical indicators including RSI, MACD, Bollinger Bands, and rolling volatility estimators.',
      'Implemented custom PyTorch Dataset and DataLoader classes with sliding temporal window slicing.',
      'Integrated gradient clipping, early stopping, and Dropout regularization to prevent overfitting on market noise.'
    ],
    challenges: [
      {
        challenge: 'Lookahead Bias & Data Leakage during Normalization',
        solution: 'Calculated all rolling scalers and mean/variance statistics strictly on historical windows before each prediction step.'
      },
      {
        challenge: 'Non-Stationary Asset Price Time Series',
        solution: 'Transformed raw prices into log returns, difference-adjusted momentum metrics, and normalized volatility measures.'
      }
    ],
    keyDecisions: [
      {
        decision: 'PyTorch for Deep Learning Backend',
        context: 'Required explicit control over tensor dimensions, backpropagation graphs, and custom financial loss penalties.',
        rationale: 'Provides explicit tensor control, dynamic execution graphs, and straightforward custom loss functions compared to rigid high-level wrappers.',
        tradeOff: 'Requires more low-level boilerplate code for training loops and GPU memory lifecycle management.'
      },
      {
        decision: 'Walk-Forward Expanding Window Validation',
        context: 'Standard randomized k-fold cross-validation destroys temporal order and leaks future structure into historical splits.',
        rationale: 'Walk-forward validation faithfully reproduces live deployment conditions by training strictly on preceding periods.',
        tradeOff: 'Computationally heavier than single-split validation, requiring multiple retraining cycles across the timeline.'
      }
    ],
    results: [
      {
        status: 'Implemented',
        description: 'Complete end-to-end data ingestion, feature generation, model training, and signal evaluation pipeline.'
      },
      {
        status: 'Measured',
        description: 'Demonstrated consistent directional precision improvements over naive random-walk baselines across historical out-of-sample backtests.'
      }
    ],
    outcomes: [
      'Complete modular codebase with public verifiable GitHub repository.',
      'Demonstrated consistent directional precision improvements over naive random walk baselines in backtesting.',
      'Established a clean template for future quantitative algorithmic trading experiments.'
    ],
    limitations: [
      'Current backtesting assumes zero execution slippage and idealized fill prices; market impact models are not yet integrated.',
      'Training is optimized for daily/hourly bars; tick-level microsecond data pipelines are beyond current hardware scope.'
    ],
    lessonsLearned: [
      'Feature engineering quality and clean data normalization have far greater impact on predictive stability than model parameter count.',
      'Overparameterized neural networks rapidly overfit financial noise without aggressive regularization and domain-specific loss penalties.'
    ],
    futureWork: [
      'Integrate synthetic order book latency modeling and execution fee simulation.',
      'Explore transformer-based temporal attention architectures for cross-asset lead-lag discovery.'
    ]
  }
};

export const fypProject: Project = {
  id: 'multi-agent-prospect-intelligence',
  slug: 'multi-agent-prospect-intelligence',
  title: 'Multi-Agent Decision Support for Prospect Intelligence',
  shortDescription: 'Final Year Project (FYP): Multi-agent AI system for prospect intelligence, client acquisition, and retention decision support.',
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
  featured: false,
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
  githubUrl: 'https://github.com/UzairAhmad88',
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
  relatedNotes: [
    'async-sqlalchemy-session-lifecycle',
    'deterministic-state-graph-pydantic-guardrails',
  ],
  relatedLab: ['multi-agent-pydantic-state-machine'],
  originatedFromLab: 'multi-agent-pydantic-state-machine',
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
    architectureNotes: 'All agent outputs pass through a deterministic JSON schema validation layer before reaching the client interface.',
    visualizations: [
      {
        id: 'multi-agent-state-graph',
        type: 'state-graph',
        title: 'Stateful Multi-Agent Orchestration & Guardrail Graph',
        status: 'prototype',
        description: 'Directed state graph architecture orchestrating collaborative LLM agents with deterministic Pydantic schema validation for lead qualification and retention risk decision support.',
        caption: 'All multi-agent outputs pass through deterministic Pydantic schema validation guardrails before reaching the user interface.',
        sourceEvidence: 'Public GitHub Repository: UzairAhmad88/Multi-Modal-Quantitative-AI-Development (FYP Academic Deliverable)',
        textAlternative: 'A five-stage state graph flow starting from User Query, routed by an Orchestrator Agent to a Specialist Worker Agent Graph, validated by a Deterministic Schema Guardrail, and delivered to the Decision Briefing UI.',
        nodes: [
          {
            id: 'user-query',
            label: 'User Query & Domain Filter',
            subLabel: 'Lead parameters & prospect criteria',
            role: 'input',
            badge: 'Input State',
            details: ['Industry & Domain Filter', 'Target Executive Roles', 'CRM Context / Initial State']
          },
          {
            id: 'orchestrator',
            label: 'Orchestrator Router Agent',
            subLabel: 'State graph router & task dispatcher',
            role: 'router',
            badge: 'LangGraph State',
            details: ['Directed Graph Routing', 'Iteration & Timeout Limits', 'Execution State Memory']
          },
          {
            id: 'worker-graph',
            label: 'Specialist Worker Graph',
            subLabel: 'Parallel research & scoring agents',
            role: 'model',
            badge: 'LLM Agents',
            details: ['Web Research Agent', 'Enrichment & Synthesis Agent', 'Churn Risk Scoring Agent']
          },
          {
            id: 'guardrails',
            label: 'Deterministic Guardrails',
            subLabel: 'Pydantic schema validation',
            role: 'guardrail',
            badge: 'Validation',
            details: ['JSON Schema Conformance', 'Anti-Hallucination Checks', 'Entity Normalization']
          },
          {
            id: 'briefing-ui',
            label: 'Decision Briefing UI',
            subLabel: 'Interactive decision support dashboard',
            role: 'output',
            badge: 'Presentation',
            details: ['Structured Prospect Cards', 'Retention Risk Alerts', 'Recommended Action Matrix']
          }
        ]
      }
    ],
    implementationHighlights: [
      'Constructed stateful agent graphs with conditional branching and fallback error recovery.',
      'Implemented automated prompt templates with structured output parsing.',
      'Built a fast API backend serving real-time agent execution traces to the dashboard UI.'
    ],
    challenges: [
      {
        challenge: 'Agent Infinite Loops & Unbounded Execution',
        solution: 'Configured maximum iteration limits, deterministic state transitions, and timeout guardrails on all agent sub-tasks.'
      },
      {
        challenge: 'Schema Inconsistency across Heterogeneous Web Sources',
        solution: 'Enforced strict Pydantic / TypeScript data contracts with automated normalization of ambiguous company attributes.'
      }
    ],
    keyDecisions: [
      {
        decision: 'State Graph Architecture over Free-Form Prompt Chaining',
        context: 'Unstructured agent chains are non-deterministic and prone to silent failures during multi-step research.',
        rationale: 'Explicit state machines guarantee predictable execution paths and clear debugging visibility at each milestone.',
        tradeOff: 'Increases initial setup complexity compared to simple single-prompt completions.'
      }
    ],
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
    limitations: [
      'Current web research uses simulated/rate-limited search APIs; enterprise CRM integrations (e.g. Salesforce) are pending future development.',
      'LLM API latency depends on upstream provider response times.'
    ],
    lessonsLearned: [
      'Multi-agent systems require rigorous deterministic boundaries and schema validation to be viable in business decision contexts.',
      'Specialized, small-scope prompts outperform monolithic multi-purpose agent prompts.'
    ],
    futureWork: [
      'Integrate direct webhook triggers from production CRM platforms for automated real-time churn alerting.',
      'Optimize token caching to reduce inference latency across repeated entity lookups.'
    ]
  }
};

export const projects: Project[] = [
  featuredProject,
  fypProject,
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
      predecessorProjectId: 'restaurant-pos',
      predecessorProjectTitle: 'Restaurant POS & Management System',
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
    order: 3,
    relatedProjects: ['restaurant-pos', 'multi-agent-prospect-intelligence'],
    relatedNotes: [
      'async-sqlalchemy-session-lifecycle',
      'rbac-relational-integrity-emr-systems',
      'zero-layout-shift-ssg-design-tokens',
    ],
    caseStudy: {
      overview: 'CuraSphere HMS is an end-to-end digital health management system designed to coordinate clinical operations, physician scheduling, patient history tracking, and administrative invoicing.',
      context: 'Small to mid-sized medical clinics frequently rely on disconnected spreadsheets and paper files, introducing operational friction and patient wait times.',
      objectives: [
        'Design a clear, accessible UI for medical receptionists and physicians operating in fast-paced clinical environments.',
        'Implement role-based authorization (Admin, Doctor, Nurse, Reception).',
        'Provide instant search and filtering across patient records, appointments, and prescriptions.'
      ],
      role: 'Full-Stack Developer — UI design, component engineering, REST API architecture, and database modeling.',
      team: 'Individual Project',
      timeline: 'Completed',
      approach: 'Built a modular frontend component system paired with structured REST API endpoints and relational schemas for patient encounters and prescriptions.',
      architectureDiagram: `┌───────────────────────┐      ┌─────────────────────────┐      ┌───────────────────────┐
│ Frontend Application  │◄────►│ Backend API Server      │◄────►│ Relational Database   │
│ (React / TypeScript)  │      │ (Node.js / Express Auth)│      │ (Patient Records/EMR) │
└───────────────────────┘      └─────────────────────────┘      └───────────────────────┘`,
      visualizations: [
        {
          id: 'curasphere-tiered-architecture',
          type: 'architecture',
          title: 'Tiered Full-Stack Healthcare Management Architecture',
          status: 'actual',
          description: 'Role-based web platform coordinating clinician workflows, appointment scheduling, and electronic medical records across distinct administrative roles.',
          caption: 'Modular tier separation guarantees that clinicians only access medical records authorized under their specific role permissions.',
          sourceEvidence: 'Public GitHub Repository & Vercel Deployment: UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
          textAlternative: 'A four-tier client-server architecture with React Web Client connecting through an Auth Gateway to a Node/Express API Service Layer backed by a relational PostgreSQL EMR database.',
          nodes: [
            {
              id: 'client-portal',
              label: 'Clinician Web Client',
              subLabel: 'Responsive React / TS frontend',
              role: 'input',
              badge: 'React / TS',
              details: ['Doctor & Reception Portals', 'Zero-Layout-Shift Forms', 'Role-Based Route Guards']
            },
            {
              id: 'auth-gateway',
              label: 'Auth & Permission Gateway',
              subLabel: 'Token validation & RBAC security',
              role: 'guardrail',
              badge: 'Security',
              details: ['JWT Authentication', 'Permission Segregation', 'Payload Sanitization']
            },
            {
              id: 'api-service',
              label: 'Backend API Service Layer',
              subLabel: 'Node.js / Express controllers',
              role: 'process',
              badge: 'Express API',
              details: ['Patient Intake Lifecycle', 'Consultation & Rx Dispatch', 'Audit Logging & Invoicing']
            },
            {
              id: 'database-emr',
              label: 'Relational EMR Database',
              subLabel: 'PostgreSQL patient records',
              role: 'storage',
              badge: 'PostgreSQL',
              details: ['Normalized Patient Records', 'Appointment Schedules', 'Prescription History']
            }
          ]
        }
      ],
      challenges: [
        {
          challenge: 'Role-Based Navigation and State Segregation',
          solution: 'Implemented declarative route guards and token-based permission checking across doctor and reception views.'
        }
      ],
      keyDecisions: [
        {
          decision: 'TypeScript for both Frontend and Backend Contracts',
          context: 'Preventing runtime data serialization errors between patient forms and database tables.',
          rationale: 'Guaranteed shared interface definitions between API responses and UI state, eliminating unexpected null field errors.',
          tradeOff: 'Requires strict typing maintenance across all API payload interfaces.'
        }
      ],
      results: [
        {
          status: 'Implemented',
          description: 'Working hospital management prototype with role-based portals and patient encounter workflows.'
        }
      ],
      outcomes: [
        'Complete working HMS platform with authenticated clinician portals and patient record management.',
        'Zero-layout-shift UI tested across desktop workstations and tablet form factors.'
      ],
      limitations: [
        'Electronic health record compliance (HIPAA/GDPR) certification requires enterprise cloud infrastructure and formal compliance auditing.',
        'Live hospital billing gateway integration is mocked for demonstration purposes.'
      ],
      lessonsLearned: [
        'Healthcare software prioritizes clarity, error prevention, and high contrast over complex animations.'
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
    isLatest: true,
    archive: {
      state: 'active',
      originalYear: '2024',
    },
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
    order: 4,
    relatedProjects: ['deep-learning-stock-return-prediction'],
    relatedResearch: ['market-regimes', 'signal-research'],
    relatedNotes: [
      'fractional-differentiation-memory-stationarity',
      'gmm-state-flipping-variance-ordering',
    ],
    relatedLab: ['fractional-diff-cli', 'gmm-regime-stability-probe'],
    originatedFromLab: 'gmm-regime-stability-probe',
    caseStudy: {
      overview: 'An algorithmic framework for discovering latent market states (Low-volatility bull, High-volatility bear, Sideways consolidation) using unsupervised statistical clustering.',
      context: 'Single-strategy trading systems struggle across changing macro environments. Identifying regime transitions enables dynamic parameter adaptation and risk throttle control.',
      objectives: [
        'Extract robust statistical features (realized volatility, ATR, volume variance, returns kurtosis).',
        'Fit probabilistic clustering models (GMM/HMM) to partition historical market data into distinct regimes.',
        'Evaluate transition probability matrices for forward risk estimation.'
      ],
      role: 'Research & Implementation Engineer.',
      team: 'Individual Project',
      timeline: 'Active Research Project',
      approach: 'Calculated statistical distribution moments over rolling windows and fitted Gaussian Mixture Models with AIC/BIC model selection criteria.',
      architectureDiagram: `┌───────────────────┐    ┌───────────────────────┐    ┌─────────────────────┐    ┌────────────────────┐
│ Multi-Asset Data  │───►│ Statistical Moment    │───►│ Unsupervised GMM/   │───►│ Regime Probability │
│ Feed              │    │ Engine (Vol, Skew)   │    │ HMM Cluster Engine  │    │ & Signal Output    │
└───────────────────┘    └───────────────────────┘    └─────────────────────┘    └────────────────────┘`,
      visualizations: [
        {
          id: 'regime-engine-pipeline',
          type: 'pipeline',
          title: 'Unsupervised Market Regime Discovery & Classification Pipeline',
          status: 'actual',
          description: 'Statistical algorithmic pipeline extracting multi-asset rolling distribution moments and clustering latent market volatility states using Gaussian Mixture Models.',
          caption: 'Latent cluster states are sorted deterministically by volatility variance to preserve identical semantic meaning across rolling refits.',
          sourceEvidence: 'Public GitHub Repository: UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
          textAlternative: 'A four-stage pipeline moving from Multi-Asset Feed, to Statistical Moment Engine (calculating volatility and skewness), to Unsupervised GMM/HMM Cluster Engine, to Regime Signal & Risk Throttle probability output.',
          nodes: [
            {
              id: 'asset-feed',
              label: 'Multi-Asset Price Feed',
              subLabel: 'Historical equities & index bars',
              role: 'input',
              badge: 'Market Data',
              details: ['Equities & Indices OHLCV', 'Rolling Estimation Windows', 'Intraday Variance Bars']
            },
            {
              id: 'moment-engine',
              label: 'Statistical Moment Engine',
              subLabel: 'Rolling variance & distribution moments',
              role: 'process',
              badge: 'Statistical Feature',
              details: ['Realized Volatility & ATR', 'Kurtosis & Return Skewness', 'Volume Ratio Dispersion']
            },
            {
              id: 'gmm-cluster',
              label: 'Unsupervised Cluster Engine',
              subLabel: 'GMM / HMM state decomposition',
              role: 'model',
              badge: 'GMM / HMM',
              details: ['Gaussian Mixture Models', 'AIC / BIC Model Selection', 'Variance-Ordered Labels']
            },
            {
              id: 'regime-output',
              label: 'Regime Signal & Risk Throttle',
              subLabel: 'Continuous state probabilities',
              role: 'output',
              badge: 'Risk Throttle',
              details: ['State Membership Probability', 'Dynamic Risk Throttle Feed', 'Backtest Simulator Hook']
            }
          ]
        }
      ],
      challenges: [
        {
          challenge: 'Regime Label Flipping across Training Windows',
          solution: 'Ordered clusters by ascending volatility variance to guarantee consistent semantic interpretation across sequential refits.'
        }
      ],
      keyDecisions: [
        {
          decision: 'Gaussian Mixture Models over Fixed Volatility Thresholds',
          context: 'Hardcoded volatility levels fail to adapt across changing interest rate and macroeconomic environments.',
          rationale: 'Probabilistic clustering models smoothly adapt to empirical distribution shifts and output continuous state membership probabilities.',
          tradeOff: 'Non-convex optimization can be sensitive to initial parameter seeds.'
        }
      ],
      results: [
        {
          status: 'Implemented',
          description: 'Functional Python package extracting rolling statistical moments and clustering market states.'
        }
      ],
      outcomes: [
        'Validated clustering separation on historical asset data with clear volatility partitioning.',
        'Modular Python package ready for integration with trading backtest simulators.'
      ],
      limitations: [
        'GMM assumes stationary distribution parameters within local estimation windows; rapid intra-day flash events require sub-minute tick ingestion.'
      ],
      lessonsLearned: [
        'Ordering latent cluster labels by variance is essential for consistent downstream risk throttle automation.'
      ]
    }
  },
  {
    id: 'restaurant-pos',
    slug: 'restaurant-pos',
    title: 'Restaurant POS & Management System',
    shortDescription: 'High-throughput Point of Sale and inventory control software for dining operations.',
    category: ['engineering', 'product'],
    projectType: 'Operations & POS Software',
    domain: 'Full-Stack Engineering',
    type: 'Product',
    status: 'completed',
    presentationLevel: 'C',
    problem: 'Busy restaurants require instant order entry, kitchen ticket dispatching, inventory deduction, and billing without network lag or confusing multi-step interfaces.',
    solution: 'Developed a high-throughput Point of Sale (POS) and inventory control system with table layout management, order ticketing, and daily sales auditing.',
    product: 'Fast, responsive POS software tailored for touchscreens and quick-service operations.',
    system: 'Optimized local state architecture with instant visual feedback and reliable record persistence.',
    outcome: 'Shipped a full-featured restaurant operations tool simplifying order lifecycle and kitchen communication.',
    publishedAt: '2024-03-20',
    updatedAt: '2024-09-10',
    archive: {
      state: 'legacy',
      reason: 'LEGACY',
      originalYear: '2024',
      archivedAt: '2024-09',
      archiveNote: 'Early POS and local persistence system exploring order management workflows; predecessor to subsequent role-based healthcare architectures.',
      successorProjectId: 'curasphere-hms',
      successorProjectTitle: 'CuraSphere HMS',
    },
    source: 'github',
    githubUrl: 'https://github.com/UzairAhmad88/Resturent-Managment-System---POS',
    githubRepo: 'UzairAhmad88/Resturent-Managment-System---POS',
    repositoryStatus: 'public',
    deploymentStatus: 'not_deployed',
    repositoryUpdatedAt: '2024-09-10T15:00:00Z',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local DB', 'Responsive UI'],
    tools: ['Git', 'VS Code'],
    role: 'Frontend & System Engineer',
    team: 'Individual Project',
    timeline: 'Completed Project',
    context: 'Personal Engineering',
    deployment: 'Local Execution / Browser',
    order: 5,
    relatedProjects: ['curasphere-hms', 'hayatabad-gym'],
    caseStudy: {
      overview: 'A specialized Point of Sale application designed for dining and takeaway restaurants, integrating order entry, table mapping, and transaction auditing.',
      context: 'Food service environments demand zero-latency button responses, clear visual table occupancy statuses, and simple bill generation.',
      objectives: [
        'Provide rapid 1-touch menu selection and order modification.',
        'Support table assignment, split billing, and daily revenue reporting.'
      ],
      role: 'Sole Developer.',
      team: 'Individual Project',
      visualizations: [
        {
          id: 'pos-operational-flow',
          type: 'system-flow',
          title: 'High-Speed Order Processing & Transaction Lifecycle Flow',
          status: 'actual',
          description: 'Optimized local state operational flow connecting table occupancy selection, bill computation, and local storage record persistence.',
          caption: 'Engineered for zero-latency touchscreen operations during peak restaurant dining service.',
          sourceEvidence: 'Public GitHub Repository: UzairAhmad88/Resturent-Managment-System---POS',
          textAlternative: 'A three-stage system flow moving from Order Entry and Table Mapping, to Transaction & Billing Engine calculation, to Local Sales Persistence.',
          nodes: [
            {
              id: 'pos-input',
              label: 'Touch Order Entry & Table Map',
              subLabel: 'Fast touchscreen order input',
              role: 'input',
              badge: 'UI Layer',
              details: ['1-Touch Menu Selection', 'Visual Table Occupancy Map', 'Dynamic Item Modifiers']
            },
            {
              id: 'pos-engine',
              label: 'Transaction & Billing Engine',
              subLabel: 'Calculation & ticket dispatch',
              role: 'process',
              badge: 'Core Logic',
              details: ['Split-Bill Computation', 'Tax & Discount Auditing', 'Kitchen Ticket Generation']
            },
            {
              id: 'pos-storage',
              label: 'Local Sales & State Persistence',
              subLabel: 'Reliable local data persistence',
              role: 'storage',
              badge: 'Storage',
              details: ['Daily Sales Record Ledger', 'Offline-First State Cache', 'Zero-Latency Persistence']
            }
          ]
        }
      ],
      results: [
        {
          status: 'Implemented',
          description: 'Working POS interface with table management and bill calculation.'
        }
      ],
      outcomes: [
        'Functional POS software with end-to-end order processing and bill printing simulation.'
      ],
      lessonsLearned: [
        'High-speed physical point-of-sale systems require keyboard shortcuts and large touch targets.'
      ]
    }
  },
  {
    id: 'hayatabad-gym',
    slug: 'hayatabad-gym',
    title: 'Hayatabad Gym Web Platform',
    shortDescription: 'Modern, accessible web platform for premier fitness facility brand and membership inquiries.',
    category: ['engineering', 'product'],
    projectType: 'Fitness Platform & Brand Experience',
    domain: 'Full-Stack Engineering',
    type: 'Product',
    status: 'completed',
    presentationLevel: 'C',
    problem: 'Fitness centers require a welcoming, informative web presence showcasing training programs, membership options, coach credentials, and direct inquiry channels.',
    solution: 'Created a high-performance, modern gym website featuring membership details, schedule overviews, trainer profiles, and inquiry contact forms.',
    product: 'Accessible public-facing fitness brand website with clean typography and mobile-friendly layouts.',
    system: 'Semantic HTML5 and CSS responsive architecture with zero layout shift and fast load times.',
    outcome: 'Delivered an engaging web experience driving member inquiries and establishing brand presence.',
    publishedAt: '2023-11-15',
    updatedAt: '2024-04-05',
    source: 'github',
    githubUrl: 'https://github.com/UzairAhmad88/Hayatabad-Gym-BYMe',
    githubRepo: 'UzairAhmad88/Hayatabad-Gym-BYMe',
    repositoryStatus: 'public',
    deploymentStatus: 'not_deployed',
    repositoryUpdatedAt: '2024-04-05T12:10:00Z',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    tools: ['Git', 'Figma'],
    role: 'Web Designer & Developer',
    team: 'Client Platform Project',
    timeline: 'Completed Project',
    context: 'Client Platform',
    deployment: 'Web Hosting',
    order: 6,
    relatedProjects: ['restaurant-pos', 'curasphere-hms'],
    caseStudy: {
      overview: 'A modern, responsive web portal for Hayatabad Gym providing membership information, facility highlights, and membership inquiry options.',
      context: 'Local fitness facilities need fast, mobile-friendly landing pages that inform potential gym members without cluttered layouts.',
      objectives: [
        'Design a clean, high-contrast visual identity suitable for a premier athletic facility.',
        'Ensure 100% responsiveness across all mobile screen sizes and tablets.'
      ],
      role: 'Web Designer & Frontend Engineer.',
      team: 'Client Project',
      results: [
        {
          status: 'Implemented',
          description: 'Production-ready responsive website with membership tier overviews and contact channels.'
        }
      ],
      outcomes: [
        'Deployed responsive gym website with seamless inquiry navigation.'
      ]
    },
    archive: {
      state: 'archived',
      reason: 'COMPLETED_HISTORICAL',
      originalYear: '2023',
      archivedAt: '2024-04',
      archiveNote: 'Completed client brand portal and gym membership inquiry website built with semantic HTML5 and CSS3.'
    }
  },
  {
    id: 'online-complaint-system',
    slug: 'online-complaint-system',
    title: 'Online Complaint Management System in Flask',
    shortDescription: 'Server-side Python/Flask web portal for citizen complaint tracking and departmental ticket dispatching.',
    category: ['engineering', 'product'],
    projectType: 'Python Web Application',
    domain: 'Full-Stack Engineering',
    type: 'System',
    status: 'completed',
    presentationLevel: 'D',
    problem: 'Public services and organizations require structured digital intake, ticket dispatching, and resolution auditing for user grievances.',
    solution: 'Engineered a lightweight server-rendered web portal using Python and Flask with session authentication, ticket status workflows, and SQLite database persistence.',
    product: 'Web-based ticketing and complaint tracking portal with administrator and submitter views.',
    system: 'Server-side rendered MVC application built with Python Flask, Jinja2 templates, and relational record models.',
    outcome: 'Delivered an early functional prototype demonstrating relational CRUD workflows and authentication lifecycle.',
    publishedAt: '2023-08-10',
    updatedAt: '2023-11-20',
    source: 'github',
    githubUrl: 'https://github.com/UzairAhmad88/Online_complaint_Mangnment_System_in_flask',
    githubRepo: 'UzairAhmad88/Online_complaint_Mangnment_System_in_flask',
    repositoryStatus: 'public',
    deploymentStatus: 'not_deployed',
    repositoryUpdatedAt: '2023-11-20T10:00:00Z',
    technologies: ['Python', 'HTML5', 'CSS3', 'Bootstrap'],
    tools: ['Git', 'VS Code'],
    role: 'Sole Developer',
    team: 'Individual Project',
    timeline: 'Completed Historical Project',
    context: 'Personal Engineering',
    deployment: 'Local Execution / Flask Server',
    order: 7,
    relatedProjects: ['curasphere-hms', 'event-management-system'],
    caseStudy: {
      overview: 'An early Python/Flask web portal designed for logging, categorizing, and tracking citizen or customer complaints with relational state storage.',
      context: 'Demonstrates foundational backend engineering principles including MVC route separation, server-side template rendering, and database migrations.',
      objectives: [
        'Build a functional CRUD ticketing pipeline with session authentication.',
        'Implement status progression (Submitted -> In Progress -> Resolved).'
      ],
      role: 'Sole Developer.',
      team: 'Individual Project',
      results: [
        {
          status: 'Implemented',
          description: 'Working Flask web application with user registration, ticket management, and admin dispatching.'
        }
      ],
      outcomes: [
        'Validated early server-rendered backend patterns; lessons directly informed subsequent TypeScript API designs in CuraSphere HMS.'
      ]
    },
    archive: {
      state: 'superseded',
      reason: 'SUPERSEDED',
      originalYear: '2023',
      archivedAt: '2024-01',
      archiveNote: 'Early Python/Flask server-rendered application with SQLite storage; superseded by modern TypeScript/React + PostgreSQL full-stack architectures in CuraSphere HMS.',
      successorProjectId: 'curasphere-hms',
      successorProjectTitle: 'CuraSphere HMS'
    }
  },
  {
    id: 'event-management-system',
    slug: 'event-management-system',
    title: 'Event Management & Ticketing System in Flask',
    shortDescription: 'Event ticketing, attendee registration, and venue scheduling application built with Python Flask.',
    category: ['engineering', 'product'],
    projectType: 'Python Web Application',
    domain: 'Full-Stack Engineering',
    type: 'Product',
    status: 'completed',
    presentationLevel: 'D',
    problem: 'Event coordinators need streamlined registration, ticketing management, and attendee roster tracking.',
    solution: 'Developed an event scheduling and ticketing system with dynamic attendee quotas, date-filtered booking, and admin confirmation portals.',
    product: 'Accessible event booking portal with ticket reservation and attendance auditing.',
    system: 'Python Flask web application with relational database models and Jinja2 views.',
    outcome: 'Shipped a functional booking portal proving state validation and registration bounds.',
    publishedAt: '2023-05-15',
    updatedAt: '2023-09-02',
    source: 'github',
    githubUrl: 'https://github.com/UzairAhmad88/Event_Mangment_System_in_flask',
    githubRepo: 'UzairAhmad88/Event_Mangment_System_in_flask',
    repositoryStatus: 'public',
    deploymentStatus: 'not_deployed',
    repositoryUpdatedAt: '2023-09-02T14:30:00Z',
    technologies: ['Python', 'HTML5', 'CSS3', 'Bootstrap'],
    tools: ['Git', 'VS Code'],
    role: 'Sole Developer',
    team: 'Individual Project',
    timeline: 'Completed Historical Project',
    context: 'Personal Engineering',
    deployment: 'Local Execution / Flask Server',
    order: 8,
    relatedProjects: ['online-complaint-system', 'restaurant-pos'],
    caseStudy: {
      overview: 'A Python Flask application managing event calendars, ticket allocations, and user reservations.',
      context: 'Exploration of transactional state updates and reservation limits in web applications.',
      objectives: [
        'Support event listing, date filtering, and registration workflows.',
        'Enforce attendee capacity boundaries during booking.'
      ],
      role: 'Sole Developer.',
      team: 'Individual Project',
      results: [
        {
          status: 'Implemented',
          description: 'Working event portal with dynamic ticket quotas and booking confirmations.'
        }
      ],
      outcomes: [
        'Preserved as foundational evidence of earlier full-stack Python architectures.'
      ]
    },
    archive: {
      state: 'legacy',
      reason: 'LEGACY',
      originalYear: '2023',
      archivedAt: '2023-12',
      archiveNote: 'Early exploration of event registration state machines and relational schemas in Python/Flask.'
    }
  }
];

export const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'quant', label: 'Quantitative & AI' },
  { id: 'ai', label: 'Applied AI & Agents' },
  { id: 'engineering', label: 'Full-Stack' },
  { id: 'product', label: 'Products' },
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



