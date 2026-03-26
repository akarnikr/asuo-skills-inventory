import { fireEvent, render, screen } from '@testing-library/vue'
import { describe, expect, it, vi } from 'vitest'
import App from '@/App.vue'

describe('App', () => {
  it('shows skills and command blocks upfront', () => {
    render(App)

    expect(screen.getByText(/Install all skills with npx/i)).toBeTruthy()
    expect(screen.getAllByText(/Install with npx/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Install from local clone/i).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('button', { name: /copy npx command/i }).length).toBeGreaterThan(0)
  })

  it('filters by search input', async () => {
    render(App)
    const search = screen.getByLabelText(/search skills/i)

    await fireEvent.update(search, 'owasp')

    expect(screen.getByText(/OWASP Top 10 Security Test/i)).toBeTruthy()
  })

  it('copies command text when copy is clicked', async () => {
    const writeText = vi.fn(async () => undefined)
    Object.assign(navigator, {
      clipboard: { writeText }
    })

    render(App)
    const button = screen.getAllByRole('button', { name: /copy npx command/i })[0]
    await fireEvent.click(button)

    expect(writeText).toHaveBeenCalledTimes(1)
  })

  it('copies all-skills command text', async () => {
    const writeText = vi.fn(async () => undefined)
    Object.assign(navigator, {
      clipboard: { writeText }
    })

    render(App)
    const button = screen.getByRole('button', { name: /copy all-skills command/i })
    await fireEvent.click(button)

    expect(writeText).toHaveBeenCalledTimes(1)
    expect(writeText).toHaveBeenCalledWith(
      expect.stringContaining("npx skills install akarnikr/asuo-skills-inventory --skill '*' -y")
    )
  })
})
