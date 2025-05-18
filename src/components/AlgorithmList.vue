<template>
    <div>
        <h3>Algorithm List</h3>
        <ul>
            <li v-for="alg in algorithms" :key="alg.id">
                <span>{{ alg.name }}</span>: <code>{{ alg.moves }}</code>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
defineProps<{ algorithms: { id: string, name: string, moves: string }[] }>()

</script>
