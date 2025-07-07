<script setup lang="ts">
import { type ComputedRef, inject } from "vue";

interface Props {
  backgroundClass?: string;
  roundedClass?: string;
  class?: string;
}

withDefaults(defineProps<Props>(), {
  backgroundClass: "bg-slate-950/10",
  roundedClass: "rounded-md",
});

const loading = inject<ComputedRef<boolean>>("loading");
</script>

<template>
  <div v-if="loading" :class="['animate-pulse', backgroundClass, roundedClass, $props.class]"></div>
  <slot v-else></slot>
</template>
