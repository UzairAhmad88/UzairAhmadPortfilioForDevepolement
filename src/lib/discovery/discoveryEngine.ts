import type {
  DiscoveryItem,
  DiscoveryFilterState,
  DiscoveryMatchResult,
  DiscoveryTaxonomy,
  DiscoveryIndexPayload,
  DiscoveryItemType,
} from '../../types/discovery.ts';

import { projects } from '../../data/projects.ts';
import { researchItems } from '../../data/research.ts';
import { labItems } from '../../data/lab.ts';
import { engineeringNotes } from '../../data/notes.ts';
import { technologies } from '../../data/technologies.ts';
import { methodologySteps } from '../../data/methodology.ts';
import { knowledgeGraph, getDirectEdges } from '../../data/knowledgeGraph.ts';

// Common canonical alias mappings for deterministic query resolution
const TECH_ALIASES: Record<string, string> = {
  postgres: 'postgresql',
  pgsql: 'postgresql',
  py: 'python',
  ts: 'typescript',
  js: 'javascript',
  reactjs: 'react',
  'react.js': 'react',
  next: 'react',
  tf: 'pytorch',
  torch: 'pytorch',
  scikit: 'scikit-learn',
  sklearn: 'scikit-learn',
  ai: 'python',
  'machine learning': 'scikit-learn',
  ml: 'scikit-learn',
  tailwind: 'tailwindcss',
  node: 'nodejs',
};

