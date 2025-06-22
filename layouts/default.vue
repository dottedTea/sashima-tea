<script setup lang="ts">
/** ハンバーガーメニューが開いているか */
const isMenuOpen = ref<boolean>(false);
</script>

<template>
  <div class="flex flex-col relative">
    <GlobalHeader
      :is-menu-open="isMenuOpen"
      @toggleMenu="isMenuOpen = !isMenuOpen"
      @closeMenu="isMenuOpen = false"
      class="mx-5 py-4 z-header sticky top-0"
    />
    <slot class="grow mx-5" />

    <Transition name="fade" class="absolute inset-0 z-panel">
      <div
        v-if="isMenuOpen"
        class="transition-colors bg-black/50 duration-1000"
        @click.self="isMenuOpen = false"
      />
    </Transition>
    <Transition name="slide" class="absolute z-menu transition-[top] top-[20vh] duration-1000">
      <GlobalHamburgerMenu v-if="isMenuOpen" @closeMenu="isMenuOpen = false" />
    </Transition>
  </div>
</template>

<style scoped>
/** ハンバーガーメニューが閉じた状態 */
.fade-enter-from,
.fade-leave-to {
  @apply bg-black/0;
}

/** ハンバーガーメニューが開いた状態 */
.fade-enter-to,
.fade-leave-from {
  @apply bg-black/50;
}

/** ハンバーガーメニューが閉じた状態 */
.slide-enter-from,
.slide-leave-to {
  @apply top-[100vh];
}

/** ハンバーガーメニューが開いた状態 */
.slide-enter-to,
.slide-leave-from {
  @apply top-[20vh];
}
</style>
