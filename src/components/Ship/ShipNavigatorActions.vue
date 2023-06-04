<template>
  <section class="flex flex-col p-4">
    <header class="flex items-center justify-between">
      <h3 class="text-primary font-light">Systems</h3>
      <PhXSquare weight="duotone" size="2rem" @click="emit('closeNavigatorActions')" />
    </header>
    <section class="mt-4">
      <SystemWaypointInfos
        v-for="waypoint in waypoints"
        @click="setAutoPilotDestinationSymbol(waypoint.symbol)"
        :key="waypoint.symbol"
        :waypoint="waypoint"
        :system-symbol="systemSymbol"
      >
        <Transition>
          <ShipAutoPilot
            v-if="autoPilotDestinationSymbol && autoPilotDestinationSymbol === waypoint.symbol"
            :destination-waypoint-symbol="autoPilotDestinationSymbol"
            :ship-symbol="shipSymbol"
            class="mt-4"
          />
        </Transition>
      </SystemWaypointInfos>
    </section>
  </section>
</template>

<script setup lang="ts">
import type { SystemWaypoint } from '@/models/systemWaypoint.model'
import SystemWaypointInfos from '../System/SystemWaypointInfos.vue'
//@ts-ignore
import { PhXSquare } from '@phosphor-icons/vue'
import { ref } from 'vue'
import ShipAutoPilot from './ShipAutoPilot.vue'

const emit = defineEmits(['closeNavigatorActions'])

const autoPilotDestinationSymbol = ref<string | null>(null)

function setAutoPilotDestinationSymbol(symbol: string) {
  autoPilotDestinationSymbol.value = symbol
}

defineProps<{
  waypoints: SystemWaypoint[]
  systemSymbol: string
  shipSymbol: string
}>()
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
