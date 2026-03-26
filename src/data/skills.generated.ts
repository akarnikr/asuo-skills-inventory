import type { SkillRecord } from '@/types'

export const skillsCatalog: SkillRecord[] = [
  {
    "slug": "accessibility-gate-wcag",
    "name": "accessibility-gate-wcag",
    "description": "Audit changed Vue/RDS UI for WCAG 2.1 Level A/AA compliance and return actionable, severity-ranked findings with file references. Use when reviewing frontend changes, preparing PRs, or validating release readiness.",
    "displayName": "Accessibility Gate WCAG",
    "shortDescription": "Audit UI changes for WCAG 2.1 A/AA",
    "defaultPrompt": "Use this skill to audit changed frontend behavior for WCAG 2.1 Level A/AA issues, report severity-ranked findings with WCAG criteria and file references, and conclude with a pass/fail gate decision.",
    "path": "skills/accessibility-gate-wcag",
    "npxCommand": "npx skills add akarnikr/asuo-skills-inventory@accessibility-gate-wcag -g -y",
    "copyCommand": "cp -R \"$SKILLS_REPO_PATH/skills/accessibility-gate-wcag\" \"${CODEX_HOME:-$HOME/.codex}/skills\""
  },
  {
    "slug": "architecture-note-template",
    "name": "architecture-note-template",
    "description": "Create standardized architecture decision records and runbooks under `docs/` for major technical decisions. Use when proposing, reviewing, or documenting significant design choices so context, decision, tradeoffs, rollout, and ownership are captured consistently.",
    "displayName": "Architecture Note Template",
    "shortDescription": "Generate ADR and runbook templates",
    "defaultPrompt": "Use this skill to create concise ADR and runbook templates under docs/ for major technical decisions, including context, decision, consequences, rollout, and ownership.",
    "path": "skills/architecture-note-template",
    "npxCommand": "npx skills add akarnikr/asuo-skills-inventory@architecture-note-template -g -y",
    "copyCommand": "cp -R \"$SKILLS_REPO_PATH/skills/architecture-note-template\" \"${CODEX_HOME:-$HOME/.codex}/skills\""
  },
  {
    "slug": "asu-rds-styling-guidelines",
    "name": "asu-rds-styling-guidelines",
    "description": "Enforce ASU brand styling similar to asuonline.asu.edu and implement UI using the RDS Vue UI library (https://rds-vue-ui.edpl.us/?path=/docs/introduction-contributing--docs) across all webpages. Use when designing, reviewing, or building frontend components. Do not create custom components unless absolutely necessary. If requirements cannot be met by available RDS components, emit a clear warning before proposing any custom component.",
    "displayName": "ASU RDS Styling Guidelines",
    "shortDescription": "Enforce ASU branding with RDS components",
    "defaultPrompt": "Use this skill to ensure webpage UI implementation follows ASU brand guidelines similar to asuonline.asu.edu and uses RDS Vue UI components first. Do not create custom components unless absolutely necessary, and warn when requirements do not map to available RDS components.",
    "path": "skills/asu-rds-styling-guidelines",
    "npxCommand": "npx skills add akarnikr/asuo-skills-inventory@asu-rds-styling-guidelines -g -y",
    "copyCommand": "cp -R \"$SKILLS_REPO_PATH/skills/asu-rds-styling-guidelines\" \"${CODEX_HOME:-$HOME/.codex}/skills\""
  },
  {
    "slug": "axe-vitest-integration",
    "name": "axe-vitest-integration",
    "description": "Integrate automated accessibility testing into Vue 3 + Vitest workflows using axe-core and Testing Library patterns. Use when adding or updating frontend tests, enforcing accessibility checks in CI, or creating regression tests for WCAG-related fixes.",
    "displayName": "Axe Vitest Integration",
    "shortDescription": "Add automated a11y checks to Vitest",
    "defaultPrompt": "Use this skill to integrate or update accessibility testing with Vitest using vitest-axe and Testing Library, then add deterministic tests with clear pass/fail diagnostics.",
    "path": "skills/axe-vitest-integration",
    "npxCommand": "npx skills add akarnikr/asuo-skills-inventory@axe-vitest-integration -g -y",
    "copyCommand": "cp -R \"$SKILLS_REPO_PATH/skills/axe-vitest-integration\" \"${CODEX_HOME:-$HOME/.codex}/skills\""
  },
  {
    "slug": "env-doc-sync",
    "name": "env-doc-sync",
    "description": "Synchronize environment-variable documentation with project config files and .env.example. Use when adding, removing, or changing env vars and when updating docs/config guidance to prevent drift. Always request explicit user permission before asking for, storing, or editing real secret values.",
    "displayName": "Env Doc Sync",
    "shortDescription": "Keep env docs and examples in sync",
    "defaultPrompt": "Use this skill to keep .env.example and environment documentation synchronized by adding/removing keys, descriptions, defaults/placeholders, and usage notes without exposing secrets.",
    "path": "skills/env-doc-sync",
    "npxCommand": "npx skills add akarnikr/asuo-skills-inventory@env-doc-sync -g -y",
    "copyCommand": "cp -R \"$SKILLS_REPO_PATH/skills/env-doc-sync\" \"${CODEX_HOME:-$HOME/.codex}/skills\""
  },
  {
    "slug": "feature-scaffold-vue",
    "name": "feature-scaffold-vue",
    "description": "Scaffold a new Vue 3 feature module with TypeScript, Vitest tests, and docs-aligned structure for this project. Use when asked to add a new feature area under src/features, create matching tests under tests, set up exports, or generate starter files for a module.",
    "displayName": "Feature Scaffold Vue",
    "shortDescription": "Scaffold Vue feature modules",
    "defaultPrompt": "Use this skill to scaffold a Vue 3 feature module in src/features with mirrored Vitest tests under tests/features and minimal starter files aligned to AGENTS.md.",
    "path": "skills/feature-scaffold-vue",
    "npxCommand": "npx skills add akarnikr/asuo-skills-inventory@feature-scaffold-vue -g -y",
    "copyCommand": "cp -R \"$SKILLS_REPO_PATH/skills/feature-scaffold-vue\" \"${CODEX_HOME:-$HOME/.codex}/skills\""
  },
  {
    "slug": "git-main-branch-guard",
    "name": "git-main-branch-guard",
    "description": "Enforce git branch safety rules by blocking commits and pushes on `main` and requiring a dedicated feature branch for each new feature. Use when preparing to commit, push, or start feature development so risky branch actions are prevented before they happen.",
    "displayName": "Git Main Branch Guard",
    "shortDescription": "Block commit/push on main branch",
    "defaultPrompt": "Use this skill to enforce branch safety by preventing commits and pushes on main, requiring a new feature branch for every feature, and providing exact remediation commands.",
    "path": "skills/git-main-branch-guard",
    "npxCommand": "npx skills add akarnikr/asuo-skills-inventory@git-main-branch-guard -g -y",
    "copyCommand": "cp -R \"$SKILLS_REPO_PATH/skills/git-main-branch-guard\" \"${CODEX_HOME:-$HOME/.codex}/skills\""
  },
  {
    "slug": "owasp-top10-security-test",
    "name": "owasp-top10-security-test",
    "description": "Assess application code and configuration for OWASP Top 10 security risks with actionable findings and remediations. Use when reviewing new features, bug fixes, pull requests, or release candidates where security regression risk must be evaluated systematically.",
    "displayName": "OWASP Top 10 Security Test",
    "shortDescription": "Test code for OWASP Top 10 risks",
    "defaultPrompt": "Use this skill to review and test application code against OWASP Top 10 risks, report findings by severity with CWE/OWASP mapping, and provide concrete remediation steps and verification checks.",
    "path": "skills/owasp-top10-security-test",
    "npxCommand": "npx skills add akarnikr/asuo-skills-inventory@owasp-top10-security-test -g -y",
    "copyCommand": "cp -R \"$SKILLS_REPO_PATH/skills/owasp-top10-security-test\" \"${CODEX_HOME:-$HOME/.codex}/skills\""
  },
  {
    "slug": "pr-readiness-check",
    "name": "pr-readiness-check",
    "description": "Review pull requests for merge readiness with a consistent, risk-first checklist. Use when asked to review a PR, perform a pre-merge quality gate, validate test/lint evidence, check release risk, or provide a go/no-go recommendation with blocking findings first.",
    "displayName": "PR Readiness Check",
    "shortDescription": "Validate pull requests before merge",
    "defaultPrompt": "Use this skill to evaluate whether a pull request is ready to merge by checking scope, tests, lint status, risk, docs, and release impact, then return blocking issues first and a concise readiness decision.",
    "path": "skills/pr-readiness-check",
    "npxCommand": "npx skills add akarnikr/asuo-skills-inventory@pr-readiness-check -g -y",
    "copyCommand": "cp -R \"$SKILLS_REPO_PATH/skills/pr-readiness-check\" \"${CODEX_HOME:-$HOME/.codex}/skills\""
  },
  {
    "slug": "rds-component-mapper",
    "name": "rds-component-mapper",
    "description": "Map requirement text to best-fit RDS Vue UI components and identify unsupported requirements. Use when planning UI implementation, reviewing feature requirements, or validating component choices before coding. Emit `WARNING: RDS GAP` whenever no available RDS component fully satisfies a requirement.",
    "displayName": "RDS Component Mapper",
    "shortDescription": "Map requirements to RDS components",
    "defaultPrompt": "Use this skill to map requirement text to RDS Vue UI components, identify best-fit options, and emit WARNING: RDS GAP when no component fully satisfies a requirement.",
    "path": "skills/rds-component-mapper",
    "npxCommand": "npx skills add akarnikr/asuo-skills-inventory@rds-component-mapper -g -y",
    "copyCommand": "cp -R \"$SKILLS_REPO_PATH/skills/rds-component-mapper\" \"${CODEX_HOME:-$HOME/.codex}/skills\""
  }
]
