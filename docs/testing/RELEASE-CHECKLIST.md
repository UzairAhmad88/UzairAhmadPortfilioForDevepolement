# Production Release Checklist

## 1. Pre-Deployment Quality Gates

Execute these sequential quality gates before pushing to `main` or deploying to production:

```bash
# Gate 1: Type Checking
npm run check
# Expected: 0 errors, 0 warnings, 0 hints across 179 files

# Gate 2: Automated Unit & Invariant Testing
npm test
# Expected: 48 suites, 266 tests passing, 0 failures

# Gate 3: Production Static Build
npm run build
# Expected: 60 static HTML pages generated in dist/

# Gate 4: Local Preview
npm run preview
# Verify visual layout and interactive components
```

---

## 2. Release Acceptance Criteria

- [ ] All 266 automated unit tests pass.
- [ ] Zero TypeScript or Astro diagnostic errors.
- [ ] All 60 static routes build cleanly.
- [ ] No dangling edges or invalid references in Knowledge Graph.
- [ ] Discovery search index contains 100% of canonical entities.
- [ ] Zero exposed API keys or tokens in git commit history.
- [ ] Contact form sanitization and honeypot validation verified.
- [ ] Dark and Light themes render without layout shifts.
