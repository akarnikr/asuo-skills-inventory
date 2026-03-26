---
name: git-main-branch-guard
description: "Enforce git branch safety rules by blocking commits and pushes on `main` and requiring a dedicated feature branch for each new feature. Use when preparing to commit, push, or start feature development so risky branch actions are prevented before they happen."
---

# Git Main Branch Guard

Enforce branch protection workflow for local development.

## Policy
- Do not commit directly on `main`.
- Do not push directly to `main`.
- Create a new branch for every new feature.

## Enforcement Workflow
1. Detect current branch with `git rev-parse --abbrev-ref HEAD`.
2. If branch is `main`, stop commit/push activity and emit a warning.
3. Require feature branch creation before any new feature work.
4. Continue only after branch is non-`main`.

## Required Warning Format
Use this exact warning when blocked:
- `WARNING: MAIN BRANCH PROTECTED`
- `Commit/push to 'main' is not allowed.`
- `Create and switch to a feature branch first.`

## Branch Naming
Use one of these branch prefixes:
- `feature/<short-description>`
- `fix/<short-description>`
- `chore/<short-description>`

Prefer kebab-case suffixes.

## Standard Commands
Create and switch to a new branch:
```bash
git checkout -b feature/<short-description>
```

Push new branch and set upstream:
```bash
git push -u origin feature/<short-description>
```

## Hook Guidance
Use [references/git-hook-template.md](references/git-hook-template.md) to add local `pre-commit` and `pre-push` guards.

## Output Contract
Return in this order:
1. Current branch status.
2. Whether action is allowed or blocked.
3. Warning block (if blocked).
4. Exact next command to recover.

## Quality Gates
- No commit or push recommendation is allowed on `main`.
- Every new feature request must include feature branch creation guidance.
- Remediation commands must be copy-paste ready.
