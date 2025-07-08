<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
}

defineProps<Props>();
</script>

<template>
  <section>
    <div class="mb-5 lg:mb-8">
      <h2 class="text-2xl lg:text-5xl font-semibold uppercase tracking-wide text-slate-950">
        {{ title }}
      </h2>
      <p v-if="description" class="text-base lg:text-lg text-slate-600 mt-1 lg:mt-3">
        {{ description }}
      </p>
    </div>
    <slot />
  </section>
</template>
