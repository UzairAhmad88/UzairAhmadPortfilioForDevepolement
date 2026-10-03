import type {
  MethodologyStep,
  EngineeringDecisionPattern,
  BuildPrinciple,
  ProjectPathFlow,
  MethodologyManifest,
} from '@/types/methodology';

export const methodologySteps: MethodologyStep[] = [
  {
    id: 'understand',
    number: '01',
    title: 'Understand',
    tagline: 'Problem Framing & Boundary Discovery',
    shortDescription: 'Deconstruct constraints, examine data characteristics, and define operational failure modes before designing solutions.',
    description: 'Every engineering effort begins by formulating the real constraints: data non-stationarity, noise levels, latency budgets, state mutations, and operator workflows. Rushing to code before understanding the fundamental problem leads to fragile architectures and phantom solutions.',
    questions: [
      'What mathematical or operational constraint makes this problem non-trivial?',
      'Where does the empirical data distribution or regime break down?',
      'Who operates this interface or pipeline, and what are their primary failure modes?',
      'What assumptions can be proven or disproven before writing production code?'
    ],
    practices: [
      'Empirical data inspection & noise profiling',
      'Operational boundary formulation',
      'Literature review & baseline benchmarking',
      'User workflow & error mode mapping'
    ],
    artifacts: [
      'Mathematical problem statements',
      'Input/output contract specifications',
      'Temporal split boundary definitions',
      'Clinical & business workflow diagrams'
    ],
    projectSlugs: [
      'deep-learning-stock-return-prediction',
      'multi-agent-prospect-intelligence',
      'market-regime-engine'
    ]
  },
  {
    id: 'model',
    number: '02',
    title: 'Model',
    tagline: 'Structural Topologies & Data Contracts',
    shortDescription: 'Design explicit schemas, state graphs, model layers, and system boundaries before implementation becomes expensive to alter.',
    description: 'Structure precedes syntax. I map the topological relationship between inputs, transformations, and outputs. For AI systems, this means defining directed state machines and validation guardrails; for web software, this means establishing relational schemas and decoupled API boundaries.',
    questions: [
      'What are the core state entities and how do they transition over time?',
      'Where must deterministic guardrails isolate probabilistic model outputs?',
      'How do we enforce shared schema contracts between client, server, and storage?',
      'What components should remain decoupled to prevent cascading failure?'
    ],
    practices: [
      'Directed state graph topology design',
      'Relational schema normalization',
      'Pydantic / TypeScript shared contract authoring',
      'Multi-tier architectural separation'
    ],
    artifacts: [
      'State machine transition graphs',
      'PostgreSQL relational schema definitions',
      'Pydantic schema validation models',
      'System architecture flowcharts'
    ],
    projectSlugs: [
      'multi-agent-prospect-intelligence',
      'curasphere-hms',
      'market-regime-engine'
    ]
  },
  {
    id: 'design',
    number: '03',
    title: 'Design',
    tagline: 'Usability Ergonomics & Interface Hierarchy',
    shortDescription: 'Structure information architecture and interaction models to minimize cognitive load and eliminate operator error.',
    description: 'Design is functional clarity, not decorative embellishment. Whether engineering a hospital receptionist portal, a high-throughput POS touch interface, or a quant research dashboard, the interface must present high-density data clearly with zero layout shift and instantaneous visual feedback.',
    questions: [
      'How can high-density technical data be presented with zero visual ambiguity?',
      'What visual feedback prevents operator error during rapid data entry?',
      'Does the interface maintain accessibility (WCAG AA) and zero CLS across devices?',
      'How does the layout adapt from mobile touchscreens to multi-monitor workstations?'
    ],
    practices: [
      'Role-based layout segregation',
      'High-contrast typography & color token hierarchy',
      'Touch target & keyboard navigation optimization',
      'Zero-layout-shift component design'
    ],
    artifacts: [
      'Responsive component layout systems',
      'Design token scales (spacing, typography, color)',
      'Role-based route wireframes',
      'Accessibility audit checklists'
    ],
    projectSlugs: [
      'curasphere-hms',
      'restaurant-pos',
      'hayatabad-gym'
    ]
  },
  {
    id: 'build',
    number: '04',
    title: 'Build',
    tagline: 'Incremental Implementation & Strict Typing',
    shortDescription: 'Write modular, type-safe, and testable code with minimal abstraction and maximum domain isolation.',
    description: 'I write software incrementally, starting with the simplest working core and validating each component before adding complexity. Tensor operations, API endpoints, state mutations, and UI components are strictly typed and decoupled by domain boundaries.',
    questions: [
      'What is the cleanest minimal implementation that validates the core architecture?',
      'Are tensor operations, state updates, and backend controllers strictly typed?',
      'What code paths should remain simple rather than prematurely abstracted?',
      'Are error handling and fallback states explicitly defined at every boundary?'
    ],
    practices: [
      'Custom PyTorch Dataset and neural layer implementation',
      'Type-safe REST controller and middleware authoring',
      'Component-driven frontend architecture',
      'Deterministic error handling & state fallback recovery'
    ],
    artifacts: [
      'Modular Python / PyTorch research modules',
      'Full-stack TypeScript / Node.js web applications',
      'State-managed UI component libraries',
      'Inspectable open-source GitHub repositories'
    ],
    projectSlugs: [
      'deep-learning-stock-return-prediction',
      'curasphere-hms',
      'market-regime-engine',
      'restaurant-pos'
    ]
  },
  {
    id: 'validate',
    number: '05',
    title: 'Validate',
    tagline: 'Empirical Verification & Out-of-Sample Testing',
    shortDescription: 'Subject models, APIs, and interfaces to rigorous out-of-sample tests, edge case stress, and automated verification.',
    description: 'Code is not complete because it compiles or runs in-sample. Quantitative models undergo walk-forward cross-validation to guarantee zero lookahead bias. Agent outputs are filtered through strict Pydantic schemas. Web applications undergo automated test suites, responsive checks, and performance audits.',
    questions: [
      'What assumptions could leak future data or create false statistical confidence?',
      'Does the model or algorithm hold up under strict out-of-sample temporal partitions?',
      'Do schema validators catch corrupted or hallucinated model payloads?',
      'Do automated unit tests, responsive viewports, and accessibility checks pass?'
    ],
    practices: [
      'Walk-forward expanding window cross-validation',
      'Automated unit testing & state sanitization',
      'Runtime schema validation with Pydantic / TypeScript',
      'Lighthouse performance and WCAG AA accessibility audits'
    ],
    artifacts: [
      'Sharpe ratio, drawdown, and directional accuracy logs',
      'Automated test suite reports',
      'Schema validation error catchers',
      'Cross-browser & mobile responsive audit reports'
    ],
    projectSlugs: [
      'deep-learning-stock-return-prediction',
      'multi-agent-prospect-intelligence',
      'market-regime-engine'
    ]
  },
  {
    id: 'iterate',
    number: '06',
    title: 'Iterate',
    tagline: 'Retrospective Analysis & Controlled Refinement',
    shortDescription: 'Analyze empirical results, document architectural trade-offs, and refine systems based on real execution telemetry.',
    description: 'Engineering is a cycle of measured refinement. When market regime labels flip across rolling windows, I implement variance ordering. When touch targets slow down restaurant cashiers, I redesign button geometry. I document limitations and lessons learned so systems stay maintainable over time.',
    questions: [
      'What unexpected behaviors or limitations emerged during actual execution?',
      'Why did a particular model seed, layout, or state transition behave non-optimally?',
      'What architectural trade-offs must be explicitly documented for future contributors?',
      'How can telemetry inform the next controlled iteration without introducing regressions?'
    ],
    practices: [
      'Variance-ordered cluster sorting to prevent label flipping',
      'Touchscreen UI ergonomics & keyboard shortcut refinement',
      'Documenting architectural limitations & future roadmaps',
      'Refactoring state limits & inference token optimizations'
    ],
    artifacts: [
      'Documented engineering decision records',
      'Limitations and lessons learned sections in case studies',
      'Variance-ordering sorting algorithms',
      'Optimized state transition controllers'
    ],
    projectSlugs: [
      'market-regime-engine',
      'restaurant-pos',
      'deep-learning-stock-return-prediction',
      'multi-agent-prospect-intelligence'
    ]
  }
];

