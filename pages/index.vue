<script setup lang="ts">
import news from '@/assets/json/news.json';
import { INTERNAL_URL } from '@/constants';

const { isMobile } = useDevice();
</script>

<template>
  <main class="md:grid md:grid-cols-[1fr_480px] pb-5 px-5 max-w-container">
    <div class="h-full grid gap-4">
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

      <template v-if="!isMobile">
        <GlobalSocialMedia />
        
        <section class="px-5 py-4 bg-white/50 mt-auto">
          <h2>ニュース</h2>
          <ul class="text-sm max-h-20 space-y-0.5 overflow-y-scroll">
            <li v-for="{ date, text, link } in news">
              <p class="space-x-2">
                <span>{{ date }}</span>
                <GlobalLink v-if="link" :href="link" target="_blank">{{ text }}</GlobalLink>
                <span v-else>{{ text }}</span>
              </p>
            </li>
          </ul>
        </section>

        <div class="w-full">
          <iframe class="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/videoseries?si=KHTmuBzDW839mp-e&amp;list=PLlIIRUvyBd95Xu0OtxPDx0SflFggHjfoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </template>
    </div>

    <GlobalImage
      src="/images/standing.png"
      alt="茶芝間ティー 立ち絵"
      fit="inside"
      preload
      class="md:sticky md:top-10"
    />

    <template v-if="isMobile">
      <section class="mt-4 px-5 py-4 bg-white/50">
        <h2>ニュース</h2>
        <ul class="text-sm max-h-20 space-y-0.5 overflow-y-scroll">
          <li v-for="{ date, text, link } in news">
            <p class="space-x-2">
              <span>{{ date }}</span>
              <GlobalLink v-if="link" :href="link" target="_blank">{{ text }}</GlobalLink>
              <span v-else>{{ text }}</span>
            </p>
          </li>
        </ul>
      </section>

      <div class="hidden md:flex">
        <iframe class="shrink-1 basis-[600px] mx-auto aspect-video" src="https://www.youtube-nocookie.com/embed/videoseries?si=KHTmuBzDW839mp-e&amp;list=PLlIIRUvyBd95Xu0OtxPDx0SflFggHjfoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <GlobalSocialMedia class="mt-4" />
    </template>
  </main>
</template>
