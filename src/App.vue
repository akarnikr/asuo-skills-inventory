<script setup lang="ts">
import { computed, ref } from 'vue'
import SkillCard from '@/components/SkillCard.vue'
import { skillsCatalog } from '@/data/skills.generated'

const query = ref('')
const allCopyState = ref<'idle' | 'copied'>('idle')

const allSkillsCommand =
  'for s in "$SKILLS_REPO_PATH"/skills/*; do cp -R "$s" "${CODEX_HOME:-$HOME/.codex}/skills/"; done'

const copyAllSkillsCommand = async () => {
  try {
    await navigator.clipboard.writeText(allSkillsCommand)
    allCopyState.value = 'copied'
    window.setTimeout(() => {
      allCopyState.value = 'idle'
    }, 1400)
  } catch {
    allCopyState.value = 'idle'
  }
}

const filteredSkills = computed(() => {
  const term = query.value.trim().toLowerCase()
  if (!term) {
    return skillsCatalog
  }

  return skillsCatalog.filter((skill) => {
    const searchText = [
      skill.slug,
      skill.name,
      skill.displayName,
      skill.description,
      skill.shortDescription,
      skill.defaultPrompt
    ]
      .join(' ')
      .toLowerCase()

    return searchText.includes(term)
  })
})
</script>

<template>
  <div class="site-wrap">
    <header class="hero py-5">
      <div class="container">
        <p class="hero-kicker mb-2">ASUO Engineering</p>
        <h1 class="display-5 hero-title">Skills Inventory</h1>
        <p class="hero-subtitle mb-0">
          Browse every skill, review details, and copy install commands directly into your local Codex setup.
        </p>
      </div>
    </header>

    <main class="container py-4">
      <section class="all-skills-command card mb-4">
        <div class="card-body">
          <h2 class="h5 mb-2">Install all skills from local clone</h2>
          <p class="text-muted mb-2">
            Use this command if you want to copy the full repository catalog into your local Codex skills directory.
          </p>
          <pre class="command-box"><code>{{ allSkillsCommand }}</code></pre>
          <button type="button" class="btn btn-maroon btn-sm" @click="copyAllSkillsCommand">
            {{ allCopyState === 'copied' ? 'Copied' : 'Copy all-skills command' }}
          </button>
        </div>
      </section>

      <div class="row align-items-end mb-4">
        <div class="col-md-8">
          <label class="font-weight-bold" for="skill-search">Search skills</label>
          <input
            id="skill-search"
            v-model="query"
            class="form-control form-control-lg"
            placeholder="Try 'accessibility', 'rds', or 'security'"
            type="search"
          />
        </div>
        <div class="col-md-4 mt-3 mt-md-0 text-md-right">
          <p class="results-count mb-0">{{ filteredSkills.length }} skills</p>
        </div>
      </div>

      <section class="row">
        <div v-for="skill in filteredSkills" :key="skill.slug" class="col-12 col-lg-6 mb-4">
          <SkillCard :skill="skill" />
        </div>
      </section>
    </main>
  </div>
</template>
