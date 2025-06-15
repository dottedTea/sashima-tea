<script setup lang="ts">
import { EXTERNAL_URL, INTERNAL_URL } from "@/constants"

/** メニュー一覧 */
const HEADER_NAVIGATION = [
  {
    label: 'お前誰なん？',
    href: INTERNAL_URL.ABOUT,
  },
  {
    label: 'ギャラリー',
    href: INTERNAL_URL.GALLERY,
  },
  {
    label: 'お問い合わせ',
    href: EXTERNAL_URL.CONTACT,
  },
] as const;
</script>

<template>
  <GlobalTea>
    <div class="absolute inset-0 flex flex-col px-5 mx-auto">
      <nav class="pt-20 md:pt-40">
        <ul class="flex flex-col md:flex-row gap-x-10 gap-y-8 justify-center">
          <li v-for="{label, href} in HEADER_NAVIGATION" :key="label" class="h-full">
            <GlobalLink :href="href">
              {{ label }}
            </GlobalLink>
          </li>
        </ul>
      </nav>

      <div class="pt-10 flex justify-center gap-10">
        <GlobalLink :href="EXTERNAL_URL.X">
          <GlobalIcon name="original:x" color="x" class="w-10 h-10" />
        </GlobalLink>
        <GlobalLink :href="EXTERNAL_URL.YOUTUBE">
          <GlobalIcon name="original:youtube" color="youtube" class="w-10 h-10" />
        </GlobalLink>
        <GlobalLink :href="EXTERNAL_URL.TIKTOK">
          <GlobalIcon name="original:tiktok" color="tiktok" class="w-10 h-10" />
        </GlobalLink>
      </div>
    </div>
  </GlobalTea>
</template>
