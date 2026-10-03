import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildTimelineEvents,
  sortTimelineEvents,
  getTimelineEvents,
  getTimelineSummary,
  groupEventsByYear,
  getTimelineEras,
  formatTimelineDate,
} from '../../src/lib/timeline/timelineEngine.ts';
import type { TimelineEvent } from '../../src/types/timeline.ts';

describe('Phase 19 — Personal Engineering Timeline Engine', () => {
  it('should generate canonical timeline events from projects, research, lab, and notes', () => {
    const events = buildTimelineEvents();
    assert.ok(events.length >= 15, `Expected at least 15 events, got ${events.length}`);

    // Verify all major event types are represented
    const types = new Set(events.map((e) => e.type));
    assert.ok(types.has('project'), 'Missing project events');
    assert.ok(types.has('research'), 'Missing research events');
    assert.ok(types.has('lab'), 'Missing lab events');
    assert.ok(types.has('note'), 'Missing note events');
  });

  it('should format date strings with correct precisions', () => {
    const dayResult = formatTimelineDate('2024-09-15');
    assert.equal(dayResult.precision, 'day');
    assert.equal(dayResult.display, 'September 15, 2024');

    const monthResult = formatTimelineDate('2025-01');
    assert.equal(monthResult.precision, 'month');
    assert.equal(monthResult.display, 'January 2025');

    const yearResult = formatTimelineDate('2026');
    assert.equal(yearResult.precision, 'year');
    assert.equal(yearResult.display, '2026');

    const rangeResult = formatTimelineDate('2024', '2025');
    assert.equal(rangeResult.precision, 'range');
    assert.equal(rangeResult.display, '2024 – 2025');
  });

  it('should strictly sort events in chronological descending order', () => {
    const events = buildTimelineEvents();
    for (let i = 0; i < events.length - 1; i++) {
      const curr = events[i];
      const next = events[i + 1];
      assert.ok(
        curr.year >= next.year,
        `Sorting error: ${curr.id} (${curr.year}) before ${next.id} (${next.year})`
      );
    }
  });

  it('should correctly filter events by type', () => {
    const projectEvents = getTimelineEvents({ type: 'project' });
    assert.ok(projectEvents.length > 0);
    assert.ok(projectEvents.every((e) => e.type === 'project'));

    const researchEvents = getTimelineEvents({ type: 'research' });
    assert.ok(researchEvents.length > 0);
    assert.ok(researchEvents.every((e) => e.type === 'research'));

    const labEvents = getTimelineEvents({ type: 'lab' });
    assert.ok(labEvents.length > 0);
    assert.ok(labEvents.every((e) => e.type === 'lab'));

    const noteEvents = getTimelineEvents({ type: 'note' });
    assert.ok(noteEvents.length > 0);
    assert.ok(noteEvents.every((e) => e.type === 'note'));
  });

  it('should correctly filter events by year', () => {
    const events2024 = getTimelineEvents({ year: 2024 });
    assert.ok(events2024.length > 0);
    assert.ok(events2024.every((e) => e.year === 2024));

    const events2025 = getTimelineEvents({ year: 2025 });
    assert.ok(events2025.length > 0);
    assert.ok(events2025.every((e) => e.year === 2025));
  });

  it('should filter events by search query across title, description, and technologies', () => {
    const pytorchEvents = getTimelineEvents({ searchQuery: 'pytorch' });
    assert.ok(pytorchEvents.length > 0);
    assert.ok(
      pytorchEvents.some(
        (e) =>
          e.title.toLowerCase().includes('pytorch') ||
          e.description.toLowerCase().includes('pytorch') ||
          e.technologies?.some((t) => t.toLowerCase().includes('pytorch'))
      )
    );
  });

  it('should calculate accurate timeline summary metrics', () => {
    const events = buildTimelineEvents();
    const summary = getTimelineSummary(events);

    assert.equal(summary.totalEvents, events.length);
    assert.ok(summary.yearRange.start <= summary.yearRange.end);
    assert.equal(
      summary.byType.project +
        summary.byType.research +
        summary.byType.lab +
        summary.byType.note,
      events.length
    );
  });

  it('should group events by year into ordered buckets', () => {
    const events = buildTimelineEvents();
    const groups = groupEventsByYear(events);

    assert.ok(groups.length >= 2, 'Expected at least 2 year groups');
    // Verify year descending
    for (let i = 0; i < groups.length - 1; i++) {
      assert.ok(groups[i].year > groups[i + 1].year);
    }
    // Verify each group has events
    for (const group of groups) {
      assert.ok(group.events.length > 0);
      assert.ok(group.events.every((e) => e.year === group.year));
    }
  });

  it('should provide canonical timeline eras', () => {
    const eras = getTimelineEras();
    assert.ok(eras.length >= 2);
    for (const era of eras) {
      assert.ok(era.id.length > 0);
      assert.ok(era.title.length > 0);
      assert.ok(era.timeframe.length > 0);
      assert.ok(era.focusAreas.length > 0);
    }
  });

  it('should never expose unpublished or excluded projects', () => {
    const events = buildTimelineEvents();
    assert.ok(
      events.every(
        (e) => e.archiveState !== 'unpublished' && e.archiveState !== 'excluded'
      )
    );
  });
});
