<template>
  <main class="p-4">
    <h1 class="text-primary font-light my-4">Fleet</h1>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ShipTile v-for="ship in fleet" :key="ship.symbol" :ship="ship" />
    </section>
  </main>
</template>

<script setup lang="ts">
import ShipTile from '@/components/Ship/ShipTile.vue'
import type { Ship } from '@/models/ship.model'
import { useAuthStore } from '@/stores/auth.store'
import { computed } from 'vue'

const authStore = useAuthStore()
const fleet = computed<Ship[]>(() => authStore.ships || [])
</script>
