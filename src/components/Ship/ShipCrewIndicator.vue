<template>
  <div class="flex items-center h-fit my-2">
    <ph-users-three size="1.5em" weight="duotone" class="mr-2" />
    <div>
      <p class="text-xs font-light">{{ crew.current }} / {{ crew.capacity }}</p>
      <div class="bg-white/20 w-40 h-1 rounded-full overflow-hidden">
        <div class="bg-primary h-full" :style="{ width: crewPercentage + '%' }" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { PhUsersThree } from '@phosphor-icons/vue'
import { computed } from 'vue'
import type { ShipCrew } from '@/models/shipCrew.model'

const props = defineProps<{
  crew: ShipCrew
}>()

const crewPercentage = computed<number>(() => {
  return (props.crew.current / props.crew.capacity) * 100
})
</script>
