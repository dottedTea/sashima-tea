<script setup lang="ts">
import { EXTERNAL_URL } from '@/constants';
</script>

<template>
  <main class="md:grid md:grid-cols-[1fr_auto] h-full">
    <section class="p-5 bg-white/50">
      <div class="leading-8">
        <p>
          茨城県公認VTuberを目指す、茶芝間ティー（さしまてぃー）と申します！
        </p>
        <p>
          カイロソフトをメインとしたシミュレーションゲーム、茨城に関する動画を週5〜7本しています。
        </p>
        <p>
          <GlobalLink
            :href="EXTERNAL_URL.IBARAKI_TOURISM_MASTER"
            target="_blank"
          >
            いばらき観光マイスター認定
          </GlobalLink>
          <span> / </span>
          <span>フロントエンドエンジニア</span>
        </p>
      </div>
    </section>

    <GlobalImage
      src="/images/standing.png"
      alt="茶芝間ティー 立ち絵"
      fit="inside"
      preload
      class="md:h-[calc(100svh-120px)] absolute bottom-0 md:relative"
    />
    <!-- <GlobalIcon name="original:menu" color="brown" class="w-10 h-10" /> -->
  </main>
</template>
