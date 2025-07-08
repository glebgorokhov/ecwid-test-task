<script setup lang="ts">
import AppContainer from "@/components/app/AppContainer.vue";
import CommonButton from "@/components/common/CommonButton.vue";
</script>

<template>
  <main class="pt-16 pb-24 flex flex-col justify-center">
    <AppContainer class="my-auto">
      <div class="text-center">
        <!-- Success Icon -->
        <div class="text-8xl mb-6">🎉</div>

        <!-- Thank You Message -->
        <h1 class="text-5xl font-semibold uppercase tracking-wide text-slate-950 mb-6">
          Thank You for Your Order!
        </h1>

        <p class="text-lg text-slate-600 mb-7 leading-relaxed">
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
