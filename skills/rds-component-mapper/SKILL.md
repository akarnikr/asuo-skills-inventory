---
name: rds-component-mapper
description: "Map requirement text to best-fit RDS Vue UI components and identify unsupported requirements. Use when planning UI implementation, reviewing feature requirements, or validating component choices before coding. Emit `WARNING: RDS GAP` whenever no available RDS component fully satisfies a requirement and define the minimal custom component needed."
---

# RDS Component Mapper

Map product and UX requirements to concrete RDS component decisions.

## Inputs To Gather
Collect from available artifacts:
- Requirement text, acceptance criteria, or user stories.
- Target page/feature context and interaction expectations.
- Any design constraints (layout, branding, accessibility, data behavior).

If key requirement details are missing, make minimal assumptions and list them under `Missing info`.

## Mapping Workflow
1. Break requirement text into atomic UI behaviors.
2. Classify each behavior type: visual, interactive, data-driven, accessibility-sensitive.
3. Select the best-fit RDS component for each behavior.
4. If a behavior cannot be mapped to RDS, define a minimal custom component (name, responsibilities, props/events/states, accessibility requirements) and include it in the mapping output.
5. If no component fully satisfies the behavior, emit `WARNING: RDS GAP`.
6. Record decision rationale using props/slots/states/events expectations.

## Mandatory Gap Format
When a gap exists, use this exact structure:
- `WARNING: RDS GAP`
- Requirement:
- RDS options evaluated:
- Why options fail:
- Minimal custom scope:

## Output Contract
Return in this order:
1. Component mapping table (`Requirement`, `Behavior Type`, `RDS Component`, `Rationale`).
2. Warnings section with all `WARNING: RDS GAP` entries.
3. Missing info.
4. Recommended next implementation step.

## Quality Gates
- Every requirement must map to an RDS component or a documented gap.
- Every documented gap must include a minimal custom component definition.
- No custom component definition without a preceding `WARNING: RDS GAP` block.
- Mapping rationale must be implementation-usable (not generic).

## Repository Alignment
- Prefer RDS Vue UI components and composition before custom UI.
- Keep recommendations aligned with Bootstrap 4 and ASU styling constraints already used in this repository.
- If custom work is unavoidable, keep scope isolated and minimal.


## Inlined Agent Config

Source: agents/openai.yaml

```yaml
interface:
  display_name: "RDS Component Mapper"
  short_description: "Map requirements to RDS components"
  default_prompt: "Use this skill to map requirement text to RDS Vue UI components, identify best-fit options, and emit WARNING: RDS GAP when no component fully satisfies a requirement."
```

## Inlined References

### references/rds-mapping-checklist.md

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

## 6) Available RDS Components And Best Page-Design Use Cases
Source: `https://rds-vue-ui.edpl.us/index.json` (Storybook component index under `Components/*`).

