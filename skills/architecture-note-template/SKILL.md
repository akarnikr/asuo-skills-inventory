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


## Inlined Agent Config

Source: agents/openai.yaml

```yaml
interface:
  display_name: "Architecture Note Template"
  short_description: "Generate ADR and runbook templates"
  default_prompt: "Use this skill to create concise ADR and runbook templates under docs/ for major technical decisions, including context, decision, consequences, rollout, and ownership."
```

## Inlined References

### references/adr-template.md

# ADR: <Decision Title>

- Status: Proposed | Accepted | Superseded
- Date: YYYY-MM-DD
- Owners: <team-or-role>
- Related issue/task: <link-or-id>

## Context
Describe the problem, constraints, and why a decision is needed now.

## Decision
State the chosen approach clearly.

## Options Considered
1. <Option A>
2. <Option B>
3. <Option C>

## Rationale
Explain why the selected option is preferred over alternatives.

## Consequences
- Positive:
- Negative:
- Neutral / tradeoffs:

## Rollout Plan
1. Step one
2. Step two
3. Step three

## Rollback Plan
1. Trigger conditions for rollback
2. Revert steps
3. Validation after rollback

## Validation
Define how success is measured (tests, metrics, SLO impact, user outcomes).

## Open Questions
- TODO(owner): <question>


### references/runbook-template.md

# Runbook: <Runbook Title>

- Last updated: YYYY-MM-DD
- Owners: <team-or-role>
- Service/Component: <name>

## Purpose
Describe what this runbook covers and when to use it.

## Preconditions
- Access required:
- Feature flags / env vars:
- Dependencies:

## Procedure
1. Step one with exact command/action.
2. Step two with expected result.
3. Step three with verification check.

## Failure Handling
- Symptom:
- Likely cause:
- Remediation:

## Rollback
1. Rollback trigger
2. Rollback actions
3. Post-rollback verification

## Verification Checklist
- [ ] Primary behavior verified
- [ ] Logs/metrics healthy
- [ ] User impact validated

## Escalation
- On-call/team:
- Escalation path:
- Communication channel:

## References
- Links to ADRs, dashboards, tickets, and docs.

