# Git Hook Template: Main Branch Protection

Use these local hooks to enforce branch safety.

## 1) `pre-commit`
Create `.git/hooks/pre-commit`:

```bash
#!/usr/bin/env bash

branch="$(git rev-parse --abbrev-ref HEAD)"
if [ "$branch" = "main" ]; then
  echo "WARNING: MAIN BRANCH PROTECTED"
  echo "Commit/push to 'main' is not allowed."
  echo "Create and switch to a feature branch first."
  echo "Example: git checkout -b feature/<short-description>"
  exit 1
fi
```

## 2) `pre-push`
Create `.git/hooks/pre-push`:

```bash
#!/usr/bin/env bash

branch="$(git rev-parse --abbrev-ref HEAD)"
if [ "$branch" = "main" ]; then
  echo "WARNING: MAIN BRANCH PROTECTED"
  echo "Push to 'main' is not allowed."
  echo "Create and push a feature branch instead."
  echo "Example: git checkout -b feature/<short-description>"
  exit 1
fi
```

## 3) Enable Hooks
```bash
chmod +x .git/hooks/pre-commit .git/hooks/pre-push
```

## 4) Verify
- On `main`, `git commit` and `git push` should fail with warning output.
- On non-`main`, commits and pushes should proceed normally.
