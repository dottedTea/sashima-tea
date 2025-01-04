<script setup lang="ts">
/** ハンバーガーメニューが開いているか */
const isMenuOpen = ref<boolean>(false);
</script>

<template>
  <div class="max-w-container mx-5 flex flex-col h-screen relative">
    <GlobalHeader :is-menu-open="isMenuOpen" @toggleMenu="isMenuOpen = !isMenuOpen" />
    <main class="grow"><slot /></main>
    <aside class="fixed inset-0">
      <Transition name="slide" class="transition-transform translate-y-[20vh] duration-1000">
        <GlobalHamburgerMenu v-if="isMenuOpen" />
      </Transition>
    </aside>
  </div>
</template>

<style scoped>
/** ハンバーガーメニューが閉じた状態 */
.slide-enter-from,
.slide-leave-to {
  @apply translate-y-[200vw];
}

/** ハンバーガーメニューが開いた状態 */
.slide-enter-to,
.slide-leave-from {
  @apply translate-y-[20vh];
}
</style>
