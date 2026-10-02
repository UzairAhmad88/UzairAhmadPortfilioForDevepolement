import type { Project } from '@/types/project';

export const featuredProject: Project = {
  slug: 'deep-learning-stock-return-prediction',
  title: 'Deep Learning Stock Return Prediction',
  category: ['quant', 'ai', 'product'],
  projectType: 'Featured Case Study',
  problem: 'Explore whether model-driven signals can support quantitative trading research.',
  system: 'Research pipeline for data, model experimentation, return prediction, and strategy decision support.',
  featured: true,
  featuredSubheading: 'Featured Case Study',
  githubUrl: 'https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
  status: 'active',
  order: 1,
};

export const projects: Project[] = [
  {
    slug: 'curasphere-hms',
    title: 'CuraSphere HMS',
    category: ['engineering', 'product'],
    projectType: 'Healthcare SaaS',
    problem: 'Hospital workflows need organized digital operations.',
    product: 'A management platform for patient, staff, and operational flows.',
    githubUrl: 'https://github.com/UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    status: 'completed',
    order: 2,
  },
  {
    slug: 'market-regime-engine',
    title: 'Market Regime Engine',
    category: ['quant', 'ai'],
    projectType: 'Market Intelligence',
    problem: 'Identify market states and regime transitions.', // Mapped to research in original
    system: 'Python-based engine for adaptive strategy logic.',
    githubUrl: 'https://github.com/UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    status: 'active',
    order: 3,
  },
  {
    slug: 'restaurant-pos',
    title: 'Restaurant POS',
    category: ['engineering', 'product'],
    projectType: 'Business Software',
    problem: 'Restaurant teams need reliable ordering and operations tooling.',
    product: 'POS and management system for daily workflows.',
    githubUrl: 'https://github.com/UzairAhmad88/Resturent-Managment-System---POS',
    status: 'completed',
    order: 4,
  },
  {
    slug: 'hayatabad-gym',
    title: 'Hayatabad Gym',
    category: ['engineering', 'product'],
    projectType: 'Client Platform',
    problem: '', // Mapped to system in original
    system: 'Responsive web experience for services and brand presence.',
    outcome: 'A usable public-facing product interface.',
    githubUrl: 'https://github.com/UzairAhmad88/Hayatabad-Gym-BYMe',
    status: 'completed',
    order: 5,
  },
];

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'quant', label: 'Quant' },
  { id: 'ai', label: 'AI' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'product', label: 'Products' },
] as const;
