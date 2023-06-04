<template>
  <div class="flex items-center h-fit my-2">
    <ph-gas-can size="1.5em" weight="duotone" class="mr-2" />
    <div>
      <p class="text-xs font-light">{{ fuel.current }} / {{ fuel.capacity }}</p>
      <div class="bg-white/20 w-40 h-1 rounded-full overflow-hidden">
        <div class="bg-primary h-full" :style="{ width: fuelPercentage + '%' }" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { PhGasCan } from '@phosphor-icons/vue'
import type { ShipFuel } from '@/models/shipFuel.model'
import { computed } from 'vue'

const props = defineProps<{
  fuel: ShipFuel
}>()

const fuelPercentage = computed<number>(() => {
  return (props.fuel.current / props.fuel.capacity) * 100
})
</script>
