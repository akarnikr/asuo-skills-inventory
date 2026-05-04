---
name: asu-rds-styling-guidelines
description: Enforce ASU brand styling similar to asuonline.asu.edu and implement UI using the RDS Vue UI library (https://rds-vue-ui.edpl.us/?path=/docs/introduction-contributing--docs) across all webpages. Use when designing, reviewing, or building frontend components. Do not create custom components unless absolutely necessary. If requirements cannot be met by available RDS components, emit a clear warning before proposing any custom component.
---

# ASU RDS Styling Guidelines

Apply ASU-aligned visual standards and RDS-first component usage consistently.

## Core Rules
- Match ASU brand direction consistent with `asuonline.asu.edu` (typography, spacing rhythm, color intent, and hierarchy).
- Use RDS Vue UI components as the default for all page UI elements.
- Do not create custom components unless no RDS component can satisfy the requirement.
- Before any custom component proposal, emit `WARNING: RDS GAP` with the missing capability, RDS options evaluated, why they fail, and the minimal custom scope.

## Implementation Workflow
1. Parse requirements into UI primitives (navigation, forms, cards, tables, alerts, CTAs, etc.).
2. Map each primitive to an RDS component first.
3. Verify styling choices align with ASU brand tone similar to `asuonline.asu.edu`.
4. Flag any unmet requirement with `WARNING: RDS GAP` and document the gap.
5. Propose custom components only for documented gaps; keep them minimal and isolated.

## Output Contract
Return results in this order:
1. RDS component mapping table (requirement -> selected RDS component).
2. ASU brand alignment notes.
3. Warnings for any RDS gaps.
4. Custom component proposals (only if warnings exist).

## Quality Gates
- No custom component appears without a prior `WARNING: RDS GAP` entry.
- Every page-level UI element is mapped to RDS or explicitly documented as a gap.
- Styles remain consistent with ASU-like brand presentation.


## Inlined Agent Config

Source: agents/openai.yaml

```yaml
interface:
  display_name: "ASU RDS Styling Guidelines"
  short_description: "Enforce ASU branding with RDS components"
  default_prompt: "Use this skill to ensure webpage UI implementation follows ASU brand guidelines similar to asuonline.asu.edu and uses RDS Vue UI components first. Do not create custom components unless absolutely necessary, and warn when requirements do not map to available RDS components."
```

## Inlined References

### references/rds-component-decision-checklist.md

# RDS Component Decision Checklist

## 1) Requirement Breakdown
- List each UI requirement as a concrete behavior.
- Mark it as visual-only, interactive, data-driven, or accessibility-sensitive.

## 2) RDS First Pass
- Identify candidate RDS component(s) for each requirement.
- Prefer composing existing RDS components before customization.

## 3) Brand Alignment Pass
- Ensure typography and spacing support ASU-like hierarchy.
- Ensure color and emphasis choices stay aligned with ASU presentation patterns.

## 4) Gap Decision
If no RDS component meets a requirement:
- Emit `WARNING: RDS GAP`.
- Document candidates checked and why each fails.
- Define the smallest required custom component.

## 5) Final Validation
- Confirm every requirement is mapped or flagged.
- Confirm no custom component exists without a warning.
- Confirm implementation remains consistent across all webpages.

