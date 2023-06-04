<template>
  <div class="flex flex-wrap w-full">
    <p class="uppercase text-xs font-bold w-full">Auto pilot</p>
    <button @click="navigate" class="flex items-center px-2 py-1 border border-primary mr-4">
      <PhPath weight="duotone" size="1.5rem" class="mr-2" /> Navigate
    </button>
    <button class="flex items-center px-2 py-1 border border-primary mr-4">
      <PhSpiral weight="duotone" size="1.5rem" class="mr-2" />Jump
    </button>
  </div>
</template>

<script setup lang="ts">
import { ShipNavigationService } from '@/services/shipNavigation.service'

//@ts-ignore
import { PhPath, PhSpiral } from '@phosphor-icons/vue'

const props = defineProps<{
  destinationWaypointSymbol: string
  shipSymbol: string
}>()

async function navigate() {
  await ShipNavigationService.navigate(props.shipSymbol, props.destinationWaypointSymbol)
}
</script>
