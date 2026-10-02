# Technical Note Guidelines

This document provides conventions for authoring concise, high-utility technical notes and debugging logs.

## 1. Purpose of a Technical Note

A technical note is a **Level 1 or Level 2** document focused on resolving a specific engineering problem, explaining a niche configuration, or documenting a mathematical nuance. It is intentionally brief (typically 300–800 words) and avoids long historical introductions.

## 2. Structure of a Technical Note

```
1. Problem Statement / Symptom
   └── Exact error trace, mathematical ambiguity, or configuration conflict.

2. Root Cause Analysis
   └── The underlying technical or theoretical reason for the issue.

3. Solution / Resolution
   └── Exact snippet, diff, configuration file, or equation.

4. Verification
   └── How to verify the fix works (test command, benchmark, assertion).

5. References & Links
   └── Official documentation or specification link.
```

## 3. Best Practices

- **Get straight to the point**: Do not write a 3-paragraph intro about why web servers exist.
- **Provide copy-pasteable snippets**: Ensure configs and commands are sanitized and tested.
- **Link to relevant projects**: Tag which project repository or research inquiry spawned this note.
