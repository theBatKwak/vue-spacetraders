<template>
  <section>
    <pre>
      {{ authStore.ships }}
    </pre>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store'

const authStore = useAuthStore()
</script>
