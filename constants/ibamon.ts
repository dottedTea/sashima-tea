/** 絶対音感オトダマスター */
const OTODAMAS_MAIN = [
  {
    nickname: "ろっこく",
    name: "ロック",
    description:
      "モチーフ：国道6号線\nロックバンドのオトダマ。茨城を南北に通る国道6号線（茨城県民は略して「ろっこく」と呼んでいる）を基にしている。ロック → 6 → ろっこく という少々無理がある関連付け方をしている。",
    src: "/images/ibamon/rokkoku.png",
  },
  {
    nickname: "いしおさん",
    name: "ドガッツ",
    description:
      "モチーフ：いしおさん\n岩石のオトダマ。御影石がモチーフのゆるキャラ「いしおさん」を基にしている。御影石は墓石や建材として使われており、石岡市や桜川市などが産地となっている。",
    src: "/images/ibamon/ishiosan.png",
  },
  {
    nickname: "だいほう",
    name: "ゴウフーン",
    description:
      "モチーフ：大宝八幡宮\n竜巻のオトダマ。大宝八幡宮で毎年夏に行われる「風鈴まつり」を基にしている。進化前は風鈴の形をしていたが、進化して面影をなくしてしまった。",
    src: "/images/ibamon/daihou.png",
  },
  {
    nickname: "ひたちのき",
    name: "モックロック",
    description:
      "モチーフ：日立の樹\n林のオトダマ。この木何の木🎶でお馴染みの「日立の樹」を基にしている。日立に無いし、なんならアメリカにある。",
    src: "/images/ibamon/hitachinoki.png",
  },
  {
    nickname: "わんわんﾗﾝﾄ゛",
    name: "ガルーフ",
    description:
      "モチーフ：つくばわんわんランド\n犬のオトダマ。筑波市の犬のテーマパーク「つくばわんわんランド」を基にしている。犬好きは一度は行った方が良い。",
    src: "/images/ibamon/wanwanland.png",
  },
  {
    nickname: "ふくろだ",
    name: "ドプーン",
    description:
      "モチーフ：袋田の滝\n滝のオトダマ。日本三名爆のうちの一つ「袋田の滝」を基にしている。月待の滝でもいける。",
    src: "/images/ibamon/fukuroda.png",
  },
] as const;

const OTODAMAS_SUB = [
  {
    nickname: "しかお",
    name: "ナチューン",
    description:
      "モチーフ：鹿島アントラーズ\n鹿のオトダマ。サッカーJ1チーム「鹿島アントラーズ」のマスコットキャラクター「しかお」を基にしている。ちなみに妻は「しかこ」で息子は「アントン」。",
    src: "/images/ibamon/shikao.png",
  },
  {
    nickname: "ひゃくだん",
    name: "トコトン",
    description:
      "モチーフ：百段階段\n階段のオトダマ。大子町の十二所神社にある階段を基にしている。ひなまつりのイベントでは、百段すべてに雛人形が飾られる圧巻の光景が見られる。",
    src: "/images/ibamon/hyakudan.png",
  },
  {
    nickname: "かすみがうにゃ",
    name: "ガオ",
    description:
      "モチーフ：かすみがうにゃ\nかすみがうら市の公式キャラクター「かすみがうにゃ」を基にしている。進化前は猫だったが、進化して子ライオンになった。",
    src: "/images/ibamon/kasumigaunya.png",
  },
  {
    nickname: "スタミナ",
    name: "ズルール",
    description:
      "モチーフ：スタミナラーメン\n茨城のご当地ラーメン「スタミナラーメン」を基にしている。あんかけっぽいとろみのあるスープが特徴的。",
    src: "/images/ibamon/sutamina.png",
  },
] as const;

const ZA_MAIN = [
  {
    nickname: "かがやき",
    name: "エンブオー",
    description:
      "モチーフ：常陸の輝き\n茨城のブランド豚肉「常陸の輝き」を基にしている。食べないよ。",
    src: "https://img.yakkun.com/poke/icon96/n500.gif",
  },
  {
    nickname: "アクア",
    name: "サメハダー",
    description:
      "モチーフ：アクアワールド茨城県大洗水族館\nサメの飼育種類が全国1位の水族館、アクアワールドを基にしている。約60種類ものサメを飼育している。",
    src: "https://img.yakkun.com/poke/icon96/n319.gif",
  },
  {
    nickname: "エドサキ",
    name: "パンプジン",
    description:
      "モチーフ：江戸崎かぼちゃ\n稲敷市の名産品「江戸崎かぼちゃ」を基にしている。江戸崎かぼちゃフェアなるものもやっているよ。",
    src: "https://img.yakkun.com/poke/icon96/n584.gif",
  },
  {
    nickname: "かみねっちょ",
    name: "カバルドン",
    description:
      "モチーフ：かみねっちょ\n日立市かみね動物園のマスコットキャラクター「かみねっちょ」を基にしている。色違いを捕まえたい。",
    src: "https://img.yakkun.com/poke/icon96/n450.gif",
  },
  {
    nickname: "りゅうじん",
    name: "ボーマンダ",
    description:
      "モチーフ：竜神大吊橋\n全国2位の高さのバンジージャンプが飛べる「竜神大吊橋」を基にしている。常陸太田市の「ポケふた」にもボーマンダが描かれている。",
    src: "https://img.yakkun.com/poke/icon96/n373.gif",
  },
  {
    nickname: "ムコナ",
    name: "ニャオニクス",
    description:
      "モチーフ：ムコナくん\nJR東日本水戸支社の常磐線特急E657系イメージキャラクター「ムコナくん」を基にしている。猫のキャラクター。",
    src: "https://img.yakkun.com/poke/icon96/n678.gif",
  },
];

const ZA_SUB = [
  {
    nickname: "ネモソフ",
    name: "バイバニラ",
    description:
      "モチーフ：ネモフィラソフト\n国営ひたち海浜公園で売っている「ネモフィラソフト」を基にしている。春にきれいに咲くネモフィラ色のソフトクリーム。",
    src: "https://img.yakkun.com/poke/icon96/n584.gif",
  },
  {
    nickname: "ひたちおおた",
    name: "ルチャブル",
    description:
      "モチーフ：常陸太田市のポケふた\nポケモンのマンホール「ポケふた」を基にしている。茨城県に6箇所あり、常陸太田市のポケふたにルチャブルが描かれている。",
    src: "https://img.yakkun.com/poke/icon96/n701.gif",
  },
  {
    nickname: "ヤンキー",
    name: "ズルズキン",
    description:
      "モチーフ：ヤンキー\n茨城県に多く生息する「ヤンキー」を基にしている。腰パンしすぎてパンツ見えがち。",
    src: "https://img.yakkun.com/poke/icon96/n560.gif",
  },
  {
    nickname: "カサマロン",
    name: "ブリガロン",
    description:
      "モチーフ：笠間の栗\n生産量と栽培面積が全国1位の「栗」を基にしている。特に笠間市で多く生産されている。",
    src: "https://img.yakkun.com/poke/icon96/n652.gif",
  },
  {
    nickname: "けんか",
    name: "ロゼリア",
    description:
      "モチーフ：バラ\n茨城県の花である「バラ」を基にしている。県章もバラのつぼみが基となっている。",
    src: "https://img.yakkun.com/poke/icon96/n315.gif",
  },
]

export { OTODAMAS_MAIN, OTODAMAS_SUB, ZA_MAIN, ZA_SUB };
