<script setup lang="ts">
import { EXTERNAL_URL } from "@/constants";

/** 動画 */
const VIDEOS = [
  {
    src: "https://www.youtube-nocookie.com/embed/videoseries?si=VHWvqmR1RqIsDsxd&amp;list=PLlIIRUvyBd94BRbbx0MFuh355UTRMCy0H",
    description:
      "カイロソフトがあの国民的キャラクターとコラボ!?発売日当日に早速プレイしました。",
    isVertical: false,
  },
  {
    src: "https://www.youtube.com/embed/videoseries?si=UEDrrGvAmf-iNRPP&amp;list=PLlIIRUvyBd96tt4ezAbXhYcDveEJ3ptbS",
    description:
      "目指せ茨城公認VTuber！茨城県の魅力をたっぷり発信していきます。",
    isVertical: true,
  },
  {
    src: "https://www.youtube-nocookie.com/embed/videoseries?si=a2bV_11PXLUy9_2L&amp;list=PLlIIRUvyBd97buWLF98Qh_urx6BvC9ijF",
    description:
      "私の動画史上、一番編集凝ってます！実はAMONG USごく稀に主催しています。",
    isVertical: false,
  },
  {
    src: "https://www.youtube-nocookie.com/embed/videoseries?si=njMQkdPpLbRtxVrv&amp;list=PLlIIRUvyBd97fA0guMAbxq5h4y7uyBym_",
    description:
      "茨城×カイロソフト！空港を創るシミュレーションゲームで、茨城空港を再現します。",
    isVertical: false,
  },
] as const;

/** 実績 */
const ACHIEVEMENTS = [
  {
    name: "海琳堂presents Vきゃらンジャー忘年会 出演",
    description:
      "海琳堂様の柴梅酒と合うおつまみをプレゼンしながら飲み比べる企画に参加しました。茨城の食材を使ったアレンジおつまみを提案しました。",
    href: "https://www.youtube.com/live/hboa1IGaUDU?si=6Bd9VRHHSZPU17Ju",
  },
  {
    name: "第2回ご当地VTuber PR王決定戦 出場",
    description:
      "静岡県沼津市の「川正さんの砂干しのサバ」をPRしました。砂干しがなんたるかを追求するべく、沼津市に赴いてビーチの砂に埋まりました。沼津市公認VTuber西浦めめさんとのコラボも行いました。",
    href: "https://www.youtube.com/watch?v=p5fS5tCjWNA&list=PLlIIRUvyBd96XWWgecOdD3MQz0RPXk8we",
  },
  {
    name: "ご当地自慢トークシヨウ 関東編2 出演",
    description:
      "そらのうえショッピングモール様にて行われる、各都道府県の魅力を自慢し合うトークイベントに出演しました。栗の名店「愛樹マロン」様にアポをとって取材し、イベント内で紹介させていただきました。",
    href: "https://x.com/soranoue_s_mall/status/1971786883496550585",
  },
  {
    name: "東京ゲームショウ2025 動画放映&名刺配布",
    description:
      "ncc新潟コンピュータ専門学校様の学生作品の成果発表として、ブース内にご当地VTuber図鑑とのコラボコーナーが設置されます。私の動画が放映され、名刺も配布されます。",
    href: "https://x.com/GotochiVTuber/status/1963590067202793852",
  },
  {
    name: "Faaast Penguin 公認大会 Vきゃらンジャー杯 優勝",
    description:
      "ファーストペンギンの公認大会に、紅華まさいもさん・巫薙りんかさんと共に「いもりんてぃー」というチームで出場しました。今回を機に初めてプレイするゲームでしたが、チームで練習を重ねて優勝することができました。",
    href: "https://youtu.be/4HEMJvT4F00?si=IZtCW6L7MqaaJ-By",
  },
  {
    name: "第1回ご当地VTuber PR王決定戦 出場",
    description:
      "高知かわうそ市場の「藁焼きカツオ 切れてるたたき」をPRしました。ゲーム実況×カツオ、茨城×カツオなど、他にはない独創性のある企画で大会を盛り上げました。",
    href: "https://www.youtube.com/watch?v=qZ4AG6D3bqg&list=PLlIIRUvyBd96XWWgecOdD3MQz0RPXk8we",
  },
] as const;

/** 資格 */
const CERTIFICATIONS = [
  {
    name: "いばらき観光マイスター",
    href: EXTERNAL_URL.IBARAKI_TOURISM_MASTER,
  },
  {
    name: "ウェブデザイン技能検定2級",
    href: EXTERNAL_URL.WEB_DESIGN_SKILL,
  },
  {
    name: "色彩検定2級",
    href: EXTERNAL_URL.ADVANCE_FORWARD_TRUE_COLOR,
  },
  {
    name: "応用情報技術者試験",
    href: EXTERNAL_URL.IPA_AP,
  },
  {
    name: "CG-ARTS ディジタルメディアマイスター",
    href: EXTERNAL_URL.CG_ARTS,
  },
  {
    name: "情報セキュリティマネジメント試験",
    href: EXTERNAL_URL.IPA_SG,
  },
  {
    name: "JSTQB 認定テスト技術者",
    href: EXTERNAL_URL.JSTQB,
  },
] as const;
</script>

<template>
  <main class="pb-4 px-5 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-4 max-w-container">
    <div class="space-y-4">
      <div>
        <h2 class="text-xl mb-2 text-center">実績や経歴など</h2>
        <p class="text-center">何かあれば軽率に<GlobalLink :href="EXTERNAL_URL.CONTACT">お問い合わせ</GlobalLink>ください。全力でお手伝いさせていただきます！</p>
        <GlobalImage src="/images/setting.png" class="mt-2" />
      </div>

      <section class="bg-white/50 px-5 py-4">
        <h3>PR案件などの実績</h3>
        <ul v-if="ACHIEVEMENTS.length > 0" class="grid gap-2">
          <li v-for="{name, description, href} in ACHIEVEMENTS" :key="name">
            ・<GlobalLink :href="href">{{ name }}</GlobalLink>
            <p class="ml-4 text-sm opacity-60">{{ `${description}` }}</p>
          </li>
        </ul>
        <p v-else class="text-black/50 overflow-y-scroll h-16 md:h-32">・案件やお仕事など随時更新予定</p>
      </section>
      
      <section class="bg-white/50 px-5 py-4">
        <h3>資格</h3>
        <ul>
          <li v-for="{name, href} in CERTIFICATIONS" :key="name">
            ・<GlobalLink :href="href" target="_blank" rel="nofollow">{{ name }}</GlobalLink>
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
