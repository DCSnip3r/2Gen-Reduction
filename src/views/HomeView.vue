<script setup lang="ts">
import { ref } from 'vue'
// If you have a markdown renderer, import it here. Otherwise, just show the text for now.
import methodOverview from '../content/methodOverview.md?raw'
const overview = ref(methodOverview)
</script>

<template>
  <main>
    <h1>2Gen-Reduction Method</h1>
    <div style="max-width: 700px; margin: 0 auto;">
      <pre style="white-space: pre-wrap;">{{ overview }}</pre>
      <!-- Replace <pre> with a markdown renderer if you add one later -->
    </div>
  </main>
</template>