| RDS Component | Best use case in page design |
| --- | --- |
| `Accordion/Accordion` | FAQ sections and expandable content blocks in long pages. |
| `Accordion/CollapseItem` | Secondary collapsible rows inside grouped accordion content. |
| `Alert/RdsAlert` | Inline success, warning, or error messaging near user actions. |
| `Breadcrumb/breadcrumbApollo` | Hierarchical page location for deep site navigation. |
| `Button/ButtonPlayApollo` | High-visibility primary CTA actions in hero or conversion areas. |
| `Button/Buttons` | Standard page actions like submit, cancel, save, and continue. |
| `Card/CardDegreeSearch` | Degree/program search result cards with key metadata. |
| `Card/CardDegreeText` | Text-first degree or program summary cards. |
| `Card/CardIcon` | Feature highlight grids using icon plus short copy. |
| `Card/CardImageArticle` | News/article teaser cards in blog or insights sections. |
| `Card/CardImageFull` | Full-image campaign cards for promotional content blocks. |
| `Card/CardImageTile` | Image-tile galleries for browsable content collections. |
| `Card/CardInfoHorizontal` | Side-by-side media and detail cards for list views. |
| `Card/CardInfoVertical` | Stacked information cards for mobile-friendly layouts. |
| `Card/CardLinkAtlas` | Clickable navigation cards to route users to key sections. |
| `Card/CardTestimonialApollo` | Branded testimonial blocks in proof and trust sections. |
| `Card/CardTestimonialAtlas` | Alternate testimonial style for editorial/testimonial rails. |
| `Card/CardTextAtlas` | Simple text cards for highlights, notes, or short content. |
| `Card/ContentSlideInAtlas` | Scroll or interaction-driven reveal cards for storytelling. |
| `Card/StarbucksHoverCard` | Hover-reveal promotional cards in desktop marketing grids. |
| `Dropdown/Dropdown` | Standard option selection in forms and filter bars. |
| `Dropdown/DropdownApollo` | Branded dropdown selection aligned to Apollo styles. |
| `Dropdown/DropdownHeader` | Grouped dropdown sections with category headings. |
| `Dropdown/DropdownItem` | Reusable action rows inside custom dropdown menus. |
| `Forms/DatePicker` | Date selection fields for scheduling or date-range filters. |
| `forms/FileInputApollo` | File upload controls for documents and attachments. |
| `forms/FormCheckbox` | Multi-select preferences, opt-ins, and consent fields. |
| `forms/PhoneInputApollo` | Validated phone number input in lead/contact forms. |
| `Forms/RadioButtonApollo` | Single-option choice where options need clear comparison. |
| `Forms/RadioGroupApollo` | Grouped single-choice controls for settings or forms. |
| `Forms/TypeaheadSearch` | Search-as-you-type experiences for large datasets. |
| `Forms/TypeaheadSelect` | Autocomplete selection from long option lists. |
| `Forms/TypeinputText` | Standard text-entry fields across form workflows. |
| `Highlight/HighlightApollo` | Emphasized metrics, outcomes, or key selling points. |
| `Image/ImageInfographicAtlas` | Data-rich infographic presentation sections. |
| `Image/ImageLandscapeAtlas` | Wide media slots in hero and section headers. |
| `Image/ImagePortraitAtlas` | Portrait-oriented media in profile or team pages. |
| `Image/ImageTestimonialAtlas` | Testimonial headshots paired with quote content. |
| `List/ListItemCircular` | Circular-icon bullet lists for steps and feature lists. |
| `List/ListItemHover` | Interactive resource lists with hover affordances. |
| `List/ListTimeline` | Timeline sections for milestones, process, or history. |
| `List/SectionSearchAtlas` | Searchable list sections for resources and links. |
| `Loader/RdsLoader` | Loading placeholders while async data is in flight. |
| `Modal/Modal` | Confirmation dialogs and focused task flows. |
| `Modal/RdsOffcanvas` | Slide-in side panels for filters, carts, or secondary nav. |
| `Navigation/NavbarStickyApollo` | Persistent top navigation on long-scrolling pages. |
| `Navigation/PopoverAtlas` | Contextual overlays for helper text and quick actions. |
| `Navigation/RdsPagination` | Pagination controls for long result sets. |
| `Tab/TabCarouselAtlas` | Tabbed carousels for categorized featured content. |
| `Tab/TabSwitcherApollo` | Toggle between related content panels or states. |
| `Table/TableApollo` | Structured tabular data with comparable columns. |
| `Testimonials/ContentTimedDelay` | Rotating testimonial content in social-proof sections. |
| `Tooltip/RdsToolTip` | Compact hover/focus help for form and UI hints. |
| `Utilities/Analytics` | Page and component analytics instrumentation points. |
| `Video/VideoCaptionApollo` | Embedded accessible video content with captions. |
| `Video/VideoModalAtlas` | Launch-on-demand video viewing in modal overlays. |

