# GENESIS MONOREPO — DEVELOPER HANDOFF

Node >=22.12, pnpm 11.24, PostgreSQL for live database operations.

## Local start
1. Clone bjo163/empire-of-the-light.
2. Activate pnpm using Corepack or the specified package manager version.
3. Run pnpm install. Generate/review/commit pnpm-lock.yaml before a certified release.
4. Run pnpm run validate and pnpm run module:test.
5. Start local API: pnpm --filter @empire/api dev (127.0.0.1:3301).
6. Start admin: pnpm --filter @empire/command-center dev (127.0.0.1:5173).
7. Start public portal: pnpm --filter @empire/portal dev (127.0.0.1:3300).
8. DB: pnpm --filter @empire/db db:generate. Review generated SQL before running db:migrate.

## Security
Default API listens on loopback only. OIDC issuer/audience/JWKS missing means no operator access.
Readiness returns degraded until PostgreSQL and identity integration are configured.
Never expose this Fastify API as a second public Gen2 gateway without formal ADR.
Use deployment-managed secret storage and reviewed migrations; no browser database access.

## Local AI handoff
Read docs/BLUEPRINT_V4_MONOREPO.md, docs/MODULE_SYSTEM_SPEC.md, docs/adr/ADR-0002-modular-monorepo-proposal.md, docs/OPERATIONS_RELEASE_GATES.md.
Select one module boundary per PR and attach tests, migration plan, rollback and source evidence.

## Honest readiness
Prepared means skeleton, manifests and validations exist. It does not mean SSO, licensed scripture ingestion, persistent missions, backup or production deployment is working.
