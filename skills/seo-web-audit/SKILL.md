---
name: seo-web-audit
description: Audit one or more webpages for technical SEO, on-page SEO, and content discoverability risks, then return severity-ranked findings with concrete fixes. Use when validating page launch readiness, diagnosing ranking/traffic drops, reviewing templates, or performing recurring SEO health checks.
---

# SEO Web Audit

Run a deterministic SEO audit for webpages and produce actionable remediation guidance.

## Inputs To Gather
Collect as many of the following artifacts as available:
- Target URLs and page type (landing page, blog, product, docs, etc.).
- Crawl/indexability signals (`robots.txt`, meta robots directives, canonical tags, sitemap hints).
- Rendered HTML signals (`title`, meta description, headings, structured data, internal links, image attributes).
- Technical performance indicators (Core Web Vitals or lab proxies when field data is unavailable).
- Business context when provided (target keyword, geography, priority conversion action).

If critical artifacts are missing, continue with best-effort analysis and report `Missing info` explicitly.

## Audit Workflow
1. Confirm crawl and indexability controls:
- Check robots directives, noindex usage, blocked resources, and canonical conflicts.
2. Evaluate SERP snippet readiness:
- Check title uniqueness/quality, meta description quality, and URL readability.
3. Evaluate content structure and intent alignment:
- Check heading hierarchy, topic focus, keyword coverage, and duplicate/thin content risk.
4. Review internal linking and navigation signals:
- Check orphaned pages risk, anchor clarity, broken internal links, and crawl depth issues.
5. Review media SEO basics:
- Check descriptive alt text, image file naming, and media payload impact.
6. Evaluate structured data quality:
- Check schema presence, type relevance, required fields, and obvious markup inconsistencies.
7. Evaluate page experience and performance:
- Check render-blocking patterns, heavy assets, layout instability risks, and mobile usability concerns.
8. Evaluate international or regional signals when applicable:
- Check hreflang consistency and locale targeting.
9. Prioritize fixes by business impact and implementation effort:
- Recommend the smallest high-impact fixes first.

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

## Reference
Use [references/seo-audit-checklist.md](references/seo-audit-checklist.md) as the baseline checklist while auditing.
