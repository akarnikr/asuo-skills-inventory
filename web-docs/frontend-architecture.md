# Frontend Architecture

## Overview
The website is a single-page Vue 3 app that renders a skills catalog from a generated data file.

## Core Modules
- `src/App.vue`: page layout, search/filter state.
- `src/components/SkillCard.vue`: skill detail and copy-command UI.
- `src/data/skills.generated.ts`: generated source of truth for UI catalog rendering.
- `src/styles/theme.css`: ASU-aligned visual theme.

## Separation Principle
Website implementation is isolated from skill definitions. Skill folders are read-only inputs for manifest generation.
