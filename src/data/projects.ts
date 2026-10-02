import type { Project } from '@/types/project';

export const featuredProject: Project = {
  slug: 'deep-learning-stock-return-prediction',
  title: 'Deep Learning Stock Return Prediction',
  category: ['quant', 'ai', 'product'],
  projectType: 'Quantitative Research & System',
  problem: 'Financial markets exhibit non-stationary, low signal-to-noise time-series dynamics where classical linear models fail to capture multi-horizon non-linear dependencies.',
  solution: 'Developed an end-to-end quantitative research and forecasting pipeline in Python and PyTorch that ingests market data, constructs stationarized technical features, trains neural architectures, and evaluates risk-adjusted predictive signals.',
  system: 'End-to-end research pipeline for market data ingestion, feature engineering, neural network training, return forecasting, and backtest risk evaluation.',
  product: 'Modular Python quantitative trading framework with reusable components for feature calculation, model training, and out-of-sample signal analysis.',
  outcome: 'Engineered an extensible deep learning research platform with verifiable out-of-sample backtesting metrics and disciplined cross-validation.',
  featured: true,
  featuredSubheading: 'Featured Case Study',
  githubUrl: 'https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
  technologies: ['Python', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
  tags: ['Quantitative Finance', 'Machine Learning', 'Time-Series', 'PyTorch'],
  role: 'Lead Quantitative AI Engineer',
  timeline: '2024 – Present',
  status: 'active',
  order: 1,
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
    timeline: 'Active Research Project',
    approach: 'Structured the system into 4 distinct architectural layers: Data Extraction, Feature Transformation, Neural Modeling, and Risk/Backtest Analytics. Applied fractional differentiation and log-return normalization to preserve memory while achieving stationarity.',
    architectureDiagram: `┌────────────────┐    ┌─────────────────────┐    ┌──────────────────────┐    ┌─────────────────────┐
│ Historical     │───►│ Feature Store &     │───►│ Deep Learning Neural │───►│ Signal Evaluator    │
│ Market Data    │    │ Normalization (GARCH│    │ Architecture         │    │ & Backtest Engine   │
│ (OHLCV Series) │    │ Technical Features) │    │ (PyTorch/GPU)        │    │ (Sharpe, Returns)   │
└────────────────┘    └─────────────────────┘    └──────────────────────┘    └─────────────────────┘`,
    architectureNotes: 'Data flows sequentially with strict chronological boundaries to guarantee no future data leaks into feature calculations or training batches.',
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
        rationale: 'Provides explicit tensor control, dynamic execution graphs, and straightforward custom loss functions compared to higher-level wrappers.'
      },
      {
        decision: 'Walk-Forward Expanding Window Validation',
        rationale: 'Standard k-fold cross validation destroys temporal sequence in time-series data; walk-forward validation faithfully reproduces live deployment conditions.'
      }
    ],
    outcomes: [
      'Complete modular codebase with public verifiable GitHub repository.',
      'Demonstrated consistent directional precision improvements over naive random walk baselines in backtesting.',
      'Established a clean template for future quantitative algorithmic trading experiments.'
    ],
    lessonsLearned: [
      'Feature engineering quality and clean data normalization have far greater impact on predictive stability than model parameter count.',
      'Overparameterized neural networks rapidly overfit financial noise without aggressive regularization and domain-specific loss penalties.'
    ]
  }
};

