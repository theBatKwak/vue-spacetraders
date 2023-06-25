<template>
  <section class="p-4">
    <h3 class="text-primary font-light">{{ title }}</h3>
    <div v-for="good in goods" :key="good.symbol" class="border border-primary my-4 p-4">
      <MarketTradeGoodComponent :trade-good="good" :ship-symbol="shipSymbol" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { MarketTradeGood } from '@/models/MarketTradeGood.model'
import MarketTradeGoodComponent from './MarketTradeGood.vue'

defineProps<{
  title: string
  goods: MarketTradeGood[]
  shipSymbol: string
}>()
</script>
