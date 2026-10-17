# 100CENTER RELEASE AND CERTIFICATION GATES

All checkboxes start as NOT VERIFIED until evidence is attached to the repo.

- [ ] G00: pnpm workspace install produces committed lockfile, deterministic lint/test/build CI.
- [ ] G01: module-kernel contract validation, cycle/dependency/capability conflict tests.
- [ ] G02: PostgreSQL live readiness, reviewed migrations, tenant isolation, restore drills.
- [ ] G03: actual OIDC/OAuth session and short-lived tokens, server RBAC, 401/403 negative tests.
- [ ] G04: one approved canonical API and OpenAPI/SDK parity.
- [ ] G05: ResearchRun -> Workflow -> Job -> Evidence -> Audit through real persisted data.
- [ ] G06: 100CENTER actually displays live data, permissions and failures (no fictitious metrics).
- [ ] G07: Next public portal publishes only reviewed content.
- [ ] G08: source-licensed corpus import, provenance and context-preserving knowledge search.
- [ ] G09: module install/upgrade/disable safely audited, dependency and rollback tested.
- [ ] G10: Coolify/Vercel production evidence, SLO, backup, restore, migration and rollback tested.

Current status: foundation docs/registry and earlier standalone Command Center UI slice exist. This monorepo is **not** a live replacement for MoonWitness Gen2 or any existing deployed application.