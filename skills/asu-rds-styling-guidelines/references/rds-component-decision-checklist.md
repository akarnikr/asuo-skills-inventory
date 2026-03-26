# RDS Component Decision Checklist

## 1) Requirement Breakdown
- List each UI requirement as a concrete behavior.
- Mark it as visual-only, interactive, data-driven, or accessibility-sensitive.

## 2) RDS First Pass
- Identify candidate RDS component(s) for each requirement.
- Prefer composing existing RDS components before customization.

## 3) Brand Alignment Pass
- Ensure typography and spacing support ASU-like hierarchy.
- Ensure color and emphasis choices stay aligned with ASU presentation patterns.

## 4) Gap Decision
If no RDS component meets a requirement:
- Emit `WARNING: RDS GAP`.
- Document candidates checked and why each fails.
- Define the smallest required custom component.

## 5) Final Validation
- Confirm every requirement is mapped or flagged.
- Confirm no custom component exists without a warning.
- Confirm implementation remains consistent across all webpages.
