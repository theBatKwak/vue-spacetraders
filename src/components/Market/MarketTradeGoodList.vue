<template>
  <section class="p-4">
    <h3 class="text-primary font-light">{{ title }}</h3>
    <div v-for="good in goods" :key="good.symbol" class="border border-primary my-4 p-4">
      <p class="font-semibold">{{ good.symbol }}</p>
      <div class="grid grid-cols-4 justify-between">
        <LabeledText label="Supply" :text="good.supply" class="mr-4" />
        <LabeledText label="Volume" :text="good.tradeVolume.toString()" class="mr-4" />
        <LabeledText label="Sell price" :text="good.sellPrice.toString()" class="mr-4" />
        <LabeledText label="Purchase price" :text="good.purchasePrice.toString()" class="mr-4" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { MarketTradeGood } from '@/models/MarketTradeGood.model'
import LabeledText from '../UI/LabeledText.vue'

defineProps<{
  title: string
  goods: MarketTradeGood[]
}>()
</script>
