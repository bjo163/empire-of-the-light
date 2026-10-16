# UNILEX — UNIVERSAL LEXICON
**Status:** proposed, versioned vocabulary; initial registry: 71 concepts.
**Promise:** One language layer. Many traditions. No forced equivalence.

## Four vocabulary lanes
1. UNIVERSAL: context-neutral human values (TRUTH, TRUST, JUSTICE, CONSENT).
2. SCRIPTURE: attributed tradition-specific theological referents (e.g. Al-'Arsh; Amanah; Injil).
3. TEXT_SOURCE: extant textual witnesses/families (Torah, Psalms, canonical Gospels, Qur'an).
4. PROJECT: software and fictional organizational vocabulary (ARSY, 100CENTER, RĀ’ID, ZIIL).

Each concept has a stable ID, preferred labels (English and Indonesian baseline), definition, domain, alternate labels, sources, review status and relations. Future Arabic, Hebrew and Greek headwords require edition/context references and scholar or language review.

## Relationship vocabulary
- relatedTo: thematic relationship, **not synonym**.
- inspiredBy: a project concept takes inspiration; it does not inherit supernatural authority.
- distinctFrom: must not be treated as equivalent.
- exactMatch: only with demonstrably same scope/sense after review.
- closeMatch: similar but meaningful differences.
- narrowerThan/broaderThan: subsumption, not hierarchy of people.

## Red lines
- Al-'Arsh ≠ ARSY Technology.
- The Islamic referent Injil ≠ automatic exactMatch to canonical four Gospel texts.
- Torah as an extant text family ≠ guaranteed identity with every use of Taurat in Islamic theology.
- Mizan in eschatology ≠ software operational score.
- Persona "G.O.D." ≠ deity; WING agent ≠ angel.
- Divine concept labels never confer roles, permissions or operational authority.
- An AI must not invent or erase differences to provide a "universal" answer.

## Editorial governance
DRAFT_REVIEW → SOURCE_CHECK → LINGUISTIC_REVIEW → APPROVED → DEPRECATED.
Approved status asserts **terminology quality within scope**, never doctrinal authority.
Every term edit records editor, issue, supporting citation, semantic version, review decision, migration impact and audit evidence. Keep immutable historical IDs; never reuse.

## AI and search integration
The search layer uses concept IDs and language-specific forms, not naive word matching.
A query resolves candidate senses then sources; response retains contextual uncertainty and conflict. Cross-source alignments have a relation type, confidence and reviewers; neither exactMatch nor a "true religion" rank may be generated automatically.

## Initial data
Registry: \`data/unilex/terms.v0.1.json\`; schema: \`schemas/unilex.schema.json\`. This is a **seed registry** requiring source/linguistic review, not a completed dictionary of scripture.
