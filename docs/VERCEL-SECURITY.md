# Vercel Security & Isolation Protections

## 1. Zero Browser Secret Leakage

- `process.env.VERCEL_TOKEN` is strictly prohibited in browser-facing bundles.
- No `PUBLIC_` or `NEXT_PUBLIC_` prefixes are used for Vercel credentials.
- All API interactions occur in CLI scripts or SSG build execution.

---

## 2. URL & Input Sanitization

Implemented in [`src/lib/vercel/validator.ts`](file:///d:/web/protfolio/src/lib/vercel/validator.ts) and [`src/lib/vercel/normalizer.ts`](file:///d:/web/protfolio/src/lib/vercel/normalizer.ts):
- **Protocol Enforcement**: Only `https://` is permitted. `http://`, `javascript:`, `data:`, and `vbscript:` schemes are discarded.
- **Private IP & Loopback Filter**: URLs pointing to `localhost`, `127.0.0.1`, `10.x.x.x`, `192.168.x.x`, or `172.16-31.x.x` are rejected.
- **FQDN Validation**: URLs must contain fully qualified hostnames.
- **External Link Hardening**: All outbound deployment links use `target="_blank"` with `rel="noopener noreferrer"`.
