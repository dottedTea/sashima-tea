<script setup lang="ts">
type Props = {
  /** ハンバーガーメニューが開いているか */
  isMenuOpen: boolean;
};
const { isMenuOpen } = defineProps<Props>();

const emits = defineEmits<{
  (event: "toggleMenu"): void;
}>();
</script>

<template>
  <header class="h-24 z-header flex justify-between items-center sticky top-0 py-5">
    <h1 class="relative">
      <GlobalImage
        src="/images/logo.png"
        height="64px"
        alt="茶芝間ティー"
        fit="inside"
        preload
      />
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
