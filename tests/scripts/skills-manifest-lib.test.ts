import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { collectSkillsCatalog } from '../../scripts/skills-manifest-lib'

describe('collectSkillsCatalog', () => {
  it('loads all skills and creates commands', () => {
    const repoRoot = path.resolve(process.cwd())
    const skills = collectSkillsCatalog(repoRoot)

    expect(skills.length).toBeGreaterThan(0)
    expect(skills[0].npxCommand).toContain('npx skills add')
    expect(skills[0].copyCommand).toContain('$SKILLS_REPO_PATH')
  })

  it('includes expected skill metadata fields', () => {
    const repoRoot = path.resolve(process.cwd())
    const skills = collectSkillsCatalog(repoRoot)
    const first = skills[0]

    expect(first).toHaveProperty('slug')
    expect(first).toHaveProperty('displayName')
    expect(first).toHaveProperty('description')
    expect(first.path.startsWith('skills/')).toBe(true)
  })
})
