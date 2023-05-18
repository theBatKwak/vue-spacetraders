<template>
  <div>
    <p>Flight mode</p>
    <InlineRadioSelector :choices="choices" :selected="props.flightMode" @changed="setFlightMode" />
  </div>
</template>

<script setup lang="ts">
import { ShipNavFlightMode } from '@/models/enums/shipNavFlightMode.enum'
import InlineRadioSelector from '../Form/InlineRadioSelector.vue'
import { ref } from 'vue'
const props = defineProps<{
  flightMode: ShipNavFlightMode
}>()
const choices = ref<{ id: string; label: string }[]>([
  {
    id: ShipNavFlightMode.CRUISE,
    label: ShipNavFlightMode.CRUISE
  },
  {
    id: ShipNavFlightMode.BURN,
    label: ShipNavFlightMode.BURN
  },
  {
    id: ShipNavFlightMode.DRIFT,
    label: ShipNavFlightMode.DRIFT
  },
  {
    id: ShipNavFlightMode.STEALTH,
    label: ShipNavFlightMode.STEALTH
  }
])

async function setFlightMode(mode: ShipNavFlightMode) {
  console.log('Set flight mode : ', mode)
}
</script>
