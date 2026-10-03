import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  labItems,
  getAllLabItems,
  getFeaturedLabItems,
  getLabItemBySlug,
  getLabItemsByType,
  getLabItemsByStatus,
  getLabItemsByTechnology,
} from '../../src/data/lab.ts';
import { projects } from '../../src/data/projects.ts';
import { researchItems } from '../../src/data/research.ts';
import { engineeringNotes } from '../../src/data/notes.ts';
import { technologies } from '../../src/data/technologies.ts';

describe('Phase 12: Lab System & Experimental Workbench Integrity', () => {
  it('should have valid lab items with required schema fields', () => {
    assert.ok(labItems.length >= 6, `Expected at least 6 lab items, found ${labItems.length}`);

    for (const item of labItems) {
      assert.ok(item.id, `Lab item must have an id: ${JSON.stringify(item)}`);
      assert.ok(item.slug, `Lab item must have a slug: ${item.id}`);
      assert.ok(item.title, `Lab item must have a title: ${item.id}`);
      assert.ok(item.shortDescription, `Lab item must have a shortDescription: ${item.id}`);
      assert.ok(item.description, `Lab item must have a description: ${item.id}`);
      assert.ok(item.type, `Lab item must have a type: ${item.id}`);
      assert.ok(item.status, `Lab item must have a status: ${item.id}`);
      assert.ok(item.state, `Lab item must have a state: ${item.id}`);
      assert.ok(item.date, `Lab item must have a date: ${item.id}`);
      assert.ok(item.year, `Lab item must have a year: ${item.id}`);
      assert.ok(item.question, `Lab item must have a question: ${item.id}`);
      assert.ok(item.context, `Lab item must have a context: ${item.id}`);
      assert.ok(item.experiment, `Lab item must have an experiment description: ${item.id}`);
      assert.ok(item.result, `Lab item must have a result: ${item.id}`);
      assert.ok(item.resultOutcome, `Lab item must have a resultOutcome: ${item.id}`);
      assert.ok(Array.isArray(item.technologies) && item.technologies.length > 0, `Lab item must have technologies: ${item.id}`);
      assert.ok(Array.isArray(item.topics) && item.topics.length > 0, `Lab item must have topics: ${item.id}`);
    }
  });

  it('should have unique IDs and slugs for all lab items', () => {
    const ids = new Set<string>();
    const slugs = new Set<string>();

    for (const item of labItems) {
      assert.ok(!ids.has(item.id), `Duplicate lab ID detected: ${item.id}`);
      assert.ok(!slugs.has(item.slug), `Duplicate lab slug detected: ${item.slug}`);
      ids.add(item.id);
      slugs.add(item.slug);
    }
  });

  it('should retrieve lab items accurately via helper functions', () => {
    const all = getAllLabItems();
    assert.strictEqual(all.length, labItems.length);

    const featured = getFeaturedLabItems();
    assert.ok(featured.length > 0, 'Expected at least one featured lab item');
    for (const item of featured) {
      assert.strictEqual(item.featured, true);
    }

    const first = labItems[0];
    const found = getLabItemBySlug(first.slug);
    assert.ok(found, `Expected to find lab item by slug: ${first.slug}`);
    assert.strictEqual(found?.id, first.id);

    const nonExistent = getLabItemBySlug('non-existent-lab-slug-12345');
    assert.strictEqual(nonExistent, undefined);

    const pythonItems = getLabItemsByTechnology('python');
    assert.ok(pythonItems.length >= 4, 'Expected Python lab items');

    const completedItems = getLabItemsByStatus('Completed');
    assert.ok(completedItems.length > 0, 'Expected Completed lab items');
  });

  it('should resolve all lab.relatedProjects to existing project slugs in projects data', () => {
    const validProjectSlugs = new Set(projects.map((p) => p.slug));

    for (const item of labItems) {
      if (item.relatedProjects) {
        for (const projSlug of item.relatedProjects) {
          assert.ok(
            validProjectSlugs.has(projSlug),
            `Lab item "${item.slug}" references invalid project slug: "${projSlug}"`
          );
        }
      }
      if (item.promotedToProject) {
        assert.ok(
          validProjectSlugs.has(item.promotedToProject),
          `Lab item "${item.slug}" promotedToProject references invalid project slug: "${item.promotedToProject}"`
        );
      }
    }
  });

  it('should resolve all lab.relatedResearch to existing research slugs in research data', () => {
    const validResearchSlugs = new Set(researchItems.map((r) => r.slug));

    for (const item of labItems) {
      if (item.relatedResearch) {
        for (const resSlug of item.relatedResearch) {
          assert.ok(
            validResearchSlugs.has(resSlug),
            `Lab item "${item.slug}" references invalid research slug: "${resSlug}"`
          );
        }
      }
    }
  });

  it('should resolve all lab.relatedNotes to existing note slugs in notes data', () => {
    const validNoteSlugs = new Set(engineeringNotes.map((n) => n.slug));

    for (const item of labItems) {
      if (item.relatedNotes) {
        for (const noteSlug of item.relatedNotes) {
          assert.ok(
            validNoteSlugs.has(noteSlug),
            `Lab item "${item.slug}" references invalid note slug: "${noteSlug}"`
          );
        }
      }
    }
  });

  it('should resolve all lab.technologies to canonical technology IDs in technologies data', () => {
    const validTechIds = new Set(technologies.map((t) => t.id));

    for (const item of labItems) {
      for (const techId of item.technologies) {
        assert.ok(
          validTechIds.has(techId),
          `Lab item "${item.slug}" references invalid canonical technology ID: "${techId}"`
        );
      }
    }
  });

  it('should verify project relatedLab references resolve to valid lab items', () => {
    const validLabSlugs = new Set(labItems.map((l) => l.slug));

    for (const project of projects) {
      if (project.relatedLab) {
        for (const labSlug of project.relatedLab) {
          assert.ok(
            validLabSlugs.has(labSlug),
            `Project "${project.slug}" references invalid lab slug: "${labSlug}"`
          );
        }
      }
      if (project.originatedFromLab) {
        assert.ok(
          validLabSlugs.has(project.originatedFromLab),
          `Project "${project.slug}" originatedFromLab references invalid lab slug: "${project.originatedFromLab}"`
        );
      }
    }
  });

  it('should verify research relatedLab references resolve to valid lab items', () => {
    const validLabSlugs = new Set(labItems.map((l) => l.slug));

    for (const research of researchItems) {
      if (research.relatedLab) {
        for (const labSlug of research.relatedLab) {
          assert.ok(
            validLabSlugs.has(labSlug),
            `Research item "${research.slug}" references invalid lab slug: "${labSlug}"`
          );
        }
      }
    }
  });

  it('should verify note relatedLab references resolve to valid lab items', () => {
    const validLabSlugs = new Set(labItems.map((l) => l.slug));

    for (const note of engineeringNotes) {
      if (note.relatedLab) {
        for (const labSlug of note.relatedLab) {
          assert.ok(
            validLabSlugs.has(labSlug),
            `Engineering note "${note.slug}" references invalid lab slug: "${labSlug}"`
          );
        }
      }
    }
  });

  it('should verify technology labSlugs references resolve to valid lab items', () => {
    const validLabSlugs = new Set(labItems.map((l) => l.slug));

    for (const tech of technologies) {
      if (tech.labSlugs) {
        for (const labSlug of tech.labSlugs) {
          assert.ok(
            validLabSlugs.has(labSlug),
            `Technology "${tech.id}" references invalid lab slug: "${labSlug}"`
          );
        }
      }
    }
  });

  it('should guarantee zero numerical quality ratings, stars, or fake tier badges in lab items', () => {
    for (const item of labItems) {
      assert.ok(
        !('qualityScore' in item),
        `Lab item "${item.slug}" must not contain fabricated qualityScore`
      );
      assert.ok(
        !('rating' in item),
        `Lab item "${item.slug}" must not contain fabricated rating`
      );
    }
  });
});
