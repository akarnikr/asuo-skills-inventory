<script setup lang="ts">
import { ref } from 'vue'
import type { SkillRecord } from '@/types'

const props = defineProps<{ skill: SkillRecord }>()
const copyState = ref<'idle' | 'npx' | 'copy'>('idle')

const copyText = async (type: 'npx' | 'copy', text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    copyState.value = type
    window.setTimeout(() => {
      copyState.value = 'idle'
    }, 1400)
  } catch {
    copyState.value = 'idle'
  }
}
</script>

<template>
  <article class="card skill-card h-100">
    <div class="card-body d-flex flex-column">
      <p class="skill-slug mb-2">{{ skill.slug }}</p>
      <h2 class="h4 skill-title">{{ skill.displayName }}</h2>
      <p class="skill-short text-muted mb-2">{{ skill.shortDescription }}</p>
      <p class="skill-description mb-3">{{ skill.description }}</p>

      <h3 class="h6 command-heading">Install with npx</h3>
      <pre class="command-box"><code>{{ skill.npxCommand }}</code></pre>
      <button
        type="button"
        class="btn btn-sm btn-maroon mb-3"
        @click="copyText('npx', skill.npxCommand)"
      >
        {{ copyState === 'npx' ? 'Copied' : 'Copy npx command' }}
      </button>

      <h3 class="h6 command-heading">Install from local clone</h3>
      <pre class="command-box"><code>{{ skill.copyCommand }}</code></pre>
      <button
        type="button"
        class="btn btn-sm btn-outline-maroon mt-auto"
        @click="copyText('copy', skill.copyCommand)"
      >
        {{ copyState === 'copy' ? 'Copied' : 'Copy local command' }}
      </button>
    </div>
  </article>
</template>
