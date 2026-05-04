---
name: pr-readiness-check
description: Review pull requests for merge readiness with a consistent, risk-first checklist. Use when asked to review a PR, perform a pre-merge quality gate, validate test/lint evidence, check release risk, or provide a go/no-go recommendation with blocking findings first.
---

# PR Readiness Check

Run a deterministic readiness review and return a clear merge decision.

## Inputs To Gather

Collect from available artifacts (PR diff, CI output, issue link, screenshots):

- Change intent and linked task/issue.
- Files changed and risk surface.
- Test/lint/build evidence.
- User-visible behavior changes.

If artifacts are missing, mark readiness as `Needs Info` and list missing items.

## Review Workflow

1. Determine scope: summarize what changed and what should remain unchanged.
2. Evaluate correctness risk: look for regressions, edge-case failures, and unsafe assumptions.
3. Validate quality gates: tests, lint, build, and static checks relevant to changed code.
4. Validate delivery hygiene: commit quality, PR description, linked issue, screenshots/logs for UI changes, and config/doc updates when required.
5. Classify findings as `Blocking`, `Non-blocking`, or `Missing info`.
6. Conclude with one status: `Ready`, `Ready with caveats`, or `Not ready`.

## Output Format

Return in this order:

1. Blocking findings (highest severity first) with file references when possible.
2. Missing info requests.
3. Non-blocking improvements.
4. Final readiness decision with one-line rationale.
5. Summary of all commits to use in PR description.

## Repository Alignment

Apply repository conventions from `AGENTS.md`:

# - Require test evidence (`yarn test`) and lint evidence (`yarn lint`) for changed areas.

# - Require screenshots for UI-visible changes.

- Require test evidence and lint evidence for changed areas.
- Expect Conventional Commit style and focused PR scope.
- Ensure secret/config handling follows `.env.example` and docs guidance.
