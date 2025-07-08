<script setup lang="ts">
import { RouterLink } from "vue-router";

import { useCartStore } from "@/stores/cart";

import CommonBadge from "../common/CommonBadge.vue";
import CommonButton from "../common/CommonButton.vue";
import EcwidLogo from "../icons/EcwidLogo.vue";
import AppContainer from "./AppContainer.vue";

const cartStore = useCartStore();
</script>

<template>
  <header class="flex items-center justify-center h-17 bg-amber-50">
    <AppContainer class="flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex h-6 lg:h-7 transition-colors hover:text-yellow-500">
        <EcwidLogo class="h-full" />
      </RouterLink>

      <div class="flex items-center gap-5 lg:gap-7">
        <!-- Navigation -->
        <nav class="text-sm lg:text-base">
          <RouterLink to="/" class="hover:text-yellow-500 transition-colors">Home</RouterLink>
        </nav>

        <div class="relative">
          <!-- Cart Button -->
          <CommonButton
            pre-icon="mdi:cart"
            :to="'/cart'"
            tag="router-link"
            label="Cart"
            :size="10"
          />

          <!-- Cart Badge -->
          <CommonBadge
            v-if="cartStore.totalItems > 0"
            :label="cartStore.totalItems.toString()"
            class="absolute -top-1 -right-1"
          />
        </div>
      </div>
    </AppContainer>
  </header>
</template>
