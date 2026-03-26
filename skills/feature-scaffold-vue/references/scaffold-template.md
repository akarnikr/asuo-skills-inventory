# Scaffold Template

Use this blueprint for a feature named `<feature-name>` with component `<FeatureName>`.

```text
src/features/<feature-name>/
  index.ts
  <FeatureName>.vue
  use<FeatureName>.ts
  types.ts
  README.md

tests/features/<feature-name>/
  <FeatureName>.spec.ts
  use<FeatureName>.test.ts
```

## `index.ts`
```ts
export { default as <FeatureName> } from './<FeatureName>.vue'
export * from './types'
export * from './use<FeatureName>'
```

## `types.ts`
```ts
export interface <FeatureName>State {
  loading: boolean
  error: string | null
}
```

## `use<FeatureName>.ts`
```ts
import { ref } from 'vue'

export function use<featureName>() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  return { loading, error }
}
```

## Test baseline
- Add one happy-path assertion.
- Add one edge/failure assertion.
- Keep tests deterministic (no network calls in unit tests).
