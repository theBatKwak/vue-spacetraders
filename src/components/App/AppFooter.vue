<template>
  <footer class="text-center font-light p-2">
    <p class="flex items-center w-full justify-center">
      Vue Space Traders • Made with
      <ph-heart size="1.2em" weight="duotone" class="mx-1 text-pink-500" /> by
      <a href="https://github.com/theBatKwak" target="_blank" class="mx-1">BatKwak</a>
      •
      <a
        href="https://github.com/theBatKwak/vue-spacetraders"
        target="_blank"
        class="ml-1 flex items-center border-indigo-500 border rounded-full p-1"
        ><ph-github-logo size="1.2em" weight="duotone" class="text-indigo-500"
      /></a>
    </p>
  </footer>
</template>

<script setup lang="ts">
// @ts-ignore
import { PhHeart, PhGithubLogo } from '@phosphor-icons/vue'
</script>
