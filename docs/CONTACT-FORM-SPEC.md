# Contact Form Specification & UX Details (Phase 22)

## 1. Visual Hierarchy & Field Grouping

The contact form is structured into three logical groups prioritizing clarity and reducing cognitive overhead:

```text
┌─────────────────────────────────────────────────────────────┐
│ 1. Inquiry Context                                          │
│    • Inquiry Type (Select: 8 controlled options)            │
│    • Dynamic contextual tip based on selected type          │
│    • Removable context banner if arriving via ?project=     │
├─────────────────────────────────────────────────────────────┤
│ 2. Contact Identity                                         │
│    • Name (Text, autocomplete="name", Required)             │
│    • Email (Email, autocomplete="email", Required)          │
│    • Organization (Text, autocomplete="organization", Opt)  │
│    • Relevant URL (URL, Optional)                           │
├─────────────────────────────────────────────────────────────┤
│ 3. Problem Statement & Scope                                │
│    • Message Textarea (Required, min 10 chars, max 4000)    │
│    • Live character counter (e.g. "145 / 4000")             │
│    • Helper hint regarding constraints and deliverables     │
├─────────────────────────────────────────────────────────────┤
│ 4. Submission & Privacy                                     │
│    • Send Inquiry button (with loading spinner & state)     │
│    • Privacy statement regarding direct communication       │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Dynamic Contextual Tips

| Inquiry Type | Dynamic Helper Tip |
| :--- | :--- |
| `project` | *Tip: Describe the core deliverables, expected user volume, technical constraints, and target timeline.* |
| `research` | *Tip: Reference the specific statistical hypothesis, time-series dataset, or research paper of interest.* |
| `technical` | *Tip: Detail the orchestration bottlenecks, agent tool-calling schemas, or state transition constraints.* |
| `academic` | *Tip: Outline your institutional background, research domain, and specific questions.* |
| `open-source` | *Tip: Include the relevant repository URL, branch, or reproduction steps.* |
| `consulting` | *Tip: Highlight existing system architecture, latency requirements, and compliance standards.* |
| `employment` | *Tip: Please include the role title, team domain, technical stack, and location/remote parameters.* |
| `general` | *Tip: Share the context of your inquiry and what you would like to explore.* |

---

## 3. Feedback States

1. **Default State:** Clean inputs with `:focus-visible` high-contrast outline rings.
2. **Inline Error State:** Red border (`#ef4444`), explicit error message below field, and alert summary.
3. **Loading State:** Button disabled, label updated to `"Sending Inquiry..."`, animated spinner displayed.
4. **Success State:** Redirect to `/contact/success` confirmation card.
