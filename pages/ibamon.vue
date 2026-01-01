<script setup lang="ts">
import {
  OTODAMAS_MAIN,
  OTODAMAS_SUB,
  ZA_MAIN,
  ZA_SUB,
  EXTERNAL_URL,
} from "@/constants";

const modalTarget = ref();

const openModal = (clickedNickname: string) => {
  const target = [
    ...OTODAMAS_MAIN,
    ...OTODAMAS_SUB,
    ...ZA_MAIN,
    ...ZA_SUB,
  ].find(({ nickname }) => nickname === clickedNickname);
  modalTarget.value = target;

  document.documentElement.style.overflow = "hidden";

  const dialog = document.querySelector(".dialog") as HTMLDialogElement;
  dialog.showModal();
};

const closeModal = () => {
  document.documentElement.style.overflow = "auto";

  const dialog = document.querySelector(".dialog") as HTMLDialogElement;
  dialog.close();
};
</script>

<template>
  <main class="pb-8 px-5 max-w-container">
    <GlobalImage
      src="/images/ibamon.png"
      alt="イバモン"
      fit="inside"
      preload
      class="mx-auto"
    />
    <section>
      <h2 class="text-2xl grid grid-cols-[auto_1fr] gap-2 items-center mb-4">
        <div class="w-5 h-5 bg-purple rounded-full border-2 border-darkBrown" />
        <span>イバモンとは？</span>
      </h2>
      <p>茨城県公認を目指すVTuber「茶芝間ティー」がお送りする、茨城に関連するモンスターしか仲間にできないRPG企画。</p>
      <p>例えば、チョウチンアンコウをモチーフにしたモンスターがいたとしたら、茨城発祥の伝統料理「アンコウ鍋」があるので捕まえられます。はい。要はいかに茨城に関するものにこじつけられるかが鍵です。</p>
      <p>モンスター収集系のゲームを中心に、週1の生配信でプレイしていきます（切り抜き横動画も上がるかも）。</p>
    </section>

    <!-- 第一弾 -->
    <section class="mt-8 md:mt-16">
      <h2 class="text-2xl grid grid-cols-[auto_1fr] gap-2 items-center mb-4">
        <div class="w-5 h-5 bg-purple rounded-full border-2 border-darkBrown" />
        <span>第一弾：<br class="md:hidden" />
          <GlobalLink :href="EXTERNAL_URL.OTODAMASTER" target="_blank">絶対音感オトダマスター</GlobalLink></span>
      </h2>
      <p>2007年にDSで発売された、音・言葉・リズムをマイクに入力し「オトダマ」を収集するPRG。私はポケモンにハマる前にこれにハマってました。続編出してくれないかなぁ。</p>
      <div class="mx-auto w-full md:w-[50%] mt-4">
        <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/videoseries?si=vQCB9KDCpZLrr1cI&amp;list=PLlIIRUvyBd94r14qp_3U38SG0iihNDya6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <h3 class="mt-8 mb-4 text-lg">仲間一覧<span class="text-sm">（2025/09/08更新）</span></h3>
      <button class="grid grid-cols-3 md:grid-cols-6 gap-4 w-full">
        <div v-for="({ nickname, src }) in OTODAMAS_MAIN" :key="nickname">
          <GlobalImage
            :src="src || '/images/silhouette.png'"
            :alt="nickname"
            fit="inside"
            preload
            :class="src ? 'rounded-full w-full h-full' : 'opacity-50'"
            @click="src && openModal(nickname)"
          />
        </div>
      </button>
      <h3 class="mt-4 mb-2">控え</h3>
      <button class="grid grid-cols-3 md:grid-cols-6 gap-4 w-full">
        <div v-for="({ nickname, src }) in OTODAMAS_SUB" :key="nickname">
          <GlobalImage
            :src="src || '/images/silhouette.png'"
            :alt="nickname"
            fit="inside"
            preload
            :class="src ? 'rounded-full w-full h-full' : 'opacity-50'"
            @click="src && openModal(nickname)"
          />
        </div>
      </button>
    </section>

    <!-- 第二弾 -->
    <section class="mt-8 md:mt-16">
      <h2 class="text-2xl grid grid-cols-[auto_1fr] gap-2 items-center mb-4">
        <div class="w-5 h-5 bg-purple rounded-full border-2 border-darkBrown" />
        <span>第二弾：<br class="md:hidden" />
          <GlobalLink :href="EXTERNAL_URL.POKEMON_ZA" target="_blank">Pokémon LEGENDS Z-A</GlobalLink></span>
      </h2>
      <p>ポケモンレジェンズの最新作です。新しいメガ進化がいっぱいいて嬉しいです。</p>
      <div class="mx-auto w-full md:w-[50%] mt-4">
        <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/videoseries?si=4CvyGfEhMa5o1b0D&amp;list=PLlIIRUvyBd97CsGwZ1bFNuwlPfxOSnfeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <h3 class="mt-8 mb-4 text-lg">仲間一覧<span class="text-sm">（2026/01/01更新）</span></h3>
      <button class="grid grid-cols-3 md:grid-cols-6 gap-4 w-full">
        <div v-for="({ nickname, src }) in ZA_MAIN" :key="nickname">
          <GlobalImage
            :src="src || '/images/silhouette.png'"
            :alt="nickname"
            fit="inside"
            preload
            :class="src ? 'rounded-full w-full h-full' : 'opacity-50'"
            @click="src && openModal(nickname)"
          />
        </div>
      </button>
      <h3 class="mt-4 mb-2">控え</h3>
      <button class="grid grid-cols-3 md:grid-cols-6 gap-4 w-full">
        <div v-for="({ nickname, src }) in ZA_SUB" :key="nickname">
          <GlobalImage
            :src="src || '/images/silhouette.png'"
            :alt="nickname"
            fit="inside"
            preload
            :class="src ? 'rounded-full w-full h-full' : 'opacity-50'"
            @click="src && openModal(nickname)"
          />
        </div>
      </button>
    </section>

    <!-- ダイアログ -->
    <dialog class="dialog" @click.self="closeModal">
      <div v-if="modalTarget" class="w-[320px] p-5">
        <div class="grid grid-cols-[1fr_auto] mb-5 items-center">
          <p>
            <span class="text-2xl">{{ modalTarget.nickname }}</span>
            <span>（{{ modalTarget.name }}）</span>
          </p>
          <button class="w-5 h-5" @click="closeModal">
            <GlobalIcon name="original:close" class="w-5 h-5" />
          </button>
        </div>
        <div>
          <GlobalImage
            :src="modalTarget.src"
            :alt="modalTarget.nickname"
            fit="inside"
            preload
            class="w-[200px] h-[200px] mx-auto rounded-full"
          />
          <p class="whitespace-pre-wrap mt-5 opacity-80">{{ modalTarget.description }}</p>
        </div>
      </div>
    </dialog>
  </main>
</template>

<style scoped>
.dialog::backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
}
</style>
