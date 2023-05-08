<template>
  <section class="flex flex-col items-center justify-center h-full">
    <h1
      class="font-extrabold text-transparent text-7xl my-4 bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 shadow"
    >
      Space Traders
    </h1>
    <form
      @submit.prevent="login"
      class="bg-black/30 p-4 backdrop-blur-md rounded-xl my-4 flex flex-col"
    >
      <h3 class="mb-4 text-center">Login</h3>
      <div class="flex flex-col mb-4">
        <label for="callsign" class="uppercase text-sm ml-1">Agent Access Key</label>
        <input
          type="text"
          id="callsign"
          v-model="agentAccessKey"
          class="px-3 py-2 bg-black/30 rounded focus:ring-emerald-500 focus:border-emerald-500 border-gray-700"
        />
      </div>
      <button type="submit" class="bg-emerald-500 px-3 py-2 rounded mt-2">Login</button>
    </form>
    <p>
      Don't have an agent?
      <a href="/register">Register</a>
    </p>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store'
import { ref } from 'vue'
const agentAccessKey = ref<string>('')

const authStore = useAuthStore()

async function login(): Promise<void> {
  await authStore.loginAgent(agentAccessKey.value)
}
</script>
