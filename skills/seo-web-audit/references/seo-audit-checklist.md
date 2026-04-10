# SEO Audit Checklist

Use this checklist to support consistent webpage audits. Mark each line item as:
- `Pass`
- `Issue`
- `Not applicable`
- `Unknown` (missing artifact)

## 1. Crawlability And Indexability
- `robots.txt` allows the page and critical rendering assets.
- Meta robots directives do not unintentionally block indexing.
- X-Robots-Tag headers do not conflict with indexing goals.
- Canonical tag is present, absolute, and points to the preferred URL.
- Canonical signal is self-referential for canonical pages.
- Redirect chain is minimal (avoid multi-hop).
- HTTP status is correct (`200` for canonical pages).

## 2. SERP Snippet Signals
- Title tag exists, is unique, and reflects page intent.
- Title avoids duplication across sibling pages.
- Meta description exists and summarizes user value.
- URL slug is readable and avoids noisy parameters when possible.

## 3. Content And Information Architecture
- Exactly one clear `H1` aligned to page topic.
- Heading order is logical and scannable (`H1 -> H2 -> H3`).
- Primary user intent is covered early in content.
- Content avoids thin, duplicate, or boilerplate-heavy copy.
- Supporting entities/subtopics are covered where relevant.

## 4. Internal Linking
- Page is reachable via internal links from navigational hubs.
- Anchor text is descriptive and context-relevant.
- Important conversion pages receive internal link equity.
- Broken internal links are absent.
- Breadcrumbs exist where they improve hierarchy clarity.

## 5. Media Optimization
- Informative images include descriptive `alt` text.
- Decorative images avoid misleading `alt` values.
- Image formats and dimensions are optimized for delivery.
- Large media does not block initial render unnecessarily.

## 6. Structured Data
- Structured data is present where useful (Article, FAQ, Product, etc.).
- Markup type matches visible page content.
- Required properties appear to be populated.
- Structured data does not contradict visible content.

## 7. Performance And UX Proxies
- Largest content element is not delayed by heavy blocking assets.
- Excessive JavaScript payload risk is identified.
- Layout shift risk is minimized with stable element dimensions.
- Mobile viewport rendering appears usable without horizontal scrolling.
- Tap targets and navigation affordances are usable on mobile.

## 8. International And Localization (If Applicable)
- Hreflang annotations are present and mutually consistent.
- Canonical and hreflang do not conflict.
- Regional/language targeting aligns with page audience.

## 9. Measurement And Validation
- Success metric is mapped per fix (indexation, CTR, ranking, conversion).
- A validation method is defined (crawl, search console, logs, analytics).
- Follow-up check window is specified (for example 2-6 weeks).
