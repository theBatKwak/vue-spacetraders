<template>
  <div>
    <p class="uppercase text-xs font-bold">{{ label }}</p>
    <div class="flex items-center">
      <input
        type="number"
        v-model="value"
        class="bg-transparent border border-primary text-center font-light w-20 mr-4 px-2 py-1"
      />
      <div class="flex flex-wrap justify-between w-full">
        <input
          type="range"
          class="w-full bg-primary"
          v-model="value"
          :min="min"
          :max="max"
          :step="step"
        />
        <p>{{ min }}</p>
        <p>{{ max }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const emit = defineEmits(['change'])

const props = defineProps<{
  label: string
  min: number
  max: number
  initialValue: number
  step: number
}>()

const value = ref<number>(props.initialValue)

watch(value, (newValue: number) => emit('change', newValue))
</script>
