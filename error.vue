<script setup lang="ts">
import { INTERNAL_URL } from "@/constants";

/** ハンバーガーメニューが開いているか */
const isMenuOpen = ref<boolean>(false);

type Props = {
  error?: {
    statusCode: number;
  };
};
const { error } = defineProps<Props>();
</script>

<template>
  <div class="bg-[url('/images/background.png')] bg-cover">
    <div class="flex flex-col h-screen relative">
      <GlobalHeader
        :is-menu-open="isMenuOpen"
        @toggleMenu="isMenuOpen = !isMenuOpen"
        class="mx-5 py-4 relative z-header"
      />
      <main class="grow p-5 max-w-container">
        <p>{{ error?.statusCode === 404 ? 'お探しのページはございません。' : 'エラーが発生しました。' }}</p>
        <p class="pt-5"><GlobalLink :href="INTERNAL_URL.TOP">TOPに戻る</GlobalLink></p>
      </main>

      <Transition name="fade" class="absolute inset-0 z-panel">
        <div
          v-if="isMenuOpen"
          class="transition-colors bg-black/50 duration-1000"
          @click.self="isMenuOpen = false"
        />
      </Transition>
      <Transition name="slide" class="absolute z-menu transition-[top] top-[-80vh] duration-1000">
        <GlobalHamburgerMenu v-if="isMenuOpen" />
      </Transition>
    </div>
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
  @apply top-[-80vh];
}
</style>
