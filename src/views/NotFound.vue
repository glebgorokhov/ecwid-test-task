<script setup lang="ts">
import { useHead } from "@vueuse/head";

import AppContainer from "@/components/app/AppContainer.vue";
import CommonButton from "@/components/common/CommonButton.vue";

useHead({
  title: "Page Not Found",
});
</script>

<template>
  <main class="pt-16 pb-24 flex flex-col justify-center">
    <AppContainer class="my-auto">
      <div class="text-center">
        <!-- Success Icon -->
        <div class="text-8xl mb-6">🔍</div>

        <!-- Thank You Message -->
        <h1 class="text-5xl font-semibold uppercase tracking-wide text-slate-950 mb-6">
          Page Not Found
        </h1>

        <p class="text-lg text-slate-600 mb-7 leading-relaxed">
          Sorry, the page you're looking for doesn't exist or couldn't be loaded.
        </p>

        <!-- Action Button -->
        <div class="flex justify-center">
          <CommonButton label="Go Home" tag="router-link" to="/" post-icon="mdi:arrow-right" />
        </div>
      </div>
    </AppContainer>
  </main>
</template>
