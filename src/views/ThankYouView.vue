<script setup lang="ts">
import { useHead } from "@vueuse/head";

import AppContainer from "@/components/app/AppContainer.vue";
import CommonButton from "@/components/common/CommonButton.vue";

useHead({
  title: "Thank You",
});
</script>

<template>
  <main class="pt-8 lg:pt-16 pb-16 lg:pb-24 flex flex-col justify-center">
    <AppContainer class="my-auto">
      <div class="text-center">
        <!-- Success Icon -->
        <div class="text-5xl lg:text-8xl mb-5 lg:mb-6">🎉</div>

        <!-- Thank You Message -->
        <h1
          class="text-2xl lg:text-5xl font-semibold uppercase tracking-wide text-slate-950 mb-3 lg:mb-6"
        >
          Thank You for Your Order!
        </h1>

        <!-- Thank You Description -->
        <p class="text-base lg:text-lg text-slate-600 mb-5 lg:mb-7 leading-relaxed">
          Your order has been successfully placed. We'll send you a confirmation email with order
          details shortly.
        </p>

        <!-- Action Button -->
        <div class="flex justify-center">
          <CommonButton
            label="Continue Shopping"
            tag="router-link"
            to="/"
            post-icon="mdi:arrow-right"
          />
        </div>
      </div>
    </AppContainer>
  </main>
</template>
