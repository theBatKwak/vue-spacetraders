<template>
  <section>
    <pre>
      {{ authStore.agent }}
      {{ authStore.ships }}
    </pre>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store'

const authStore = useAuthStore()
</script>
