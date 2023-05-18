<template>
  <section class="p-4">
    <ShipSummary v-for="ship in authStore.ships" :key="ship.symbol" :ship="ship" />
    <pre>
      {{ authStore.ships }}
    </pre>
  </section>
</template>

<script setup lang="ts">
import ShipSummary from '@/components/Ship/ShipSummary.vue'
import { useAuthStore } from '@/stores/auth.store'

const authStore = useAuthStore()
</script>
