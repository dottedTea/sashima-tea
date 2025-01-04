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
  <header class="h-16 z-header flex justify-between items-center sticky top-0 my-5">
    <GlobalImage
      src="/images/logo.png"
      height="64px"
      alt="茶芝間ティー"
      fit="inside"
      preload
    />

    <button @click="emits('toggleMenu')">
      <GlobalIcon :name="isMenuOpen ? 'original:close' : 'original:menu'" color="brown" class="w-10 h-10" />
    </button>
  </header>
</template>
