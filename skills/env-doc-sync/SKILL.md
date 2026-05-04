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


## Inlined Agent Config

Source: agents/openai.yaml

```yaml
interface:
  display_name: "Env Doc Sync"
  short_description: "Keep env docs and examples in sync"
  default_prompt: "Use this skill to keep .env.example and environment documentation synchronized by adding/removing keys, descriptions, defaults/placeholders, and usage notes without exposing secrets."
```

## Inlined References

### references/env-sync-checklist.md

# Env Sync Checklist

## Safety First
- Confirm whether real secret values are needed; if yes, request explicit user permission first.
- Default to placeholders in `.env.example`; never place live secrets in git-tracked files.

## Discovery
- Extract env keys from code/config usage.
- Compare against `.env.example`.
- Compare against environment documentation.

## Reconciliation
- Add missing keys with placeholder/default semantics.
- Remove stale keys.
- Document each key: purpose, required/optional, default/placeholder, and usage.

## Consistency
- Keep naming style consistent (uppercase snake case unless project says otherwise).
- Keep ordering/grouping consistent.
- Ensure docs and `.env.example` match exactly on key names.

## Final Checks
- Verify no real secret values were introduced.
- Summarize changed keys and required secret-manager follow-up.

