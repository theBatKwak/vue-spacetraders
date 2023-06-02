<template>
  <div class="h-2 w-2 m-0.5 rounded-full" :class="waypointBg"></div>
</template>

<script setup lang="ts">
import { WaypointType } from '@/models/enums/waypointType.enum'
import type { SystemWaypoint } from '@/models/systemWaypoint.model'
import { computed } from 'vue'

const props = defineProps<{
  waypoint: SystemWaypoint
}>()

const waypointBg = computed<string>(() => {
  switch (props.waypoint.type) {
    case WaypointType.PLANET:
      return 'bg-lime-600'
    case WaypointType.GAS_GIANT:
      return 'bg-violet-700'
    case WaypointType.MOON:
      return 'bg-slate-500'
    case WaypointType.ORBITAL_STATION:
      return 'bg-cyan-600'
    case WaypointType.JUMP_GATE:
      return 'bg-amber-700'
    case WaypointType.ASTEROID_FIELD:
      return 'bg-amber-900'
    case WaypointType.NEBULA:
      return 'bg-fuchsia-700'
    case WaypointType.DEBRIS_FIELD:
      return 'bg-yellow-500'
    case WaypointType.GRAVITY_WELL:
      return 'bg-rose-700'
    default:
      return 'bg-primary'
  }
})
</script>
