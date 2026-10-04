import type { SkillCategory, UniverseNode } from '@/types/skill';

export const tickerSkills: string[] = [
  'Python',
  'Quant',
  'HFT',
  'Financial Engineering',
  'AI',
  'ML',
  'DL',
  'GenAI',
  'Agentic AI',
  'Full Stack',
  'Products',
];

export const universeNodes: UniverseNode[] = [
  { label: 'QUANT', x: '10%', y: '20%' },
  { label: 'AI', x: '78%', y: '18%' },
  { label: 'ML', x: '56%', y: '10%' },
  { label: 'HFT', x: '16%', y: '74%' },
  { label: 'PRODUCTS', x: '80%', y: '72%' },
  { label: 'FULL STACK', x: '34%', y: '82%' },
  { label: 'FINTECH', x: '6%', y: '48%' },
  { label: 'AGENTS', x: '72%', y: '46%' },
  { label: 'DL', x: '32%', y: '20%' },
  { label: 'GENAI', x: '60%', y: '78%' },
];

export const stackMap: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Python, JavaScript / TypeScript, SQL, HTML / CSS',
  },
  {
    title: 'Quantitative',
    description:
      'Financial engineering, algorithmic trading, HFT, time-series analysis, signal research, backtesting.',
  },
  {
    title: 'AI / ML',
    description:
      'Machine learning, deep learning, generative AI, agentic AI, NLP, prediction systems, automation.',
  },
  {
    title: 'Engineering',
    description: 'Frontend, backend, APIs, databases, architecture, cloud deployment, CI/CD.',
  },
  {
    title: 'Product',
    description:
      'MVP development, SaaS, business automation, AI products, financial products, UX / UI.',
  },
];
