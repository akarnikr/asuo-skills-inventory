# OWASP Top 10 Review Checklist

Use this checklist to ensure complete coverage. Map findings to OWASP 2021 categories.

## A01: Broken Access Control
- Verify authorization on every protected action and object reference.
- Test horizontal/vertical privilege escalation.
- Check server-side enforcement (not UI-only restrictions).

## A02: Cryptographic Failures
- Verify sensitive data encryption in transit and at rest.
- Check for weak algorithms, insecure key handling, or plaintext secrets.
- Confirm secure session/token handling.

## A03: Injection
- Test inputs for SQL/NoSQL/OS/LDAP/template injection.
- Validate parameterized queries and output encoding.
- Check deserialization and command execution boundaries.

## A04: Insecure Design
- Evaluate abuse-case coverage in feature design.
- Check rate limiting, anti-automation, and workflow integrity controls.
- Confirm threat-model assumptions are documented.

## A05: Security Misconfiguration
- Review default configs, headers, CORS, debug settings, and error leakage.
- Validate least-privilege runtime settings.
- Check dependency/service hardening assumptions.

## A06: Vulnerable and Outdated Components
- Identify high-risk dependencies and unsupported versions.
- Verify lockfiles and upgrade strategy.
- Check for known CVEs in critical paths.

## A07: Identification and Authentication Failures
- Test login/session lifecycle, MFA controls, password reset flows.
- Verify token expiration, revocation, and cookie security flags.
- Check brute-force and credential-stuffing protections.

## A08: Software and Data Integrity Failures
- Validate integrity of CI/CD and package supply chain.
- Review signature/checksum verification where applicable.
- Check unsafe deserialization and untrusted update channels.

## A09: Security Logging and Monitoring Failures
- Verify security events are logged with useful context.
- Ensure logs avoid secret leakage.
- Confirm alerting/escalation paths for high-risk events.

## A10: Server-Side Request Forgery (SSRF)
- Test URL fetch/input features against internal resource access.
- Validate allowlist controls and network egress restrictions.
- Check redirect handling and DNS rebinding protections.

## Evidence Requirements
For each finding capture:
- Severity and business impact
- OWASP category + CWE
- Affected component/file
- Repro payload/steps
- Proposed remediation
- Verification method
