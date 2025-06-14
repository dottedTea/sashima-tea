<script setup lang="ts">
/** ハンバーガーメニューが開いているか */
const isMenuOpen = ref<boolean>(false);
</script>

<template>
  <div class="max-w-container mx-5 flex flex-col h-screen relative">
    <GlobalHeader :is-menu-open="isMenuOpen" @toggleMenu="isMenuOpen = !isMenuOpen" />
    <slot class="grow" />

    <Transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 transition-colors bg-black/50 duration-1000"
        @click.self="isMenuOpen = false"
      />
    </Transition>
    <Transition name="slide" class="absolute z-menu transition-[top] top-[-75vh] duration-1000">
      <GlobalHamburgerMenu v-if="isMenuOpen" />
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
  @apply top-[-75vh];
}
</style>
