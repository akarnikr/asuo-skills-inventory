---
name: generic-issue-to-prd
description: Convert an issue, bug report, feature request, or conversation context into a portable PRD for any project. Use when the user wants a project-agnostic PRD that can work across repositories, stacks, and issue trackers.
---

This skill turns an issue or request into a PRD without assuming a specific repository, framework, package manager, docs path, or issue tracker.

Completion standard: prioritize template completeness over decision completeness. A PRD is complete when every required section is filled with coherent content. If implementation decisions are uncertain, mark assumptions and developer approval items instead of blocking the PRD.

## Required Inputs

- Issue identifier or title.
- Problem or request summary.
- Expected user/customer impact.

If no issue identifier or title is provided, ask for one before creating a saved PRD. If the user only wants an unsaved draft, a title is enough.

## Output Rules

- Prefer the project's existing docs or product-spec folder if one exists.
- If no convention exists, use `docs/prd/`.
- For ticket-backed PRDs, use `PRD_<issue_identifier>.md`.
- For title-only drafts, use a short slug such as `PRD_<slug>.md`.
- Do not overwrite an existing PRD unless the user explicitly asks to regenerate or update it.
- Do not modify a PRD after it is created during planning or implementation unless the user explicitly asks for a PRD revision.

## Discovery Process

1. Inspect available project context before asking questions.

   - Look for README, CONTRIBUTING, AGENTS, package manifests, app/module structure, existing docs/specs, tests, and issue/PR conventions.
   - Use project vocabulary from the repository when available.

2. Identify whether the request is:

   - Bug fix
   - Minor enhancement
   - New feature
   - Refactor/platform work
   - Documentation/process work

3. Determine likely impacted areas at a planning level.

   - Include paths only when confidently discovered.
   - If paths are uncertain, list modules or areas and mark them for developer validation.

4. For large requests, add a `## Subtasks` section before `## Implementation Decisions`.

   - Use one PRD with subtasks by default.
   - Create child PRDs only when the user explicitly asks or the work clearly spans independently releasable deliverables.

5. If critical information is missing, ask only for what cannot be discovered locally.
   - Examples: missing issue identifier, unclear user-facing goal, unclear acceptance criteria, or unclear scope boundary.

## PRD Lifecycle Guardrail

Treat the PRD as the original requirements record after creation. Planning agents, implementation agents, and follow-up workflow skills must not modify it unless the user explicitly asks to revise the PRD.

If later work uncovers new decisions, risks, or scope changes, capture them in a plan, implementation notes, PR description, or a requested PRD revision rather than silently changing the existing PRD.

<prd-template>

## Problem Statement

Describe the problem from the affected user's or stakeholder's perspective. Include the current pain, failure, gap, or opportunity.

## Solution

Describe the intended outcome from the user's perspective. Keep implementation details high-level unless they are required to define the requested behavior.

## User Stories

A numbered list of user stories in this format:

1. As an <actor>, I want a <feature or behavior>, so that <benefit>.

Include enough stories to cover primary users, edge cases, support/QA, and maintainers when relevant.

## Subtasks

Include this section only when the issue is large enough to split.

Each subtask should include:

- Name
- Goal
- Expected impacted area
- Acceptance criteria
- Dependency on other subtasks, if any

Use this format:

- `Create` or `Update` `path/to/file` - short reason

If exact paths are not known, use impacted areas instead and mark them for developer validation.

## Testing Decisions

Describe how the work should be validated. Include:

- What makes a good test for this request
- Which modules, user flows, or contracts should be tested
- Manual QA scenarios
- Accessibility checks for UI work
- Prior art from existing tests or validation patterns, if found

## Acceptance Criteria

A concise checklist of observable outcomes required for the issue to be considered complete.

## Out of Scope

List related work that should not be included in this PRD.

## Open Questions / Developer Approval

List assumptions, weak decisions, ambiguous requirements, missing inputs, or items requiring developer/product approval.

If none exist, write `None identified.`

## Further Notes

Include issue links, references, rollout notes, follow-up recommendations, or context that does not fit above.

</prd-template>
