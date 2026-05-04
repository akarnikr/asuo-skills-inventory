---
name: owasp-top10-security-test
description: "Assess application code and configuration for OWASP Top 10 security risks with actionable findings and remediations. Use when reviewing new features, bug fixes, pull requests, or release candidates where security regression risk must be evaluated systematically."
---

# OWASP Top 10 Security Test

Use this skill to run a practical, risk-first security review aligned to OWASP Top 10 (2021).

## Review Scope
- Start with changed code and directly affected flows.
- Expand to adjacent surfaces only when risk indicates it is needed.
- Prioritize real exploitability and business impact over theoretical concerns.

## What To Collect
Collect what is available from the PR, branch, and CI artifacts:
- Changed files and entry points.
- Auth/session model and role requirements.
- API contracts, input surfaces, and data sinks.
- Secret/config handling paths.

If required evidence is unavailable, continue with static review and mark `Missing info`.

## Review Steps

1. Define threat surface for changed components.
2. Check all OWASP Top 10 categories using the checklist below.
3. Attempt realistic abuse cases (injection, auth bypass, privilege escalation, misconfig).
4. Record evidence: affected files, repro steps, payload examples, observed behavior.
5. Classify severity by exploitability + impact.
6. Provide minimal, concrete remediation and a verification test for each finding.

## OWASP Top 10 Checklist

### A01: Broken Access Control
- Verify authorization on protected actions and object references.
- Test horizontal and vertical privilege escalation paths.
- Confirm server-side enforcement (not UI-only restrictions).

### A02: Cryptographic Failures
- Verify encryption for sensitive data in transit and at rest.
- Check for weak algorithms, insecure key handling, or plaintext secrets.
- Confirm secure session and token handling.

### A03: Injection
- Test inputs for SQL/NoSQL/OS/LDAP/template injection.
- Validate parameterized queries and output encoding.
- Check deserialization and command execution boundaries.

### A04: Insecure Design
- Evaluate abuse-case handling in feature/workflow design.
- Check rate limiting, anti-automation, and workflow integrity controls.
- Confirm threat assumptions are explicit and reasonable.

### A05: Security Misconfiguration
- Review defaults, headers, CORS, debug settings, and error leakage.
- Validate least-privilege runtime/service settings.
- Check dependency and environment hardening assumptions.

### A06: Vulnerable and Outdated Components
- Identify high-risk dependencies and unsupported versions.
- Verify lockfile hygiene and patch/upgrade strategy.
- Check known CVEs in critical runtime paths.

### A07: Identification and Authentication Failures
- Test login/session lifecycle, password reset, and MFA-related flows.
- Verify token expiration, revocation, and cookie security flags.
- Check brute-force and credential-stuffing protections.

### A08: Software and Data Integrity Failures
- Validate CI/CD and package supply-chain integrity.
- Review checksum/signature validation where relevant.
- Check unsafe deserialization and untrusted update channels.

### A09: Security Logging and Monitoring Failures
- Verify security-relevant events are logged with useful context.
- Ensure logs do not leak secrets or sensitive data.
- Confirm alerting/escalation coverage for high-risk events.

### A10: Server-Side Request Forgery (SSRF)
- Test URL-fetch/input features for internal resource access.
- Validate allowlist controls and outbound network restrictions.
- Check redirect handling and DNS rebinding resilience.

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
