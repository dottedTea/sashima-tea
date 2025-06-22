<script setup lang="ts">
import { enableScroll, disableScroll } from "@/utils";

const isModalVisible = ref(false);
const currentIndex = ref(0);

const imgs = [
  { src: "/images/setting.png", title: "三面図\nデザイン/イラスト 乙原コウ様/Vグラ様/©︎LUZ\nVグラHP:https://www.vgra-luz.com/" },
  { src: "/images/cursor.gif", title: "カーソル\nハル様\nhttps://x.com/dotshellty" },
  { src: "/images/logo.png", title: "名前ロゴ\nいとへんちゃん様\nhttps://x.com/itohen_boy" },
  { src: "/images/icon.png", title: "アイコン\nいとへんちゃん様\nhttps://x.com/itohen_boy" },
  { src: "/images/standing.png", title: "素体図\nデザイン/イラスト 乙原コウ様/Vグラ様/©︎LUZ\nVグラHP:https://www.vgra-luz.com/" },
];

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
        v-for="({ src, title }, index) in imgs"
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
      :imgs="imgs"
      :index="currentIndex"
      loop
      @hide="closeModal"
    />
  </main>
</template>
