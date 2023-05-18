<template>
  <div class="h-4 w-4 rounded-full absolute" :class="bgClass" />
</template>

<script setup lang="ts">
import { SystemType } from '@/models/enums/systemType.enum'
import { computed } from 'vue'

const props = defineProps<{
  type: SystemType
}>()

const bgClass = computed<string>(() => {
  switch (props.type) {
    case SystemType.NEUTRON_STAR:
      return 'bg-purple-300/30 border border-purple-300'
    case SystemType.RED_STAR:
      return 'bg-red-600/30 border border-red-600'
    case SystemType.ORANGE_STAR:
      return 'bg-orange-400/30 border border-orange-400'
    case SystemType.BLUE_STAR:
      return 'bg-sky-400/30 border border-sky-400'
    case SystemType.YOUNG_STAR:
      return 'bg-cyan-300/30 border border-cyan-300'
    case SystemType.WHITE_DWARF:
      return 'bg-white/30 border border-white'
    case SystemType.BLACK_HOLE:
      return 'bg-neutral-900/90 border border-neutral-900'
    case SystemType.HYPERGIANT:
      return 'bg-yellow-300/30 border border-yellow-300'
    case SystemType.NEBULA:
      return 'bg-fuchsia-400/30 border border-fuchsia-400'
    case SystemType.UNSTABLE:
      return 'bg-pink-600/30 border border-pink-600'
    default:
      return 'bg-primary'
  }
})
</script>
