# WCAG Review Checklist (A/AA)

## 1) Semantics And Structure
- Page has one clear `<h1>` and logical heading progression.
- Landmarks are present and meaningful (`header`, `main`, `nav`, `footer`).
- Interactive controls expose accessible names.
- Form controls have explicit labels and helper/error text associations.

## 2) Keyboard And Focus
- All interactive UI is reachable and operable by keyboard.
- Focus order follows visual/logical flow.
- Focus indicator is visible and not obscured.
- Modal/dialog traps focus and restores it on close.

## 3) Perception And Readability
- Text and UI controls meet minimum contrast expectations.
- Information is not conveyed by color alone.
- Error states include clear text guidance.
- Layout remains usable at zoom/reflow.

## 4) Media And Motion
- Informative images include meaningful alt text.
- Decorative images are hidden from assistive tech.
- Auto-updating/moving content can be paused when required.
- Motion-triggered interactions have reduced-motion-safe behavior.

## 5) Robustness
- ARIA is used only where native semantics are insufficient.
- Name/role/value updates are announced when dynamic content changes.
- Duplicate IDs and broken label/description references are absent.

## 6) Reporting
For each issue found, capture:
- Severity (`Blocking`, `Major`, `Minor`, `Advisory`)
- WCAG criterion (for example `1.3.1`, `2.1.1`, `4.1.2`)
- Affected file/component
- Repro steps and expected behavior
- Smallest viable remediation
