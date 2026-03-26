---
name: architecture-note-template
description: "Create standardized architecture decision records and runbooks under `docs/` for major technical decisions. Use when proposing, reviewing, or documenting significant design choices so context, decision, tradeoffs, rollout, and ownership are captured consistently."
---

# Architecture Note Template

Create concise, decision-grade documentation in `docs/`.

## Scope
- Create ADR files for major technical decisions.
- Create runbook files for operations, rollout, and incident handling.
- Keep templates lightweight and directly actionable.

## Inputs To Gather
Collect from request or repository context:
- Decision title and date.
- Problem statement and constraints.
- Options considered.
- Selected option and rationale.
- Impact, risks, rollout, rollback, and owners.

If required details are missing, generate placeholders and list assumptions explicitly.

## Workflow
1. Determine whether output is `ADR`, `runbook`, or both.
2. Create file(s) under `docs/` using kebab-case names.
3. Fill required sections using concrete, project-specific text.
4. Mark unknowns as `TODO(owner): ...`.
5. Return paths, assumptions, and follow-up items.

## File Naming
- ADR: `docs/adr-<short-title>.md`
- Runbook: `docs/runbook-<short-title>.md`

## Output Contract
Return in this order:
1. Files created.
2. Key decisions captured.
3. Open questions/TODOs.
4. Recommended next review step.

## Quality Gates
- Decision rationale must include at least one rejected option.
- Rollout and rollback steps must be present for implementation-impacting decisions.
- Ownership must be explicit (team or role).

## Reference
- ADR template: [references/adr-template.md](references/adr-template.md)
- Runbook template: [references/runbook-template.md](references/runbook-template.md)
