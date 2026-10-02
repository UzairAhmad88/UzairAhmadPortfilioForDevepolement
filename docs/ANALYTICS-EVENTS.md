# Analytics Event Taxonomy

This document lists all standardized analytics event names, allowable payload properties, and conversion definitions.

## 1. Event Definitions

| Event Name | Trigger Context | Permitted Properties | Prohibited Properties |
|---|---|---|---|
| `page_view` | Initial page load or route change | `path`, `title`, `timestamp` | Query parameters containing PII |
| `project_view` | Case study page load (`/work/*`) | `slug`, `category`, `timestamp` | User ID, personal data |
| `research_view` | Research detail page load (`/research/*`) | `slug`, `domain`, `timestamp` | User ID, personal data |
| `contact_form_start` | User focuses first field in `/contact` | `inquiry_type`, `timestamp` | Form input values |
| `contact_form_submit` | User clicks Send Inquiry button | `inquiry_type`, `timestamp` | `name`, `email`, `message`, `organization` |
| `contact_form_success` | Form submission processed successfully | `inquiry_type`, `timestamp` | `name`, `email`, `message` |
| `contact_form_error` | Form validation or network failure | `inquiry_type`, `error_code`, `timestamp` | Input content, stack traces |
| `external_link_click` | Clicks on GitHub, LinkedIn, WhatsApp | `platform`, `destination`, `timestamp` | User identity |
| `cta_click` | Clicks on contextual "Start Conversation" CTA | `cta_label`, `target_href`, `location` | User identity |

## 2. Conversion Definitions

- **Primary Macro-Conversion**: `contact_form_success` (Verified delivery of inbound project, role, or research inquiry).
- **Secondary Micro-Conversions**:
  - `cta_click` (Intent to start conversation from case study or research inquiry).
  - `external_link_click` with `platform: 'github'` or `platform: 'linkedin'`.
