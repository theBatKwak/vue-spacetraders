<template>
  <div class="border border-primary bg-primary/10 text-primary">
    <p>Map</p>
    <p>{{ systemData }}</p>
    <p>{{ systemData?.waypoints.length }}</p>
    <div
      v-if="systemData"
      class="grid grid-cols-20 grid-rows-20 h-fit w-fit border border-primary/50 relative m-4"
    >
      <SystemMapCenter
        :type="systemData.type"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <SystemMapTile
        v-for="(i, index) in 400"
        :key="index"
        class="h-8 w-8 border-r border-b border-primary/20"
        :class="{ 'border-r-0': index % 20 === 19, 'border-b-0': index >= 390 }"
        :system-waypoints="getWaypointsForIndex(i)"
        :coordinates="i"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { System } from '@/models/system.model'
import type { SystemWaypoint } from '@/models/systemWaypoint.model'
import { SystemsService } from '@/services/systems.service'
import { ref } from 'vue'
import SystemMapTile from './SystemMapTile.vue'
import SystemMapCenter from './SystemMapCenter.vue'

const props = defineProps<{
  systemSymbol: string
}>()

const systemData = ref<System | null>(null)

async function loadSystemWaypoints(systemSymbol: string) {
  const data = await SystemsService.getSystemData(systemSymbol)
  systemData.value = data
}
loadSystemWaypoints(props.systemSymbol)

function getWaypointsForIndex(index: number): SystemWaypoint[] {
  if (!systemData.value) {
    throw new Error('Waypoints are not defined')
  }
  return systemData.value.waypoints.filter((waypoint: SystemWaypoint) => {
    return waypoint.tileIndex === index
  })
}
</script>
