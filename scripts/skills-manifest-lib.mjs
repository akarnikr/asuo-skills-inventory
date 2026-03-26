import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'

const FRONTMATTER_PATTERN = /^---\n([\s\S]*?)\n---\n/

const safeRead = (filePath) => {
  try {
    return fs.readFileSync(filePath, 'utf8')
  } catch {
    return ''
  }
}

const parseFrontmatter = (markdown) => {
  const match = markdown.match(FRONTMATTER_PATTERN)
  if (!match) {
    return {}
  }

  return yaml.load(match[1]) || {}
}

const parseOpenAiYaml = (rawYaml) => {
  if (!rawYaml) {
    return {}
  }

  const parsed = yaml.load(rawYaml)
  return parsed?.interface || {}
}

const buildCommands = (slug) => ({
  npxCommand: `npx skills add akarnikr/asuo-skills-inventory@${slug} -g -y`,
  copyCommand: `cp -R "$SKILLS_REPO_PATH/skills/${slug}" "${'${CODEX_HOME:-$HOME/.codex}/skills'}"`
})

export const collectSkillsCatalog = (repoRoot) => {
  const skillsRoot = path.join(repoRoot, 'skills')
  if (!fs.existsSync(skillsRoot)) {
    return []
  }

  const entries = fs
    .readdirSync(skillsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b))

  return entries.map((slug) => {
    const skillDir = path.join(skillsRoot, slug)
    const skillMd = safeRead(path.join(skillDir, 'SKILL.md'))
    const openAiYaml = safeRead(path.join(skillDir, 'agents/openai.yaml'))

    const frontmatter = parseFrontmatter(skillMd)
    const interfaceMeta = parseOpenAiYaml(openAiYaml)
    const commands = buildCommands(slug)

    return {
      slug,
      name: frontmatter.name || slug,
      description: frontmatter.description || '',
      displayName: interfaceMeta.display_name || frontmatter.name || slug,
      shortDescription: interfaceMeta.short_description || '',
      defaultPrompt: interfaceMeta.default_prompt || '',
      path: `skills/${slug}`,
      ...commands
    }
  })
}
