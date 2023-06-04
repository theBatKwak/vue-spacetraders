<template>
  <RouterLink
    :to="`/ship/${ship.symbol}`"
    class="block no-underline border border-primary bg-primary/10 hover:bg-primary/20 transition-all"
  >
    <div class="flex flex-col">
      <header class="flex justify-between text-xl p-4">
        <p>{{ ship.symbol }}</p>
        <p class="font-light">{{ ship.registration.role }}</p>
      </header>
      <hr class="border-primary" />
      <div class="p-4 grid grid-cols-2">
        <div>
          <LabeledText label="Location" :text="ship.nav.waypointSymbol" />
          <LabeledText label="Status" :text="ship.nav.status" />
        </div>
        <div>
          <ShipFuelIndicator :fuel="ship.fuel" />
          <ShipCrewIndicator :crew="ship.crew" />
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Ship } from '@/models/ship.model'
import LabeledText from '../UI/LabeledText.vue'
import ShipFuelIndicator from './ShipFuelIndicator.vue'
import ShipCrewIndicator from './ShipCrewIndicator.vue'

defineProps<{
  ship: Ship
}>()
</script>
