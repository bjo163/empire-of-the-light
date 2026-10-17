# FREE DATABASE — NEON POSTGRES

**Decision:** Use PostgreSQL 18 on **Neon Free** for the Empire of the Light cloud database; keep Drizzle ORM and Drizzle Kit. No paid database subscription is required for the development/pilot footprint while usage remains under Free plan limits.

## Provisioned and verified (2026-10-17)

- Provider: Neon, organization on the **Free plan**
- Project: `empire-of-the-light`
- Database: `empire`
- Region: AWS Singapore (`aws-ap-southeast-1`)
- PostgreSQL: 18
- Verified: a read-only `SELECT current_database(), current_setting('server_version')` query returned successfully.
- Actual schema migrations: **not applied**. No production mission data stored or permissioned operators provisioned.
- Project secrets and connection string: **not committed to GitHub**.

## Current Free plan resources
Per Neon's October 2, 2026 announcement: **1 GB Postgres per project**, **100 compute-unit hours per month per project**, up to **100 free projects**, **10 branches per project**. These limits and provider policies may change; verify current billing settings before large loads or production traffic.

Official reference: https://neon.com/blog/neon-free-plan-1-gb-per-project

## Connect monorepo without leaking credentials
1. Open https://console.neon.tech/ and select project `empire-of-the-light`.
2. Select database `empire` and copy the **pooled PostgreSQL connection string**, if supported for the target runtime.
3. Set `DATABASE_URL` as a **server secret** in your local shell or trusted deployment environment; never put the value in source, chat, client bundle, public frontend variables, CI logs or a commit.
4. Fastify is already written to read `DATABASE_URL`; the Drizzle config also reads `DATABASE_URL`.
5. Run `pnpm --filter @empire/db db:generate` to create migration SQL from reviewed schema, **inspect SQL and backup plan**, and only then use the deployment migration job `db:migrate`.
6. Keep `OIDC_ISSUER`, `OIDC_AUDIENCE`, and `OIDC_JWKS_URL` in the server-only environment after choosing and verifying the identity provider.

Readiness is **degraded** if either the PostgreSQL connection or OIDC settings are unavailable. This is an intentional fail-closed design, and a successful database query **does not mean** the API/UI is deployed.

## Optional entirely local development
Run a self-hosted PostgreSQL container for zero external DB expense:

```bash
export LOCAL_POSTGRES_PASSWORD='use-a-long-unique-local-password'
docker compose -f infra/postgres.compose.yml up -d
export DATABASE_URL='postgresql://empire_local:use-a-long-unique-local-password@127.0.0.1:5432/empire'
```

The above password is an **example placeholder only**, not an actual account credential. Prefer generating a password locally. Database persistent volume is stored locally and should be protected/backed up.

**Warning:** Free-tier Neon is suitable for development/pilots, but does not replace independent backups, availability/security testing, migration review, or a production capacity plan. Never publish sensitive community/child data before proper security review.

## Architecture boundary
`empire-of-the-light` has its own isolated Neon project. Do not reuse the databases of `moonwitness-ii` or other unrelated projects. A new Neon DB does not authorize deploying a second MoonWitness Gen2 public API or moving existing user data without approved ADR.
