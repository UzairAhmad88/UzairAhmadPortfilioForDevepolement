import { describe, it } from 'node:test';
import assert from 'node:assert';
import { buildAnalyticsEvent } from '../../src/lib/analytics/events.ts';

describe('Privacy-First Analytics Event Builder', () => {
  it('should build a valid page_view event with timestamp', () => {
    const event = buildAnalyticsEvent('page_view', {
      path: '/work/deep-learning-stock-return-prediction',
      title: 'Stock Return Prediction',
    });

    assert.strictEqual(event.event, 'page_view');
    assert.strictEqual(event.data.path, '/work/deep-learning-stock-return-prediction');
    assert.ok(event.data.timestamp);
  });

  it('should build a valid contact_form_submit event without leaking private message or email data', () => {
    const event = buildAnalyticsEvent('contact_form_submit', {
      inquiry_type: 'project',
      status: 'submitted',
    });

    assert.strictEqual(event.event, 'contact_form_submit');
    assert.strictEqual(event.data.inquiry_type, 'project');
    assert.strictEqual(event.data.status, 'submitted');
    assert.strictEqual((event.data as any).email, undefined);
    assert.strictEqual((event.data as any).message, undefined);
  });

  it('should build external link tracking events safely', () => {
    const event = buildAnalyticsEvent('external_link_click', {
      platform: 'github',
      destination: 'https://github.com/UzairAhmad88',
    });

    assert.strictEqual(event.event, 'external_link_click');
    assert.strictEqual(event.data.platform, 'github');
    assert.strictEqual(event.data.destination, 'https://github.com/UzairAhmad88');
  });
});