export function buildDiscoveryIndex(): DiscoveryIndexPayload {
  const items: DiscoveryItem[] = [];

  function getRelatedIds(nodeId: string): string[] {
    const edges = getDirectEdges(knowledgeGraph, nodeId);
    const relatedSet = new Set<string>();
    for (const e of edges) {
      relatedSet.add(e.source === nodeId ? e.target : e.source);
    }
    return Array.from(relatedSet);
  }

  // 1. Projects
  for (const proj of projects) {
    if (proj.archive?.state === 'unpublished' || proj.archive?.state === 'excluded') {
      continue;
    }

    const nodeId = `project:${proj.slug}`;
    const techIds = (proj.technologies || []).map((t) => {
      const canonical = technologies.find(
        (ct) =>
          ct.id === t.toLowerCase().trim() ||
          ct.name.toLowerCase() === t.toLowerCase().trim() ||
          ct.aliases?.some((a) => a.toLowerCase() === t.toLowerCase().trim())
      );
      return canonical ? canonical.id : t.toLowerCase().trim();
    });

    const archiveState = proj.archive?.state || 'active';
    const archiveLabel = archiveState === 'superseded' ? 'Superseded' : archiveState === 'legacy' ? 'Legacy System' : archiveState === 'archived' ? 'Archived' : undefined;

    const topics: string[] = [
      proj.domain,
      proj.projectType,
      proj.type,
      ...(archiveLabel ? [archiveLabel] : []),
      proj.dna?.architecturePattern,
      ...(proj.technologies || []),
    ].filter((t): t is string => typeof t === 'string' && t.length > 0);

    const year = proj.archive?.originalYear || (proj.dna?.year ? String(proj.dna.year) : '2024');

    items.push({
      id: nodeId,
      type: 'project',
      slug: proj.slug,
      title: proj.title,
      href: `/work/${proj.slug}`,
      excerpt: proj.shortDescription || proj.problem,
      topics: Array.from(new Set(topics)),
      technologies: Array.from(new Set(techIds)),
      year,
      status: archiveLabel || proj.status,
      badge: archiveLabel || proj.projectType,
      searchableText: [
        proj.title,
        proj.shortDescription,
        proj.problem,
        proj.solution,
        proj.domain,
        proj.projectType,
        proj.type,
        archiveLabel,
        proj.archive?.archiveNote,
        proj.archive?.successorProjectTitle,
        ...(proj.technologies || []),
        ...(proj.outcome ? [proj.outcome] : []),
      ]
        .filter(Boolean)
        .join(' '),
      relatedIds: getRelatedIds(nodeId),
      metadata: {
        domain: proj.domain,
        featured: proj.featured,
        archiveState,
        successorProjectId: proj.archive?.successorProjectId,
      },
    });
  }


  // 2. Research Inquiries
  for (const res of researchItems) {
    const nodeId = `research:${res.slug}`;
    const topics: string[] = [
      res.domain,
      res.badge,
      ...(res.dataSources || []),
      ...(res.technologies || []),
    ].filter((t): t is string => typeof t === 'string' && t.length > 0);

    const year = res.publishedAt ? res.publishedAt.split('-')[0] : '2024';

    items.push({
      id: nodeId,
      type: 'research',
      slug: res.slug,
      title: res.title,
      href: `/research/${res.slug}`,
      excerpt: res.summary || res.question,
      topics: Array.from(new Set(topics)),
      technologies: res.technologies || [],
      year,
      status: res.status,
      badge: res.badge || 'Research Inquiry',
      searchableText: [
        res.title,
        res.question,
        res.summary,
        res.hypothesis,
        res.domain,
        res.badge,
        ...(res.openQuestions || []),
        ...(res.technologies || []),
      ]
        .filter(Boolean)
        .join(' '),
      relatedIds: getRelatedIds(nodeId),
      metadata: {
        domain: res.domain,
        featured: res.featured,
      },
    });
  }

  // 3. Lab Experiments
  for (const lab of labItems) {
    const nodeId = `lab:${lab.slug}`;
    const topics: string[] = [
      lab.type,
      lab.resultOutcome,
      ...(lab.topics || []),
    ].filter((t): t is string => typeof t === 'string' && t.length > 0);

    items.push({
      id: nodeId,
      type: 'lab',
      slug: lab.slug,
      title: lab.title,
      href: `/lab/${lab.slug}`,
      excerpt: lab.shortDescription || lab.question,
      topics: Array.from(new Set(topics)),
      technologies: lab.technologies || [],
      year: lab.year || '2024',
      status: lab.status,
      badge: lab.type,
      searchableText: [
        lab.title,
        lab.question,
        lab.shortDescription,
        lab.hypothesis,
        lab.experiment,
        lab.result,
        lab.resultOutcome,
        ...(lab.topics || []),
        ...(lab.technologies || []),
        ...(lab.lessonsLearned || []),
      ]
        .filter(Boolean)
        .join(' '),
      relatedIds: getRelatedIds(nodeId),
      metadata: {
        state: lab.state,
        resultOutcome: lab.resultOutcome,
      },
    });
  }

  // 4. Engineering Notes
  for (const note of engineeringNotes) {
    const nodeId = `note:${note.slug}`;
    const topics: string[] = [
      String(note.topic),
      String(note.type),
    ].filter((t): t is string => typeof t === 'string' && t.length > 0);

    const year = note.publishedAt ? note.publishedAt.split('-')[0] : '2024';

    items.push({
      id: nodeId,
      type: 'note',
      slug: note.slug,
      title: note.title,
      href: `/notes/${note.slug}`,
      excerpt: note.summary,
      topics: Array.from(new Set(topics)),
      technologies: note.technologies || [],
      year,
      status: 'Published',
      badge: note.type,
      searchableText: [
        note.title,
        note.summary,
        note.topic,
        note.type,
        ...(note.technologies || []),
        ...(note.lessons || []),
        ...(note.tradeoffs || []),
      ]
        .filter(Boolean)
        .join(' '),
      relatedIds: getRelatedIds(nodeId),
      metadata: {
        readingTimeMinutes: note.readingTimeMinutes,
        topic: note.topic,
      },
    });
  }

  // 5. Technologies
  for (const tech of technologies) {
    const nodeId = `technology:${tech.id}`;
    const topics: string[] = [
      tech.primaryRole,
      ...(tech.categories || []),
    ].filter(Boolean);

    items.push({
      id: nodeId,
      type: 'technology',
      slug: tech.id,
      title: tech.name,
      href: `/technology/${tech.id}`,
      excerpt: tech.tagline || tech.description,
      topics: Array.from(new Set(topics)),
      technologies: [tech.id],
      year: 'Core',
      status: tech.status,
      badge: tech.primaryRole,
      searchableText: [
        tech.name,
        tech.id,
        tech.tagline,
        tech.description,
        tech.primaryRole,
        ...(tech.categories || []),
        ...(tech.aliases || []),
      ]
        .filter(Boolean)
        .join(' '),
      relatedIds: getRelatedIds(nodeId),
      metadata: {
        status: tech.status,
        categories: tech.categories,
      },
    });
  }

  // 6. Methodology Steps
  for (const step of methodologySteps) {
    const nodeId = `methodology:${step.id}`;
    items.push({
      id: nodeId,
      type: 'methodology',
      slug: step.id,
      title: `${step.number} / ${step.title}`,
      href: `/how-i-build#step-${step.id}`,
      excerpt: step.tagline,
      topics: ['Engineering Methodology', 'Systems Engineering', step.title],
      technologies: [],
      year: 'Process',
      status: 'Active',
      badge: `Step ${step.number}`,
      searchableText: [
        step.title,
        step.tagline,
        step.description,
        step.shortDescription,
        ...(step.questions || []),
        ...(step.practices || []),
        ...(step.artifacts || []),
      ]
        .filter(Boolean)
        .join(' '),
      relatedIds: getRelatedIds(nodeId),
      metadata: {
        stepNumber: step.number,
      },
    });
  }

  // Build Aggregated Taxonomy
  const typeCountMap = new Map<DiscoveryItemType, number>();
  const techCountMap = new Map<string, number>();
  const topicCountMap = new Map<string, number>();
  const statusCountMap = new Map<string, number>();
  const yearCountMap = new Map<string, number>();

  for (const item of items) {
    typeCountMap.set(item.type, (typeCountMap.get(item.type) || 0) + 1);

    for (const techId of item.technologies) {
      techCountMap.set(techId, (techCountMap.get(techId) || 0) + 1);
    }

    for (const topic of item.topics) {
      topicCountMap.set(topic, (topicCountMap.get(topic) || 0) + 1);
    }

    if (item.status) {
      statusCountMap.set(item.status, (statusCountMap.get(item.status) || 0) + 1);
    }

    if (item.year) {
      yearCountMap.set(item.year, (yearCountMap.get(item.year) || 0) + 1);
    }
  }

  const typeLabels: Record<DiscoveryItemType, string> = {
    project: 'Projects',
    research: 'Research',
    lab: 'Lab Experiments',
    note: 'Engineering Notes',
    technology: 'Technologies',
    methodology: 'Methodology',
  };

  const taxonomy: DiscoveryTaxonomy = {
    types: (['project', 'research', 'lab', 'note', 'technology', 'methodology'] as DiscoveryItemType[]).map(
      (type) => ({
        type,
        label: typeLabels[type] || type,
        count: typeCountMap.get(type) || 0,
      })
    ),
    technologies: Array.from(techCountMap.entries())
      .map(([id, count]) => {
        const canonical = technologies.find((t) => t.id === id);
        return {
          id,
          name: canonical ? canonical.name : id,
          count,
        };
      })
      .sort((a, b) => b.count - a.count),
    topics: Array.from(topicCountMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count),
    statuses: Array.from(statusCountMap.entries())
      .map(([status, count]) => ({ status, count }))
      .sort((a, b) => b.count - a.count),
    years: Array.from(yearCountMap.entries())
      .map(([year, count]) => ({ year, count }))
      .sort((a, b) => b.year.localeCompare(a.year)),
  };

  return {
    items,
    taxonomy,
    generatedAt: new Date().toISOString(),
    totalItems: items.length,
  };
}

