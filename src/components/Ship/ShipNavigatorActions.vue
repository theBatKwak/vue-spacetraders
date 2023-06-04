<template>
  <section class="flex flex-col p-4">
    <header class="flex items-center justify-between my-4">
      <p class="text-xl">Waypoints</p>
      <PhXSquare weight="duotone" size="2rem" @click="emit('closeNavigatorActions')" />
    </header>
    <SystemWaypointInfos
      v-for="waypoint in waypoints"
      :key="waypoint.symbol"
      :waypoint="waypoint"
      :system-symbol="systemSymbol"
    />
  </section>
</template>

<script setup lang="ts">
import type { SystemWaypoint } from '@/models/systemWaypoint.model'
import SystemWaypointInfos from '../System/SystemWaypointInfos.vue'
//@ts-ignore
import { PhXSquare } from '@phosphor-icons/vue'

const emit = defineEmits(['closeNavigatorActions'])

defineProps<{
  waypoints: SystemWaypoint[]
  systemSymbol: string
}>()
</script>
