import type { ArchitectureStage } from '@/types/skill';

export const architectureStages: ArchitectureStage[] = [
  {
    id: 'data',
    label: 'Data',
    skill: 'Raw inputs, datasets, market observations',
  },
  {
    id: 'research',
    label: 'Research',
    skill: 'Hypotheses, experiments, analysis',
  },
  {
    id: 'models',
    label: 'Models',
    skill: 'Quantitative and intelligent models',
  },
  {
    id: 'engine',
    label: 'Engine',
    skill: 'AI / quant decision engine',
  },
  {
    id: 'backend',
    label: 'Backend',
    skill: 'Services, databases, orchestration',
  },
  {
    id: 'api',
    label: 'API',
    skill: 'Contracts for products and tools',
  },
  {
    id: 'application',
    label: 'Application',
    skill: 'Interfaces and workflows',
  },
  {
    id: 'product',
    label: 'Product',
    skill: 'Useful software for real users',
  },
];