export function searchDiscovery(
  items: DiscoveryItem[],
  filter: DiscoveryFilterState = {}
): DiscoveryMatchResult[] {
  const { query, type, technology, topic, status, year } = filter;
  const rawQuery = (query || '').trim().toLowerCase();
  const queryTokens = rawQuery ? rawQuery.split(/\s+/).filter(Boolean) : [];

  // Resolve query alias if user typed short term (e.g. "postgres" -> "postgresql")
  const expandedAliases: string[] = [];
  if (rawQuery && TECH_ALIASES[rawQuery]) {
    expandedAliases.push(TECH_ALIASES[rawQuery]);
  }
  for (const token of queryTokens) {
    if (TECH_ALIASES[token]) {
      expandedAliases.push(TECH_ALIASES[token]);
    }
  }

  const results: DiscoveryMatchResult[] = [];

  for (const item of items) {
    // 1. Facet Filtering
    if (type && type !== 'all' && item.type !== type) {
      continue;
    }

    if (technology) {
      const techLower = technology.toLowerCase().trim();
      const hasTech = item.technologies.some(
        (t) => t.toLowerCase() === techLower || t.toLowerCase() === TECH_ALIASES[techLower]
      );
      if (!hasTech) continue;
    }

    if (topic) {
      const topicLower = topic.toLowerCase().trim();
      const hasTopic = item.topics.some((t) => t.toLowerCase() === topicLower);
      if (!hasTopic) continue;
    }

    if (status) {
      const statusLower = status.toLowerCase().trim();
      if (!item.status || item.status.toLowerCase() !== statusLower) {
        continue;
      }
    }

    if (year) {
      const yearLower = year.toLowerCase().trim();
      if (!item.year || item.year.toLowerCase() !== yearLower) {
        continue;
      }
    }

    // 2. Text Search Scoring (Deterministic Functional Sort Weight)
    if (queryTokens.length === 0) {
      results.push({
        item,
        matchedFields: [],
        internalScore: 1,
      });
      continue;
    }

    const titleLower = item.title.toLowerCase();
    const excerptLower = (item.excerpt || '').toLowerCase();
    const searchLower = item.searchableText.toLowerCase();
    const matchedFields = new Set<'title' | 'technology' | 'topic' | 'excerpt' | 'searchableText' | 'exact'>();
    let score = 0;

    // Check exact title match
    if (titleLower === rawQuery) {
      matchedFields.add('exact');
      matchedFields.add('title');
      score += 150;
    } else if (titleLower.includes(rawQuery)) {
      matchedFields.add('title');
      score += 60;
    }

    // Check technology match
    const matchesTech = item.technologies.some(
      (t) =>
        t === rawQuery ||
        expandedAliases.includes(t) ||
        queryTokens.some((tok) => t.includes(tok))
    );
    if (matchesTech) {
      matchedFields.add('technology');
      score += 45;
    }

    // Check topic match
    const matchesTopic = item.topics.some(
      (tp) =>
        tp.toLowerCase().includes(rawQuery) ||
        queryTokens.some((tok) => tp.toLowerCase().includes(tok))
    );
    if (matchesTopic) {
      matchedFields.add('topic');
      score += 35;
    }

    // Check excerpt match
    if (excerptLower.includes(rawQuery)) {
      matchedFields.add('excerpt');
      score += 25;
    }

    // Check token matches across searchable text
    let tokenMatchesCount = 0;
    for (const tok of queryTokens) {
      if (searchLower.includes(tok)) {
        tokenMatchesCount++;
        score += 10;
      }
    }

    if (tokenMatchesCount > 0) {
      matchedFields.add('searchableText');
    }

    // If all tokens matched or score > 0
    if (score > 0) {
      results.push({
        item,
        matchedFields: Array.from(matchedFields),
        internalScore: score,
      });
    }
  }

  // Sort by internal score descending, then fallback to title
  return results.sort((a, b) => {
    if (b.internalScore !== a.internalScore) {
      return b.internalScore - a.internalScore;
    }
    return a.item.title.localeCompare(b.item.title);
  });
}

