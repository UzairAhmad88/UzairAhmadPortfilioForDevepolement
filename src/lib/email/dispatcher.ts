import type { ContactInquiry } from '@/types/contact';

export interface FormattedEmailPayload {
  subject: string;
  fromName: string;
  replyTo: string;
  plainText: string;
  htmlText: string;
}

export function formatInquiryEmail(inquiry: ContactInquiry): FormattedEmailPayload {
  const typeMap: Record<string, string> = {
    project: 'Project Inquiry',
    employment: 'Role Opportunity',
    research: 'Research Collaboration',
    consulting: 'Technical Consulting',
    general: 'General Inquiry',
  };

  const formattedType = typeMap[inquiry.inquiryType] || 'Inquiry';
  const orgPart = inquiry.organization ? ` - ${inquiry.organization}` : '';
  const subject = `[${formattedType}] ${inquiry.name}${orgPart}`;

  const plainText = `
============================================================
INBOUND INQUIRY: ${formattedType.toUpperCase()}
============================================================
Name: ${inquiry.name}
Email: ${inquiry.email}
Organization: ${inquiry.organization || 'Not provided'}
Timeline / Stage: ${inquiry.timeline || 'Not specified'}
Inquiry Type: ${inquiry.inquiryType}

MESSAGE:
${inquiry.message}
============================================================
`;

  const htmlText = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1e293b; line-height: 1.6; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
    <div style="background: #0f172a; color: #ffffff; padding: 20px;">
      <h2 style="margin: 0; font-size: 1.25rem;">New Inbound Inquiry: ${formattedType}</h2>
    </div>
    <div style="padding: 24px; background: #ffffff;">
      <p style="margin: 0 0 12px 0;"><strong>From:</strong> ${inquiry.name} (&lt;<a href="mailto:${inquiry.email}">${inquiry.email}</a>&gt;)</p>
      <p style="margin: 0 0 12px 0;"><strong>Organization:</strong> ${inquiry.organization || 'Not provided'}</p>
      <p style="margin: 0 0 12px 0;"><strong>Timeline / Stage:</strong> ${inquiry.timeline || 'Not specified'}</p>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
      <h3 style="font-size: 1rem; color: #0f172a; margin: 0 0 10px 0;">Message Content:</h3>
      <div style="background: #f8fafc; padding: 16px; border-radius: 6px; white-space: pre-wrap; font-size: 0.95rem; color: #334155; border: 1px solid #e2e8f0;">
${inquiry.message}
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
