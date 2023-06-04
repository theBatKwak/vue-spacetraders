<template>
  <div class="my-2">
    <p class="uppercase text-xs font-bold">{{ label }}</p>
    <p class="font-extralight">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  text: string
}>()
</script>
