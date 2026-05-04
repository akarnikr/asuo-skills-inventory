# asuo-skills-inventory

Skills-only repository for ASUO engineering projects.

This repository stores reusable Codex skills under `skills/` and does not include a web application.

## Install Skills with `npx`

Install a single skill:

```bash
npx skills add akarnikr/asuo-skills-inventory@<skill-slug> -g -y
```

Install all skills from this repository:

```bash
npx skills install akarnikr/asuo-skills-inventory --skill '*' -y
```

## Repository Layout

- `skills/`: versioned skill definitions and instructions
- `skills-lock.json`: lock metadata for skills
