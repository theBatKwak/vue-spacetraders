<template>
  <section class="p-4">
    <h3 class="text-primary font-light">{{ title }}</h3>
    <div v-for="good in goods" :key="good.symbol" class="my-4">
      <p class="font-semibold">{{ good.name }}</p>
      <p class="text-xs">{{ good.description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TradeGood } from '@/models/tradeGood.model'

defineProps<{
  title: string
  goods: TradeGood[]
}>()
</script>
