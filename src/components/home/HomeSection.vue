<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
}

defineProps<Props>();
</script>

<template>
  <section>
    <div class="mb-8">
      <h2 class="text-5xl font-semibold uppercase tracking-wide text-slate-950">
        {{ title }}
      </h2>
      <p v-if="description" class="text-lg text-slate-600 mt-3">{{ description }}</p>
    </div>
    <slot />
  </section>
</template>
