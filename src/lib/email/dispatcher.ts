import type { ContactInquiry, FormattedEmailPayload, DeliveryResult, ContactDeliveryProvider } from '../../types/contact.ts';

export function formatInquiryEmail(inquiry: ContactInquiry): FormattedEmailPayload {
  const typeMap: Record<string, string> = {
    project: 'Project & Full-Stack Systems',
    research: 'Quantitative & AI Research',
    technical: 'Multi-Agent AI & Architecture',
    academic: 'Academic / Student Discussion',
    'open-source': 'Open-Source Collaboration',
    consulting: 'Architecture Review & Consulting',
    employment: 'Engineering Role Opportunity',
    general: 'General Professional Inquiry',
  };

  const formattedType = typeMap[inquiry.inquiryType] || 'Inquiry';
  const orgPart = inquiry.organization ? ` [${inquiry.organization}]` : '';
  const contextPart = inquiry.projectContext
    ? ` (Context: ${inquiry.projectContext})`
    : inquiry.researchContext
    ? ` (Research: ${inquiry.researchContext})`
    : '';

  const subject = `[${formattedType}] ${inquiry.name}${orgPart}${contextPart}`;

  const plainText = `
============================================================
INBOUND INQUIRY: ${formattedType.toUpperCase()}
============================================================
Name: ${inquiry.name}
Email: ${inquiry.email}
Organization: ${inquiry.organization || 'Not provided'}
Inquiry Type: ${inquiry.inquiryType}
Subject: ${inquiry.subject || 'Standard Inquiry'}
Timeline / Stage: ${inquiry.timeline || 'Not specified'}
Relevant Link: ${inquiry.relevantLink || 'None provided'}
Project Context: ${inquiry.projectContext || 'None'}
Research Context: ${inquiry.researchContext || 'None'}
Expected Outcome: ${inquiry.expectedOutcome || 'Not specified'}

MESSAGE:
------------------------------------------------------------
${inquiry.message}
------------------------------------------------------------
Timestamp: ${new Date(inquiry.timestamp || Date.now()).toISOString()}
============================================================
`;

  const htmlText = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6; padding: 20px; background: #f8fafc;">
  <div style="max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <div style="background: #0f172a; color: #ffffff; padding: 24px;">
      <span style="font-size: 0.75rem; font-weight: 700; color: #7ed8c4; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px;">Portfolio Platform Inquiry</span>
      <h2 style="margin: 0; font-size: 1.3rem; font-weight: 700; color: #f8fafc;">${formattedType}</h2>
    </div>
    
    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 6px 0; color: #64748b; font-size: 0.875rem; width: 140px;"><strong>From:</strong></td>
          <td style="padding: 6px 0; color: #0f172a; font-size: 0.95rem;">${inquiry.name} (&lt;<a href="mailto:${inquiry.email}" style="color: #0284c7; text-decoration: none;">${inquiry.email}</a>&gt;)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #64748b; font-size: 0.875rem;"><strong>Organization:</strong></td>
          <td style="padding: 6px 0; color: #0f172a; font-size: 0.95rem;">${inquiry.organization || 'Not provided'}</td>
        </tr>
        ${
          inquiry.projectContext
            ? `<tr><td style="padding: 6px 0; color: #64748b; font-size: 0.875rem;"><strong>Project Context:</strong></td><td style="padding: 6px 0; color: #0f172a; font-size: 0.95rem;"><code>${inquiry.projectContext}</code></td></tr>`
            : ''
        }
        ${
          inquiry.researchContext
            ? `<tr><td style="padding: 6px 0; color: #64748b; font-size: 0.875rem;"><strong>Research Context:</strong></td><td style="padding: 6px 0; color: #0f172a; font-size: 0.95rem;"><code>${inquiry.researchContext}</code></td></tr>`
            : ''
        }
        ${
          inquiry.relevantLink
            ? `<tr><td style="padding: 6px 0; color: #64748b; font-size: 0.875rem;"><strong>Relevant Link:</strong></td><td style="padding: 6px 0;"><a href="${inquiry.relevantLink}" style="color: #0284c7; text-decoration: underline;" target="_blank" rel="noopener">${inquiry.relevantLink}</a></td></tr>`
            : ''
        }
        ${
          inquiry.timeline
            ? `<tr><td style="padding: 6px 0; color: #64748b; font-size: 0.875rem;"><strong>Timeline:</strong></td><td style="padding: 6px 0; color: #0f172a; font-size: 0.95rem;">${inquiry.timeline}</td></tr>`
            : ''
        }
      </table>

      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

      <h3 style="font-size: 0.95rem; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px 0;">Message Content:</h3>
      <div style="background: #f8fafc; padding: 18px; border-radius: 6px; white-space: pre-wrap; font-size: 0.95rem; color: #334155; border: 1px solid #e2e8f0; line-height: 1.6;">
${inquiry.message}
      </div>

      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f1f5f9; font-size: 0.8rem; color: #94a3b8; text-align: center;">
        Sent via uzairahmad.vercel.app/contact • Reply directly to this email to respond to ${inquiry.name}.
      </div>
    </div>
  </div>
</body>
</html>
`;

  return {
    subject,
    fromName: inquiry.name,
    replyTo: inquiry.email,
    plainText,
    htmlText,
  };
}

/**
 * Default fallback delivery provider (logs safely in dev / test environments).
 */
export class ConsoleDeliveryProvider implements ContactDeliveryProvider {
  name = 'console-fallback';

  async send(_payload: FormattedEmailPayload): Promise<DeliveryResult> {
    return {
      success: true,
      messageId: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    };
  }
}
