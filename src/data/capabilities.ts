import type { CapabilityItem } from '@/types/capability';

export const capabilities: CapabilityItem[] = [
  {
    id: 'quant',
    number: '01',
    flow: 'Markets -> Signals -> Execution',
    title: 'Quantitative Research & Trading',
    description:
      'Signal research, market-regime modeling, return prediction, systematic strategies, financial modeling, and Python-first experimentation.',
    tags: [
      'Quant Research',
      'HFT',
      'Financial Engineering',
      'Algorithmic Trading',
      'Signals',
      'Backtesting',
      'Market Regimes',
    ],
    punchline: 'Understand the system.',
    visualType: 'signal',
  },
  {
    id: 'ai',
    number: '02',
    flow: 'Data -> Reasoning -> Agents',
    title: 'AI, ML, DL & Agentic Systems',
    description:
      'Applied intelligence for prediction, decision support, automation, generative workflows, and autonomous task execution.',
    tags: ['AI', 'ML', 'DL', 'GenAI', 'Agentic AI', 'Automation', 'Decision Systems'],
    punchline: 'Build intelligence.',
    visualType: 'network',
  },
  {
    id: 'engineering',
    number: '03',
    flow: 'Architecture -> API -> Deploy',
    title: 'Full Stack Engineering',
    description:
      'Designing reliable applications, APIs, backend systems, interfaces, data flows, and deployment-ready infrastructure.',
    tags: ['Python', 'Full Stack', 'Backend', 'Frontend', 'APIs', 'Databases', 'Cloud'],
    punchline: 'Build the infrastructure.',
    visualType: 'architecture',
  },
  {
    id: 'product',
    number: '04',
    flow: 'Idea -> MVP -> Product',
    title: 'Product Engineering',
    description:
      'Turning technical ideas into complete, usable products, from architecture and MVP to deployment and iteration.',
    tags: [
      'Product Development',
      'SaaS',
      'AI Products',
      'Financial Products',
      'Business Tools',
      'Automation',
    ],
    punchline: 'Make it useful.',
    visualType: 'product',
  },
];
