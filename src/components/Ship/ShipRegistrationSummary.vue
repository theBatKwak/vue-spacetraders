<template>
  <div class="border border-primary">
    <p class="flex border-b border-primary p-2 bg-primary/10">
      <ph-identification-card size="1.5em" weight="duotone" class="mr-2" />Ship registration
    </p>
    <div class="px-2 mb-2 mt-2">
      <p class="uppercase text-xs font-bold">Name</p>
      <p class="font-extralight">{{ props.registration.name }}</p>
    </div>
    <div class="px-2 mb-2">
      <p class="uppercase text-xs font-bold">Role</p>
      <p class="font-extralight">{{ props.registration.role }}</p>
    </div>
    <div class="px-2 mb-2">
      <p class="uppercase text-xs font-bold">Faction</p>
      <p class="font-extralight">{{ props.registration.factionSymbol }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { PhIdentificationCard } from '@phosphor-icons/vue'
import type { ShipRegistration } from '@/models/shipRegistration.model'

const props = defineProps<{
  registration: ShipRegistration
}>()
</script>
