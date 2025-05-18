<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import VisualCube from '../components/VisualCube.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <VisualCube case="RUR'U'R'U2RUR'UR2U2R'y2" pllType="Ca" stageMask="" :size="200" />
    <VisualCube case="RUR'U'R'U2RUR'UR2U2R'y2" pllType="Cb" stageMask="ocell" :size="200" />
  </main>
</template>
