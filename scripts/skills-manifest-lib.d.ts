export interface SkillCatalogEntry {
  slug: string
  name: string
  description: string
  displayName: string
  shortDescription: string
  defaultPrompt: string
  path: string
  npxCommand: string
  copyCommand: string
}

export function collectSkillsCatalog(repoRoot: string): SkillCatalogEntry[]
