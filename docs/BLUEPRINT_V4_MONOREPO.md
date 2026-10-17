# GENESIS v4.0 — EMPIRE OF THE LIGHT MODULAR MONOREPO

**Status:** DESIGN PROPOSAL + SCAFFOLD; not a production deployment, not approved in Gen2 architecture.

## Tech decision
- **pnpm workspaces + Turborepo** for controlled module/package dependencies.
- **React + Vite + TypeScript**: authenticated 100CENTER operations SPA.
- **Next.js App Router**: separate public portal, SSR and content.
- **Fastify 5 + TypeScript**: one controlled API boundary; in MoonWitness Gen2 this is an adapter/internal capability until the existing canonical API ownership is reconciled by ADR.
- **PostgreSQL + Drizzle ORM/Kit**: strict SQL, reviewed migrations and transactional module state.
- **Module Kit**: first-party manifests, dependency sorting, capability owner checks, isolation, lifecycle proposals.
- **Local AI**: optional tool adapter with provenance and human approvals; no auto-authorization.

## Target directory layout
```text
apps/
  command-center/             # Vite React operations
  portal/                     # Next public SSR
  api/                        # Fastify API and module host
packages/
  module-kit/                 # Manifest validation + deterministic resolver
  db/                         # Drizzle PostgreSQL schema/migrations
modules/
  kernel/ research/ scripture/ journey/ mission/ governance/ ziil/
config/modules.json          # allowlisted bootstrap modules
data/ schemas/               # existing 71 UNILEX, AGE, G.O.D.99/WINGS10, 4-source registries
```

## Canonical data and API ownership
One source of truth for domain data. Fastify hosts *only reviewed module routes*, uses Drizzle repositories owned by designated domains. UI never reads PostgreSQL directly. The Next public portal never exposes private tenant data. Modules cannot access each other's private DB tables; use typed contracts and owned services.

### Gen2 compatibility
The existing MoonWitness Gen2 freeze reserves one **public** HTTPS/OpenAPI API door, in `ArsyBelovedLabs/moonwitness-api`. This repository is an **integration proposal**, not authorization to launch a competing public Fastify API. Until the platform's ADR is approved, run `apps/api` locally/staging only. Preserve current `cc.moonwitness.biz.id` Command Center production ownership until a tested cutover.

## Odoo-like modules (not Odoo itself)
- A module has `id,version,owner,dependencies,capabilities,permissions,models,migrations,uiSlots,state`.
- The registry validates manifest shape, missing/cyclic deps, conflicts and topological order.
- Only committed first-party code can be enabled; no arbitrary code download/execution.
- Lifecycle target: AVAILABLE -> VALIDATED -> INSTALLED -> ENABLED, then upgrade/disable/rollback, with human approvals and audit.
- Every migration is generated and reviewed, applied by DB release job, not automatically when importing a module.
- `kernel` cannot be disabled; target modules stay `scaffold_only` until API, DB, permissions and tests exist.
- Module dependencies map to required *interfaces*; never construct one microservice per module.

## Core modules
| Module | Job | Initial maturity |
|---|---|---|
| kernel | health, module metadata, actor/session boundary | executable bootstrap |
| research | ResearchRun/workflows/jobs/evidence bridge | scaffold |
| scripture | UNILEX + four independently sourced scriptures | scaffold |
| journey | SELF, COMMUNITY, GLOBAL Journey/Path | scaffold |
| mission | missions, assignments, duties, 99 personas/10 WINGS | scaffold |
| governance | AMANAH, SHURA, MIZAN, review and permission | scaffold |
| ziil | safety, rights, recovery, safeguarding | scaffold |

## Architecture guarantees
- **Public API:** only one authorized public door; versioned OpenAPI and SDK.
- **Identity:** no default admin; real OIDC access token verification, least privilege, multi-tenant isolation.
- **Persistence:** PostgreSQL primary store; reviewed migrations, backups, retention and rollback.
- **Events:** idempotency, append-only audit, trace/correlation, safe retries and cancellation.
- **Knowledge:** four scripture source families retain witness, edition, language, license and source; no forced doctrinal equivalence.
- **AI:** cannot claim religious authority, divine messages, supernatural control or calculate salvation.
- **Observability:** health != readiness != mission completion.
- **Web:** public portal is read-only published material; command center admin requires authentication.

## Operational delivery stages
G-M0: monorepo structure + manifests + validators + code skeleton.
G-M1: package lock + typecheck + build + CI + migrations.
G-M2: server-verified OIDC/RBAC/tenant + module catalog state persistence.
G-M3: real ResearchRun -> Workflow -> Job -> Evidence loop using canonical API.
G-M4: Command Center auth, approvals, Jobs/Evidence drilldown, access logging.
G-M5: UNILEX/corpus source import and source-restricted search.
G-M6: Human-approved mission/Journey/ZIIL modules and public portal.
G-M7: backups, monitoring, deployed smoke, rollback, certification.

## Release gate
Never call the ecosystem operational until an authorized human can log in, submit a real mission, receive evidence, inspect audit history, resume after restart, revoke access, and verify database backups/restore and safe rollout.

## Open ADR decisions
- Is this monorepo a Gen2 application consumer or a formally migrated API/domain owner?
- Actual IdP, tenant roles, domain names and CORS.
- PostgreSQL hosting, schema/migration owner and data-retention plan.
- Copyright-cleared scripture editions for ingestion.
- Blue/green deployment/cutover preserving current CC and API behavior.