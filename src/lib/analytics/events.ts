export type AnalyticsEventName =
  | 'page_view'
  | 'project_view'
  | 'research_view'
  | 'contact_form_start'
  | 'contact_form_submit'
  | 'contact_form_success'
  | 'contact_form_error'
  | 'external_link_click'
  | 'cta_click';

export interface BaseEventPayload {
  timestamp?: string;
  path?: string;
}

export interface PageViewEvent extends BaseEventPayload {
  path: string;
  title?: string;
}

export interface ProjectViewEvent extends BaseEventPayload {
  slug: string;
  category?: string;
}

export interface ResearchViewEvent extends BaseEventPayload {
  slug: string;
  domain?: string;
}

export interface ContactFormEvent extends BaseEventPayload {
  inquiry_type?: string;
  status?: 'started' | 'submitted' | 'success' | 'error';
  error_code?: string;
}

export interface ExternalLinkClickEvent extends BaseEventPayload {
  platform: 'github' | 'linkedin' | 'whatsapp' | 'email' | 'other';
  destination: string;
}

export interface CTAClickEvent extends BaseEventPayload {
  cta_label: string;
  target_href: string;
  location?: string;
}

export type AnalyticsPayload =
  | PageViewEvent
  | ProjectViewEvent
  | ResearchViewEvent
  | ContactFormEvent
  | ExternalLinkClickEvent
  | CTAClickEvent;

/**
 * Builds a sanitized, privacy-first analytics event payload.
 * Ensures that sensitive user inputs (e.g., email, message bodies) are never included.
 */
export function buildAnalyticsEvent(
  eventName: AnalyticsEventName,
  payload: AnalyticsPayload
): { event: AnalyticsEventName; data: Record<string, unknown> } {
  return {
    event: eventName,
    data: {
      ...payload,
      timestamp: payload.timestamp || new Date().toISOString(),
    },
  };
}
