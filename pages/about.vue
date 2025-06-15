<script setup lang="ts">
import { EXTERNAL_URL } from '@/constants';

/** 資格 */
const VIDEOS = [
  {
    src: "https://www.youtube-nocookie.com/embed/videoseries?si=VHWvqmR1RqIsDsxd&amp;list=PLlIIRUvyBd94BRbbx0MFuh355UTRMCy0H",
    isVertical: false,
  },
  {
    src: "https://www.youtube.com/embed/videoseries?si=UEDrrGvAmf-iNRPP&amp;list=PLlIIRUvyBd96tt4ezAbXhYcDveEJ3ptbS",
    isVertical: true,
  },
  {
    src: "https://www.youtube-nocookie.com/embed/videoseries?si=a2bV_11PXLUy9_2L&amp;list=PLlIIRUvyBd97buWLF98Qh_urx6BvC9ijF",
    isVertical: false,
  },
] as const;

/** 実績 */
// const ACHIEVEMENTS = [
// ] as const;

/** 資格 */
const CERTIFICATIONS = [
  {
    name: 'いばらき観光マイスター',
    href: EXTERNAL_URL.IBARAKI_TOURISM_MASTER,
  },
  {
    name: 'ウェブデザイン技能検定2級',
    href: EXTERNAL_URL.WEB_DESIGN_SKILL,
  },
  {
    name: '色彩検定2級',
    href: EXTERNAL_URL.ADVANCE_FORWARD_TRUE_COLOR,
  },
  {
    name: '基本情報技術者試験',
    href: EXTERNAL_URL.IPA_FE,
  },
] as const;

const windowHeight = computed(() => typeof window === 'undefined' ? 0 : window.innerHeight);
</script>

<template>
  <main class="pb-4 px-5 leading-8 h-full flex flex-col md:grid md:grid-cols-[1fr_320px] gap-5">
    <div class="space-y-4">
      <section class="bg-white/50 px-5 py-4">
        <h3>実績</h3>
        <p class="text-black/50 overflow-y-scroll h-16 md:h-32">・案件やお仕事など随時更新予定</p>
        <!-- <ul>
          <li v-for="{name, href} in ACHIEVEMENTS" :key="name">
            ・<GlobalLink :href="href">{{ name }}</GlobalLink>
          </li>
        </ul> -->
      </section>
      
      <section class="bg-white/50 px-5 py-4">
        <h3>資格</h3>
        <ul class="overflow-y-scroll h-16 md:h-32">
          <li v-for="{name, href} in CERTIFICATIONS" :key="name">
            ・<GlobalLink :href="href" target="_blank">{{ name }}</GlobalLink>
          </li>
        </ul>
      </section>
    </div>

    <div class="bg-white/50 px-5 py-4 mb-4 w-full flex-1">
      <h3 class="mb-4">おすすめ動画</h3>
      <div class="h-full overflow-auto gap-4 flex md:flex-col w-[calc(100vw-80px)] md:w-full">
        <div v-for="{src, isVertical} in VIDEOS">
          <iframe class="h-[calc(100%-48px)] md:h-auto md:w-full" :class="isVertical && 'aspect-square'" :src="src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </main>
</template>
