# Webpage Development Guidelines

## Purpose
This file governs frontend website implementation in this repository.
Use this for webpage architecture, styling, testing, and UX rules.

## Boundaries
- Keep website assets/code under `src/`, `tests/`, `scripts/`, and `web-docs/`.
- Treat `skills/` as source content; do not edit skill behavior when changing webpage code.
- Keep skill-related docs in `skills/` and website docs in `web-docs/`.

## Tech Stack
- Vue 3 + TypeScript + Vite
- Bootstrap 4
- Vitest for tests
- Yarn scripts for local development

## Design Rules
- Follow ASU branding direction similar to `asuonline.asu.edu`.
- Use maroon/gold primary palette and strong typographic hierarchy.
- Keep critical skill information and install commands visible upfront.
- Ensure keyboard-focus visibility and baseline color contrast.

## Quality Gates
- `yarn skills:manifest` updates generated catalog from `skills/`.
- `yarn test`, `yarn lint`, and `yarn build` should pass.
- No webpage change should modify existing skill definitions under `skills/`.
