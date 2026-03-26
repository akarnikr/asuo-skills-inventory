# Vue + Vitest + Axe Template

Use this as a baseline test structure and adapt names/paths to the feature under test.

```ts
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/vue'
import { axe, toHaveNoViolations } from 'vitest-axe'
import ExampleCard from '@/features/example/ExampleCard.vue'

expect.extend(toHaveNoViolations)

describe('ExampleCard accessibility', () => {
  it('renders default state with no axe violations', async () => {
    const { container, getByRole } = render(ExampleCard, {
      props: { title: 'Featured program' }
    })

    expect(getByRole('heading', { name: /featured program/i })).toBeTruthy()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders empty/error state with no axe violations', async () => {
    const { container, getByText } = render(ExampleCard, {
      props: { title: '' }
    })

    expect(getByText(/title is required/i)).toBeTruthy()
    expect(await axe(container)).toHaveNoViolations()
  })
})
```

## Notes
- If `toHaveNoViolations` type errors occur, ensure Vitest setup loads matcher types.
- If tests require browser APIs, verify `environment: 'jsdom'` in Vitest config.
- If violations are expected temporarily, do not suppress globally; isolate and track with explicit TODO ownership.
