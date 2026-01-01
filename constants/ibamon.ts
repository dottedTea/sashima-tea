/** 絶対音感オトダマスター */
const OTODAMAS_MAIN = [
  {
    nickname: "ろっこく",
    name: "ロック",
    description:
      "モチーフ：国道6号線\nロックバンドのオトダマ。茨城を南北に通る国道6号線（茨城県民は略して「ろっこく」と呼んでいる）を基にしている。ロック → 6 → ろっこく という少々無理がある関連付け方をしている。",
    src: "/images/otodamas/rokkoku.png",
  },
  {
    nickname: "いしおさん",
    name: "ドガッツ",
    description:
      "モチーフ：いしおさん\n岩石のオトダマ。御影石がモチーフのゆるキャラ「いしおさん」を基にしている。御影石は墓石や建材として使われており、石岡市や桜川市などが産地となっている。",
    src: "/images/otodamas/ishiosan.png",
  },
  {
    nickname: "だいほう",
    name: "ゴウフーン",
    description:
      "モチーフ：大宝八幡宮\n竜巻のオトダマ。大宝八幡宮で毎年夏に行われる「風鈴まつり」を基にしている。進化前は風鈴の形をしていたが、進化して面影をなくしてしまった。",
    src: "/images/otodamas/daihou.png",
  },
  {
    nickname: "ひたちのき",
    name: "モックロック",
    description:
      "モチーフ：日立の樹\n林のオトダマ。この木何の木🎶でお馴染みの「日立の樹」を基にしている。日立に無いし、なんならアメリカにある。",
    src: "/images/otodamas/hitachinoki.png",
  },
  {
    nickname: "わんわんﾗﾝﾄ゛",
    name: "ガルーフ",
    description:
      "モチーフ：つくばわんわんランド\n犬のオトダマ。筑波市の犬のテーマパーク「つくばわんわんランド」を基にしている。犬好きは一度は行った方が良い。",
    src: "/images/otodamas/wanwanland.png",
  },
  {
    nickname: "ふくろだ",
    name: "ドプーン",
    description:
      "モチーフ：袋田の滝\n滝のオトダマ。日本三名爆のうちの一つ「袋田の滝」を基にしている。月待の滝でもいける。",
    src: "/images/otodamas/fukuroda.png",
  },
] as const;

const OTODAMAS_SUB = [
  {
    nickname: "しかお",
    name: "ナチューン",
    description:
      "モチーフ：鹿島アントラーズ\n鹿のオトダマ。サッカーJ1チーム「鹿島アントラーズ」のマスコットキャラクター「しかお」を基にしている。ちなみに妻は「しかこ」で息子は「アントン」。",
    src: "/images/otodamas/shikao.png",
  },
  {
    nickname: "ひゃくだん",
    name: "トコトン",
    description:
      "モチーフ：百段階段\n階段のオトダマ。大子町の十二所神社にある階段を基にしている。ひなまつりのイベントでは、百段すべてに雛人形が飾られる圧巻の光景が見られる。",
    src: "/images/otodamas/hyakudan.png",
  },
  {
    nickname: "かすみがうにゃ",
    name: "ガオ",
    description:
      "モチーフ：かすみがうにゃ\nかすみがうら市の公式キャラクター「かすみがうにゃ」を基にしている。進化前は猫だったが、進化して子ライオンになった。",
    src: "/images/otodamas/kasumigaunya.png",
  },
  {
    nickname: "スタミナ",
    name: "ズルール",
    description:
      "モチーフ：スタミナラーメン\n茨城のご当地ラーメン「スタミナラーメン」を基にしている。あんかけっぽいとろみのあるスープが特徴的。",
    src: "/images/otodamas/sutamina.png",
  },
] as const;

