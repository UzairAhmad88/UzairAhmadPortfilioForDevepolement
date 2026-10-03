import type {
  TimelineEvent,
  TimelineEventType,
  TimelineEventStatus,
  TimelineFilterOptions,
  TimelineSummary,
  TimelineEra,
} from '../../types/timeline.ts';
import { projects } from '../../data/projects.ts';
import { researchItems } from '../../data/research.ts';
import { labItems } from '../../data/lab.ts';
import { engineeringNotes } from '../../data/notes.ts';

/**
 * Format ISO date string or Year into an accessible display string
 */
export function formatTimelineDate(dateStr: string, dateEnd?: string): { display: string; precision: 'year' | 'month' | 'day' | 'range' } {
  if (dateEnd) {
    return {
      display: `${dateStr} – ${dateEnd}`,
      precision: 'range',
    };
  }

  // Check if standard YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const parts = dateStr.split('-');
    const year = parseInt(parts[0], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return {
      display: `${monthNames[monthIndex]} ${day}, ${year}`,
      precision: 'day',
    };
  }

  // Check if YYYY-MM
  if (/^\d{4}-\d{2}$/.test(dateStr)) {
    const parts = dateStr.split('-');
    const year = parseInt(parts[0], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return {
      display: `${monthNames[monthIndex]} ${year}`,
      precision: 'month',
    };
  }

  // Year only
  return {
    display: dateStr,
    precision: 'year',
  };
}

/**
 * Derives canonical Timeline Events from all platform entities
 */
export function buildTimelineEvents(): TimelineEvent[] {
  const events: TimelineEvent[] = [];

  // 1. Projects Ingestion (excluding unpublished / excluded)
  for (const proj of projects) {
    if (proj.archive?.state === 'unpublished' || proj.archive?.state === 'excluded') {
      continue;
    }

    const yearNum = typeof proj.year === 'number'
      ? proj.year
      : parseInt(String(proj.year).split('-')[0], 10) || 2025;

    const dateStr = String(proj.archive?.originalYear || proj.year || '2025');
    const { display, precision } = formatTimelineDate(dateStr);

    let status: TimelineEventStatus = 'active';
    if (proj.archive?.state === 'superseded') status = 'superseded';
    else if (proj.archive?.state === 'legacy') status = 'legacy';
    else if (proj.archive?.state === 'archived') status = 'archived';
    else if (proj.status === 'completed') status = 'completed';
    else if (proj.status === 'active' || proj.status === 'research' || proj.status === 'prototype') status = 'active';

    // Look up successor / predecessor titles if available
    let successorTitle: string | undefined;
    let predecessorTitle: string | undefined;

    if (proj.archive?.successorProjectId) {
      const succ = projects.find((p) => p.slug === proj.archive?.successorProjectId);
      if (succ) successorTitle = succ.title;
    }

    if (proj.archive?.predecessorProjectId) {
      const pred = projects.find((p) => p.slug === proj.archive?.predecessorProjectId);
      if (pred) predecessorTitle = pred.title;
    }

    const desc = proj.shortDescription || proj.problem || proj.caseStudy?.overview || '';
    const tagline = proj.featuredSubheading || proj.domain || proj.projectType;

    events.push({
      id: `timeline-project-${proj.slug}`,
      date: dateStr,
      dateDisplay: display,
      datePrecision: precision,
      year: yearNum,
      title: proj.title,
      tagline,
      description: desc,
      type: 'project',
      status,
      archiveState: proj.archive?.state || 'active',
      entityId: proj.slug,
      entitySlug: proj.slug,
      entityHref: `/work/${proj.slug}`,
      technologies: proj.technologies,
      topics: proj.category,
      featured: proj.featured,
      successorProjectId: proj.archive?.successorProjectId,
      successorProjectTitle: successorTitle,
      predecessorProjectId: proj.archive?.predecessorProjectId,
      predecessorProjectTitle: predecessorTitle,
      evolutionNote: proj.archive?.archiveNote,
      takeaway: proj.outcome || proj.archive?.lessonsLearned?.[0] || proj.caseStudy?.lessonsLearned?.[0],
    });
  }

  // 2. Research Items Ingestion
  for (const res of researchItems) {
    const pubDate = res.publishedAt || '2024-09-15';
    const yearNum = parseInt(pubDate.substring(0, 4), 10) || 2024;
    const { display, precision } = formatTimelineDate(pubDate);

    events.push({
      id: `timeline-research-${res.slug}`,
      date: pubDate,
      dateDisplay: display,
      datePrecision: precision,
      year: yearNum,
      title: res.title,
      tagline: res.domain,
      description: res.summary,
      type: 'research',
      status: res.status === 'Completed' ? 'completed' : 'active',
      entityId: res.slug,
      entitySlug: res.slug,
      entityHref: `/research/${res.slug}`,
      topics: [res.domain, res.badge],
      featured: true,
      takeaway: res.hypothesis,
    });
  }

  // 3. Lab Experiments Ingestion
  for (const lab of labItems) {
    const labDate = lab.date || `${lab.year || 2024}-10-01`;
    const yearNum = parseInt(lab.year || labDate.substring(0, 4), 10) || 2024;
    const { display, precision } = formatTimelineDate(labDate);

    events.push({
      id: `timeline-lab-${lab.slug}`,
      date: labDate,
      dateDisplay: display,
      datePrecision: precision,
      year: yearNum,
      title: lab.title,
      tagline: lab.type,
      description: lab.shortDescription || lab.description,
      type: 'lab',
      status: lab.status.toLowerCase() === 'completed' ? 'completed' : 'in-progress',
      entityId: lab.slug,
      entitySlug: lab.slug,
      entityHref: `/lab/${lab.slug}`,
      technologies: lab.technologies,
      topics: lab.topics,
      featured: lab.featured,
      takeaway: lab.result || lab.lessonsLearned?.[0],
    });
  }

  // 4. Engineering Notes Ingestion
  for (const note of engineeringNotes) {
    const noteDate = note.publishedAt || '2025-01-14';
    const yearNum = parseInt(noteDate.substring(0, 4), 10) || 2025;
    const { display, precision } = formatTimelineDate(noteDate);

    events.push({
      id: `timeline-note-${note.slug}`,
      date: noteDate,
      dateDisplay: display,
      datePrecision: precision,
      year: yearNum,
      title: note.title,
      tagline: `${note.type} · ${note.topic}`,
      description: note.summary,
      type: 'note',
      status: 'completed',
      entityId: note.slug,
      entitySlug: note.slug,
      entityHref: `/notes/${note.slug}`,
      topics: [note.topic, note.type],
      featured: note.featured,
      takeaway: note.lessons?.[0],
    });
  }

  // 5. Deterministic Chronological Sorting
  return sortTimelineEvents(events);
}

/**
 * Type sorting priority
 */
const typePriority: Record<TimelineEventType, number> = {
  project: 1,
  research: 2,
  lab: 3,
  note: 4,
  methodology: 5,
  milestone: 6,
  technology: 7,
};

/**
 * Deterministic multi-key sorting:
 * 1. Date / Year (descending: newest first)
 * 2. Precision (day > month > range > year)
 * 3. Type Priority (project > research > lab > note)
 * 4. Title / ID alphabetically
 */
export function sortTimelineEvents(events: TimelineEvent[]): TimelineEvent[] {
  return [...events].sort((a, b) => {
    // 1. Compare Date strings descending
    // If one is YYYY and one is YYYY-MM-DD of same year, compare year prefix first
    const aYear = a.year;
    const bYear = b.year;

    if (aYear !== bYear) {
      return bYear - aYear;
    }

    // Same year: Compare normalized date strings
    const aDateNormalized = a.date.length === 4 ? `${a.date}-01-01` : a.date;
    const bDateNormalized = b.date.length === 4 ? `${b.date}-01-01` : b.date;

    if (aDateNormalized !== bDateNormalized) {
      return bDateNormalized.localeCompare(aDateNormalized);
    }

    // 2. Compare Type Priority
    const aTypeRank = typePriority[a.type] || 99;
    const bTypeRank = typePriority[b.type] || 99;
    if (aTypeRank !== bTypeRank) {
      return aTypeRank - bTypeRank;
    }

    // 3. Fallback: Title Alphabetical
    return a.title.localeCompare(b.title);
  });
}

/**
 * Queries and filters timeline events
 */
export function getTimelineEvents(options?: TimelineFilterOptions): TimelineEvent[] {
  const allEvents = buildTimelineEvents();

  if (!options) {
    return allEvents;
  }

  return allEvents.filter((event) => {
    // Type Filter
    if (options.type && options.type !== 'all' && event.type !== options.type) {
      return false;
    }

    // Year Filter
    if (options.year && options.year !== 'all' && event.year !== options.year) {
      return false;
    }

    // Search Query
    if (options.searchQuery && options.searchQuery.trim() !== '') {
      const q = options.searchQuery.toLowerCase();
      const matchTitle = event.title.toLowerCase().includes(q);
      const matchDesc = event.description.toLowerCase().includes(q);
      const matchTech = event.technologies?.some((t) => t.toLowerCase().includes(q)) ?? false;
      const matchTopics = event.topics?.some((t) => t.toLowerCase().includes(q)) ?? false;
      if (!matchTitle && !matchDesc && !matchTech && !matchTopics) {
        return false;
      }
    }

    // Exclude internal archive items
    if (event.archiveState === 'unpublished' || event.archiveState === 'excluded') {
      return false;
    }

    return true;
  });
}

/**
 * Computes metrics and summary for the timeline
 */
export function getTimelineSummary(events: TimelineEvent[]): TimelineSummary {
  const byType: Record<TimelineEventType, number> = {
    project: 0,
    research: 0,
    lab: 0,
    note: 0,
    technology: 0,
    milestone: 0,
    methodology: 0,
  };

  const byYear: Record<number, number> = {};
  let minYear = 3000;
  let maxYear = 0;
  let activeCount = 0;
  let archivedCount = 0;

  for (const evt of events) {
    byType[evt.type] = (byType[evt.type] || 0) + 1;
    byYear[evt.year] = (byYear[evt.year] || 0) + 1;

    if (evt.year < minYear) minYear = evt.year;
    if (evt.year > maxYear) maxYear = evt.year;

    if (evt.archiveState && evt.archiveState !== 'active') {
      archivedCount++;
    } else {
      activeCount++;
    }
  }

  return {
    totalEvents: events.length,
    yearRange: {
      start: minYear === 3000 ? new Date().getFullYear() : minYear,
      end: maxYear === 0 ? new Date().getFullYear() : maxYear,
    },
    byType,
    byYear,
    activeCount,
    archivedCount,
  };
}

/**
 * Groups events by Year
 */
export function groupEventsByYear(events: TimelineEvent[]): { year: number; events: TimelineEvent[] }[] {
  const groups = new Map<number, TimelineEvent[]>();

  for (const event of events) {
    const list = groups.get(event.year) || [];
    list.push(event);
    groups.set(event.year, list);
  }

  return Array.from(groups.entries())
    .map(([year, evts]) => ({ year, events: evts }))
    .sort((a, b) => b.year - a.year);
}

/**
 * Returns canonical engineering eras based on verified progression
 */
export function getTimelineEras(): TimelineEra[] {
  return [
    {
      id: 'era-quant-systems',
      title: 'Quantitative Systems & Agentic Orchestration',
      timeframe: '2025 – 2026',
      description: 'Focusing on end-to-end deep learning prediction engines, market regime switching, and deterministic state machine guardrails for autonomous LLM agents.',
      focusAreas: ['Quantitative Finance', 'PyTorch', 'LangGraph', 'Next.js', 'Stationarity Modeling'],
    },
    {
      id: 'era-foundations-fullstack',
      title: 'Distributed Web & Foundational Software Systems',
      timeframe: '2024 – 2025',
      description: 'Architecting high-concurrency clinical records engines, institutional portals, and transitioning from monolithic Flask prototypes to modular TypeScript and Python microservices.',
      focusAreas: ['Next.js', 'FastAPI', 'PostgreSQL', 'Python / Flask Monoliths', 'RBAC Security'],
    },
  ];
}
