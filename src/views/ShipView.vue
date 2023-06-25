<template>
  <main v-if="ship" class="p-4">
    <h1 class="text-primary font-light my-4">{{ ship.symbol }}</h1>
    <div class="border border-primary p-4 bg-primary/10">
      <h2 class="text-primary font-light">Overview</h2>
    </div>
    <InlineRadioSelector
      :choices="subviewsChoices"
      @changed="selectSubview"
      class="text-primary text-lg mt-4 mx-auto"
    />
    <ShipNavigator
      v-if="selectedSubview === 'navigator'"
      :ship-navigation="ship.nav"
      :ship-symbol="ship.symbol"
      class="mt-4"
    />
    <MarketSummary
      v-if="selectedSubview === 'market'"
      :system-symbol="ship.nav.systemSymbol"
      :waypoint-symbol="ship.nav.waypointSymbol"
      :ship-symbol="ship.symbol"
      class="mt-4"
    />
  </main>
</template>
<script setup lang="ts">
import InlineRadioSelector from '@/components/Form/InlineRadioSelector.vue'
import MarketSummary from '@/components/Market/MarketSummary.vue'
import ShipNavigator from '@/components/Ship/ShipNavigator.vue'
import type { Ship } from '@/models/ship.model'
import { ShipsService } from '@/services/ships.service'
import { useAuthStore } from '@/stores/auth.store'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const ship = ref<Ship | null>(null)

const selectedSubview = ref<null | string>(null)

function selectSubview(viewId: string) {
  selectedSubview.value = viewId
}

const subviewsChoices = ref<{ id: string; label: string }[]>([
  {
    id: 'navigator',
    label: 'Navigator'
  },
  {
    id: 'cargo',
    label: 'Cargo'
  },
  {
    id: 'crew',
    label: 'Crew'
  },
  {
    id: 'mining',
    label: 'Mining'
  },
  {
    id: 'market',
    label: 'Market'
  },
  {
    id: 'shipyard',
    label: 'Shipyard'
  }
])

async function loadShip(): Promise<void> {
  if (!route.params.shipsymbol || !authStore.agentToken) {
    await router.push('/')
  }
  ship.value = await ShipsService.getShip(
    route.params.shipsymbol as string,
    authStore.agentToken as string
  )
}

loadShip()
</script>
