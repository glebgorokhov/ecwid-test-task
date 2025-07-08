<script setup lang="ts">
import { useHead } from "@vueuse/head";

import AppContainer from "@/components/app/AppContainer.vue";
import CommonButton from "@/components/common/CommonButton.vue";

useHead({
  title: "Page Not Found",
});
</script>

<template>
  <main class="pt-8 lg:pt-16 pb-16 lg:pb-24 flex flex-col justify-center">
    <AppContainer class="my-auto">
      <div class="text-center">
        <!-- Not Found Icon -->
        <div class="text-5xl lg:text-8xl mb-5 lg:mb-6">🔍</div>

        <!-- Not Found Message -->
        <h1
          class="text-2xl lg:text-5xl font-semibold uppercase tracking-wide text-slate-950 mb-3 lg:mb-6"
        >
          Page Not Found
        </h1>

        <!-- Not Found Description -->
        <p class="text-base lg:text-lg text-slate-600 mb-5 lg:mb-7 leading-relaxed">
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
