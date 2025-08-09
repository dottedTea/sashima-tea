<script setup lang="ts">
import { enableScroll, disableScroll } from "@/utils";
import { EXTERNAL_URL, INTERNAL_URL } from "@/constants";

/** メニュー一覧 */
const HEADER_NAVIGATION = [
  {
    label: "動画や実績など",
    href: INTERNAL_URL.ABOUT,
  },
  {
    label: "イバモン企画",
    href: INTERNAL_URL.IBAMON,
  },
  {
    label: "ギャラリー",
    href: INTERNAL_URL.GALLERY,
  },
  {
    label: "お問い合わせ",
    href: EXTERNAL_URL.CONTACT,
  },
] as const;

const emits = defineEmits<(event: "closeMenu") => void>();

onMounted(() => disableScroll());

onUnmounted(() => enableScroll());
</script>

<template>
  <div class="w-full grid grid-rows-[auto_1fr] h-full">
    <div class="bg-[url('/images/wave.svg')] bg-cover w-full h-20" />

    <div class="bg-green h-full">
      <nav class="pt-10 md:pt-20">
        <ul class="grid mx-auto md:grid-cols-[auto_auto_auto_auto] gap-x-10 gap-y-8 justify-center">
          <li v-for="{label, href} in HEADER_NAVIGATION" :key="label" class="text-center">
            <GlobalLink :href="href" @click="emits('closeMenu')">
              {{ label }}
            </GlobalLink>
          </li>
        </ul>
      </nav>

      <GlobalSocialMedia class="pt-10 mx-auto" />
    </div>
  </div>
</template>
