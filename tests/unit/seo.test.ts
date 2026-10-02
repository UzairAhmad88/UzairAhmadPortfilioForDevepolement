import { describe, it } from 'node:test';
import assert from 'node:assert';
import { getCanonicalUrl, buildMetadata } from '../../src/lib/seo/metadata.ts';
import { getPersonSchema, getWebSiteSchema } from '../../src/lib/seo/jsonld.ts';

describe('SEO Unit Tests', () => {
  it('should generate canonical URLs correctly', () => {
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
  });

  it('should build default metadata with proper title and canonical', () => {
    const meta = buildMetadata({}, '/');
    assert.ok(meta.title && meta.title.includes('Uzair Ahmad'));
    assert.strictEqual(meta.canonical, 'https://uzairahmad.vercel.app');
    assert.strictEqual(meta.noindex, false);
  });

  it('should generate valid Schema.org Person and WebSite objects', () => {
    const person = getPersonSchema();
    assert.strictEqual(person['@type'], 'Person');
    assert.strictEqual(person.name, 'Uzair Ahmad');

    const website = getWebSiteSchema();
    assert.strictEqual(website['@type'], 'WebSite');
    assert.strictEqual(website.url, 'https://uzairahmad.vercel.app');
  });
});
