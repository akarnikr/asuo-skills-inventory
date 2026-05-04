---
name: generic-prd-to-plan
description: Convert an existing PRD into a portable implementation plan for any project. Use when the user wants a project-agnostic plan from a PRD, ticket, product spec, or requirements document without modifying the source PRD.
---

This skill reads an existing PRD or requirements document and produces an implementation plan without assuming a specific repository, framework, package manager, docs path, test runner, accessibility policy, or issue tracker.

Treat the source PRD as the original requirements record. Do not modify it unless the user explicitly asks for a PRD revision.

Completion standard: prioritize plan template completeness. A plan is complete when every required section is filled with coherent, implementation-facing guidance.

## Required Inputs

- Source PRD path, issue identifier, or requirements document.
- If no PRD exists, ask whether to create a PRD first or generate a plan directly from conversation context.
- If a saved plan is requested and no identifier can be inferred, ask for an issue identifier or plan title.

## Output Rules

- Prefer the project's existing plan/spec folder if one exists.
- If no convention exists, use `docs/plans/`.
- For ticket-backed plans, use `PLAN_<issue_identifier>.md`.
- For title-only plans, use a short slug such as `PLAN_<slug>.md`.
- Generate one plan file per source PRD unless the user asks for a combined plan.
- Do not overwrite an existing plan unless the user explicitly asks to regenerate or update it.

## Source Document Guardrail

The source PRD or requirements document must remain unchanged during planning. If planning uncovers missing requirements, questionable decisions, or implementation risks, document them under `Open Questions / Approval Needed` instead of editing the source document.

If the plan requires assumptions beyond the source document, mark them clearly.

## Discovery Process

1. Locate and read the source PRD or requirements document.
   - Prefer a user-provided path.
   - If only an identifier is provided, search likely docs/spec folders and filenames.
   - If multiple matching documents exist, ask which one to use.

2. Extract:
   - Issue identifier or title
   - Problem statement
   - Proposed solution
   - User stories or acceptance criteria
   - Subtasks, if present
   - Implementation decisions
   - Impacted files or impacted areas
   - Testing decisions
   - Out-of-scope items
   - Open questions or notes

3. Inspect available project context before planning.
   - Look for README, CONTRIBUTING, AGENTS or equivalent guidance, package manifests, app/module structure, existing specs, tests, and validation commands.
   - Use project vocabulary and local conventions when discovered.
   - Do not invent commands, file paths, or APIs that cannot be inferred; mark uncertainty for approval.

4. Write the plan using the template below.

5. Save the plan file according to the output rules.

<plan-template>

## Implementation Summary

A concise implementation-focused summary translated from the PRD or requirements document.

## Source

- Identifier or title:
- Source document:

## Implementation Scope

What will change and what will not change. Keep this aligned with the source document's solution and out-of-scope sections.

## Impacted Areas / Files

List concrete files when confidently identified. Otherwise list impacted modules, services, pages, packages, systems, documents, or workflows.

Use action labels where possible:

- `Create`, `Update`, `Remove`, `Regenerate`, or `Validate` target - short reason

Do not direct implementers to hand-edit generated artifacts unless the source document or project conventions explicitly require it.

## Public Interfaces / Contracts

Document expected changes to any relevant external or internal contract, such as:

- UI props/events/slots
- API endpoints
- Data models or schemas
- Configuration
- CLI commands
- Package exports
- Permissions or roles
- Content/documentation surfaces

If no public interface changes are expected, state that explicitly.

## Implementation Steps

An ordered list of specific engineering tasks. Steps should be concrete enough for an implementer to start work without reinterpreting the PRD.

## Data Flow / Behavior Notes

Describe important user flows, system flows, state transitions, validation rules, error states, fallbacks, or migration behavior.

If not applicable, write `No special data flow or behavior notes identified.`

## Accessibility / UX / SEO Notes

For UI or content work, include task-specific accessibility, UX, and SEO considerations based on the source document and discovered project standards.

If the work is not UI/content-related, state that no accessibility, UX, or SEO-specific changes are expected.

## Testing / Validation Plan

List the tests, checks, commands, and manual scenarios needed to validate the work.

Use discovered project commands when available. If no commands are known, describe the validation intent without inventing commands.

## Rollout / Compatibility Notes

Document backward compatibility, migration needs, release sequencing, feature flags, monitoring, or deployment concerns.

If not applicable, write `No special rollout or compatibility notes identified.`

## Open Questions / Approval Needed

List assumptions, ambiguous requirements, missing inputs, naming uncertainty, risky decisions, or project-specific choices that need approval.

If none exist, write `None identified.`

## Acceptance Checklist

A concise checklist that confirms the implementation satisfies the source document and this plan.

</plan-template>
