#!/usr/bin/env node

/**
 * Deterministic Timeline Integrity & Event Generation Validator (Phase 19)
 */

import { projects } from '../src/data/projects.ts';
import { researchItems } from '../src/data/research.ts';
import { labItems } from '../src/data/lab.ts';
import { engineeringNotes } from '../src/data/notes.ts';
import { buildTimelineEvents, getTimelineSummary, sortTimelineEvents } from '../src/lib/timeline/timelineEngine.ts';

console.log(`
═══════════════════════════════════════════════════════════════════════════
            PHASE 19 — PERSONAL ENGINEERING TIMELINE VALIDATOR             
═══════════════════════════════════════════════════════════════════════════
`);

let errors = 0;
let warnings = 0;

function error(msg) {
  console.error(`  ❌ [ERROR] ${msg}`);
  errors++;
}

function success(msg) {
  console.log(`  ✓ ${msg}`);
}

// 1. Build and validate event collection
console.log('[PASS 1] Ingesting and validating derived timeline events...');
const events = buildTimelineEvents();

if (!events || events.length === 0) {
  error('Timeline builder produced 0 events.');
} else {
  success(`Generated ${events.length} canonical timeline events.`);
}

// 2. Validate individual event properties
console.log('\n[PASS 2] Validating schema, dates, and precisions...');
const allowedTypes = ['project', 'research', 'lab', 'note', 'technology', 'milestone', 'methodology'];
const allowedPrecisions = ['year', 'month', 'day', 'range'];
const allowedStatuses = ['planned', 'in-progress', 'completed', 'active', 'archived', 'legacy', 'superseded'];
const eventIds = new Set();

for (const evt of events) {
  // Unique ID
  if (eventIds.has(evt.id)) {
    error(`Duplicate timeline event ID: "${evt.id}"`);
  }
  eventIds.add(evt.id);

  // Type check
  if (!allowedTypes.includes(evt.type)) {
    error(`Event "${evt.id}" has invalid type: "${evt.type}"`);
  }

  // Precision check
  if (!allowedPrecisions.includes(evt.datePrecision)) {
    error(`Event "${evt.id}" has invalid datePrecision: "${evt.datePrecision}"`);
  }

  // Status check
  if (!allowedStatuses.includes(evt.status)) {
    error(`Event "${evt.id}" has invalid status: "${evt.status}"`);
  }

  // Date parsing & year verification
  if (!evt.date || typeof evt.date !== 'string') {
    error(`Event "${evt.id}" has missing or non-string date.`);
  } else {
    if (!/^\d{4}(-\d{2}(-\d{2})?)?$/.test(evt.date)) {
      error(`Event "${evt.id}" date format invalid: "${evt.date}"`);
    }
  }

  if (typeof evt.year !== 'number' || evt.year < 2020 || evt.year > 2030) {
    error(`Event "${evt.id}" has invalid year: ${evt.year}`);
  }

  // Title and Description
  if (!evt.title || evt.title.trim().length === 0) {
    error(`Event "${evt.id}" is missing a title.`);
  }
  if (!evt.description || evt.description.trim().length === 0) {
    error(`Event "${evt.id}" is missing a description.`);
  }

  // Cross-reference integrity
  if (evt.type === 'project' && evt.entitySlug) {
    const proj = projects.find((p) => p.slug === evt.entitySlug);
    if (!proj) {
      error(`Event "${evt.id}" references non-existent project slug: "${evt.entitySlug}"`);
    }
    if (proj?.archive?.state === 'unpublished' || proj?.archive?.state === 'excluded') {
      error(`Event "${evt.id}" leaked private/excluded project: "${evt.entitySlug}"`);
    }
  }

  if (evt.type === 'research' && evt.entitySlug) {
    const res = researchItems.find((r) => r.slug === evt.entitySlug);
    if (!res) {
      error(`Event "${evt.id}" references non-existent research slug: "${evt.entitySlug}"`);
    }
  }

  if (evt.type === 'lab' && evt.entitySlug) {
    const lab = labItems.find((l) => l.slug === evt.entitySlug);
    if (!lab) {
      error(`Event "${evt.id}" references non-existent lab slug: "${evt.entitySlug}"`);
    }
  }

  if (evt.type === 'note' && evt.entitySlug) {
    const note = engineeringNotes.find((n) => n.slug === evt.entitySlug);
    if (!note) {
      error(`Event "${evt.id}" references non-existent note slug: "${evt.entitySlug}"`);
    }
  }

  // Successor / Predecessor integrity
  if (evt.successorProjectId) {
    if (evt.successorProjectId === evt.entitySlug) {
      error(`Event "${evt.id}" has self-referencing successor: "${evt.successorProjectId}"`);
    }
    const succ = projects.find((p) => p.slug === evt.successorProjectId);
    if (!succ) {
      error(`Event "${evt.id}" references invalid successor project: "${evt.successorProjectId}"`);
    }
  }

  if (evt.predecessorProjectId) {
    if (evt.predecessorProjectId === evt.entitySlug) {
      error(`Event "${evt.id}" has self-referencing predecessor: "${evt.predecessorProjectId}"`);
    }
    const pred = projects.find((p) => p.slug === evt.predecessorProjectId);
    if (!pred) {
      error(`Event "${evt.id}" references invalid predecessor project: "${evt.predecessorProjectId}"`);
    }
  }
}
success(`All ${events.length} events verified for schema, types, dates, and entity integrity.`);

// 3. Validate Deterministic Sorting
console.log('\n[PASS 3] Verifying chronological sorting and determinism...');
for (let i = 0; i < events.length - 1; i++) {
  const current = events[i];
  const next = events[i + 1];

  if (current.year < next.year) {
    error(`Chronological ordering violation: "${current.id}" (${current.year}) placed before "${next.id}" (${next.year})`);
  }
}
success('Chronological ordering verified (newest to oldest).');

// 4. Validate Summary Metrics
console.log('\n[PASS 4] Auditing summary aggregation...');
const summary = getTimelineSummary(events);
if (summary.totalEvents !== events.length) {
  error(`Summary totalEvents mismatch: expected ${events.length}, got ${summary.totalEvents}`);
}
if (summary.yearRange.start > summary.yearRange.end) {
  error(`Invalid yearRange in summary: ${summary.yearRange.start} > ${summary.yearRange.end}`);
}
success(`Summary verified: ${summary.totalEvents} events spanning ${summary.yearRange.start}–${summary.yearRange.end}.`);

console.log('\n───────────────────────────────────────────────────────────────────────────');
console.log(`Validation Complete: ${errors} Errors, ${warnings} Warnings.\n`);

if (errors > 0) {
  console.error('❌ Validation FAILED.');
  process.exit(1);
} else {
  console.log('✔ All timeline records, chronology, and entity references PASSED.\n');
  process.exit(0);
}
