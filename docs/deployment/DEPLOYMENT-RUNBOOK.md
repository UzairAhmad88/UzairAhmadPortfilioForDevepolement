# Production Deployment Runbook

## 1. Hosting Target & Architecture

- **Host**: Vercel Edge Network
- **Build Output**: Static HTML directory (`dist/`)
- **Git Branch**: `main` (Continuous Deployment triggered on push)
- **Domain**: `https://uzair-ahmad-portfilio-for-devepolem.vercel.app/`

---

## 2. Standard Deployment Procedure

1. **Local Pre-Flight Checks**:
   ```bash
   npm run check
   npm test
   npm run build
   ```
2. **Git Commit & Push**:
   ```bash
   git add .
   git commit -m "feat(scope): detailed commit description"
   git push origin main
   ```
3. **Automated Edge Build**: Vercel detects the commit on `main`, runs `npm run build`, and deploys the pre-rendered static artifacts to global CDN edge nodes in < 60s.
4. **Post-Deployment Verification**: Run through `docs/deployment/PRODUCTION-VERIFICATION.md`.
