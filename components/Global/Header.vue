<script setup lang="ts">
import { INTERNAL_URL } from "@/constants";

type Props = {
  /** ハンバーガーメニューが開いているか */
  isMenuOpen: boolean;
};
const { isMenuOpen } = defineProps<Props>();

const emits = defineEmits<{
  (event: "toggleMenu"): void;
  (event: "closeMenu"): void;
}>();
</script>

<template>
  <header class="h-24 flex justify-between items-center">
    <h1 class="relative">
      <GlobalLink :href="INTERNAL_URL.TOP" @click="emits('closeMenu')">
        <GlobalImage
          src="/images/logo.png"
          height="64px"
          alt="茶芝間ティー"
          fit="inside"
          preload
        />
      </GlobalLink>
    </h1>

    <button class="relative" @click="emits('toggleMenu')">
      <GlobalImage
        src="/images/icon.png"
        height="64px"
        alt="メニュー"
        fit="inside"
        preload
      />
      <p
        class="absolute top-7 inset-x-0 transition-colors text-black duration-1000"
        :class="isMenuOpen && 'text-white'"
      >{{ isMenuOpen ? '閉じる' : 'メニュー' }}</p>
    </button>
  </header>
</template>
