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
    <nav class="absolute">
      <ul class="flex items-center">
        <li v-for="{label, href} in HEADER_NAVIGATION" :key="label" class="h-full">
          <GlobalLink :href="href">
            {{ label }}
          </GlobalLink>
        </li>
      </ul>
    </nav>
  </GlobalTea>
</template>
