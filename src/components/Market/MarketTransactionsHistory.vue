<template>
  <section>
    <p>Transactions</p>
    <div v-for="transaction in transactions" :key="transaction.timestamp">
      <p>{{ transaction }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { MarketTransaction } from '@/models/marketTransaction.model'

const props = defineProps<{
  transactions: MarketTransaction[]
}>()
</script>
