import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  labVisualArtifacts,
  getAllLabVisualArtifacts,
  getLabVisualArtifactsByExperiment,
  getLabVisualArtifactById,
} from '../../src/data/labArtifacts.ts';
import { labItems } from '../../src/data/lab.ts';
import { projects } from '../../src/data/projects.ts';
import { researchItems } from '../../src/data/research.ts';
import { engineeringNotes } from '../../src/data/notes.ts';
import { technologies } from '../../src/data/technologies.ts';

describe('Lab Visual Artifacts & Technical Evidence System Integrity', () => {
  it('should have a comprehensive set of structured visual artifacts', () => {
    assert.ok(labVisualArtifacts.length >= 12, `Expected at least 12 artifacts, found ${labVisualArtifacts.length}`);

    for (const art of labVisualArtifacts) {
      assert.ok(art.id, `Artifact must have an ID: ${JSON.stringify(art)}`);
      assert.ok(art.experimentSlug, `Artifact must have an experimentSlug: ${art.id}`);
      assert.ok(art.type, `Artifact must have a type: ${art.id}`);
      assert.ok(art.title, `Artifact must have a title: ${art.id}`);
      assert.ok(art.description, `Artifact must have a description: ${art.id}`);
      assert.ok(art.evidenceState, `Artifact must have an evidenceState: ${art.id}`);
      assert.ok(art.whatThisShows, `Artifact must have whatThisShows interpretation: ${art.id}`);
      assert.ok(art.caption, `Artifact must have a caption: ${art.id}`);
      assert.ok(art.textAlternative, `Artifact must have an accessible textAlternative: ${art.id}`);
      assert.ok(art.visual, `Artifact must have a visual payload: ${art.id}`);
    }
  });

  it('should have unique IDs for all visual artifacts', () => {
    const ids = new Set<string>();
    for (const art of labVisualArtifacts) {
      assert.ok(!ids.has(art.id), `Duplicate visual artifact ID detected: ${art.id}`);
      ids.add(art.id);
    }
  });

  it('should associate every visual artifact with a valid existing lab experiment slug', () => {
    const validLabSlugs = new Set(labItems.map((item) => item.slug));

    for (const art of labVisualArtifacts) {
      assert.ok(
        validLabSlugs.has(art.experimentSlug),
        `Artifact "${art.id}" references non-existent lab experiment slug "${art.experimentSlug}"`
      );
    }
  });

  it('should guarantee that every lab experiment has at least one visual artifact', () => {
    for (const item of labItems) {
      const artifacts = getLabVisualArtifactsByExperiment(item.slug);
      assert.ok(
        artifacts.length >= 1,
        `Lab experiment "${item.slug}" must have at least one visual artifact, found ${artifacts.length}`
      );
    }
  });

  it('should validate allowed evidence states (actual, prototype, concept, simulation, planned)', () => {
    const allowedStates = new Set(['actual', 'prototype', 'concept', 'simulation', 'planned']);

    for (const art of labVisualArtifacts) {
      assert.ok(
        allowedStates.has(art.evidenceState),
        `Artifact "${art.id}" has invalid evidenceState: "${art.evidenceState}"`
      );
    }
  });

  it('should resolve relatedProject, relatedResearch, relatedNote, and technologies correctly', () => {
    const validProjectSlugs = new Set(projects.map((p) => p.slug));
    const validResearchSlugs = new Set(researchItems.map((r) => r.slug));
    const validNoteSlugs = new Set(engineeringNotes.map((n) => n.slug));
    const validTechIds = new Set(technologies.map((t) => t.id));

    for (const art of labVisualArtifacts) {
      if (art.relatedProject) {
        assert.ok(
          validProjectSlugs.has(art.relatedProject),
          `Artifact "${art.id}" references invalid relatedProject slug: "${art.relatedProject}"`
        );
      }
      if (art.relatedResearch) {
        assert.ok(
          validResearchSlugs.has(art.relatedResearch),
          `Artifact "${art.id}" references invalid relatedResearch slug: "${art.relatedResearch}"`
        );
      }
      if (art.relatedNote) {
        assert.ok(
          validNoteSlugs.has(art.relatedNote),
          `Artifact "${art.id}" references invalid relatedNote slug: "${art.relatedNote}"`
        );
      }
      if (art.technologies) {
        for (const techId of art.technologies) {
          assert.ok(
            validTechIds.has(techId),
            `Artifact "${art.id}" references invalid canonical technology ID: "${techId}"`
          );
        }
      }
    }
  });

  it('should retrieve visual artifacts via helper queries', () => {
    const all = getAllLabVisualArtifacts();
    assert.strictEqual(all.length, labVisualArtifacts.length);

    const first = labVisualArtifacts[0];
    const byId = getLabVisualArtifactById(first.id);
    assert.ok(byId);
    assert.strictEqual(byId?.id, first.id);

    const nonExistent = getLabVisualArtifactById('non-existent-artifact-12345');
    assert.strictEqual(nonExistent, undefined);
  });

  it('should guarantee zero fabricated star ratings, fake metrics, or ungrounded statistics', () => {
    for (const art of labVisualArtifacts) {
      assert.ok(!('rating' in art), `Artifact "${art.id}" must not have rating`);
      assert.ok(!('score' in art), `Artifact "${art.id}" must not have score`);
    }
  });
});
