<script setup lang="ts">
import { EXTERNAL_URL } from '@/constants';

/** 資格 */
const VIDEOS = [
  {
    src: "https://www.youtube-nocookie.com/embed/videoseries?si=VHWvqmR1RqIsDsxd&amp;list=PLlIIRUvyBd94BRbbx0MFuh355UTRMCy0H",
    description: "カイロソフトがあの国民的キャラクターとコラボ!?発売日当日に早速プレイしました。",
    isVertical: false,
  },
  {
    src: "https://www.youtube.com/embed/videoseries?si=UEDrrGvAmf-iNRPP&amp;list=PLlIIRUvyBd96tt4ezAbXhYcDveEJ3ptbS",
    description: "目指せ茨城公認VTuber！茨城県の魅力をたっぷり発信していきます。",
    isVertical: true,
  },
  {
    src: "https://www.youtube-nocookie.com/embed/videoseries?si=a2bV_11PXLUy9_2L&amp;list=PLlIIRUvyBd97buWLF98Qh_urx6BvC9ijF",
    description: "私の動画史上、一番編集凝ってます！実はAMONG USごく稀に主催しています。",
    isVertical: false,
  },
  {
    src: "https://www.youtube-nocookie.com/embed/videoseries?si=njMQkdPpLbRtxVrv&amp;list=PLlIIRUvyBd97fA0guMAbxq5h4y7uyBym_",
    description: "茨城×カイロソフト！空港を創るシミュレーションゲームで、茨城空港を再現します。",
    isVertical: false,
  }
] as const;

/** 実績 */
const ACHIEVEMENTS = [
] as const;

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
  {
    name: 'CG-ARTS ディジタルメディアマイスター',
    href: EXTERNAL_URL.CG_ARTS,
  },
  {
    name: '情報セキュリティマネジメント試験',
    href: EXTERNAL_URL.IPA_SG,
  },
  {
    name: 'JSTQB 認定テスト技術者',
    href: EXTERNAL_URL.JSTQB,
  },
] as const;
</script>

<template>
  <main class="pb-4 px-5 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-4 max-w-container">
    <div class="space-y-4">
      <div>
        <h2 class="text-xl mb-2 text-center">実績や案件など</h2>
        <p class="text-center">何かあれば軽率に<GlobalLink :href="EXTERNAL_URL.CONTACT">お問い合わせ</GlobalLink>ください。全力でお手伝いさせていただきます！</p>
        <GlobalImage src="/images/setting.png" class="mt-2" />
      </div>

      <section class="bg-white/50 px-5 py-4">
        <h3>実績</h3>
        <ul v-if="ACHIEVEMENTS.length > 0">
          <li v-for="{name, href} in ACHIEVEMENTS" :key="name">
            ・<GlobalLink :href="href">{{ name }}</GlobalLink>
          </li>
        </ul>
        <p v-else class="text-black/50 overflow-y-scroll h-16 md:h-32">・案件やお仕事など随時更新予定</p>
      </section>
      
      <section class="bg-white/50 px-5 py-4">
        <h3>資格</h3>
        <ul>
          <li v-for="{name, href} in CERTIFICATIONS" :key="name">
            ・<GlobalLink :href="href" target="_blank">{{ name }}</GlobalLink>
          </li>
        </ul>
      </section>
    </div>

    <div class="bg-white/50 px-5 py-4 mb-4">
      <h3 class="mb-4">おすすめ動画</h3>
      <div class="gap-4 flex overflow-x-auto md:grid">
        <div v-for="{src, description, isVertical} in VIDEOS">
          <iframe class="h-40 md:h-auto md:w-full" :class="isVertical ? 'aspect-square' : 'aspect-video'" :src="src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p class="text-sm text-black/50">{{ description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
