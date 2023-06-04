<template>
  <div>
    <p>Docking system</p>
    <div v-if="navStatus !== ShipNavStatus.IN_TRANSIT">
      <button
        v-if="navStatus === ShipNavStatus.DOCKED"
        @click="orbit"
        class="flex items-center border border-primary px-2 py-1 hover:bg-primary/10 transition-all"
      >
        <PhRocketLaunch weight="duotone" size="1.5rem" class="mr-2" />Go to orbit
      </button>
      <button
        v-else
        @click="dock"
        class="flex items-center border border-primary px-2 py-1 hover:bg-primary/10 transition-all"
      >
        <PhPlugsConnected weight="duotone" size="1.5rem" class="mr-2" />Dock ship
      </button>
    </div>
    <p v-else>You can't dock your ship while traveling.</p>
  </div>
</template>

<script setup lang="ts">
import { ShipNavStatus } from '@/models/enums/shipNavStatus.enum'
import { DockerService } from '@/services/docker.service'
//@ts-ignore
import { PhRocketLaunch, PhPlugsConnected } from '@phosphor-icons/vue'
import { ref } from 'vue'

const props = defineProps<{
  currentNavStatus: ShipNavStatus
  shipSymbol: string
}>()

const navStatus = ref<ShipNavStatus>(props.currentNavStatus)

async function dock() {
  await DockerService.dock(props.shipSymbol)
  navStatus.value = ShipNavStatus.DOCKED
}

async function orbit() {
  await DockerService.orbit(props.shipSymbol)
  navStatus.value = ShipNavStatus.IN_ORBIT
}
</script>
