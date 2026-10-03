import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  engineeringNotes,
  featuredNotes,
  getNoteBySlug,
  getNotesByTopic,
  getNotesByType,
  getNotesByTechnology,
  getNotesByProject,
  getNotesByResearch,
} from '../../src/data/notes.ts';
import { projects } from '../../src/data/projects.ts';
import { researchItems } from '../../src/data/research.ts';
import { technologies } from '../../src/data/technologies.ts';

describe('Phase 11: Engineering Notes System & Knowledge Integrity', () => {
  it('should have valid engineering notes with required fields', () => {
    assert.ok(engineeringNotes.length > 0, 'Engineering notes array must not be empty');
    engineeringNotes.forEach((note) => {
      assert.ok(note.id, 'Note must have an ID');
      assert.ok(note.slug, 'Note must have a slug');
      assert.ok(note.title, `Note ${note.id} must have a title`);
      assert.ok(note.summary, `Note ${note.id} must have a summary`);
      assert.ok(note.type, `Note ${note.id} must have a valid type`);
      assert.ok(note.topic, `Note ${note.id} must have a topic`);
      assert.ok(note.status, `Note ${note.id} must have a status`);
      assert.ok(note.publishedAt, `Note ${note.id} must have a publishedAt date`);
      assert.ok(note.readingTimeMinutes > 0, `Note ${note.id} readingTimeMinutes must be positive`);
      assert.ok(note.sections && note.sections.length > 0, `Note ${note.id} must have sections`);
    });
  });

  it('should have unique IDs and slugs for all notes', () => {
    const ids = engineeringNotes.map((n) => n.id);
    const slugs = engineeringNotes.map((n) => n.slug);
    assert.strictEqual(ids.length, new Set(ids).size, 'All note IDs must be unique');
    assert.strictEqual(slugs.length, new Set(slugs).size, 'All note slugs must be unique');
  });

  it('should retrieve notes accurately via helper functions', () => {
    engineeringNotes.forEach((note) => {
      const found = getNoteBySlug(note.slug);
      assert.ok(found, `getNoteBySlug must resolve for ${note.slug}`);
      assert.strictEqual(found?.id, note.id);
    });
    assert.strictEqual(getNoteBySlug('non-existent-note-slug'), undefined);

    const backendNotes = getNotesByTopic('Backend Architecture');
    assert.ok(backendNotes.length > 0, 'Must find notes by topic');

    const debugNotes = getNotesByType('Debugging Note');
    assert.ok(debugNotes.length > 0, 'Must find notes by type');

    const pythonNotes = getNotesByTechnology('python');
    assert.ok(pythonNotes.length > 0, 'Must find notes by technology');
  });

  it('should resolve all relatedProjects to existing project slugs in projects data', () => {
    const projectSlugs = new Set(projects.map((p) => p.slug));
    engineeringNotes.forEach((note) => {
      if (note.relatedProjects) {
        note.relatedProjects.forEach((projSlug) => {
          assert.ok(
            projectSlugs.has(projSlug),
            `Note "${note.slug}" references non-existent project "${projSlug}"`
          );
        });
      }
    });
  });

  it('should resolve all relatedResearch to existing research slugs in researchItems data', () => {
    const researchSlugs = new Set(researchItems.map((r) => r.slug));
    engineeringNotes.forEach((note) => {
      if (note.relatedResearch) {
        note.relatedResearch.forEach((resSlug) => {
          assert.ok(
            researchSlugs.has(resSlug),
            `Note "${note.slug}" references non-existent research slug "${resSlug}"`
          );
        });
      }
    });
  });

  it('should resolve all technologies to canonical technology IDs in technologies data', () => {
    const techIds = new Set(technologies.map((t) => t.id));
    engineeringNotes.forEach((note) => {
      note.technologies.forEach((techId) => {
        assert.ok(
          techIds.has(techId),
          `Note "${note.slug}" references non-existent canonical technology ID "${techId}"`
        );
      });
    });
  });

  it('should verify project relatedNotes resolve to valid engineering notes', () => {
    const noteSlugs = new Set(engineeringNotes.map((n) => n.slug));
    projects.forEach((proj) => {
      if (proj.relatedNotes) {
        proj.relatedNotes.forEach((noteSlug) => {
          assert.ok(
            noteSlugs.has(noteSlug),
            `Project "${proj.slug}" references non-existent note slug "${noteSlug}"`
          );
        });
      }
    });
  });

  it('should verify research relatedNotes resolve to valid engineering notes', () => {
    const noteSlugs = new Set(engineeringNotes.map((n) => n.slug));
    researchItems.forEach((res) => {
      if (res.relatedNotes) {
        res.relatedNotes.forEach((noteSlug) => {
          assert.ok(
            noteSlugs.has(noteSlug),
            `Research item "${res.slug}" references non-existent note slug "${noteSlug}"`
          );
        });
      }
    });
  });

  it('should verify technology noteSlugs resolve to valid engineering notes', () => {
    const noteSlugs = new Set(engineeringNotes.map((n) => n.slug));
    technologies.forEach((tech) => {
      if (tech.noteSlugs) {
        tech.noteSlugs.forEach((noteSlug) => {
          assert.ok(
            noteSlugs.has(noteSlug),
            `Technology "${tech.id}" references non-existent note slug "${noteSlug}"`
          );
        });
      }
    });
  });

  it('should ensure notes contain structured lessons learned or tradeoffs', () => {
    engineeringNotes.forEach((note) => {
      assert.ok(
        (note.lessons && note.lessons.length > 0) || (note.tradeoffs && note.tradeoffs.length > 0),
        `Note ${note.slug} must document lessons learned or architectural tradeoffs`
      );
    });
  });
});
