<template>
  <section class="border border-primary bg-primary/10 text-primary">
    <h2 class="text-center text-primary font-light my-4">Ship navigator</h2>
    <div class="flex p-4">
      <ShipDocker
        :current-nav-status="shipNavigation.status"
        :ship-symbol="shipSymbol"
        class="mr-4"
      />
      <ShipFlightModeSelector
        :current-flight-mode="shipNavigation.flightMode"
        :ship-symbol="shipSymbol"
        class="mr-4"
      />
      <ShipNavigationStatus :ship-nav="shipNavigation" />
    </div>
    <hr class="border-primary" />
    <div class="grid grid-cols-[auto_1fr]">
      <Transition>
        <SystemMap
          v-if="systemData"
          :system-data="systemData"
          :ship-route="shipNavigation.route"
          @selectTile="selectTile"
          class="w-fit"
        />
      </Transition>
      <Transition>
        <ShipNavigatorActions
          v-if="!!selectedTile"
          :waypoints="selectedTileWaypoints || []"
          :system-symbol="shipNavigation.systemSymbol"
          :ship-symbol="shipSymbol"
          @close-navigator-actions="selectedTile = null"
          class="w-full max-w-md"
        />
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ShipNav } from '@/models/shipNav.model'
import SystemMap from '../System/SystemMap.vue'
import ShipNavigatorActions from './ShipNavigatorActions.vue'
import { computed, ref } from 'vue'
import type { System } from '@/models/system.model'
import { SystemsService } from '@/services/systems.service'
import { MapService } from '@/services/map.service'
import type { SystemWaypoint } from '@/models/systemWaypoint.model'
import ShipDocker from './ShipDocker.vue'
import ShipFlightModeSelector from './ShipFlightModeSelector.vue'
import ShipNavigationStatus from './ShipNavigationStatus.vue'

const props = defineProps<{
  shipNavigation: ShipNav
  shipSymbol: string
}>()

const systemData = ref<System | null>(null)

const selectedTile = ref<number | null>(null)

function selectTile(index: number) {
  selectedTile.value = index
}

const selectedTileWaypoints = computed<null | SystemWaypoint[]>(() => {
  if (!selectedTile.value || !systemData.value) return null
  return MapService.getSystemWaypointsForTileIndex(selectedTile.value, systemData.value.waypoints)
})

async function loadSystemWaypoints(systemSymbol: string) {
  const data = await SystemsService.getSystemData(systemSymbol)
  systemData.value = data
}
loadSystemWaypoints(props.shipNavigation.systemSymbol)
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
