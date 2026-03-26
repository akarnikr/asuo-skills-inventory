# Env Sync Checklist

## Safety First
- Confirm whether real secret values are needed; if yes, request explicit user permission first.
- Default to placeholders in `.env.example`; never place live secrets in git-tracked files.

## Discovery
- Extract env keys from code/config usage.
- Compare against `.env.example`.
- Compare against environment documentation.

## Reconciliation
- Add missing keys with placeholder/default semantics.
- Remove stale keys.
- Document each key: purpose, required/optional, default/placeholder, and usage.

## Consistency
- Keep naming style consistent (uppercase snake case unless project says otherwise).
- Keep ordering/grouping consistent.
- Ensure docs and `.env.example` match exactly on key names.

## Final Checks
- Verify no real secret values were introduced.
- Summarize changed keys and required secret-manager follow-up.
