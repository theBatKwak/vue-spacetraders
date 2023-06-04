<template>
  <div @click="showETA = !showETA">
    <p>Status</p>
    <p v-if="shipNav.status === ShipNavStatus.DOCKED" class="w-fit border border-primary px-2 py-1">
      Docked at {{ shipNav.waypointSymbol }}
    </p>
    <p
      v-if="shipNav.status === ShipNavStatus.IN_ORBIT"
      class="w-fit border border-primary px-2 py-1"
    >
      Orbiting {{ shipNav.waypointSymbol }}
    </p>
    <div
      v-if="shipNav.status === ShipNavStatus.IN_TRANSIT"
      class="w-fit border border-primary px-2 py-1"
    >
      <p>
        On the way to <span class="font-semibold">{{ shipNav.route.destination.symbol }}</span>
      </p>
      <p v-if="!showETA"><span class="font-semibold">Arrival:</span> {{ formattedArrivalDate }}</p>
      <p v-else><span class="font-semibold">ETA :</span> {{ tripETA }}</p>
      <div class="bg-white/20 w-64 h-1 rounded-full overflow-hidden my-2">
        <div class="bg-primary h-full" :style="{ width: tripPercentage + '%' }" />
      </div>
      <p>{{ tripPercentage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShipNavStatus } from '@/models/enums/shipNavStatus.enum'
import type { ShipNav } from '@/models/shipNav.model'
import { useDateFormat, useNow } from '@vueuse/core'
import { computed, ref } from 'vue'

const props = defineProps<{
  shipNav: ShipNav
}>()

const showETA = ref<boolean>(true)

const currentDate = useNow()

const tripPercentage = computed<number>(() => {
  if (props.shipNav.status === ShipNavStatus.IN_TRANSIT) {
    return (
      (currentDate.value.getTime() /
        (new Date(props.shipNav.route.arrival).getTime() - currentDate.value.getTime())) *
      100
    )
  } else {
    return 100
  }
})

const tripETA = computed<string | number>(() => {
  if (props.shipNav.status === ShipNavStatus.IN_TRANSIT) {
    return new Date(props.shipNav.route.arrival).getTime() - currentDate.value.getTime()
  } else {
    return 0
  }
})

const formattedArrivalDate = useDateFormat(props.shipNav.route.arrival, 'HH:mm:ss')
</script>
