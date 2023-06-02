<template>
  <div class="h-2 w-2 m-0.5 rounded-full" :class="waypointBg"></div>
</template>

<script setup lang="ts">
import type { SystemWaypoint } from '@/models/systemWaypoint.model'
import { SystemWaypointsService } from '@/services/systemWaypoints.service'
import { computed } from 'vue'

const props = defineProps<{
  waypoint: SystemWaypoint
}>()

const waypointBg = computed<string>(() => {
  return SystemWaypointsService.getWaypointBackgroundColor(props.waypoint.type)
})
</script>
