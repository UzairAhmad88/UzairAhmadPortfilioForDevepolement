import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { collaborationProfile } from '../../src/data/collaboration.ts';
import { projects } from '../../src/data/projects.ts';
import { researchItems } from '../../src/data/research.ts';
import { labItems } from '../../src/data/lab.ts';
import { technologies } from '../../src/data/technologies.ts';

describe('Phase 21 — Collaboration System & Data Model', () => {
  it('should have complete profile metadata and positioning statement', () => {
    assert.ok(collaborationProfile.title.length > 0);
    assert.ok(collaborationProfile.eyebrow.length > 0);
    assert.ok(collaborationProfile.introduction.length > 30);
    assert.ok(collaborationProfile.positioningStatement.length > 30);
    assert.ok(collaborationProfile.updatedAt.length > 0);
  });

  it('should define evidence-backed collaboration areas with valid references', () => {
    assert.ok(collaborationProfile.areas.length >= 4);

    for (const area of collaborationProfile.areas) {
      assert.ok(area.id.length > 0);
      assert.ok(area.title.length > 0);
      assert.ok(area.domain.length > 0);
      assert.ok(area.shortExplanation.length > 0);
      assert.ok(area.relevantProblems.length >= 2);
      assert.ok(area.potentialCollaboration.length > 0);

      // Verify project slugs
      for (const slug of area.projectSlugs) {
        const exists = projects.some((p) => p.slug === slug);
        assert.ok(exists, `Project slug "${slug}" in area "${area.id}" does not exist in projects.ts`);
      }

      // Verify research slugs
      for (const slug of area.researchSlugs) {
        const exists = researchItems.some((r) => r.slug === slug);
        assert.ok(exists, `Research slug "${slug}" in area "${area.id}" does not exist in research.ts`);
      }

      // Verify lab slugs
      for (const slug of area.labSlugs) {
        const exists = labItems.some((l) => l.slug === slug);
        assert.ok(exists, `Lab slug "${slug}" in area "${area.id}" does not exist in lab.ts`);
      }

      // Verify technology IDs
      for (const tid of area.technologyIds) {
        const exists = technologies.some((t) => t.id === tid);
        assert.ok(exists, `Technology ID "${tid}" in area "${area.id}" does not exist in technologies.ts`);
      }
    }
  });

  it('should define structured engagement types with supporting evidence', () => {
    assert.ok(collaborationProfile.engagementTypes.length >= 4);

    for (const eng of collaborationProfile.engagementTypes) {
      assert.ok(eng.id.length > 0);
      assert.ok(eng.title.length > 0);
      assert.ok(eng.category.length > 0);
      assert.ok(eng.description.length > 0);
      assert.ok(eng.suitableFor.length >= 2);
      assert.ok(eng.ctaLabel.length > 0);

      // Verify evidenceSlugs
      for (const ev of eng.evidenceSlugs) {
        if (ev.type === 'project') {
          assert.ok(
            projects.some((p) => p.slug === ev.slug),
            `Evidence project "${ev.slug}" not found`
          );
        } else if (ev.type === 'research') {
          assert.ok(
            researchItems.some((r) => r.slug === ev.slug),
            `Evidence research "${ev.slug}" not found`
          );
        } else if (ev.type === 'lab') {
          assert.ok(
            labItems.some((l) => l.slug === ev.slug),
            `Evidence lab "${ev.slug}" not found`
          );
        }
      }
    }
  });

  it('should specify preferred problem characteristics and non-goals', () => {
    assert.ok(collaborationProfile.preferredProblems.length >= 3);
    assert.ok(collaborationProfile.nonGoals.length >= 3);
  });

  it('should define a 6-stage engineering process with principles', () => {
    assert.equal(collaborationProfile.process.length, 6);
    const expected = ['01', '02', '03', '04', '05', '06'];

    for (let i = 0; i < 6; i++) {
      const step = collaborationProfile.process[i];
      assert.equal(step.step, expected[i]);
      assert.ok(step.title.length > 0);
      assert.ok(step.summary.length > 0);
      assert.ok(step.principle.length > 0);
    }
  });

  it('should provide structured collaboration brief preparation prompts', () => {
    assert.ok(collaborationProfile.briefQuestions.length >= 4);

    for (const q of collaborationProfile.briefQuestions) {
      assert.ok(q.number.length > 0);
      assert.ok(q.prompt.length > 0);
      assert.ok(q.guidance.length > 0);
      assert.ok(q.example.length > 0);
    }
  });

  it('should define an explicit, truthful availability state and note', () => {
    const validStates = ['open', 'selective', 'limited', 'unavailable', 'notSpecified'];
    assert.ok(validStates.includes(collaborationProfile.availability.state));
    assert.ok(collaborationProfile.availability.badgeLabel.length > 0);
    assert.ok(collaborationProfile.availability.note.length > 0);
    assert.ok(collaborationProfile.availability.updatedAt.length > 0);
  });
});
