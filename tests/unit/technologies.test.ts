import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  technologies,
  technologyCategories,
  getTechnologyById,
  getTechnologiesByCategory,
  getTechnologiesForProject,
  getCoreTechnologies,
} from '../../src/data/technologies.ts';
import { projects } from '../../src/data/projects.ts';
import { researchItems } from '../../src/data/research.ts';

describe('Technology System & Entity Ecosystem', () => {
  const validProjectSlugs = projects.map((p) => p.slug);
  const validResearchSlugs = researchItems.map((r) => r.slug);
  const validCategoryIds = technologyCategories.map((c) => c.id);

  it('should verify all technologies have valid unique IDs, names, and metadata', () => {
    assert.ok(technologies.length >= 15, 'Must have at least 15 cataloged technologies');

    const seenIds = new Set<string>();
    const seenNames = new Set<string>();

    for (const tech of technologies) {
      assert.ok(tech.id, 'Technology must have an id');
      assert.ok(!seenIds.has(tech.id), `Duplicate technology ID: ${tech.id}`);
      seenIds.add(tech.id);

      assert.ok(tech.name, `Technology ${tech.id} must have a name`);
      assert.ok(!seenNames.has(tech.name.toLowerCase()), `Duplicate technology name: ${tech.name}`);
      seenNames.add(tech.name.toLowerCase());

      assert.ok(tech.tagline, `Technology ${tech.id} must have a tagline`);
      assert.ok(tech.description, `Technology ${tech.id} must have a description`);
      assert.ok(tech.primaryRole, `Technology ${tech.id} must have a primary role`);
      assert.ok(['core', 'recurring', 'specialized', 'research'].includes(tech.status), `Invalid status: ${tech.status}`);

      assert.ok(Array.isArray(tech.categories) && tech.categories.length > 0, `Technology ${tech.id} must have at least one category`);
      for (const cat of tech.categories) {
        assert.ok(validCategoryIds.includes(cat), `Technology ${tech.id} references invalid category: ${cat}`);
      }

      // Check project references
      assert.ok(Array.isArray(tech.projectSlugs), `Technology ${tech.id} must have projectSlugs array`);
      for (const slug of tech.projectSlugs) {
        assert.ok(
          validProjectSlugs.includes(slug),
          `Technology ${tech.id} references non-existent project slug: ${slug}`
        );
      }

      // Check research references if present
      if (tech.researchSlugs) {
        for (const rSlug of tech.researchSlugs) {
          assert.ok(
            validResearchSlugs.includes(rSlug),
            `Technology ${tech.id} references non-existent research slug: ${rSlug}`
          );
        }
      }
    }
  });

  it('should verify technology category taxonomy structure', () => {
    assert.strictEqual(technologyCategories.length, 7, 'Must have exactly 7 defined categories');
    for (const cat of technologyCategories) {
      assert.ok(cat.id, 'Category must have an ID');
      assert.ok(cat.name, 'Category must have a display name');
      assert.ok(cat.description, 'Category must have a description');
      assert.ok(typeof cat.order === 'number', 'Category must have order number');
    }
  });

  it('should verify helper functions retrieve accurate mappings', () => {
    const python = getTechnologyById('python');
    assert.ok(python);
    assert.strictEqual(python?.name, 'Python');

    // Test alias resolution
    const ts = getTechnologyById('TS');
    assert.ok(ts);
    assert.strictEqual(ts?.name, 'TypeScript');

    const react = getTechnologyById('ReactJS');
    assert.ok(react);
    assert.strictEqual(react?.name, 'React');

    const frontendTechs = getTechnologiesByCategory('frontend');
    assert.ok(frontendTechs.length >= 3);
    assert.ok(frontendTechs.some((t) => t.id === 'react'));

    const curasphereTechs = getTechnologiesForProject('curasphere-hms');
    assert.ok(curasphereTechs.length >= 3);
    assert.ok(curasphereTechs.some((t) => t.id === 'postgresql'));

    const coreTechs = getCoreTechnologies();
    assert.ok(coreTechs.length >= 5);
    assert.ok(coreTechs.some((t) => t.id === 'pytorch'));
  });

  it('should guarantee zero skill percentage rankings, fake proficiency scores, or self-ratings', () => {
    const rawData = JSON.stringify(technologies);

    assert.ok(!rawData.includes('95%'), 'Must not contain 95% skill ratings');
    assert.ok(!rawData.includes('90%'), 'Must not contain 90% skill ratings');
    assert.ok(!rawData.includes('80%'), 'Must not contain 80% skill ratings');
    assert.ok(!rawData.includes('proficiency'), 'Must not contain proficiency rankings');
    assert.ok(!rawData.includes('Expert level'), 'Must not contain inflated self-ratings');
  });
});
