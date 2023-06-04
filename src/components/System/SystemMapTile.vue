<template>
  <div
    class="flex flex-wrap items-center justify-around hover:bg-primary/10 transition-all relative"
    :class="{ 'ring-1 ring-primary': isShipDestination }"
    @mouseenter="displayCurrentStopTooltip = true"
    @mouseleave="displayCurrentStopTooltip = false"
  >
    <Transition>
      <p
        v-if="displayCurrentStopTooltip && isShipCurrentStop"
        class="flex absolute text-xs left-full ml-2 backdrop-blur-md bg-black/25 border border-primary p-1 w-max"
      >
        Ship location
      </p>
    </Transition>
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
import { computed, ref } from 'vue'

const props = defineProps<{
  systemWaypoints: SystemWaypoint[]
  coordinates: number
  isShipDestination: boolean
  isShipDeparture: boolean
}>()

const isShipCurrentStop = computed<boolean>(() => {
  return props.isShipDeparture && props.isShipDestination
})

const displayCurrentStopTooltip = ref<boolean>(false)
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