const ZA_MAIN = [
  {
    nickname: "かがやき",
    name: "エンブオー",
    description:
      "モチーフ：常陸の輝き\n茨城のブランド豚肉「常陸の輝き」を基にしている。食べないよ。",
    src: "/images/za/emboar.png",
  },
  {
    nickname: "アクア",
    name: "サメハダー",
    description:
      "モチーフ：アクアワールド茨城県大洗水族館\nサメの飼育種類が全国1位の水族館、アクアワールドを基にしている。約60種類ものサメを飼育している。",
    src: "/images/za/sharpedo.png",
  },
  {
    nickname: "エドサキ",
    name: "パンプジン",
    description:
      "モチーフ：江戸崎かぼちゃ\n稲敷市の名産品「江戸崎かぼちゃ」を基にしている。江戸崎かぼちゃフェアなるものもやっているよ。",
    src: "/images/za/gourgeist.png",
  },
  {
    nickname: "かみねっちょ",
    name: "カバルドン",
    description:
      "モチーフ：かみねっちょ\n日立市かみね動物園のマスコットキャラクター「かみねっちょ」を基にしている。色違いを捕まえたい。",
    src: "/images/za/hippowdon.png",
  },
  {
    nickname: "リュウジン",
    name: "ボーマンダ",
    description:
      "モチーフ：竜神大吊橋\n全国2位の高さのバンジージャンプが飛べる「竜神大吊橋」を基にしている。常陸太田市の「ポケふた」にもボーマンダが描かれている。",
    src: "/images/za/salamence.png",
  },
  {
    nickname: "ヤンキー",
    name: "ズルズキン",
    description:
      "モチーフ：ヤンキー\n茨城県に多く生息する「ヤンキー」を基にしている。腰パンしすぎてパンツ見えがち。",
    src: "/images/za/scrafty.png",
  },
];

const ZA_SUB = [
  {
    nickname: "ムコナ",
    name: "ニャオニクス",
    description:
      "モチーフ：ムコナくん\nJR東日本水戸支社の常磐線特急E657系イメージキャラクター「ムコナくん」を基にしている。猫のキャラクター。",
    src: "/images/za/meowstic.png",
  },
  {
    nickname: "ネモソフ",
    name: "バイバニラ",
    description:
      "モチーフ：ネモフィラソフト\n国営ひたち海浜公園で売っている「ネモフィラソフト」を基にしている。春にきれいに咲くネモフィラ色のソフトクリーム。",
    src: "/images/za/vanilluxe.png",
  },
  {
    nickname: "ひたちおおた",
    name: "ルチャブル",
    description:
      "モチーフ：常陸太田市のポケふた\nポケモンのマンホール「ポケふた」を基にしている。茨城県に6箇所あり、常陸太田市のポケふたにルチャブルが描かれている。",
    src: "/images/za/hawlucha.png",
  },
  {
    nickname: "カサマロン",
    name: "ブリガロン",
    description:
      "モチーフ：笠間の栗\n生産量と栽培面積が全国1位の「栗」を基にしている。特に笠間市で多く生産されている。",
    src: "/images/za/chesnaught.png",
  },
  {
    nickname: "けんか",
    name: "ロゼリア",
    description:
      "モチーフ：バラ\n茨城県の花である「バラ」を基にしている。県章もバラのつぼみが基となっている。",
    src: "/images/za/roselia.png",
  },
  {
    nickname: "イセエビ",
    name: "ウデッポウ",
    description:
      "モチーフ：伊勢海老\n茨城県沖でも獲れる「伊勢海老」を基にしている。サイズが大きくブランド化もされている。",
    src: "/images/za/clauncher.png",
  },
  {
    nickname: "いなきち",
    name: "テールナー",
    description:
      "モチーフ：いな吉\n笠間いなり寿司推進キャラクター「いな吉」を基にしている。笠間稲荷神社も有名。",
    src: "/images/za/braixen.png",
  },
  {
    nickname: "がまあぶら",
    name: "ケロマツ",
    description:
      "モチーフ：ガマの油売り\n筑波山に伝わる「ガマの油売り口上」を基にしている。江戸時代から伝承芸能として語り継がれている。",
    src: "/images/za/froakie.png",
  },
  {
    nickname: "くじしらす",
    name: "シビシラス",
    description:
      "モチーフ：久慈浜のしらす\n久慈浜で水揚げされたしらすを基にしている。茨城県内ではブランド化されたしらすもある。",
    src: "/images/za/tynamo.png",
  },
  {
    nickname: "カメール",
    name: "とりかめくん",
    description:
      "モチーフ：とりかめくん\n取手市の健康づくりキャラクター「とりかめくん」を基にしている。僕をこれを機に知りました。",
    src: "/images/za/wartortle.png",
  },
];

export { OTODAMAS_MAIN, OTODAMAS_SUB, ZA_MAIN, ZA_SUB };
