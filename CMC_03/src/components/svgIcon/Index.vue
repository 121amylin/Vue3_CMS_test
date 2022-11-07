<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const iconName = computed(() => {
  return `#icon-${props.icon}`;
});
</script>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<style lang="scss" scoped>
.svg-icon {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15rem;
  fill: currentColor;
  overflow: hidden;
}
</style>
