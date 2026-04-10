# install-and-import-planner

## When to use
Use before coding to produce dependency and import steps for selected components.

## Inputs
- Selected components

## Tool usage
1. Call `get_component_details` for each component.
2. Prefer `installCommand` from docs metadata.
3. Consolidate package installs and dedupe commands.
4. Collect import statements and peer dependencies.

## Output
Return:
- `installPlan[]`
- `importPlan[]`
- `peerDependencyChecklist[]`
- `conflictsOrWarnings[]`
