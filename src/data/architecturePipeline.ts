export interface BuildStage {
  id: string;
  step: string;
  title: string;
  focus: string;
  activities: string[];
  deliverables: string;
  standards: string;
}

export const buildStages: BuildStage[] = [
  {
    id: 'problem',
    step: '01',
    title: 'Problem Formulation',
    focus: 'Deconstruct real constraints, data non-stationarity, latency requirements, and user workflows.',
    activities: [
      'Define mathematical & operational boundaries',
      'Identify data regime shifts & noise characteristics',
      'Specify user workflows and UX failure modes',
    ],
    deliverables: 'Formal problem statement & technical requirements specification.',
    standards: 'Zero hand-waving: every problem is scoped to measurable outcomes.',
  },
  {
    id: 'architecture',
    step: '02',
    title: 'Systems & Schema Design',
    focus: 'Architect data contracts, state machines, model pipelines, and UI component graphs before writing code.',
    activities: [
      'Design relational/time-series data schemas',
      'Draft deterministic state machines & API interfaces',
      'Plan component hierarchy & responsive UX wireframes',
    ],
    deliverables: 'Clean architectural topology, TypeScript data types, and API contracts.',
    standards: 'Strict decoupling: backend business logic never leaks into frontend presentation.',
  },
  {
    id: 'engineering',
    step: '03',
    title: 'Core Implementation',
    focus: 'Build high-performance tensor transformations, backend endpoints, and fluid accessible interfaces.',
    activities: [
      'Train & fine-tune neural architectures in PyTorch',
      'Build resilient RESTful APIs in Node.js / Express / Python',
      'Craft semantic, accessible, mobile-first web components in Astro/React',
    ],
    deliverables: 'Modular, maintainable codebase organized by domain boundaries.',
    standards: '100% typed, linted, and inspectable code.',
  },
  {
    id: 'validation',
    step: '04',
    title: 'Empirical Validation',
    focus: 'Test hypotheses out-of-sample, verify edge cases, and execute unit/integration test suites.',
    activities: [
      'Execute walk-forward cross-validation on time-series models',
      'Run automated unit tests for state sanitization and calculations',
      'Audit accessibility (WCAG AA) and cross-browser responsiveness',
    ],
    deliverables: 'Automated test suite reports and empirical performance telemetry.',
    standards: 'No lookahead bias, no fake data benchmarks.',
  },
  {
    id: 'deployment',
    step: '05',
    title: 'Production & Iteration',
    focus: 'Deploy to high-speed global CDNs with automated CI/CD and verifiable public artifacts.',
    activities: [
      'Continuous deployment via Vercel & GitHub Actions',
      'Performance audit for sub-second LCP and zero CLS',
      'Document architecture, lessons learned, and public repositories',
    ],
    deliverables: 'Live production URL, inspectable GitHub repo, and technical documentation.',
    standards: 'Zero dead links, zero placeholder text, immediate usability.',
  },
];
