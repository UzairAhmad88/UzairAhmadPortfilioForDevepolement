# Analytics Architecture & Privacy Governance

This document describes the privacy-first analytics architecture designed for measuring page discovery, project exploration, and contact conversion.

## 1. Principles of Measurement

- **Zero Surveillance**: The site does not track personally identifiable information (PII), fingerprint user hardware, or install cross-site advertising cookies.
- **Data Minimization**: Event payloads carry only necessary high-level attributes (e.g. `path`, `slug`, `platform`, `inquiry_type`).
- **Resilience**: The site functions completely if analytics endpoints are blocked or fail to load.

## 2. Event Payload Model

All events pass through `buildAnalyticsEvent()` in `src/lib/analytics/events.ts`:
```typescript
export function buildAnalyticsEvent(
  eventName: AnalyticsEventName,
  payload: AnalyticsPayload
): { event: AnalyticsEventName; data: Record<string, unknown> }
```

## 3. Supported Analytics Providers

The event architecture is vendor-agnostic and ready for integration with privacy-first platforms:
- **Plausible Analytics / Fathom**: Script can be added with data-domain.
- **Custom Self-Hosted Webhook**: Ingesting JSON events via edge functions.
- **Console / Dev Mode**: Safe console logging during local development.
