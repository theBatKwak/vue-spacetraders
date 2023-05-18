<template>
  <header v-if="!isLoggedIn">
    <p class="">Header</p>
  </header>
  <header v-else class="border border-primary bg-primary/10 backdrop-blur-md">
    <AgentSummary v-if="agent" :agent="agent" />
  </header>
</template>

<script setup lang="ts">
import type { Agent } from '@/models/agent.model'
import { useAuthStore } from '@/stores/auth.store'
import { computed } from 'vue'
import AgentSummary from '../Agent/AgentSummary.vue'

const authStore = useAuthStore()
const isLoggedIn = computed<boolean>(() => authStore.isLoggedIn)
const agent = computed<Agent | null>(() => authStore.agent)
</script>
