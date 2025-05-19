<template>
    <div>
        <h3>Algorithm List</h3>
        <ul>
            <li v-for="alg in algorithms" :key="alg.id"
                style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <VisualCube v-if="alg.caseId" :pllType="alg.caseId" :case="alg.moves" :size="120" />
                <span>{{ alg.name }}</span>: <code>{{ alg.moves }}</code>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import VisualCube from './VisualCube.vue'

defineProps<{ algorithms: { id: string, name: string, moves: string, caseId?: string }[] }>()

</script>
