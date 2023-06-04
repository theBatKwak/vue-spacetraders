<template>
  <nav class="flex w-fit mx-auto">
    <RouterLink
      to="/"
      class="block py-1 px-2 no-underline border border-primary font-light mx-2"
      :class="{ 'bg-primary/20': currentRoute === 'dashboard' }"
      >Dashboard</RouterLink
    >
    <RouterLink
      to="/fleet"
      class="block py-1 px-2 no-underline border border-primary font-light mx-2"
      :class="{ 'bg-primary/20': currentRoute === 'fleet' }"
      >Fleet</RouterLink
    >
    <RouterLink
      to="/galaxymap"
      class="block py-1 px-2 no-underline border border-primary font-light mx-2"
      :class="{ 'bg-primary/20': currentRoute === 'galaxymap' }"
      >Galaxy map</RouterLink
    >
    <RouterLink
      to="/contracts"
      class="block py-1 px-2 no-underline border border-primary font-light mx-2"
      :class="{ 'bg-primary/20': currentRoute === 'contracts' }"
      >Contracts</RouterLink
    >
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = computed<string>(() => route.name as string)
</script>
