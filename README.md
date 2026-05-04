# asuo-skills-inventory

Skills repository for ASUO engineering projects, with an ASU-branded frontend catalog for browsing skills and copying install commands.

## Install Skills with `npx`
- Install a single skill:
```bash
npx skills add akarnikr/asuo-skills-inventory@<skill-slug> -g -y
```
- Install all skills from this repository:
```bash
npx skills install akarnikr/asuo-skills-inventory --skill '*' -y
```

## Website Development
- `yarn install`
- `yarn dev`
- `yarn test`
- `yarn lint`
- `yarn build`

## Generated Data
- Run `yarn skills:manifest` to regenerate `src/data/skills.generated.ts` from `skills/`.
