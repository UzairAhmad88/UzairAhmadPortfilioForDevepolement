#!/usr/bin/env node

/**
 * Deterministic Collaboration System & Data Model Validator (Phase 21)
 */

import { collaborationProfile } from '../src/data/collaboration.ts';
import { projects } from '../src/data/projects.ts';
import { researchItems } from '../src/data/research.ts';
import { labItems } from '../src/data/lab.ts';
import { technologies } from '../src/data/technologies.ts';

console.log(`
═══════════════════════════════════════════════════════════════════════════
        PHASE 21 — COLLABORATION SYSTEM & DATA MODEL VALIDATOR             
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

// 1. Validate Core Profile Metadata
console.log('[PASS 1] Validating collaboration profile metadata...');

if (!collaborationProfile.title || collaborationProfile.title.trim() === '') {
  error('collaborationProfile is missing title.');
}
if (!collaborationProfile.eyebrow || collaborationProfile.eyebrow.trim() === '') {
  error('collaborationProfile is missing eyebrow.');
}
if (!collaborationProfile.introduction || collaborationProfile.introduction.trim() === '') {
  error('collaborationProfile is missing introduction.');
}
if (!collaborationProfile.positioningStatement || collaborationProfile.positioningStatement.trim() === '') {
  error('collaborationProfile is missing positioningStatement.');
}
if (!collaborationProfile.updatedAt || collaborationProfile.updatedAt.trim() === '') {
  error('collaborationProfile is missing updatedAt timestamp.');
} else {
  success(`Verified profile metadata: "${collaborationProfile.title}" (Updated: ${collaborationProfile.updatedAt})`);
}

// 2. Validate Collaboration Areas & Evidence Connections
console.log('\n[PASS 2] Validating collaboration areas and canonical evidence cross-references...');
if (!collaborationProfile.areas || collaborationProfile.areas.length === 0) {
  error('collaborationProfile has no areas.');
} else {
  for (const area of collaborationProfile.areas) {
    if (!area.id || !area.title || !area.domain || !area.shortExplanation || !area.potentialCollaboration) {
      error(`Area "${area.id || 'unknown'}" missing required string properties.`);
    }

    if (!area.relevantProblems || area.relevantProblems.length === 0) {
      error(`Area "${area.id}" has no relevantProblems.`);
    }

    // Check project slugs
    for (const slug of area.projectSlugs) {
      const exists = projects.some((p) => p.slug === slug);
      if (!exists) {
        error(`Area "${area.id}" references non-existent project slug: "${slug}"`);
      }
    }

    // Check research slugs
    for (const slug of area.researchSlugs) {
      const exists = researchItems.some((r) => r.slug === slug);
      if (!exists) {
        error(`Area "${area.id}" references non-existent research slug: "${slug}"`);
      }
    }

    // Check lab slugs
    for (const slug of area.labSlugs) {
      const exists = labItems.some((l) => l.slug === slug);
      if (!exists) {
        error(`Area "${area.id}" references non-existent lab slug: "${slug}"`);
      }
    }

    // Check technology IDs
    for (const tid of area.technologyIds) {
      const exists = technologies.some((t) => t.id === tid);
      if (!exists) {
        error(`Area "${area.id}" references non-existent technology ID: "${tid}"`);
      }
    }
  }
  success(`Verified ${collaborationProfile.areas.length} collaboration areas and all canonical evidence links.`);
}

// 3. Validate Engagement Types
console.log('\n[PASS 3] Validating engagement types and supporting evidence...');
if (!collaborationProfile.engagementTypes || collaborationProfile.engagementTypes.length === 0) {
  error('collaborationProfile has no engagementTypes.');
} else {
  for (const eng of collaborationProfile.engagementTypes) {
    if (!eng.id || !eng.title || !eng.category || !eng.description || !eng.ctaLabel) {
      error(`Engagement type "${eng.id || 'unknown'}" missing required properties.`);
    }

    if (!eng.suitableFor || eng.suitableFor.length === 0) {
      error(`Engagement type "${eng.id}" has no suitableFor items.`);
    }

    // Check evidenceSlugs
    for (const ev of eng.evidenceSlugs) {
      if (ev.type === 'project') {
        const exists = projects.some((p) => p.slug === ev.slug);
        if (!exists) {
          error(`Engagement "${eng.id}" references non-existent project: "${ev.slug}"`);
        }
      } else if (ev.type === 'research') {
        const exists = researchItems.some((r) => r.slug === ev.slug);
        if (!exists) {
          error(`Engagement "${eng.id}" references non-existent research: "${ev.slug}"`);
        }
      } else if (ev.type === 'lab') {
        const exists = labItems.some((l) => l.slug === ev.slug);
        if (!exists) {
          error(`Engagement "${eng.id}" references non-existent lab item: "${ev.slug}"`);
        }
      }
    }
  }
  success(`Verified ${collaborationProfile.engagementTypes.length} engagement types with supporting evidence.`);
}

// 4. Validate Problems & Non-Goals Criteria
console.log('\n[PASS 4] Validating problem preferences and non-goals criteria...');
if (!collaborationProfile.preferredProblems || collaborationProfile.preferredProblems.length === 0) {
  error('collaborationProfile has no preferredProblems.');
}
if (!collaborationProfile.nonGoals || collaborationProfile.nonGoals.length === 0) {
  error('collaborationProfile has no nonGoals.');
} else {
  success(
    `Verified ${collaborationProfile.preferredProblems.length} preferred problem types and ${collaborationProfile.nonGoals.length} non-goals.`
  );
}

// 5. Validate 6-Stage Collaboration Process
console.log('\n[PASS 5] Validating 6-stage collaboration process...');
if (!collaborationProfile.process || collaborationProfile.process.length !== 6) {
  error(`collaborationProfile process must have exactly 6 stages (found ${collaborationProfile.process?.length || 0}).`);
} else {
  const expectedSteps = ['01', '02', '03', '04', '05', '06'];
  for (let i = 0; i < 6; i++) {
    const step = collaborationProfile.process[i];
    if (step.step !== expectedSteps[i] || !step.title || !step.summary || !step.principle) {
      error(`Process step index ${i} is invalid or missing required fields.`);
    }
  }
  success('Verified 6-stage deterministic engineering process (Understand -> Define -> Explore -> Build -> Validate -> Iterate).');
}

// 6. Validate Brief Guidance & Availability
console.log('\n[PASS 6] Validating brief questions and availability configuration...');
if (!collaborationProfile.briefQuestions || collaborationProfile.briefQuestions.length < 4) {
  error('collaborationProfile requires at least 4 briefQuestions.');
} else {
  for (const q of collaborationProfile.briefQuestions) {
    if (!q.number || !q.prompt || !q.guidance || !q.example) {
      error(`Brief question "${q.number || 'unknown'}" missing required fields.`);
    }
  }
  success(`Verified ${collaborationProfile.briefQuestions.length} collaboration brief preparation prompts.`);
}

const validAvailabilityStates = ['open', 'selective', 'limited', 'unavailable', 'notSpecified'];
if (!validAvailabilityStates.includes(collaborationProfile.availability.state)) {
  error(`Invalid availability state: "${collaborationProfile.availability.state}".`);
} else {
  success(`Verified availability state: "${collaborationProfile.availability.state}" (${collaborationProfile.availability.note})`);
}

// 7. Anti-Agency / Prohibited Buzzwords Check
console.log('\n[PASS 7] Scanning copy for prohibited agency/freelancer marketing clichés...');
const prohibitedTerms = [
  'world-class',
  'rockstar',
  '10x engineer',
  'best developer in',
  'our services include',
  'cheap',
  'pricing table',
  'guaranteed roi',
  'guaranteed revenue',
  'hire me now',
];

const fullText = [
  collaborationProfile.title,
  collaborationProfile.introduction,
  collaborationProfile.positioningStatement,
  ...collaborationProfile.areas.map((a) => `${a.title} ${a.shortExplanation} ${a.potentialCollaboration}`),
  ...collaborationProfile.engagementTypes.map((e) => `${e.title} ${e.description}`),
  ...collaborationProfile.preferredProblems,
  ...collaborationProfile.nonGoals,
  ...collaborationProfile.process.map((p) => `${p.title} ${p.summary} ${p.principle}`),
].join(' ').toLowerCase();

for (const term of prohibitedTerms) {
  if (fullText.includes(term)) {
    error(`Found prohibited marketing cliché: "${term}" in collaboration copy.`);
  }
}
success('Anti-agency and truthful tone audit passed (zero marketing fluff or fake guarantees).');

console.log('\n───────────────────────────────────────────────────────────────────────────');
console.log(`Validation Complete: ${errors} Errors, ${warnings} Warnings.\n`);

if (errors > 0) {
  console.error('❌ Collaboration Validation FAILED.');
  process.exit(1);
} else {
  console.log('✔ All Collaboration System models, evidence links, and copy checks PASSED.\n');
  process.exit(0);
}