export const engineeringDecisions: EngineeringDecisionPattern[] = [
  {
    id: 'pytorch-over-wrappers',
    title: 'PyTorch over High-Level ML Wrappers for Financial Return Modeling',
    context: 'Financial time-series forecasting requires custom directional loss penalties, exact tensor sliding window slicing, and explicit GPU memory lifecycle control.',
    decision: 'Used PyTorch for deep neural network architecture design rather than high-level wrappers like Keras or FastAI.',
    alternatives: ['Keras / TensorFlow Sequential', 'FastAI', 'Scikit-Learn Multi-Layer Perceptrons'],
    rationale: 'Provides low-level tensor control, dynamic computational graphs, and seamless integration of custom loss penalties penalizing directional errors more heavily than magnitude errors.',
    tradeoffs: [
      'Requires explicit boilerplate for training loops, learning rate schedulers, and GPU memory lifecycle management.',
      'Slightly steeper maintenance overhead compared to one-liner model fit APIs.'
    ],
    projectSlugs: ['deep-learning-stock-return-prediction']
  },
  {
    id: 'state-graphs-over-prompt-chains',
    title: 'Deterministic State Graphs over Free-Form Prompt Chaining for Multi-Agent AI',
    context: 'Autonomous multi-agent research pipelines are prone to infinite execution loops, hallucinations, and unformatted outputs when using unstructured prompt chains.',
    decision: 'Architected the agent execution pipeline as a directed state graph with explicit step iteration limits and Pydantic schema validation guardrails.',
    alternatives: ['Single monolithic LLM prompt', 'Free-form LangChain AgentExecutor', 'Recursive unstructured sub-prompts'],
    rationale: 'Guarantees predictable state transitions, clear execution traces for debugging, and automated fallback when an individual specialist agent returns malformed data.',
    tradeoffs: [
      'Requires upfront state schema definition and transition logic authoring.',
      'Slightly less open-ended exploratory autonomy in exchange for zero-hallucination structured outputs.'
    ],
    projectSlugs: ['multi-agent-prospect-intelligence']
  },
  {
    id: 'fullstack-typescript-contracts',
    title: 'Unified TypeScript Data Contracts across Frontend and Backend',
    context: 'Healthcare management systems handle critical patient records, physician schedules, and prescription data where runtime null errors or mismatched field names cannot happen.',
    decision: 'Enforced shared TypeScript interface definitions and payload validators across both the React frontend and Node.js/Express API layers.',
    alternatives: ['Untyped JavaScript with runtime schema validation only', 'Independent frontend and backend type files with manual sync'],
    rationale: 'Compile-time type verification eliminates null-pointer runtime crashes and guarantees synchronized data structures from database queries to React form state.',
    tradeoffs: [
      'Requires disciplined maintenance when altering database schemas or API response payloads.',
      'Initial setup requires centralized type repositories.'
    ],
    projectSlugs: ['curasphere-hms']
  },
  {
    id: 'gmm-clustering-over-fixed-thresholds',
    title: 'Probabilistic Gaussian Mixture Models over Fixed Volatility Thresholds',
    context: 'Financial market volatility shifts across macro cycles; hardcoded volatility thresholds fail when the broader baseline market regime changes.',
    decision: 'Used unsupervised Gaussian Mixture Models (GMM) with AIC/BIC model selection to partition volatility states dynamically.',
    alternatives: ['Fixed historical volatility thresholds (e.g. VIX > 25)', 'K-Means clustering', 'Rule-based ATR moving averages'],
    rationale: 'Probabilistic clustering models output continuous state membership probabilities and smoothly adapt to empirical distribution shifts without arbitrary static cutoffs.',
    tradeoffs: [
      'Expectation-Maximization (EM) algorithm is sensitive to initial parameter seeds.',
      'Requires deterministic variance-sorting post-processing to prevent cluster label flipping across rolling windows.'
    ],
    projectSlugs: ['market-regime-engine']
  },
  {
    id: 'variance-ordered-regime-sorting',
    title: 'Deterministic Variance-Ordered Sorting for Latent Cluster Labels',
    context: 'Unsupervised clustering models assign cluster indices arbitrarily on each fit; re-fitting on sliding windows caused regime labels (0, 1, 2) to flip semantically.',
    decision: 'Implemented an automatic post-clustering step that sorts latent clusters in ascending order of realized volatility variance before exporting state signals.',
    alternatives: ['Manual label remapping after visual inspection', 'Static single-pass clustering on all history'],
    rationale: 'Ensures cluster 0 always represents the lowest-volatility regime and cluster 2 represents the highest-volatility regime, allowing downstream trading systems to automate risk throttles safely.',
    tradeoffs: [
      'Assumes volatility variance is the monotonic differentiator of financial market regimes.'
    ],
    projectSlugs: ['market-regime-engine']
  },
  {
    id: 'local-state-cache-for-pos',
    title: 'Optimized Local State Persistence for Restaurant POS Operations',
    context: 'Peak restaurant dining periods require instantaneous 1-touch touchscreen feedback without latency or vulnerability to intermittent Wi-Fi hiccups.',
    decision: 'Engineered a client-first local state architecture with instant visual mutations and reliable transaction ledger caching.',
    alternatives: ['Synchronous roundtrip network requests on every button click', 'Heavy SPA state frameworks with remote cloud locks'],
    rationale: 'Provides zero-latency button response and guarantees order continuity even under physical dining room network stress.',
    tradeoffs: [
      'Requires explicit synchronization protocols for multi-terminal concurrency.'
    ],
    projectSlugs: ['restaurant-pos']
  }
];

