---
name: axe-vitest-integration
description: Integrate automated accessibility testing into Vue 3 + Vitest workflows using axe-core and Testing Library patterns. Use when adding or updating frontend tests, enforcing accessibility checks in CI, or creating regression tests for WCAG-related fixes.
---

# Axe Vitest Integration

Implement repeatable accessibility checks in component/unit test workflows.

## Scope
- Target Vue 3 component tests run by Vitest.
- Use `vitest-axe` + `@testing-library/vue` as the default testing stack.
- Keep checks deterministic and close to changed components.

## Integration Workflow
1. Confirm test dependencies exist and add missing packages through Yarn.
2. Add a shared accessibility test helper only if the repository benefits from reuse.
3. Add or update tests under `tests/` mirroring `src/` paths.
4. Assert both:
- happy path renders expected content
- accessibility scan has no violations for the tested state
5. For bug fixes, add a regression test that would fail before the fix.
6. Run `yarn test` and capture failing selectors/messages when violations exist.

## Package Baseline
Use these packages unless repository constraints require alternatives:
- `vitest`
- `@testing-library/vue`
- `vitest-axe`
- `jsdom` (when Vitest environment requires explicit install)

## Test Authoring Rules
- Prefer `render()` from Testing Library and run `axe(container)` on the rendered DOM.
- Cover at least one default state and one edge/error/interactive state.
- Avoid brittle selectors; prefer role/label/text queries.
- Keep mocks minimal and aligned with user-visible behavior.
- When violations occur, report the rule id and affected nodes in test output.

## Output Contract
Return in this order:
1. Dependencies added/verified.
2. Files changed.
3. New or updated tests and covered states.
4. Test run result (`pass`/`fail`) with key diagnostics.
5. Follow-up recommendations (if any).

## Repository Alignment
- Follow `AGENTS.md` conventions: Vue 3 + TypeScript + Yarn + Vitest.
- Keep tests under `tests/`, not co-located in `src/`.
- Ensure at least one happy path and one edge/failure path per changed feature.
- Prefer RDS/Bootstrap-realistic markup in tests when validating accessibility fixes.

## Reference
Use [references/vue-vitest-axe-template.md](references/vue-vitest-axe-template.md) for a starter pattern.
