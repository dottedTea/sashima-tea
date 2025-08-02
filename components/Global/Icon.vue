<script setup lang="ts">
// TODO: utilsにしたい
import type { Config } from "tailwindcss";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

/**
 * tailwind.config.tsで定義した値
 * @see https://tailwindcss.com/docs/configuration#referencing-in-java-script
 */
const { theme } = resolveConfig(
  tailwindConfig as Config & typeof tailwindConfig,
);

type Props = {
  name: string;
  color?: string;
  opacity?: number;
};
const { name, color = "black", opacity = 1 } = defineProps<Props>();

const hexColor = theme.colors[`${color}`];

const customize = (
  content: string,
  name: string,
  prefix: string,
  provider: string,
) => {
  return content
    .replace(/stroke="[^"]*"/g, `stroke="${hexColor}"`)
    .replace(/fill="[^"]*"/g, `fill="${hexColor}"`)
    .replace(/opacity="[^"]*"/g, `opacity="${opacity}"`);
};
</script>

<template>
  <Icon :name="name" :customize="customize" />
</template>