export const buildPrinciples: BuildPrinciple[] = [
  {
    id: 'evidence-first',
    title: 'Empirical Evidence over Theoretical Assumption',
    statement: 'Models and architectures must be validated against real data, strict out-of-sample partitions, and verifiable execution metrics.',
    description: 'I do not rely on in-sample performance or optimistic assumptions. Every quantitative claim is backed by walk-forward backtests, and every software interface is tested against real operator failure modes.',
    evidenceSlugs: ['deep-learning-stock-return-prediction', 'market-regime-engine']
  },
  {
    id: 'deterministic-boundaries',
    title: 'Deterministic Boundaries for Probabilistic Systems',
    statement: 'Wrap AI models and LLM agents in strict schema contracts, state graphs, and validation guardrails.',
    description: 'Probabilistic machine learning models should never communicate directly with end users or databases without deterministic schema validation, timeout limits, and boundary sanitization.',
    evidenceSlugs: ['multi-agent-prospect-intelligence']
  },
  {
    id: 'simplicity-before-abstraction',
    title: 'Simplicity before Premature Abstraction',
    statement: 'Build the clearest minimal working system before introducing architectural layers or generic abstractions.',
    description: 'Premature generalization creates bloated, fragile software. I write clean, direct implementations with clear domain boundaries, abstracting only when repeated concrete patterns demand it.',
    evidenceSlugs: ['curasphere-hms', 'restaurant-pos']
  },
  {
    id: 'transparent-limitations',
    title: 'Honest Documentation of Limitations & Trade-offs',
    statement: 'A technical project is incomplete without documenting its operational constraints, edge case failures, and design trade-offs.',
    description: 'Real engineering involves conscious compromises. Every case study in this portfolio details its exact limitations, hardware boundaries, and lessons learned.',
    evidenceSlugs: ['deep-learning-stock-return-prediction', 'market-regime-engine', 'curasphere-hms']
  }
];