export const projects: Project[] = [
  featuredProject,
  {
    slug: 'curasphere-hms',
    title: 'CuraSphere HMS',
    category: ['engineering', 'product'],
    projectType: 'Healthcare Management SaaS',
    problem: 'Healthcare clinics and hospital departments suffer from fragmented patient record management, slow intake workflows, and uncoordinated appointment scheduling across medical staff.',
    solution: 'Engineered a modern, responsive Healthcare Management System (HMS) with role-based access control, electronic medical records (EMR), patient queue tracking, and administrative dashboards.',
    product: 'Full-stack hospital and clinic management platform with specialized portals for doctors, nurses, administrative staff, and patients.',
    system: 'Role-based application architecture built with modern web standards, secure API endpoints, and relational patient record data models.',
    outcome: 'Delivered an intuitive, responsive web application streamlining patient registration, consultation tracking, and billing operations.',
    githubUrl: 'https://github.com/UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'TailwindCSS', 'PostgreSQL'],
    tags: ['Healthcare SaaS', 'Full-Stack', 'TypeScript', 'Web Platform'],
    role: 'Full-Stack Web Engineer',
    timeline: 'Completed Project',
    status: 'completed',
    order: 2,
    caseStudy: {
      overview: 'CuraSphere HMS is an end-to-end digital health management system designed to coordinate clinical operations, physician scheduling, patient history tracking, and administrative invoicing.',
      context: 'Small to mid-sized medical clinics frequently rely on disconnected spreadsheets and paper files, introducing operational friction and patient wait times.',
      objectives: [
        'Design a clear, accessible UI for medical receptionists and physicians operating in fast-paced clinical environments.',
        'Implement role-based authorization (Admin, Doctor, Nurse, Reception).',
        'Provide instant search and filtering across patient records, appointments, and prescriptions.'
      ],
      role: 'Full-Stack Developer — UI design, component engineering, REST API architecture, and database modeling.',
      timeline: 'Completed',
      approach: 'Built a modular frontend component system paired with structured REST API endpoints and relational schemas for patient encounters and prescriptions.',
      architectureDiagram: `┌───────────────────────┐      ┌─────────────────────────┐      ┌───────────────────────┐
│ Frontend Application  │◄────►│ Backend API Server      │◄────►│ Relational Database   │
│ (React / TypeScript)  │      │ (Node.js / Express Auth)│      │ (Patient Records/EMR) │
└───────────────────────┘      └─────────────────────────┘      └───────────────────────┘`,
      challenges: [
        {
          challenge: 'Role-Based Navigation and State Segregation',
          solution: 'Implemented declarative route guards and token-based permission checking across doctor and reception views.'
        }
      ],
      keyDecisions: [
        {
          decision: 'TypeScript for both Frontend and Backend Contracts',
          solution: 'Guaranteed shared interface definitions between API responses and UI state, reducing runtime serialization bugs.'
        }
      ],
      outcomes: [
        'Complete working HMS platform with authenticated clinician portals and patient record management.',
        'Zero-layout-shift UI tested across desktop workstations and tablet form factors.'
      ],
      lessonsLearned: [
        'Healthcare software prioritizes clarity, error prevention, and high contrast over complex animations.'
      ]
    }
  },
  {
    slug: 'market-regime-engine',
    title: 'Market Regime Detection Engine',
    category: ['quant', 'ai'],
    projectType: 'Quantitative Market Intelligence',
    problem: 'Quantitative trading models often suffer catastrophic drawdowns when market conditions shift from calm trending regimes into volatile mean-reverting states without warning.',
    solution: 'Designed an unsupervised machine learning engine that clusters multi-asset volatility, volume, and momentum indicators to classify market regimes dynamically.',
    system: 'Python algorithmic pipeline utilizing Gaussian Mixture Models (GMM) and Hidden Markov Models (HMM) for regime state transition detection.',
    outcome: 'Engineered an automated detection module providing regime classification signals to downstream risk management systems.',
    githubUrl: 'https://github.com/UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'GMM', 'HMM'],
    tags: ['Quantitative Finance', 'Unsupervised ML', 'Regime Detection', 'Python'],
    role: 'Quantitative Machine Learning Engineer',
    timeline: 'Active Research',
    status: 'active',
    order: 3,
    caseStudy: {
      overview: 'An algorithmic framework for discovering latent market states (Low-volatility bull, High-volatility bear, Sideways consolidation) using unsupervised statistical clustering.',
      context: 'Single-strategy trading systems struggle across changing macro environments. Identifying regime transitions enables dynamic parameter adaptation and risk throttle control.',
      objectives: [
        'Extract robust statistical features (realized volatility, ATR, volume variance, returns kurtosis).',
        'Fit probabilistic clustering models (GMM/HMM) to partition historical market data into distinct regimes.',
        'Evaluate transition probability matrices for forward risk estimation.'
      ],
      role: 'Research & Implementation Engineer.',
      timeline: 'Active Research Project',
      approach: 'Calculated statistical distribution moments over rolling windows and fitted Gaussian Mixture Models with AIC/BIC model selection criteria.',
      architectureDiagram: `┌───────────────────┐    ┌───────────────────────┐    ┌─────────────────────┐    ┌────────────────────┐
│ Multi-Asset Data  │───►│ Statistical Moment    │───►│ Unsupervised GMM/   │───►│ Regime Probability │
│ Feed              │    │ Engine (Vol, Skew)   │    │ HMM Cluster Engine  │    │ & Signal Output    │
└───────────────────┘    └───────────────────────┘    └─────────────────────┘    └────────────────────┘`,
      challenges: [
        {
          challenge: 'Regime Label Flipping across Training Windows',
          solution: 'Ordered clusters by ascending volatility variance to guarantee consistent semantic interpretation across sequential refits.'
        }
      ],
      outcomes: [
        'Validated clustering separation on historical asset data with clear volatility partitioning.',
        'Modular Python package ready for integration with trading backtest simulators.'
      ]
    }
  },
  {
    slug: 'restaurant-pos',
    title: 'Restaurant POS & Management System',
    category: ['engineering', 'product'],
    projectType: 'Point-of-Sale & Operations Software',
    problem: 'Busy restaurants require instant order entry, kitchen ticket dispatching, inventory deduction, and billing without network lag or confusing multi-step interfaces.',
    solution: 'Developed a high-throughput Point of Sale (POS) and inventory control system with table layout management, order ticketing, and daily sales auditing.',
    product: 'Fast, responsive POS software tailored for touchscreens and quick-service operations.',
    system: 'Optimized local state architecture with instant visual feedback and reliable record persistence.',
    outcome: 'Shipped a full-featured restaurant operations tool simplifying order lifecycle and kitchen communication.',
    githubUrl: 'https://github.com/UzairAhmad88/Resturent-Managment-System---POS',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local DB', 'Responsive UI'],
    tags: ['POS System', 'Software Engineering', 'Operations', 'JavaScript'],
    role: 'Frontend & System Engineer',
    timeline: 'Completed Project',
    status: 'completed',
    order: 4,
    caseStudy: {
      overview: 'A specialized Point of Sale application designed for dining and takeaway restaurants, integrating order entry, table mapping, and transaction auditing.',
      context: 'Food service environments demand zero-latency button responses, clear visual table occupancy statuses, and simple bill generation.',
      objectives: [
        'Provide rapid 1-touch menu selection and order modification.',
        'Support table assignment, split billing, and daily revenue reporting.'
      ],
      role: 'Sole Developer.',
      outcomes: [
        'Functional POS software with end-to-end order processing and bill printing simulation.'
      ]
    }
  },
  {
    slug: 'hayatabad-gym',
    title: 'Hayatabad Gym Web Platform',
    category: ['engineering', 'product'],
    projectType: 'Fitness Platform & Brand Experience',
    problem: 'Fitness centers require a welcoming, informative web presence showcasing training programs, membership options, coach credentials, and direct inquiry channels.',
    solution: 'Created a high-performance, modern gym website featuring membership details, schedule overviews, trainer profiles, and inquiry contact forms.',
    product: 'Accessible public-facing fitness brand website with clean typography and mobile-friendly layouts.',
    system: 'Semantic HTML5 and CSS responsive architecture with zero layout shift and fast load times.',
    outcome: 'Delivered an engaging web experience driving member inquiries and establishing brand presence.',
    githubUrl: 'https://github.com/UzairAhmad88/Hayatabad-Gym-BYMe',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    tags: ['Web Development', 'Brand Platform', 'UI/UX', 'Mobile Responsive'],
    role: 'Web Designer & Developer',
    timeline: 'Completed Project',
    status: 'completed',
    order: 5,
    caseStudy: {
      overview: 'A modern, responsive web portal for Hayatabad Gym providing membership information, facility highlights, and membership inquiry options.',
      context: 'Local fitness facilities need fast, mobile-friendly landing pages that inform potential gym members without cluttered layouts.',
      objectives: [
        'Design a clean, high-contrast visual identity suitable for a premier athletic facility.',
        'Ensure 100% responsiveness across all mobile screen sizes and tablets.'
      ],
      role: 'Web Designer & Frontend Engineer.',
      outcomes: [
        'Deployed responsive gym website with seamless inquiry navigation.'
      ]
    }
  }
];

export const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'quant', label: 'Quantitative & AI' },
  { id: 'engineering', label: 'Full-Stack' },
  { id: 'product', label: 'Products' },
] as const;
