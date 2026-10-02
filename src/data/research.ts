import type { ResearchItem } from '@/types/research';

export const researchItems: ResearchItem[] = [
  {
    id: 'signal-research',
    badge: 'Exploring',
    title: 'Signal Research',
    question: 'Which market features hold useful predictive structure?',
    approach: 'Time-series analysis, statistical modeling, backtesting.',
  },
  {
    id: 'agentic-systems',
    badge: 'Experimenting',
    title: 'Agentic Systems',
    question: 'How can agents support repeatable research workflows?',
    approach: 'Task decomposition, tool use, workflow automation.',
  },
  {
    id: 'system-architecture',
    badge: 'Building',
    title: 'System Architecture',
    question: 'How do research systems become stable products?',
    approach: 'APIs, interfaces, data flows, deployment paths.',
  },
];
