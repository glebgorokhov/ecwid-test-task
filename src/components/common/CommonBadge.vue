<script setup lang="ts">
interface Props {
  label: string;
  colorClass?: string;
}

withDefaults(defineProps<Props>(), {
  colorClass: "bg-red-600 text-red-50",
});
</script>

<template>
  <span
    class="text-xs font-semibold uppercase tracking-wide h-5 px-1 min-w-5 text-center flex items-center justify-center rounded-full"
    :class="colorClass"
  >
    {{ label }}
  </span>
</template>
