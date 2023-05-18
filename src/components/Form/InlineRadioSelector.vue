<template>
  <div class="border border-primary flex">
    <div
      v-for="choice in choices"
      :key="choice.id"
      class="py-1 px-2 border-r border-primary last:border-none"
      :class="{ 'bg-primary/20': choice.id === selectedButton }"
    >
      <input
        type="radio"
        :id="choice.id"
        :value="choice.id"
        v-model="selectedButton"
        class="hidden"
      />
      <label :for="choice.id">{{ choice.label }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const emit = defineEmits(['changed'])

const props = defineProps<{
  choices: { id: string; label: string }[]
  selected: string
}>()
const selectedButton = ref<string>(props.selected)

watch(selectedButton, (newValue: string) => selectItem(newValue))

function selectItem(choiceId: string): void {
  emit('changed', choiceId)
}
</script>
