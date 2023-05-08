<template>
  <section class="flex flex-col items-center justify-center h-full">
    <h1
      class="font-extrabold text-transparent text-7xl my-4 bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-500"
    >
      Space Traders
    </h1>
    <div class="bg-black/30 p-4 backdrop-blur-md rounded-xl my-4 flex flex-col max-w-xl">
      <h3 class="mb-4 text-center">Welcome, {{ agentCallsign }}</h3>
      <p class="font-semibold my-1">
        Carreer start location: <span class="font-light">{{ agentHeadquarters }}</span>
      </p>
      <p class="font-semibold my-1">
        Start credits: <span class="font-light">${{ agentCredits }}</span>
      </p>
      <p class="font-semibold mt-1">Access key:</p>
      <p
        class="flex justify-between items-center bg-black/50 hover:bg-black/30 p-2 rounded hover:cursor-pointer"
        :class="copied ? 'text-green-500' : 'text-white'"
        @click="copy(agentToken)"
      >
        {{ agentToken }} <span><ph-clipboard size="1.5em" weight="duotone" /></span>
      </p>
      <p class="border border-red-500 text-red-500 rounded p-2 bg-black/20 mt-4">
        Your access key is unique and cannot be issued again. It has been stored in your browser's
        local storage, but <b><u>you should keep it anywhere secured</u></b> if you want to login
        from another platform.
      </p>
      <p class="my-6 italic text-center font-light">Farewell and godspeed, {{ agentCallsign }}</p>
      <router-link
        to="/"
        class="flex items-center justify-center text-white text-center bg-emerald-500 px-3 py-2 rounded mt-2 no-underline"
      >
        <ph-rocket size="2em" weight="duotone" class="mx-2" />Start carreer
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { PhRocket, PhClipboard } from '@phosphor-icons/vue'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue3-toastify'
import { useAuthStore } from '@/stores/auth.store'
const authStore = useAuthStore()
const agentCallsign = computed(() => authStore.agent?.symbol)
const agentHeadquarters = computed(() => authStore.agent?.headquarters)
const agentCredits = computed(() => authStore.agent?.credits)
const agentToken = computed(() => authStore.agentToken || 'lostToken')
const { copy, copied } = useClipboard()
watch(copied, (value) => {
  if (value) {
    toast.success('Copied to clipboard!')
  }
})
</script>
