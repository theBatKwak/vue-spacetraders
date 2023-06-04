<template>
  <div class="flex">
    <button
      v-for="trait in traits"
      :key="trait.symbol"
      @click="selectTrait(trait)"
      class="border border-primary mr-1 p-1"
      :class="{ 'bg-primary/20': selectedTrait === trait }"
    >
      <TraitIcon :trait-symbol="trait.symbol" />
    </button>
  </div>
  <div v-if="selectedTrait">
    <p class="font-semibold">{{ selectedTrait.name }}</p>
    <p class="font-extralight">{{ selectedTrait.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { WaypointTrait } from '@/models/waypointTrait.model'
import TraitIcon from '../Icons/TraitIcon.vue'
import { ref } from 'vue'

const props = defineProps<{
  traits: WaypointTrait[]
}>()

const selectedTrait = ref<null | WaypointTrait>(null)

function selectTrait(trait: WaypointTrait) {
  selectedTrait.value = trait
}
</script>
