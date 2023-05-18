<template>
  <section class="p-4">
    <ShipSummary v-for="ship in authStore.ships" :key="ship.symbol" :ship="ship" />
    <SystemMap :system-symbol="authStore.ships[0].nav.systemSymbol" />
    <pre>
      {{ authStore.ships }}
    </pre>
  </section>
</template>

<script setup lang="ts">
import ShipSummary from '@/components/Ship/ShipSummary.vue'
import SystemMap from '@/components/System/SystemMap.vue'
import { useAuthStore } from '@/stores/auth.store'

const authStore = useAuthStore()
</script>
