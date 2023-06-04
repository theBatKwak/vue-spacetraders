<template>
  <section class="border border-primary bg-primary/10 text-primary grid grid-cols-[auto_1fr]">
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
        @close-navigator-actions="selectedTile = null"
        class="w-full max-w-md"
      />
    </Transition>
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

const props = defineProps<{
  shipNavigation: ShipNav
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
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
