import fs from 'node:fs'
import path from 'node:path'
import { collectSkillsCatalog } from './skills-manifest-lib.mjs'

const repoRoot = process.cwd()
const catalog = collectSkillsCatalog(repoRoot)
const outputPath = path.join(repoRoot, 'src/data/skills.generated.ts')

const source = `import type { SkillRecord } from '@/types'\n\nexport const skillsCatalog: SkillRecord[] = ${JSON.stringify(catalog, null, 2)}\n`

fs.writeFileSync(outputPath, source, 'utf8')
console.log(`Generated ${catalog.length} skills at ${outputPath}`)
