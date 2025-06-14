<script setup lang="ts">
import { EXTERNAL_URL } from '@/constants';
</script>

<template>
  <main class="md:grid md:grid-cols-[1fr_auto] h-full">
    <section class="p-5 bg-white/50 space-y-5 z-section relative">
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

      <div>
        <h2>ニュース</h2>
        <ul>
          <li>
            <p>2025/06/24</p>
            <p>VTuberデビューしました！</p>
          </li>
        </ul>
      </div>

      <div class="hidden md:block">
        <iframe class="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/videoseries?si=KHTmuBzDW839mp-e&amp;list=PLlIIRUvyBd95Xu0OtxPDx0SflFggHjfoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div class="flex justify-around">
        <GlobalIcon name="original:x" color="youtube" class="w-10 h-10" />
        <GlobalIcon name="original:youtube" color="youtube" class="w-10 h-10" />
        <GlobalIcon name="original:tiktok" color="youtube" class="w-10 h-10" />
      </div>
    </section>

    <GlobalImage
      src="/images/standing.png"
      alt="茶芝間ティー 立ち絵"
      fit="inside"
      preload
      class="md:h-[calc(100svh-120px)] z-base absolute bottom-0 md:relative"
    />
  </main>
</template>
