<template>
  <section class="p-4">
    <div v-for="ship in authStore.ships" :key="ship.symbol">
      <ShipSummary v-for="ship in authStore.ships" :key="ship.symbol" :ship="ship" />
      <ShipNavigator :ship-navigation="ship.nav" />
    </div>
    <pre>
      {{ authStore.ships }}
    </pre>
  </section>
</template>

<script setup lang="ts">
import ShipNavigator from '@/components/Ship/ShipNavigator.vue'
import ShipSummary from '@/components/Ship/ShipSummary.vue'
import { useAuthStore } from '@/stores/auth.store'

const authStore = useAuthStore()
</script>
