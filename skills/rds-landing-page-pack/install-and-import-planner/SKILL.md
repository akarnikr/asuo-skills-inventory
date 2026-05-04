# install-and-import-planner

## When to use

Use before coding to produce dependency and import steps for selected components.

## Inputs

- Selected components

## Tool usage

1. Call `get_component_details` for each component.
2. Prefer `installCommand` from docs metadata.
3. Apply RDS base theme tokens and ASU styling guidelines:
   - Import `@rds-vue-ui/rds-theme-base/dist/css/rds-theme-base.css`
   - Use CSS vars like `--rds-body-bg`, `--rds-body-color`, `--rds-primary`, `--rds-secondary`, `--rds-body-font-family`.
4. Consolidate package installs and dedupe commands.
5. Collect import statements and peer dependencies.

## Output

Return:

- `installPlan[]`
- `importPlan[]`
- `peerDependencyChecklist[]`
- `conflictsOrWarnings[]`
