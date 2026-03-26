---
name: owasp-top10-security-test
description: "Assess application code and configuration for OWASP Top 10 security risks with actionable findings and remediations. Use when reviewing new features, bug fixes, pull requests, or release candidates where security regression risk must be evaluated systematically."
---

# OWASP Top 10 Security Test

Perform a risk-first security review aligned with OWASP Top 10.

## Scope
- Review code paths touched by the change first.
- Expand to adjacent attack surfaces if findings indicate broader risk.
- Focus on practical exploitability and business impact.

## Inputs To Gather
Collect from available artifacts:
- Changed files and entry points.
- Auth/session model and role requirements.
- API contracts, input surfaces, and data sinks.
- Secret/config handling paths.

If artifacts are missing, continue with static review and mark `Missing info`.

## Test Workflow
1. Define threat surface for changed components.
2. Check each OWASP Top 10 category using the reference checklist.
3. Attempt realistic abuse cases (injection, auth bypass, privilege escalation, misconfig).
4. Record evidence: affected files, repro steps, payload examples, observed behavior.
5. Classify severity by exploitability + impact.
6. Provide minimal, concrete remediation and a verification test for each finding.

## Reporting Format
Return in this order:
1. `Critical/High` findings (blocking) with OWASP and CWE mapping.
2. `Medium` findings.
3. `Low` findings.
4. `Missing info`.
5. Final risk decision: `Pass`, `Pass with caveats`, or `Fail`.

Each finding must include:
- Title
- Severity
- OWASP category
- CWE (if known)
- Affected file/path
- Reproduction steps
- Recommended fix
- Verification test

## Quality Gates
- No security decision without explicit coverage of all OWASP Top 10 categories.
- No high-severity finding without remediation guidance.
- No remediation without at least one verification step.

## Repository Alignment
- Prefer evidence tied to actual changed code over generic advice.
- Keep recommendations implementable in this repository's stack.
- Flag secrets/config concerns without requesting real secret values.

## Reference
Use [references/owasp-top10-checklist.md](references/owasp-top10-checklist.md) for category-by-category checks.
