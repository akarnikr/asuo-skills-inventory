# snippet-normalizer

## When to use
Use to convert raw `generate_rds_component` output into production-usable Vue snippets.

## Inputs
- Raw generated snippets
- Chosen section/component mapping

## Tool usage
1. Call `generate_rds_component` for each selected component.
2. Normalize into consistent wrapper-ready pattern:
   - clear prop bindings
   - stable naming conventions
   - remove duplicated boilerplate
3. Preserve extracted props metadata for validation.

## Output
Return:
- `normalizedSnippets[]`
- `wrapperSuggestions[]`
- `validationNotes[]`
