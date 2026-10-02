import { describe, it } from 'node:test';
import assert from 'node:assert';
import { getCanonicalUrl, buildMetadata } from '../../src/lib/seo/metadata.ts';
import {
  getPersonSchema,
  getWebSiteSchema,
  getProfilePageSchema,
  getBreadcrumbSchema,
  getScholarlyArticleSchema,
  getSoftwareApplicationSchema,
} from '../../src/lib/seo/jsonld.ts';
import { featuredProject } from '../../src/data/projects.ts';
import { featuredResearch } from '../../src/data/research.ts';

describe('SEO Unit Tests & Schema Integrity', () => {
  it('should generate canonical URLs correctly without trailing slashes', () => {
    assert.strictEqual(
      getCanonicalUrl('/', 'https://uzairahmad.vercel.app'),
      'https://uzairahmad.vercel.app'
    );
    assert.strictEqual(
      getCanonicalUrl('/work', 'https://uzairahmad.vercel.app'),
      'https://uzairahmad.vercel.app/work'
    );
    assert.strictEqual(
      getCanonicalUrl('/work/', 'https://uzairahmad.vercel.app/'),
      'https://uzairahmad.vercel.app/work'
    );
    assert.strictEqual(
      getCanonicalUrl('/research/signal-research', 'https://uzairahmad.vercel.app'),
      'https://uzairahmad.vercel.app/research/signal-research'
    );
  });

  it('should build default metadata with proper title, canonical, and robots directives', () => {
    const meta = buildMetadata({}, '/');
    assert.ok(meta.title && meta.title.includes('Uzair Ahmad'));
    assert.strictEqual(meta.canonical, 'https://uzairahmad.vercel.app');
    assert.strictEqual(meta.noindex, false);
    assert.strictEqual(meta.nofollow, false);

    const noindexMeta = buildMetadata({ noindex: true }, '/contact/success');
    assert.strictEqual(noindexMeta.noindex, true);
  });

  it('should generate valid Schema.org Person and WebSite objects', () => {
    const person = getPersonSchema();
    assert.strictEqual(person['@type'], 'Person');
    assert.strictEqual(person.name, 'Uzair Ahmad');
    assert.ok(person.knowsAbout && person.knowsAbout.length > 0);
    assert.ok(person.sameAs && person.sameAs.length > 0);

    const website = getWebSiteSchema();
    assert.strictEqual(website['@type'], 'WebSite');
    assert.strictEqual(website.url, 'https://uzairahmad.vercel.app');
  });

  it('should generate valid Schema.org ProfilePage schema for About page', () => {
    const profile = getProfilePageSchema();
    assert.strictEqual(profile['@type'], 'ProfilePage');
    assert.strictEqual(profile.mainEntity['@type'], 'Person');
  });

  it('should generate valid Schema.org BreadcrumbList with numeric positions', () => {
    const breadcrumb = getBreadcrumbSchema([
      { label: 'Work', href: '/work' },
      { label: 'Stock Return Prediction', href: '/work/deep-learning-stock-return-prediction' },
    ]);

    assert.strictEqual(breadcrumb['@type'], 'BreadcrumbList');
    assert.strictEqual(breadcrumb.itemListElement.length, 3);
    assert.strictEqual(breadcrumb.itemListElement[0].position, 1);
    assert.strictEqual(breadcrumb.itemListElement[0].name, 'Home');
    assert.strictEqual(breadcrumb.itemListElement[1].position, 2);
    assert.strictEqual(breadcrumb.itemListElement[1].name, 'Work');
    assert.strictEqual(breadcrumb.itemListElement[2].position, 3);
    assert.strictEqual(breadcrumb.itemListElement[2].name, 'Stock Return Prediction');
  });

  it('should generate valid Schema.org TechArticle schema for research inquiries', () => {
    const researchSchema = getScholarlyArticleSchema(featuredResearch);
    assert.strictEqual(researchSchema['@type'], 'TechArticle');
    assert.strictEqual(researchSchema.headline, featuredResearch.title);
    assert.ok(researchSchema.citation && researchSchema.citation.length > 0);
  });

  it('should generate valid Schema.org SoftwareApplication schema for project case studies', () => {
    const projectSchema = getSoftwareApplicationSchema(featuredProject);
    assert.strictEqual(projectSchema['@type'], 'SoftwareApplication');
    assert.strictEqual(projectSchema.name, featuredProject.title);
    assert.ok(projectSchema.codeRepository);
  });
});
