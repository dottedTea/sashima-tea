<script setup lang="ts">
/**
 * NuxtImgのProps型
 * @see https://image.nuxt.com/usage/nuxt-img
 */
type Props = {
	src: string;
	width?: string;
	height?: string;
	alt?: string;
	sizes?: string;
	densities?: string;
	placeholder?: string | boolean | number | Array<number>;
	placeholderClass?: string;
	provider?: string;
	preset?: string;
	format?: string;
	quality?: string;
	fit?: "cover" | "contain" | "fill" | "inside" | "outside";
	preload?: boolean;
	loading?: "lazy";
	nonce?: string;
	onLoad?: () => void;
};

const {
	src,
	width,
	height,
	alt,
	sizes,
	densities,
	placeholder,
	placeholderClass,
	provider,
	preset,
	format = "webp",
	quality,
	fit = "cover",
	preload,
	loading,
	nonce,
	onLoad,
} = defineProps<Props>();
</script>

<template>
  <NuxtImg
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
    :sizes="sizes"
    :densities="densities"
    :placeholder="placeholder"
    :placeholder-class="placeholderClass"
    :provider="provider"
    :preset="preset"
    :format="format"
    :quality="quality"
    :fit="fit"
    :preload="preload"
    :loading="loading"
    :nonce="nonce"
    @load="onLoad"
  />
</template>
