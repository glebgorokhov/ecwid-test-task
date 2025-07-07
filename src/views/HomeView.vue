<script setup lang="ts">
import { storeToRefs } from "pinia";

import AppContainer from "@/components/app/AppContainer.vue";
import { useCategoriesStore } from "@/stores/categories";

const { categories } = storeToRefs(useCategoriesStore());
</script>

<template>
  <main class="py-10">
    <AppContainer>
      <div v-if="categories">
        <h1>Categories</h1>
        <ul>
          <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
        </ul>
      </div>
    </AppContainer>
  </main>
</template>
