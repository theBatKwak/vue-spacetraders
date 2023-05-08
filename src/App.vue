<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppFooter from './components/App/AppFooter.vue'
import AppHeader from './components/App/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <main class="max-w-screen-2xl w-full mx-auto h-full">
    <RouterView />
  </main>
  <AppFooter />
</template>
