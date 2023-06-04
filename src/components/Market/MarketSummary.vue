<template>
  <section v-if="market" class="border border-primary bg-primary/10 text-primary">
    <h2 class="text-center text-primary font-light my-4">Market {{ market.symbol }}</h2>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <TradeGoodList title="Imports" :goods="market.imports" />
        <TradeGoodList title="Exports" :goods="market.exports" />
      </div>
      <div>
        <MarketTradeGoodList title="Buy / Sell" :goods="market.tradeGoods" />
      </div>
    </div>
    <div>
      <MarketTransactionsHistory :transactions="market.transactions" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Market } from '@/models/market.model'
import { MarketService } from '@/services/market.service'
import { ref } from 'vue'
import TradeGoodList from './TradeGoodList.vue'
import MarketTradeGoodList from './MarketTradeGoodList.vue'
import MarketTransactionsHistory from './MarketTransactionsHistory.vue'

const props = defineProps<{
  systemSymbol: string
  waypointSymbol: string
}>()

const market = ref<Market | null>(null)

async function getMarket() {
  market.value = await MarketService.getMarket(props.systemSymbol, props.waypointSymbol)
}

getMarket()
</script>
