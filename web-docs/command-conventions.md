# Command Conventions

## npx Command
Each skill card exposes:

```bash
npx skills add akarnikr/asuo-skills-inventory@<skill-slug> -g -y
```

## Local Copy Command
Each skill card exposes:

```bash
cp -R "$SKILLS_REPO_PATH/skills/<skill-slug>" "${CODEX_HOME:-$HOME/.codex}/skills/"
```

## All-Skills Command
Top-level page section exposes:

```bash
npx skills install akarnikr/asuo-skills-inventory --skill '*' -y
```

## UX Rule
Both commands must remain visible upfront on every skill card and include a copy action.
