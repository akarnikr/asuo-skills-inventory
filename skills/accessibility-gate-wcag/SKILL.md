---
name: accessibility-gate-wcag
description: Audit changed Vue/RDS UI for WCAG 2.1 Level A/AA compliance and return actionable, severity-ranked findings with file references. Use when reviewing frontend changes, preparing PRs, or validating release readiness.
---

# Accessibility Gate WCAG

Run a deterministic accessibility gate for this repository's frontend work.

## Scope And Standards
- Evaluate against WCAG 2.1 Level A and AA.
- Prioritize user-impacting failures first (keyboard traps, inaccessible names, focus visibility, form errors, contrast).
- Treat Bootstrap/RDS defaults as helpful but not automatically compliant in composed usage.

## Inputs To Gather
Collect from available artifacts:
- Changed files in `src/` affecting UI or interaction.
- Screens or URLs for changed views when available.
- Test/lint evidence relevant to accessibility checks.

If critical artifacts are missing, continue with static review and mark `Missing info` clearly.

## Audit Workflow
1. Identify affected user journeys and interactive elements (forms, modals, nav, tables, alerts, media).
2. Run a semantic pass: landmarks, heading order, labels, names/roles/values, alt text, language.
3. Run an interaction pass: keyboard navigation, focus order, focus visibility, skip paths, dialog behavior.
4. Run a perception pass: color contrast, text resize/reflow, status/error messaging, motion sensitivity.
5. Map each finding to WCAG 2.1 criterion and classify severity.
6. Recommend the smallest viable fix with file-level guidance.

## Severity Model
- `Blocking`: prevents task completion or creates severe assistive-tech failure.
- `Major`: significant degradation for accessibility users; should be fixed before merge.
- `Minor`: real issue with lower impact/scope.
- `Advisory`: improvement opportunity, not a defect.

## Output Format
Return in this order:
1. Blocking findings (highest severity first) with file references and WCAG criterion.
2. Major findings.
3. Minor findings.
4. Missing info.
5. Final gate decision: `Pass`, `Pass with caveats`, or `Fail` with one-line rationale.

## Repository Alignment
- Follow `AGENTS.md` conventions (Vue 3 + TypeScript + Vitest + Yarn).
- Prefer fixes using existing RDS/Bootstrap patterns before introducing custom behavior.
- For any custom UI workaround, note why RDS/Bootstrap could not satisfy the requirement.
- For each code fix recommendation, include at least one test suggestion under `tests/` mirroring `src/` path.


## Inlined Agent Config

Source: agents/openai.yaml

```yaml
interface:
  display_name: "Accessibility Gate WCAG"
  short_description: "Audit UI changes for WCAG 2.1 A/AA"
  default_prompt: "Use this skill to audit changed frontend behavior for WCAG 2.1 Level A/AA issues, report severity-ranked findings with WCAG criteria and file references, and conclude with a pass/fail gate decision."

```


## Inlined References

### references/wcag-review-checklist.md

# WCAG Review Checklist (A/AA)

## 1) Semantics And Structure
- Page has one clear `<h1>` and logical heading progression.
- Landmarks are present and meaningful (`header`, `main`, `nav`, `footer`).
- Interactive controls expose accessible names.
- Form controls have explicit labels and helper/error text associations.

## 2) Keyboard And Focus
- All interactive UI is reachable and operable by keyboard.
- Focus order follows visual/logical flow.
- Focus indicator is visible and not obscured.
- Modal/dialog traps focus and restores it on close.

## 3) Perception And Readability
- Text and UI controls meet minimum contrast expectations.
- Information is not conveyed by color alone.
- Error states include clear text guidance.
- Layout remains usable at zoom/reflow.

## 4) Media And Motion
- Informative images include meaningful alt text.
- Decorative images are hidden from assistive tech.
- Auto-updating/moving content can be paused when required.
- Motion-triggered interactions have reduced-motion-safe behavior.

## 5) Robustness
- ARIA is used only where native semantics are insufficient.
- Name/role/value updates are announced when dynamic content changes.
- Duplicate IDs and broken label/description references are absent.

## 6) Reporting
For each issue found, capture:
- Severity (`Blocking`, `Major`, `Minor`, `Advisory`)
- WCAG criterion (for example `1.3.1`, `2.1.1`, `4.1.2`)
- Affected file/component
- Repro steps and expected behavior
- Smallest viable remediation

