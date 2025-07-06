<script setup lang="ts">
import { RouterView } from "vue-router";

import AppFooter from "./components/app/AppFooter.vue";
import AppHeader from "./components/app/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>
