<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";

import EcwidLogo from "../icons/EcwidLogo.vue";
import AppContainer from "./AppContainer.vue";
</script>

<template>
  <header class="flex items-center justify-center h-17 bg-amber-50">
    <AppContainer class="flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex h-7">
        <EcwidLogo class="h-full" />
      </RouterLink>

      <div class="flex items-center gap-5">
        <!-- Navigation -->
        <nav class="text-base">
          <RouterLink to="/">Categories</RouterLink>
        </nav>

        <!-- Cart -->
        <RouterLink to="/cart" class="flex">
          <Icon icon="mdi:cart" class="h-5 w-5" />
        </RouterLink>
      </div>
    </AppContainer>
  </header>
</template>
