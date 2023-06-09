<template>
  <section class="p-4">
    <header class="">
      <h3 class="text-primary font-light">System map</h3>
    </header>
    <div
      v-if="systemData"
      class="mt-4 grid grid-cols-20 grid-rows-20 h-fit w-fit border border-primary/50 relative"
    >
      <SystemMapCenter
        :type="systemData.type"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <SystemMapTile
        v-for="(i, index) in 400"
        @click="selectTile(i)"
        :key="index"
        class="h-8 w-8 border-r border-b border-primary/20"
        :class="{ 'border-r-0': index % 20 === 19, 'border-b-0': index >= 390 }"
        :system-waypoints="getWaypointsForIndex(i)"
        :coordinates="i"
        :is-ship-departure="shipRouteDepartureTile === i"
        :is-ship-destination="shipRouteDestinationTile === i"
        :is-tile-selected="selectedTile === i"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { System } from '@/models/system.model'
import type { SystemWaypoint } from '@/models/systemWaypoint.model'
import { computed, ref } from 'vue'
import SystemMapTile from './SystemMapTile.vue'
import SystemMapCenter from './SystemMapCenter.vue'
import type { ShipNavRoute } from '@/models/shipNavRoute.model'
import { MapService } from '@/services/map.service'

const emit = defineEmits(['selectTile'])

const props = defineProps<{
  shipRoute: ShipNavRoute
  systemData: System
}>()

function getWaypointsForIndex(index: number): SystemWaypoint[] {
  if (!props.systemData) {
    throw new Error('Waypoints are not defined')
  }
  return MapService.getSystemWaypointsForTileIndex(index, props.systemData.waypoints)
}

const selectedTile = ref<null | number>(null)

function selectTile(index: number) {
  selectedTile.value = index
  emit('selectTile', index)
}

const shipRouteDepartureTile = computed<number>(() => {
  return MapService.getTileIndexFromCoordinates(
    props.shipRoute.departure.x,
    props.shipRoute.departure.y
  )
})
const shipRouteDestinationTile = computed<number>(() => {
  return MapService.getTileIndexFromCoordinates(
    props.shipRoute.destination.x,
    props.shipRoute.destination.y
  )
})
</script>
