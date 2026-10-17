# EMPIRE OF THE LIGHT
**A-L-L-A-H Command Center · ARSY Technology · UNILEX**

> **One vocabulary. Four source families. Three journey scopes. Four pillars. Shared responsibility.**

This repository is the **consolidated design and machine-readable foundation** for the Empire of the Light project. It defines a human-governed, source-grounded knowledge and mission system. The product name **A-L-L-A-H** is a stylized project acronym ("Accountable Life, Learning & Action Hub"), **not** a claim of divine authority. ARSY is software architecture, not the theological al-'Arsh. G.O.D. 99 and WINGS 10 are fictional/organizational duty labels, **not** gods or angels.

**Status: FOUNDATION DESIGN BASELINE — PROPOSED. Not implemented, not production-certified.**

## MONOREPO V4.0 — OPERATIONAL ENGINEERING

Database cloud Free **Neon PostgreSQL** has been provisioned separately for this project. See [Free Database Setup](docs/FREE_DATABASE_NEON.md). No connection strings are in the repo; the application database schema is not migrated yet.

The new [Genesis v4 monorepo blueprint](docs/BLUEPRINT_V4_MONOREPO.md) designs React/Vite 100CENTER, Next.js public portal, Fastify API and Drizzle/Postgres with [Odoo-style modules](docs/MODULE_SYSTEM_SPEC.md). Refer to [release gates](docs/OPERATIONS_RELEASE_GATES.md) and [ADR-0002 proposal](docs/adr/ADR-0002-modular-monorepo-proposal.md). This is **not** a production migration or change to the frozen Gen2 API ownership.

## Find your way
| Area | Entry |
| --- | --- |
| System | [Master Blueprint](docs/MASTER_BLUEPRINT.md) |
| Shared vocabulary | [UNILEX](docs/UNILEX_SPEC.md) and [71-term registry](data/unilex/terms.v0.1.json) |
| Scripture | [Universal Corpus](docs/UNIVERSAL_CORPUS_SPEC.md) and [four source families](data/scripture/source-families.v0.1.json) |
| Organization | [Four pillars](data/organization/pillars.json), [G.O.D. 99](data/organization/god99.json), [WINGS 10](data/organization/wings10.json) |
| Governance | [The Prime Code](docs/THE_PRIME_CODE.md), [Governance](docs/GOVERNANCE.md), [AGE CODE](docs/AGE_CODE.md), [Story of the Years](docs/AGE_STORY_CORRELATION.md) |
| Engineering | [Architecture and boundaries](docs/ARCHITECTURE.md), [Delivery roadmap](docs/DELIVERY_ROADMAP.md) |
| Change control | [ADR-0001 proposal](docs/adr/ADR-0001-universal-corpus-unilex.md) |
| Data checks | Run \`npm run validate\` (Node.js >=20; no runtime dependencies) |

## Design invariants
- Four **independent** primary source families: Qur'an, Torah, Psalms, canonical Gospels. Do not treat the Islamic scriptural referent "Injil" as an automatically exact synonym for the four Gospel narratives.
- Preserve specific source, edition, text witness, language, translation and license. No invented verses, no forced theological equivalence or cross-religious truth ranking.
- An assertion is labeled **scripture text / tradition interpretation / history / user testimony / project proposal / empirical claim**, with evidence and attribution.
- Humans retain consent, data rights and decision authority. A fictional persona never grants API permissions.
- Three scopes: SELF / COMMUNITY / GLOBAL. The last is a network or privacy-safe aggregate, not compulsory authority over people.
- Four operational pillars: PATHFINDING, TRUTH_GUIDANCE, RENEWAL, PROTECTION.
- No direct frontend database access or alternate public API in Gen2 integrations.

## Compatibility with MoonWitness Gen2
This repository is a **design and reference-data owner for this project**, not a unilateral replacement for the frozen [MoonWitness Blueprint](https://github.com/ArsyBelovedLabs/moonwitness-blueprint). Integration into Gen2 requires an approved ADR, capability ownership, contracts, tests and deployment gates. Its [Command Center](https://github.com/ArsyBelovedLabs/moonwitness-commandcenter) is a boundary shell, not a certified full operations console.

## Quick validation
\`\`\`sh
npm run validate
\`\`\`
Proposed sample data is **not** a licensed publication of the four complete scriptural texts; those require edition-level provenance and license checks before ingestion.
