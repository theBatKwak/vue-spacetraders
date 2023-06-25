<template>
  <div>
    <p>Actions</p>
    <pre>{{ tradeGood }}</pre>
    <pre>{{ shipCargo }}</pre>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <RangeSelector
        label="Quantity"
        @change="setSelectedQuantity"
        :min="0"
        :max="tradeGood.tradeVolume"
        :initial-value="0"
        :step="10"
      />
      <div class="flex items-center">
        <button
          class="flex items-center px-2 py-1 border border-primary mr-4 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!canBuy"
        >
          <PhArchiveBox weight="duotone" size="1.5rem" class="mr-1" />
          Buy
        </button>
        <button
          class="flex items-center px-2 py-1 border border-primary mr-4 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!canSell"
        >
          <PhExport weight="duotone" size="1.5rem" class="mr-1" />
          Sell
        </button>
        <LabeledText label="Total amount" :text="totalAmount + '$'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MarketTradeGood } from '@/models/MarketTradeGood.model'
import RangeSelector from '../Form/RangeSelector.vue'
//@ts-ignore
import { PhArchiveBox, PhExport } from '@phosphor-icons/vue'
import type { ShipCargo } from '@/models/shipCargo.model'
import { useAuthStore } from '@/stores/auth.store'
import { computed, ref } from 'vue'
import type { ShipCargoItem } from '@/models/shipCargoItem.model'
import LabeledText from '../UI/LabeledText.vue'

const props = defineProps<{
  tradeGood: MarketTradeGood
  shipSymbol: string
}>()

const authStore = useAuthStore()

const shipCargo = computed<ShipCargo | undefined>(() => authStore.getShipCargo(props.shipSymbol))

const agentMoney = computed<number>(() => authStore.agent?.credits || 0)

const selectedQuantity = ref<number>(0)

function setSelectedQuantity(quantity: number) {
  selectedQuantity.value = quantity
}

const totalAmount = computed<number>(() => selectedQuantity.value * props.tradeGood.purchasePrice)

const canBuy = computed<boolean>(() => {
  if (shipCargo.value) {
    return agentMoney.value > 0 && shipCargo.value.capacity > 0
  } else {
    return false
  }
})

const canSell = computed<boolean>(() => {
  if (shipCargo.value) {
    const storedItems = shipCargo.value.inventory.find(
      (cargoItem: ShipCargoItem) => cargoItem.symbol === props.tradeGood.symbol
    )
    return !!storedItems
  } else {
    return false
  }
})
</script>
