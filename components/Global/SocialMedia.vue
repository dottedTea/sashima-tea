<script setup lang="ts">
import { EXTERNAL_URL } from "@/constants";
</script>

<template>
  <div class="grid grid-cols-[auto_auto_auto] justify-center gap-16 md:gap-20">
    <GlobalLink :href="EXTERNAL_URL.X">
      <GlobalIcon name="original:x" color="x" class="transition-transform w-10 h-10 hover:scale-110" />
    </GlobalLink>
    <GlobalLink :href="EXTERNAL_URL.YOUTUBE">
      <GlobalIcon name="original:youtube" color="youtube" class="transition-transform w-10 h-10 hover:scale-110" />
    </GlobalLink>
    <GlobalLink :href="EXTERNAL_URL.TIKTOK">
      <GlobalIcon name="original:tiktok" color="tiktok" class="transition-transform w-10 h-10 hover:scale-110" />
    </GlobalLink>
  </div>
</template>
