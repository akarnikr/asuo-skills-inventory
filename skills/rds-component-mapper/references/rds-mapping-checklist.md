# RDS Mapping Checklist

## 1) Requirement Decomposition
- Split each requirement into one observable behavior.
- Mark behavior type: visual, interactive, data, accessibility.

## 2) RDS Candidate Pass
- List 1-3 candidate RDS components.
- Prefer existing component composition over custom UI.

## 3) Fit Validation
- Validate required states (default, hover/focus, disabled, loading, error).
- Validate required interactions (click, keyboard, selection, filtering).
- Validate data behavior (empty, long text, overflow, pagination, async).

## 4) Gap Decision
If no candidate satisfies the requirement:
- Emit `WARNING: RDS GAP`.
- Document candidates and why each fails.
- Define the minimal custom scope required.

## 5) Final Audit
- Confirm every requirement has a mapping or a gap warning.
- Confirm no custom scope is proposed without a warning.
- Confirm recommendations are actionable for implementation.
