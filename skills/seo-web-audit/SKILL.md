---
name: seo-web-audit
description: Audit one or more webpages for technical SEO, on-page SEO, and content discoverability risks, then return severity-ranked findings with concrete fixes. Use when validating page launch readiness, diagnosing ranking/traffic drops, reviewing templates, or performing recurring SEO health checks.
---

# SEO Web Audit

Use this skill to run a consistent SEO audit for webpages and return prioritized, actionable fixes.

## What To Collect
Collect as many of these artifacts as available:
- Target URLs and page type (landing page, blog, product, docs, etc.).
- Crawl/indexability signals (`robots.txt`, meta robots directives, canonical tags, sitemap hints).
- Rendered HTML signals (`title`, meta description, headings, structured data, internal links, image attributes).
- Technical performance indicators (Core Web Vitals or lab proxies when field data is unavailable).
- Business context when provided (target keyword, geography, priority conversion action).

If critical artifacts are missing, continue with best-effort analysis and report `Missing info` explicitly.

## Audit Steps
1. Review crawlability and indexability controls.
2. Review SERP snippet quality.
3. Review content structure and intent alignment.
4. Review internal linking and navigation signals.
5. Review media SEO basics.
6. Review structured data quality.
7. Review performance and page experience signals.
8. Review international and localization signals when relevant.
9. Prioritize the smallest high-impact fixes first.

## SEO Checklist

Mark each line item as:
- `Pass`
- `Issue`
- `Not applicable`
- `Unknown` (missing artifact)

### 1) Crawlability And Indexability
- `robots.txt` allows the page and critical rendering assets.
- Meta robots directives do not unintentionally block indexing.
- X-Robots-Tag headers do not conflict with indexing goals.
- Canonical tag is present, absolute, and points to the preferred URL.
- Canonical signal is self-referential for canonical pages.
- Redirect chains are minimal (avoid multi-hop paths).
- HTTP status is correct (`200` for canonical pages).

### 2) SERP Snippet Signals
- Title tag exists, is unique, and reflects page intent.
- Title avoids duplication across sibling pages.
- Meta description exists and summarizes user value.
- URL slug is readable and avoids noisy parameters where possible.

### 3) Content And Information Architecture
- Exactly one clear `H1` aligned to page topic.
- Heading order is logical and scannable (`H1 -> H2 -> H3`).
- Primary user intent is covered early in content.
- Content avoids thin, duplicate, or boilerplate-heavy copy.
- Supporting entities/subtopics are covered where relevant.

### 4) Internal Linking
- Page is reachable from navigation hubs and relevant internal paths.
- Anchor text is descriptive and context-relevant.
- Important conversion pages receive internal link equity.
- Broken internal links are absent.
- Breadcrumbs exist where they improve hierarchy clarity.

### 5) Media Optimization
- Informative images include descriptive `alt` text.
- Decorative images avoid misleading `alt` values.
- Image formats and dimensions are optimized for delivery.
- Large media does not block initial render unnecessarily.

### 6) Structured Data
- Structured data is present where useful (Article, FAQ, Product, etc.).
- Markup type matches visible page content.
- Required properties appear populated.
- Structured data does not contradict visible content.

### 7) Performance And UX Proxies
- Largest content element is not delayed by heavy blocking assets.
- Excessive JavaScript payload risk is identified.
- Layout shift risk is minimized with stable element dimensions.
- Mobile viewport rendering is usable without horizontal scrolling.
- Tap targets/navigation are usable on mobile.

### 8) International And Localization (If Applicable)
- Hreflang annotations are present and mutually consistent.
- Canonical and hreflang signals do not conflict.
- Regional/language targeting aligns with audience.

### 9) Measurement And Validation
- Success metric is mapped per fix (indexation, CTR, ranking, conversion).
- Validation method is defined (crawl, search console, logs, analytics).
- Follow-up check window is specified (for example `2-6 weeks`).

## Severity Model
- `Critical`: Prevents indexing/discovery or causes severe ranking loss risk.
- `Major`: Materially degrades visibility, relevance signals, or click-through performance.
- `Minor`: Real SEO weakness with moderate impact.
- `Advisory`: Improvement opportunity with low immediate impact.

## Output Format
Return in this order:
1. `Critical` findings with URL/element evidence and exact fix guidance.
2. `Major` findings.
3. `Minor` findings.
4. `Missing info` that limits confidence.
5. SEO gate decision: `Pass`, `Pass with caveats`, or `Fail`.
6. A short prioritized action plan:
- Top 3 fixes for the next sprint.
- Quick wins that can ship in one day.

## Quality Bar
- Cite concrete page evidence for each finding (URL + element/signal).
- Avoid speculative claims without observable signals.
- Prefer minimal, implementable fixes over broad rewrites.
- When relevant, include measurement guidance (what metric should improve and how to verify).
