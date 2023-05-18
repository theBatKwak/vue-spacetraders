<template>
  <div class="border border-primary text-primary bg-primary/10 backdrop-blur-md p-4">
    <header class="p-2 text-2xl mb-4">
      <p class="flex items-center mr-5">
        <ph-rocket size="1.5em" weight="duotone" class="mr-2" />{{ props.ship.symbol }}
      </p>
    </header>
    <div class="flex"><ShipRegistrationSummary :registration="props.ship.registration" /></div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { PhRocket } from '@phosphor-icons/vue'
import type { Ship } from '@/models/ship.model'
import ShipRegistrationSummary from './ShipRegistrationSummary.vue'

const props = defineProps<{
  ship: Ship
}>()
</script>
