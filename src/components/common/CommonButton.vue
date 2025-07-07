<script setup lang="ts">
import { Icon } from "@iconify/vue";

type CommonButtonProps = {
  label: string;
  postIcon?: string;
  preIcon?: string;
};

defineProps<CommonButtonProps>();
</script>

<template>
  <button class="bg-yellow-300 text-slate-950 rounded-2xl flex justify-center h-11 px-4">
    <div class="flex items-center justify-center gap-1.5">
      <Icon v-if="preIcon" :icon="preIcon" class="w-5 h-5" />
      <span class="px-1 uppercase tracking-wide font-semibold text-sm">{{ label }}</span>
      <Icon v-if="postIcon" :icon="postIcon" class="w-5 h-5" />
    </div>
  </button>
</template>
