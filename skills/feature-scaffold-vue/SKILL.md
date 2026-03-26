---
name: feature-scaffold-vue
description: Scaffold a new Vue 3 feature module with TypeScript, Vitest tests, and docs-aligned structure for this project. Use when asked to add a new feature area under src/features, create matching tests under tests, set up exports, or generate starter files for a module.
---

# Feature Scaffold Vue

Create a consistent feature skeleton for this repository.

## Inputs To Confirm
Collect these values from the request or infer safely:
- Feature name in kebab-case (example: `lineup-filters`).
- Whether UI is required (`.vue` component) or logic-only (`.ts` module).
- Whether API integration is required now or left as TODO.

If not provided, default to a UI feature with local mock data and TODO markers for backend wiring.

## Scaffolding Workflow
1. Normalize the feature name to kebab-case and create `src/features/<feature-name>/`.
2. Create starter files: `index.ts`, `<FeatureName>.vue` (UI features), `use<FeatureName>.ts`, `types.ts`, and `README.md`.
3. Create mirrored tests under `tests/features/<feature-name>/`: `<FeatureName>.spec.ts` and `use<FeatureName>.test.ts`.
4. Wire top-level exports only if the repo already has an aggregator pattern; otherwise leave local exports in feature scope.
5. Add explicit TODOs for unresolved dependencies (API endpoints, store contracts, design tokens).

## Quality Gates
- Follow repository conventions from `AGENTS.md`.
- 2-space indentation, `PascalCase` components, `camelCase` functions.
- Use Yarn-based commands and Vitest naming patterns.
- Do not introduce alternate tooling unless asked.
- Ensure tests include at least one happy path and one failure/edge path.

## Reference
Use [references/scaffold-template.md](references/scaffold-template.md) for the exact directory/file blueprint and starter snippets.
