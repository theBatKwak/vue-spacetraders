<template>
  <div class="text-primary flex items-center p-4">
    <p class="flex items-center mr-5">
      <ph-user-circle size="1.5em" weight="duotone" class="mr-2" />{{ props.agent.symbol }}
    </p>
    <p class="flex items-center mr-5">
      <ph-piggy-bank size="1.5em" weight="duotone" class="mr-2" />{{ props.agent.credits }}
    </p>
    <p class="flex items-center mr-5">
      <ph-buildings size="1.5em" weight="duotone" class="mr-2" />{{ props.agent.headquarters }}
    </p>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { PhUserCircle, PhPiggyBank, PhBuildings } from '@phosphor-icons/vue'
import type { Agent } from '@/models/agent.model'

const props = defineProps<{
  agent: Agent
}>()
</script>
