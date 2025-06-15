<script setup lang="ts">
const visibleRef = ref(false);
const indexRef = ref(0);

const imgs = [
  { src: "/images/setting.png", title: "三面図", creator: "デザイン/イラスト 乙原コウ様/Vグラ様/©︎LUZ\nVグラHP:https://www.vgra-luz.com/" },
  { src: "/images/cursor.gif", title: "カーソル", creator: "ハル様\nhttps://x.com/dotshellty" },
  { src: "/images/logo.png", title: "名前ロゴ", creator: "いとへんちゃん様\nhttps://x.com/itohen_boy" },
  { src: "/images/icon.png", title: "アイコン", creator: "いとへんちゃん様\nhttps://x.com/itohen_boy" },
  { src: "/images/standing.png", title: "素体図", creator: "デザイン/イラスト 乙原コウ様/Vグラ様/©︎LUZ\nVグラHP:https://www.vgra-luz.com/" },
];

const showImg = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);
</script>

<template>
  <main class="my-4 px-5 h-full overflow-y-scroll">
    <div class="grid grid-cols-3 gap-5">
      <div
        v-for="({ src, title, creator }, index) in imgs"
        :key="index"
        class="pic cursor-pointer relative bg-black/50"
        @click="() => showImg(index)"
      >
        <div class="absolute bg-white/80 inset-x-0 bottom-0 p-2 grid text-center">
          <p>{{ title }}</p>
          <p class="whitespace-pre-wrap text-sm mt-2">{{ creator }}</p>
        </div>
        <GlobalImage :src="src" class="aspect-square object-contain object-center" />
      </div>
    </div>
    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="imgs"
      :index="indexRef"
      loop
      @hide="onHide"
    />
  </main>
</template>
