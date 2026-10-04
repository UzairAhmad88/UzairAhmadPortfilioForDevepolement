# Maintainer Pre-Modification Checklist

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Stage:** Post-Production Governance & Long-Term Stewardship  
**Audience:** Future Maintainers & Technical Stewards  

---

## 1. Pre-Modification Invariant Checklist

Before writing any new code or modifying existing content:

```text
□ 1. Understand Current Architecture:
     Review docs/ARCHITECTURE.md and docs/REPOSITORY-STRUCTURE.md.

□ 2. Locate Canonical Source File:
     Identify exact source file in src/data/ (for content) or src/components/ (for UI).

□ 3. Check Change Risk Tier:
     Classify the change using docs/CHANGE-RISK-MODEL.md (P0 to P4).

□ 4. Evaluate Feature Gate:
     Confirm the change strengthens identity, understanding, evidence, or accessibility.

□ 5. Check Referential Integrity:
     Verify all technology IDs, research IDs, and project slugs resolve to existing entities.

□ 6. Check Zero Secret Invariant:
     Ensure no private API keys, PATs, or database URLs are introduced.

□ 7. Check Dependency Policy:
     Ensure no unnecessary third-party npm packages are installed (docs/DEPENDENCY-GOVERNANCE.md).

□ 8. Check Responsive & a11y Invariants:
     Verify touch targets >= 44px, zero horizontal overflow, and WCAG contrast.

□ 9. Implement Smallest Correct Change:
     Avoid unnecessary refactoring or continuous redesigns.

□ 10. Run Full Verification Gate:
      npm run check && npm test && npm run build.

□ 11. Update Documentation:
      Synchronize any affected canonical files in docs/.

□ 12. Deploy & Smoke Test:
      Verify production URL after deployment.
```
