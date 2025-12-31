<script setup lang="ts">
import { images } from "@/constants/gallery";
import { enableScroll, disableScroll } from "@/utils";

const isModalVisible = ref(false);
const currentIndex = ref(0);

const openModal = (index: number) => {
  disableScroll();
  currentIndex.value = index;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
  enableScroll();
};
</script>

<template>
  <main class="pb-8 px-5 max-w-container">
    <h2 class="text-xl mb-4 text-center">ギャラリー</h2>

    <div class="grid md:grid-cols-3 gap-5">
      <div
        v-for="({ src, title }, index) in images"
        :key="index"
        class="pic cursor-pointer relative bg-black/50"
        @click="openModal(index)"
      >
        <div class="absolute bg-white/80 inset-x-0 bottom-0 p-2 grid text-center">
          <p class="whitespace-pre-wrap text-sm mt-2">{{ title }}</p>
        </div>
        <GlobalImage :src="src" class="aspect-square object-contain object-center" />
      </div>
    </div>
    <VueEasyLightbox
      :visible="isModalVisible"
      :imgs="images"
      :index="currentIndex"
      loop
      @hide="closeModal"
    />
  </main>
</template>