export const projectPathFlows: ProjectPathFlow[] = [
  {
    id: 'quant-ml-flow',
    name: 'Quantitative Machine Learning Pipeline',
    domain: 'Quantitative Finance & PyTorch',
    projectSlug: 'deep-learning-stock-return-prediction',
    description: 'Research workflow for time-series forecasting with zero lookahead bias and strict out-of-sample evaluation.',
    steps: [
      'Market Data Ingestion (OHLCV Series)',
      'Stationarized Feature Engineering & GARCH Volatility',
      'Sliding Window PyTorch Dataset Construction',
      'Neural Architecture Training with Directional Loss Penalties',
      'Walk-Forward Expanding Window Out-of-Sample Backtesting'
    ]
  },
  {
    id: 'agentic-ai-flow',
    name: 'Stateful Multi-Agent AI System',
    domain: 'Agentic AI & LangGraph',
    projectSlug: 'multi-agent-prospect-intelligence',
    description: 'Collaborative agent workflow with deterministic state routing and anti-hallucination schema guardrails.',
    steps: [
      'User Query & Target Domain Constraint Formulation',
      'Orchestrator Router & State Graph Task Decomposition',
      'Specialist Worker Agent Execution (Research, Enrichment, Scoring)',
      'Deterministic Pydantic Schema Validation & Sanitization',
      'Interactive Decision Briefing UI Presentation'
    ]
  },
  {
    id: 'fullstack-saas-flow',
    name: 'Tiered Full-Stack Application Architecture',
    domain: 'Full-Stack Web Engineering',
    projectSlug: 'curasphere-hms',
    description: 'Clinical web application with role-based access control, relational EMR, and zero layout shift.',
    steps: [
      'Clinical Workflow & Role Permission Mapping',
      'PostgreSQL Relational Schema & TypeScript Contract Definition',
      'Express Auth Gateway & REST API Controller Implementation',
      'Accessible, Zero-CLS React UI Component Construction',
      'Responsive Mobile/Tablet Testing & Vercel Production Deployment'
    ]
  },
  {
    id: 'statistical-clustering-flow',
    name: 'Unsupervised Market Regime Discovery Engine',
    domain: 'Statistical Machine Learning',
    projectSlug: 'market-regime-engine',
    description: 'Algorithmic pipeline partitioning latent market states and sorting labels by volatility variance.',
    steps: [
      'Multi-Asset Price History Ingestion',
      'Rolling Statistical Moment Extraction (Volatility, Skew, Kurtosis)',
      'Gaussian Mixture Model (GMM) Fitting with AIC/BIC Selection',
      'Deterministic Volatility Variance-Ordered Labeling',
      'Continuous State Probability Feed for Risk Throttling'
    ]
  }
];

export const methodologyManifest: MethodologyManifest = {
  headline: 'How I Build Systems',
  subheading: 'A disciplined, evidence-grounded engineering methodology that moves from problem formulation and mathematical modeling to modular code, empirical validation, and controlled iteration.',
  philosophy: 'I do not view software or machine learning as a series of disconnected coding sprints. I approach systems by first understanding domain constraints and data distributions, structuring deterministic models and data contracts, building incrementally with strict typing, validating rigorously out-of-sample, and documenting real trade-offs.',
  steps: methodologySteps,
  decisionPatterns: engineeringDecisions,
  principles: buildPrinciples,
  pathFlows: projectPathFlows,
};

export function getMethodologyStep(id: string): MethodologyStep | undefined {
  return methodologySteps.find((s) => s.id === id);
}

export function getDecisionsForProject(slug: string): EngineeringDecisionPattern[] {
  return engineeringDecisions.filter((d) => d.projectSlugs.includes(slug));
}

export function getStepsForProject(slug: string): MethodologyStep[] {
  return methodologySteps.filter((s) => s.projectSlugs.includes(slug));
}
