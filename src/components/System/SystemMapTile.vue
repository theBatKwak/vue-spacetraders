<template>
  <div class="flex flex-wrap items-center justify-around hover:bg-primary/10 transition-all">
    <SystemMapWaypoint
      v-for="systemWaypoint in props.systemWaypoints"
      :key="systemWaypoint.symbol"
      :waypoint="systemWaypoint"
    />
  </div>
</template>

<script setup lang="ts">
import type { SystemWaypoint } from '@/models/systemWaypoint.model'
import SystemMapWaypoint from './SystemMapWaypoint.vue'

const props = defineProps<{
  systemWaypoints: SystemWaypoint[]
}>()
</script>
