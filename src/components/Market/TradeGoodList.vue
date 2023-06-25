<template>
  <section class="p-4">
    <h3 class="text-primary font-bold">{{ title }}</h3>
    <div v-for="good in goods" :key="good.symbol">
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
