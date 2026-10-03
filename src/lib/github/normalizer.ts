import type {
  GitHubApiRepository,
  GitHubRepository,
  RepositoryClassification,
  SourceType,
  ProvenanceState,
} from '../../types/github.ts';

// Normalized technology dictionary mapping raw topics / languages to canonical names
const TECH_DICTIONARY: Record<string, string> = {
  python: 'Python',
  pytorch: 'PyTorch',
  tensorflow: 'TensorFlow',
  scikitlearn: 'Scikit-Learn',
  'scikit-learn': 'Scikit-Learn',
  sklearn: 'Scikit-Learn',
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
  pydantic: 'Pydantic',
  cuda: 'CUDA',
  jupyter: 'Jupyter',
  git: 'Git',
  gmm: 'GMM',
};

/**
 * Escapes HTML to prevent XSS attacks when processing external repository text
 */
export function safeEscapeHtml(str: string | null | undefined): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Validates whether an external URL uses safe HTTP/HTTPS protocols
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
 * Sanitizes README or external description content
 */
export function sanitizeReadmeContent(content: string | null | undefined): string {
  if (!content) return '';
  // Strip out dangerous HTML script/iframe/object tags while leaving basic markdown text
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
    .replace(/javascript:/gi, '')
    .trim();
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
    const key = primaryLanguage.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normalizedPrimary = TECH_DICTIONARY[key] || TECH_DICTIONARY[primaryLanguage.toLowerCase()] || primaryLanguage;
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
 * Suggests repository classification based on metadata (heuristic for review, never auto-published)
 */
export function suggestRepositoryClassification(repo: GitHubApiRepository): RepositoryClassification {
  if (repo.archived) return 'archive';
  if (repo.fork) return 'fork';

  const name = repo.name.toLowerCase();
  const desc = (repo.description || '').toLowerCase();
  const topics = (repo.topics || []).map((t) => t.toLowerCase());

  if (name.includes('portfolio') || name.includes('portfilio')) {
    return 'infrastructure';
  }

  if (name.includes('fyp') || desc.includes('final year project') || topics.includes('fyp')) {
    return 'academic';
  }

  if (
    name.includes('stock-return') ||
    name.includes('regime') ||
    name.includes('quant') ||
    topics.includes('quantitative-finance') ||
    topics.includes('trading')
  ) {
    return 'portfolio';
  }

  if (
    name.includes('curasphere') ||
    name.includes('pos') ||
    name.includes('gym') ||
    name.includes('hms') ||
    topics.includes('fullstack')
  ) {
    return 'portfolio';
  }

  if (name.includes('demo') || name.includes('test') || name.includes('experiment') || name.includes('probe')) {
    return 'experiment';
  }

  return 'unknown';
}

/**
 * Normalizes raw GitHub API repository payload into a clean domain model
 */
export function normalizeRepository(
  raw: GitHubApiRepository,
  sourceType: SourceType = 'CACHED_GITHUB',
  provenance: ProvenanceState = 'Verified'
): GitHubRepository {
  const owner = raw.full_name ? raw.full_name.split('/')[0] : 'UzairAhmad88';
  const detectedTech = normalizeTechnologies(raw.language, raw.topics);
  const cleanDescription = raw.description ? safeEscapeHtml(raw.description.trim()) : 'Software engineering repository on GitHub.';

  return {
    id: String(raw.id),
    name: raw.name,
    fullName: raw.full_name,
    owner,
    url: raw.url || `https://api.github.com/repos/${raw.full_name}`,
    htmlUrl: isValidExternalUrl(raw.html_url) ? raw.html_url : `https://github.com/${raw.full_name}`,
    description: cleanDescription,
    visibility: raw.private ? 'private' : 'public',
    archived: Boolean(raw.archived),
    fork: Boolean(raw.fork),
    defaultBranch: raw.default_branch || 'main',
    language: raw.language || 'Software',
    languages: raw.language ? [raw.language] : [],
    detectedTechnologies: detectedTech,
    topics: raw.topics || [],
    stars: raw.stargazers_count || 0,
    forks: raw.forks_count || 0,
    watchers: raw.watchers_count || 0,
    createdAt: raw.created_at || new Date().toISOString(),
    updatedAt: raw.updated_at || new Date().toISOString(),
    pushedAt: raw.pushed_at || new Date().toISOString(),
    license: raw.license?.name || null,
    homepage: isValidExternalUrl(raw.homepage) ? raw.homepage : null,
    readmeAvailable: true,
    size: raw.size || 0,
    openIssues: raw.open_issues_count || 0,
    sourceType,
    fetchedAt: new Date().toISOString(),
    provenance,
  };
}
