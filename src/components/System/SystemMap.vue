<template>
  <div class="border border-primary bg-primary/10 text-primary">
    <p>Map</p>
    <p>{{ systemData }}</p>
    <p>{{ systemData?.waypoints.length }}</p>
    <div
      v-if="systemData"
      class="grid grid-cols-10 grid-rows-10 h-fit w-fit border border-primary/50 relative m-4"
    >
      <SystemMapCenter
        :type="systemData.type"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <SystemMapTile
        v-for="(i, index) in 100"
        :key="index"
        class="h-10 w-10 border-r border-b border-primary/20"
        :class="{ 'border-r-0': index % 10 === 9, 'border-b-0': index >= 90 }"
        :system-waypoints="getWaypointsForIndex(index)"
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
  const row = Math.floor(index / 10)
  const col = index - row * 10
  return systemData.value.waypoints.filter((waypoint: SystemWaypoint) => {
    const x = Math.floor((waypoint.x + 100) / 20)
    const y = Math.floor((waypoint.y + 100) / 20)
    return row === x && col === y
  })
}
</script>
