# Repository Guidelines

## Project Purpose

This repository is a skills library for Codex/agent workflows used by ASU projects.
It stores reusable, versioned skills under `skills/` (for example `SKILL.md`, `agents/openai.yaml`, and supporting references/scripts) so teams can standardize implementation patterns, reviews, and quality gates across frontend and backend work.

## Using These Skills In Other Projects

Developers can consume this repository from any project by copying or syncing selected skill folders into their Codex skills directory (`$CODEX_HOME/skills` or `~/.codex/skills` when `CODEX_HOME` is unset).

Recommended workflow:
- Identify the needed skill folder under `skills/` (example: `skills/accessibility-gate-wcag`).
- Copy the full folder (including `SKILL.md`, `agents/openai.yaml`, and `references/` or `scripts/` if present) into your local skills directory.
- Keep the destination folder name unchanged so the skill name and path remain consistent.
- In Codex, invoke the skill by name in prompts (example: `use accessibility-gate-wcag for this PR`).
- Pull updates from this repository periodically and resync skill folders to stay current.

Project teams may also vendor selected skills directly inside their own repository when they need project-specific customization and version pinning.

## Working Agreements

- Frontend: Vue 3 + TypeScript + Vite.
- Backend: Node.js services.
- UI: Bootstrap 4, RDS Vue UI, and ASU branding guidelines.
- Package manager: Yarn.
- Testing: Vitest.

## Project Structure & Module Organization

This repository is early-stage; keep new code organized from the start:

- `src/`: application code by feature (example: `src/features/lineup/`).
- `tests/`: unit/integration tests mirroring `src/` paths.
- `assets/`: static assets and fixtures.
- `docs/`: architecture notes, ADRs, and runbooks.

When adding a new module, include a short local README with purpose, entrypoints, and ownership.

## Build, Test, and Development Commands

Use Yarn scripts as the single interface for local work:

- `yarn install`: install dependencies.
- `yarn dev`: run the Vite dev server.
- `yarn test`: run Vitest.
- `yarn lint`: run lint/format checks.
- `yarn build`: create a production build.

If a script is missing, add it in `package.json` before introducing alternate command paths.

## Coding Style & Naming Conventions

Use 2-space indentation for TS/JS/JSON/YAML. Keep modules small and feature-focused.

- Files/folders: `kebab-case`.
- Vue components/types/classes: `PascalCase`.
- Functions/variables/composables: `camelCase`.

Use ESLint + Prettier (or repository-standard equivalents) and run `yarn lint` before committing.

## Testing Guidelines

Use Vitest for unit and component tests.

- Test filenames: `*.test.ts` or `*.spec.ts`.
- Do not co-locate tests with features; mirror `src/` paths under `tests/`.
- For each feature change, cover at least one happy path and one edge/failure path.
- Follow TDD for new feature and bug-fix work.

Prefer meaningful coverage on changed code rather than broad but shallow tests.

## Commit & Pull Request Guidelines

Follow Conventional Commits (examples: `feat: add lineup filters`, `fix: handle empty API response`). Keep commits focused and atomic.

PRs must include: concise summary, linked issue/task, test evidence (`yarn test`/`yarn lint`), and screenshots for UI-visible changes.

## Security & Configuration Tips

Do not commit secrets. Keep required variables documented in `.env.example` and document configuration behavior in `docs/`.
