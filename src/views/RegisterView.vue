<template>
  <section class="flex flex-col items-center justify-center h-full">
    <h1
      class="font-extrabold text-transparent text-7xl my-4 bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400"
    >
      Space Traders
    </h1>
    <form
      @submit.prevent="register"
      class="bg-black/30 p-4 backdrop-blur-md rounded-xl my-4 flex flex-col"
    >
      <h3 class="mb-4 text-center">Create a new agent</h3>
      <div class="flex flex-col mb-4">
        <label for="callsign" class="uppercase text-sm ml-1">Agent Callsign</label>
        <input
          type="text"
          id="callsign"
          v-model="agentCallsign"
          class="px-3 py-2 bg-black/30 rounded focus:ring-emerald-500 focus:border-emerald-500 border-gray-700"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label for="faction" class="uppercase text-sm ml-1">Faction</label>
        <select
          name=""
          id="faction"
          v-model="faction"
          class="px-3 py-2 bg-black/30 rounded focus:ring-emerald-500 focus:border-emerald-500 border-gray-700"
        >
          <option value="COSMIC">Cosmic</option>
          <option value="VOID">Void</option>
          <option value="GALACTIC">Galactic</option>
          <option value="QUANTUM">Quantum</option>
          <option value="DOMINION">Dominion</option>
        </select>
      </div>
      <button type="submit" class="bg-emerald-500 px-3 py-2 rounded mt-2">Register</button>
    </form>
    <p>
      Already have an agent?
      <a href="/login">Login</a>
    </p>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store'
import { ref } from 'vue'
const authStore = useAuthStore()
const agentCallsign = ref<string>('')
const faction = ref<'COSMIC' | 'VOID' | 'GALACTIC' | 'QUANTUM' | 'DOMINION'>('COSMIC')
async function register(): Promise<void> {
  await authStore.registerAgent(faction.value, agentCallsign.value)
}
</script>
