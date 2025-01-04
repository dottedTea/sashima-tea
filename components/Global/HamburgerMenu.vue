<script setup lang="ts">
/** メニュー一覧 */
const HEADER_NAVIGATION = [
  {
    label: 'お前誰なん？',
    id: 'about',
  },
  {
    label: 'アーカイブ',
    id: 'archive',
  },
  {
    label: 'お問い合わせ',
    id: 'contact',
  },
] as const;

/** IDの要素へスクロールする */
const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <GlobalTea>
    <nav class="h-full">
      <ul class="h-full flex items-center">
        <li v-for="{label, id} in HEADER_NAVIGATION" :key="label" class="h-full">
          <button
            class="h-full hover:text-green text-lg transition-colors px-5"
            @click="scrollToId(id)"
          >{{ label }}</button>
        </li>
      </ul>
    </nav>
  </GlobalTea>
</template>
