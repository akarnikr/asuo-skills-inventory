# rds-component-catalog

## When to use
Use when starting a landing page and you need a structured list of available RDS components.

## Inputs
- Optional category hints (hero, cards, testimonials, forms, nav, footer)

## Tool usage
1. Call MCP tool `list_rds_components`.
2. Group components by naming patterns (card, button, nav, form, modal, etc.).
3. Produce a shortlist per landing section.

## Output
Return a compact catalog object:
- `allComponents[]`
- `groupedBySection{}`
- `recommendedForLanding[]`
- `warnings[]`

## Quality bar
- Prefer direct MCP output over assumptions.
- Include at least 3 options for each major section when possible.
