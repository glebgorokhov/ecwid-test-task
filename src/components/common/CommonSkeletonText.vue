<script setup lang="ts">
import { computed, type ComputedRef, inject } from "vue";

import CommonSkeleton from "./CommonSkeleton.vue";

interface SkeletonTextProps {
  roundedClass?: string;
  lines?: number | [number, number];
  random?: boolean;
  backgroundClass?: string;
}

const props = withDefaults(defineProps<SkeletonTextProps>(), {
  lines: 1,
  roundedClass: "rounded-md",
  random: true,
});

function getRandomWidth() {
  return `${Math.floor(Math.random() * (100 - 60 + 1)) + 60}%`;
}

const linesCount = computed(() =>
  Array.isArray(props.lines) ? Math.max(...props.lines) : props.lines,
);

const lineClasses = (lineNumber: number) => [
  "relative inline-block",
  Array.isArray(props.lines)
    ? {
        "hidden lg:inline-block": props.lines[0] > props.lines[1] && lineNumber <= props.lines[1],
        "lg:hidden": props.lines[1] > props.lines[0] && lineNumber > props.lines[0],
      }
    : null,
];

const loading = inject<ComputedRef<boolean>>("loading");
</script>

<template>
  <div v-if="loading">
    <div
      v-for="line in linesCount"
      :key="line"
      :style="{ width: random ? getRandomWidth() : '100%' }"
      :class="lineClasses(line)"
    >
      <span>&nbsp;</span>
      <CommonSkeleton
        :rounded-class="roundedClass"
        class="absolute left-0 right-0 top-[20%] bottom-[20%]"
        :background-class="backgroundClass"
      />
    </div>
  </div>
  <slot v-else></slot>
</template>
