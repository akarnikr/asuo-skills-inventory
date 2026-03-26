# PR Readiness Checklist

Run this checklist top-to-bottom and stop at the first blocking failure.

## 1) Scope and Intent
- PR summary clearly states what changed and why.
- Linked issue/task exists.
- Scope is focused (no unrelated refactors).

## 2) Correctness and Risk
- Changed logic has no obvious regression paths.
- Edge/failure behavior is handled.
- Document backward-compatibility risk when relevant.

## 3) Verification Evidence
- Test evidence present (`yarn test` output or CI status).
- Lint evidence present (`yarn lint` output or CI status).
- Build evidence present when build-affecting files changed.

## 4) UX and Docs
- UI-visible changes include screenshots or short video.
- User-facing behavior changes are documented.
- Reflect config/env changes in `.env.example` and docs.

## 5) Merge Decision Rubric
- `Ready`: no blocking issues, evidence complete.
- `Ready with caveats`: no blockers, minor follow-ups acceptable.
- `Not ready`: blocker(s) or missing required evidence.
- `Needs info`: decision cannot be made from available artifacts.
