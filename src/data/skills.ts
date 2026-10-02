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
  { label: 'QUANT', x: '12%', y: '18%' },
  { label: 'AI', x: '74%', y: '16%' },
  { label: 'ML', x: '56%', y: '8%' },
  { label: 'HFT', x: '20%', y: '72%' },
  { label: 'PRODUCTS', x: '78%', y: '70%' },
  { label: 'FULL STACK', x: '42%', y: '78%' },
  { label: 'FINTECH', x: '8%', y: '48%' },
  { label: 'AGENTS', x: '68%', y: '44%' },
  { label: 'DL', x: '38%', y: '24%' },
  { label: 'GENAI', x: '52%', y: '56%' },
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
