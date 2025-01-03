<script setup lang="ts">
type Props = {
  name: string;
  color?: string;
  opacity?: number;
};
const { 
  name,
  color = "black",
  opacity = 1,
} = defineProps<Props>();

const customize = (content: string) => {
  return content
    .replace(/stroke="[^"]*"/g, `stroke="${color}"`)
    .replace(/fill="[^"]*"/g, `fill="${color}"`)
    .replace(/opacity="[^"]*"/g, `opacity="${opacity}"`);
}
</script>

<template>
  <Icon :name="name" :customize="customize" />
</template>
