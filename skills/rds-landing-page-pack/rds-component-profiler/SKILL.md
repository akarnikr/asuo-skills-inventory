# rds-component-profiler

## When to use
Use after selecting candidate components and you need full metadata for implementation.

## Inputs
- `components[]` references (supports `RdsButton`, `button`, `@rds-vue-ui/button`)

## Tool usage
1. For each component, call `get_component_details`.
2. Capture fields:
   - identity: name/package/version/category
   - API: props/events/slots
   - stories
   - install/import metadata
   - provenance/quality metadata
3. Track unresolved components explicitly.

## Output
Return:
- `profiles[]`
- `notFound[]`
- `highRiskProfiles[]` (low completeness or warnings)
