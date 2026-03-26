# Skills Manifest Flow

## Source
- Skill metadata is sourced from `skills/*/SKILL.md` frontmatter and `skills/*/agents/openai.yaml`.

## Generation
- `yarn skills:manifest` runs `scripts/generate-skills-manifest.mjs`.
- Generator writes `src/data/skills.generated.ts`.

## Runtime
- UI imports `skillsCatalog` from generated file and renders cards.
- No runtime filesystem access is required.
