import type { ContactMethod } from '@/types/site';

export const contactMethods: ContactMethod[] = [
  {
    id: 'linkedin',
    label: 'Start a Conversation',
    value: 'uzair-ahmad-58007a266',
    url: 'https://www.linkedin.com/in/uzair-ahmad-58007a266/',
    ariaLabel: 'Start a conversation on LinkedIn with Uzair Ahmad',
    iconName: 'linkedin',
    isPrimary: true,
  },
  {
    id: 'email',
    label: 'Email',
    value: 'imuzairahmad8@gmail.com',
    url: 'mailto:imuzairahmad8@gmail.com',
    ariaLabel: 'Email Uzair Ahmad at imuzairahmad8@gmail.com',
    iconName: 'email',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+92 310 3148117',
    url: 'https://wa.me/923103148117',
    ariaLabel: 'Chat with Uzair Ahmad on WhatsApp',
    iconName: 'whatsapp',
  },
  {
    id: 'work',
    label: 'View My Work',
    value: '#work',
    url: '#work',
    ariaLabel: 'Navigate to work section',
  },
  {
    id: 'vercel',
    label: 'Vercel Projects',
    value: 'imuzairahmad8-6603s-projects',
    url: 'https://vercel.com/imuzairahmad8-6603s-projects',
    ariaLabel: 'View deployed projects on Vercel',
    iconName: 'external',
  },
];
