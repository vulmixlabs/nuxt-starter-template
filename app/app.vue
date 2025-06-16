<script setup lang="ts">
const websiteName = 'Vulmix Starter for Nuxt'

useHead({
  titleTemplate: (title) => (title ? `${title} - ${websiteName}` : websiteName),
})
</script>

<template>
  <div class="h-full">
    <NuxtPage />
  </div>
</template>

<style>
html,
body {
  height: 100dvh;
  min-height: 100%;
}

body > #__nuxt {
  height: 100%;
}
</style>