export function getContextualDiscovery(
  items: DiscoveryItem[],
  entityId: string,
  limit: number = 4
): DiscoveryItem[] {
  const currentItem = items.find((i) => i.id === entityId);
  if (!currentItem) return [];

  const directRelatedSet = new Set(currentItem.relatedIds);

  // 1. Direct Knowledge Graph connections first
  const directMatches = items.filter(
    (i) => i.id !== entityId && directRelatedSet.has(i.id)
  );

  if (directMatches.length >= limit) {
    return directMatches.slice(0, limit);
  }

  // 2. Shared Technology or Topic matches second (Deterministic)
  const fallbackMatches = items.filter((i) => {
    if (i.id === entityId || directRelatedSet.has(i.id)) return false;
    const hasSharedTech = i.technologies.some((t) => currentItem.technologies.includes(t));
    const hasSharedTopic = i.topics.some((tp) => currentItem.topics.includes(tp));
    return hasSharedTech || hasSharedTopic;
  });

  return [...directMatches, ...fallbackMatches].slice(0, limit);
}

export function safeHighlight(text: string, query: string): string {
  if (!text) return '';
  if (!query || !query.trim()) {
    return escapeHtml(text);
  }

  const escapedQuery = escapeRegex(query.trim());
  const regex = new RegExp(`(${escapedQuery})`, 'gi');

  const parts = text.split(regex);
  return parts
    .map((part) => {
      if (part.toLowerCase() === query.trim().toLowerCase()) {
        return `<mark class="bg-indigo-500/20 text-indigo-300 font-semibold px-0.5 rounded">${escapeHtml(part)}</mark>`;
      }
      return escapeHtml(part);
    })
    .join('');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
