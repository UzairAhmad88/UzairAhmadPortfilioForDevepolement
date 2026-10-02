import type { GithubApiRepository, NormalizedRepository, RepositoryClassification } from './types.ts';

// Normalized technology dictionary
const TECH_DICTIONARY: Record<string, string> = {
  python: 'Python',
  pytorch: 'PyTorch',
  tensorflow: 'TensorFlow',
  scikitlearn: 'Scikit-Learn',
  'scikit-learn': 'Scikit-Learn',
  pandas: 'Pandas',
  numpy: 'NumPy',
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  react: 'React',
  reactjs: 'React',
  astro: 'Astro',
  nextjs: 'Next.js',
  'next.js': 'Next.js',
  nodejs: 'Node.js',
  'node.js': 'Node.js',
  express: 'Express',
  fastapi: 'FastAPI',
  postgresql: 'PostgreSQL',
  postgres: 'PostgreSQL',
  tailwind: 'TailwindCSS',
  tailwindcss: 'TailwindCSS',
  html5: 'HTML5',
  html: 'HTML5',
  css3: 'CSS3',
  css: 'CSS3',
  langgraph: 'LangGraph',
  langchain: 'LangChain',
};

/**
 * Validates whether an external URL uses safe HTTP/HTTPS protocols and approved domains
 */
export function isValidExternalUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

/**
 * Normalizes technology names from repository topics and primary language
 */
export function normalizeTechnologies(
  primaryLanguage: string | null,
  topics: string[] = []
): string[] {
  const techSet = new Set<string>();

  if (primaryLanguage) {
    const normalizedPrimary = TECH_DICTIONARY[primaryLanguage.toLowerCase()] || primaryLanguage;
    techSet.add(normalizedPrimary);
  }

  for (const topic of topics) {
    const key = topic.toLowerCase().replace(/[^a-z0-9]/g, '');
    const matched = TECH_DICTIONARY[key] || TECH_DICTIONARY[topic.toLowerCase()];
    if (matched) {
      techSet.add(matched);
    }
  }

  return Array.from(techSet);
}

/**
 * Infers repository classification based on name, topics, and description
 */
export function classifyRepository(repo: GithubApiRepository): RepositoryClassification {
  if (repo.archived) return 'ARCHIVED';

  const name = repo.name.toLowerCase();
  const desc = (repo.description || '').toLowerCase();
  const topics = (repo.topics || []).map((t) => t.toLowerCase());

  // Portfolio itself or site repositories
  if (name.includes('portfolio') || name.includes('portfilio')) {
    return 'PORTFOLIO';
  }

  // Academic / FYP indicators
  if (name.includes('fyp') || desc.includes('final year project') || topics.includes('fyp')) {
    return 'ACADEMIC';
  }

  // Quantitative research / modeling
  if (
    name.includes('stock-return') ||
    name.includes('regime') ||
    name.includes('quant') ||
    topics.includes('quantitative-finance') ||
    topics.includes('trading')
  ) {
    return 'RESEARCH';
  }

  // Products and systems
  if (
    name.includes('curasphere') ||
    name.includes('pos') ||
    name.includes('gym') ||
    name.includes('hms') ||
    topics.includes('fullstack')
  ) {
    return 'PORTFOLIO';
  }

  // Experimental / prototypes
  if (name.includes('demo') || name.includes('test') || name.includes('experiment')) {
    return 'EXPERIMENT';
  }

  return 'PORTFOLIO';
}

/**
 * Normalizes raw GitHub API repository payload into a clean domain model
 */
export function normalizeRepository(raw: GithubApiRepository): NormalizedRepository {
  const owner = raw.full_name.split('/')[0] || 'UzairAhmad88';
  const detectedTech = normalizeTechnologies(raw.language, raw.topics);
  const classification = classifyRepository(raw);

  return {
    id: String(raw.id),
    name: raw.name,
    fullName: raw.full_name,
    owner,
    description: raw.description ? raw.description.trim() : 'Software engineering repository on GitHub.',
    htmlUrl: isValidExternalUrl(raw.html_url) ? raw.html_url : `https://github.com/${raw.full_name}`,
    homepageUrl: isValidExternalUrl(raw.homepage) ? raw.homepage : null,
    primaryLanguage: raw.language || 'Software',
    detectedTechnologies: detectedTech,
    topics: raw.topics || [],
    classification,
    isArchived: Boolean(raw.archived),
    isPrivate: Boolean(raw.private),
    isFork: Boolean(raw.fork),
    defaultBranch: raw.default_branch || 'main',
    createdAt: raw.created_at,
    updatedAt: raw.updated_at,
    pushedAt: raw.pushed_at,
    stars: raw.stargazers_count || 0,
    forks: raw.forks_count || 0,
    openIssues: raw.open_issues_count || 0,
    licenseName: raw.license?.name || null,
  };
}
