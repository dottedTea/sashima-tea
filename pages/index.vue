<script setup lang="ts">
import { EXTERNAL_URL, INTERNAL_URL } from '@/constants';
</script>

<template>
  <main class="md:grid md:grid-cols-[1fr_auto] h-full pb-5 mx-5">
    <div class="h-full flex flex-col relative z-section">
      <section class="px-5 py-4 bg-white/50 leading-8">
        <p>
          茨城県公認VTuberを目指す、茶芝間ティー（さしまてぃー）と申します！
        </p>
        <p>
          カイロソフトをメインとしたシミュレーションゲーム、茨城に関する動画を週5〜7本しています。
        </p>
        <p>
          いばらき観光マイスターでありフロントエンドエンジニアです。
        </p>
        <GlobalLink :href="INTERNAL_URL.ABOUT">
          動画や実績など詳しくはこちら →
        </GlobalLink>
      </section>

      <section class="px-5 py-4 bg-white/50 mt-auto">
        <h2>ニュース</h2>
        <ul>
          <li>
            <p>2025/06/24：VTuberデビューしました！</p>
          </li>
        </ul>
      </section>

      <div class="hidden md:flex mt-4">
        <iframe class="shrink-1 basis-[600px] mx-auto aspect-video" src="https://www.youtube-nocookie.com/embed/videoseries?si=KHTmuBzDW839mp-e&amp;list=PLlIIRUvyBd95Xu0OtxPDx0SflFggHjfoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div class="flex justify-around mt-4">
        <GlobalLink :href="EXTERNAL_URL.X">
          <GlobalIcon name="original:x" color="x" class="w-10 h-10" />
        </GlobalLink>
        <GlobalLink :href="EXTERNAL_URL.YOUTUBE">
          <GlobalIcon name="original:youtube" color="youtube" class="w-10 h-10" />
        </GlobalLink>
        <GlobalLink :href="EXTERNAL_URL.TIKTOK">
          <GlobalIcon name="original:tiktok" color="tiktok" class="w-10 h-10" />
        </GlobalLink>
      </div>
    </div>

    <GlobalImage
      src="/images/standing.png"
      alt="茶芝間ティー 立ち絵"
      fit="inside"
      preload
      class="md:w-[498px] md:mt-auto md:max-h-[calc(100vh-120px)] z-base absolute inset-x-0 top-[380px] md:top-auto md:bottom-0 md:relative"
    />
  </main>
</template>
