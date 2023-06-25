<template>
  <div>
    <p class="font-semibold">{{ tradeGood.symbol }}</p>
    <div class="grid grid-cols-4 justify-between">
      <LabeledText label="Supply" :text="tradeGood.supply" class="mr-4" />
      <LabeledText label="Volume" :text="tradeGood.tradeVolume.toString()" class="mr-4" />
      <LabeledText label="Sell price" :text="tradeGood.sellPrice.toString()" class="mr-4" />
      <LabeledText label="Purchase price" :text="tradeGood.purchasePrice.toString()" class="mr-4" />
    </div>
    <MarketTradeGoodActions :trade-good="tradeGood" :ship-symbol="shipSymbol" />
  </div>
</template>

<script setup lang="ts">
import type { MarketTradeGood } from '@/models/MarketTradeGood.model'
import LabeledText from '../UI/LabeledText.vue'
import MarketTradeGoodActions from './MarketTradeGoodActions.vue'

defineProps<{
  tradeGood: MarketTradeGood
  shipSymbol: string
}>()
</script>
