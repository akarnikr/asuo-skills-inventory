---
name: rds-component-mapper
description: "Map requirement text to best-fit RDS Vue UI components and identify unsupported requirements. Use when planning UI implementation, reviewing feature requirements, or validating component choices before coding. Emit `WARNING: RDS GAP` whenever no available RDS component fully satisfies a requirement and define the minimal custom component needed."
---

# RDS Component Mapper

Map product and UX requirements to concrete RDS component decisions.

## Inputs To Gather
Collect from available artifacts:
- Requirement text, acceptance criteria, or user stories.
- Target page/feature context and interaction expectations.
- Any design constraints (layout, branding, accessibility, data behavior).

If key requirement details are missing, make minimal assumptions and list them under `Missing info`.

## Mapping Workflow
1. Break requirement text into atomic UI behaviors.
2. Classify each behavior type: visual, interactive, data-driven, accessibility-sensitive.
3. Select the best-fit RDS component for each behavior.
4. If a behavior cannot be mapped to RDS, define a minimal custom component (name, responsibilities, props/events/states, accessibility requirements) and include it in the mapping output.
5. If no component fully satisfies the behavior, emit `WARNING: RDS GAP`.
6. Record decision rationale using props/slots/states/events expectations.

## Mandatory Gap Format
When a gap exists, use this exact structure:
- `WARNING: RDS GAP`
- Requirement:
- RDS options evaluated:
- Why options fail:
- Minimal custom scope:

## Output Contract
Return in this order:
1. Component mapping table (`Requirement`, `Behavior Type`, `RDS Component`, `Rationale`).
2. Warnings section with all `WARNING: RDS GAP` entries.
3. Missing info.
4. Recommended next implementation step.

## Quality Gates
- Every requirement must map to an RDS component or a documented gap.
- Every documented gap must include a minimal custom component definition.
- No custom component definition without a preceding `WARNING: RDS GAP` block.
- Mapping rationale must be implementation-usable (not generic).

## Repository Alignment
- Prefer RDS Vue UI components and composition before custom UI.
- Keep recommendations aligned with Bootstrap 4 and ASU styling constraints already used in this repository.
- If custom work is unavoidable, keep scope isolated and minimal.

## Reference
Use [references/rds-mapping-checklist.md](references/rds-mapping-checklist.md) during requirement analysis.
