# landing-section-mapper

## When to use
Use to map landing page sections to concrete RDS components.

## Inputs
- Section model (hero, value props, social proof, CTA, FAQ, footer)
- Optional tone/brand constraints

## Tool usage
1. Use `list_rds_components` for discovery.
2. Use `get_component_details` for top candidates.
3. For each section, choose 1 primary + 1 fallback component.
4. Use `generate_rds_component` for initial code snippets.

## Output
Return mapping:
- `sectionMap[]` with `{section, primaryComponent, fallbackComponent, rationale}`
- `snippetSeed[]`
- `propRequirements[]`
