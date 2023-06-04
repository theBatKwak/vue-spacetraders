<template>
  <section v-if="waypointData" class="flex flex-wrap border border-primary p-4 mb-4">
    <header class="flex items-center w-full">
      <div class="block h-6 w-6 rounded-full mr-2" :class="systemColor" />
      <p class="text-xl">{{ waypoint.symbol }}</p>
    </header>
    <div class="w-full flex mt-2">
      <div class="mr-4">
        <p class="uppercase text-xs font-bold">Type</p>
        <p class="font-extralight">{{ waypoint.type }}</p>
      </div>
      <div class="mr-4">
        <p class="uppercase text-xs font-bold">Faction</p>
        <p class="font-extralight">{{ waypointData.faction.symbol }}</p>
      </div>
    </div>
    <div class="w-full flex flex-wrap items-center">
      <SystemWaypointTraitsList :traits="waypointData.traits" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SystemWaypoint } from '@/models/systemWaypoint.model'
import type { Waypoint } from '@/models/waypoint.model'
import { SystemWaypointsService } from '@/services/systemWaypoints.service'
import { computed, ref } from 'vue'
import SystemWaypointTraitsList from './SystemWaypointTraitsList.vue'

const props = defineProps<{
  systemSymbol: string
  waypoint: SystemWaypoint
}>()

const waypointData = ref<null | Waypoint>(null)

const systemColor = computed<string>(() =>
  SystemWaypointsService.getWaypointBackgroundColor(props.waypoint.type)
)

async function getSystemWaypointData() {
  waypointData.value = await SystemWaypointsService.getSystemWaypointData(
    props.systemSymbol,
    props.waypoint.symbol
  )
}

getSystemWaypointData()
</script>
