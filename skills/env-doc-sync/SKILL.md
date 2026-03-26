---
name: env-doc-sync
description: Synchronize environment-variable documentation with project config files and .env.example. Use when adding, removing, or changing env vars and when updating docs/config guidance to prevent drift. Always request explicit user permission before asking for, storing, or editing real secret values.
---

# Env Doc Sync

Keep environment configuration documentation consistent and safe.

## Security Rule
- Never ask for or store actual secrets by default.
- Always ask explicit permission before requesting secret values.
- Prefer placeholders in `.env.example` (for example, `API_KEY=__REQUIRED__`).
- If permission is not granted, continue with key names, descriptions, and placeholder values only.

## Inputs To Inspect
Gather environment keys from:
- `.env.example`
- docs such as `docs/configuration.md` (or nearest config docs)
- code/config references (`process.env.*`, `import.meta.env.*`, runtime config)

If docs are missing, create/update a single canonical configuration doc path and note it in the output.

## Sync Workflow
1. Build a key inventory from code/config usage and existing env files.
2. Compare inventory against `.env.example` and docs.
3. Apply updates: add missing keys with placeholders, remove stale keys, and update descriptions/required status/defaults in docs.
4. Validate formatting consistency and alphabetical grouping (or repo convention if specified).
5. Report a delta summary: added, removed, renamed, and clarified keys.

## Output Contract
Return:
1. Keys added/removed/changed.
2. Files updated.
3. Any keys needing human-provided secret values.
4. Follow-up action list (for deploy/runtime secret managers).

## Repository Alignment
- Do not commit real secret values.
- Keep `.env.example` and docs synchronized in the same change set.
- Align with `AGENTS.md` security guidance and naming clarity.

## Reference
Use [references/env-sync-checklist.md](references/env-sync-checklist.md) as the execution checklist.
