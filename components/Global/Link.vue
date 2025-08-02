<script setup lang="ts">
type Props = {
	/** 遷移先 */
	href: string;
	/** 別タブで開くか */
	target?: "_blank";
};
const { href, target } = defineProps<Props>();
</script>

<template>
  <NuxtLink 
    :to="href"
    :target="target"
    :rel="target === '_blank' ? 'noreferrer' : ''"
    class="text-orange hover:underline"
  >
    <slot />
  </NuxtLink>
</template>
