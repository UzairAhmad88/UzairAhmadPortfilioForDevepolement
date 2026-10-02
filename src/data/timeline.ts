export interface CurrentFocusItem {
  id: string;
  category: 'Building' | 'Learning' | 'Exploring' | 'Interested In';
  badgeColor: string;
  title: string;
  description: string;
  technologies: string[];
}

export const currentFocusItems: CurrentFocusItem[] = [
  {
    id: 'building-quant-engine',
    category: 'Building',
    badgeColor: '#7ed8c4',
    title: 'Deep Learning Stock Return Prediction Engine',
    description: 'Engineering an end-to-end quantitative research pipeline in Python and PyTorch with walk-forward risk evaluation and stationarized feature extraction.',
    technologies: ['PyTorch', 'Python', 'Pandas', 'NumPy', 'Scikit-Learn'],
  },
  {
    id: 'learning-time-series',
    category: 'Learning',
    badgeColor: '#d2a071',
    title: 'Fractional Differentiation & Non-Stationary Signal Processing',
    description: 'Investigating memory preservation techniques in financial time-series to retain predictive signal while achieving mathematical stationarity.',
    technologies: ['Time-Series Analysis', 'Fractional Calculus', 'Hidden Markov Models'],
  },
  {
    id: 'exploring-agentic-guardrails',
    category: 'Exploring',
    badgeColor: '#bda6ff',
    title: 'Deterministic State Machine Guardrails for LLM Pipelines',
    description: 'Architecting bounded execution graphs to eliminate non-deterministic failure modes and hallucinations in automated data extraction workflows.',
    technologies: ['TypeScript', 'LangGraph', 'Finite State Machines', 'JSON Schema'],
  },
  {
    id: 'interested-in-roles',
    category: 'Interested In',
    badgeColor: '#e0aaa7',
    title: 'Quantitative Engineering & High-Impact Product Roles',
    description: 'Open to selective collaborations and engineering positions where statistical modeling, systems engineering, and production craft intersect.',
    technologies: ['Full-Time Roles', 'Contract Engineering', 'Research Collaboration'],
  },
];
