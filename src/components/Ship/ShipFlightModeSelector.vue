<template>
  <div>
    <p>Flight mode</p>
    <InlineRadioSelector :choices="choices" :selected="flightMode" @changed="setFlightMode" />
  </div>
</template>

<script setup lang="ts">
import { ShipNavFlightMode } from '@/models/enums/shipNavFlightMode.enum'
import InlineRadioSelector from '../Form/InlineRadioSelector.vue'
import { ref } from 'vue'
import { FlightModeService } from '@/services/flightMode.service'
const props = defineProps<{
  currentFlightMode: ShipNavFlightMode
  shipSymbol: string
}>()

const flightMode = ref<ShipNavFlightMode>(props.currentFlightMode)

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
  await FlightModeService.setFlightMode(props.shipSymbol, mode)
  flightMode.value = mode
}
</script>
