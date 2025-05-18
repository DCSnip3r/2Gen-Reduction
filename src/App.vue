<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="main-nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/eocp">EOCP</RouterLink>
    <RouterLink to="/2gll">2GLL</RouterLink>
  </nav>
  <div class="main-content">
    <RouterView />
  </div>
</template>

<style scoped>
.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: var(--color-background, #fff);
  border-bottom: 1px solid var(--color-border, #ccc);
  z-index: 1000;
  font-size: 1rem;
  text-align: center;
  padding: 1rem 0;
}

.main-nav a.router-link-exact-active {
  color: var(--color-text);
}

.main-nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.main-nav a:first-of-type {
  border: 0;
}

.main-content {
  padding-top: 64px;
  /* Adjust if nav height changes */
  max-width: 100vw;
}
</style>
