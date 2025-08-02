<script setup lang="ts">
import { EXTERNAL_URL } from "@/constants";
</script>

<template>
  <main class="pb-8 px-5 max-w-container">
    <div>
      <GlobalImage
        src="/images/ibamon.png"
        alt="イバモン"
        fit="inside"
        preload
        class="mx-auto"
      />
    </div>
    <section>
      <h2 class="text-2xl grid grid-cols-[auto_1fr] gap-2 items-center mb-4">
        <div class="w-5 h-5 bg-red rounded-full border-2 border-brown" />
        <span>イバモンとは？</span>
      </h2>
      <p>茨城県公認を目指すVTuber「茶芝間ティー」がお送りする、茨城に関連するモンスターしか仲間にできないRPG企画。</p>
      <p>例えば、チョウチンアンコウをモチーフにしたモンスターがいたとしたら、茨城発祥伝統的な料理「アンコウ鍋」があるので捕まえられます。はい。要はいかに茨城に関するものにこじつけられるかが鍵です。</p>
      <p>モンスター収集系のゲームを中心に、週1の生配信でプレイしていきます（切り抜き横動画も上がるかも）。</p>
    </section>
    <section class="mt-8">
      <h2 class="text-2xl grid grid-cols-[auto_1fr] gap-2 items-center mb-4">
        <div class="w-5 h-5 bg-red rounded-full border-2 border-brown" />
        <span>第一弾：<br class="md:hidden" />
          <GlobalLink :href="EXTERNAL_URL.OTODAMASTER" target="_blank">絶対音感オトダマスター</GlobalLink></span>
      </h2>
      <p>2007年にDSで発売された、音で「オトダマ」を収集するPRG。私はポケモンにハマる前にこれにハマってました。続編出してくれないかなぁ。</p>
      <h3 class="mt-8 mb-4 text-lg">現在の仲間一覧</h3>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
        <GlobalImage
          v-for="index in 6"
          :key="index"
          src="/images/silhouette.png"
          fit="inside"
          preload
          class="opacity-50"
        />
      </div>
    </section>
  </main>
</template>
