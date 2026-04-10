# content-to-props-translator

## When to use
Use when marketing/content copy exists and must be mapped into component props.

## Inputs
- Section content/copy
- Selected components

## Tool usage
1. Pull prop schema via `get_component_details`.
2. Map content fields to prop names and expected control types.
3. Build safe defaults for missing optional content.

## Output
Return:
- `landingPropsBySection{}`
- `unmappedContent[]`
- `requiredMissing[]`
