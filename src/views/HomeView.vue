<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { useHead } from "@vueuse/head";
import { storeToRefs } from "pinia";

import { ecwidApi } from "@/api";
import { EcwidProductSortBy } from "@/api/product.types";
import AppContainer from "@/components/app/AppContainer.vue";
import CategoryCard from "@/components/category/CategoryCard.vue";
import HomeSection from "@/components/home/HomeSection.vue";
import ProductCard from "@/components/product/ProductCard.vue";
import { useCategoriesStore } from "@/stores/categories";

const categoriesStore = useCategoriesStore();
const { hierarchicalCategories, categoriesLoading } = storeToRefs(categoriesStore);

// Featured Products Query
const { data: featuredProducts, isLoading: productsLoading } = useQuery({
  queryKey: ["featured-products"],
  queryFn: () =>
    ecwidApi.product.list({
      visibleInStorefront: true,
      enabled: true,
      limit: 8,
      sortBy: EcwidProductSortBy.DEFINED_BY_STORE_OWNER,
    }),
});

useHead({
  title: "Home",
});
</script>

<template>
  <main class="pt-16 pb-24">
    <AppContainer class="space-y-16">
      <!-- Categories Section -->
      <HomeSection
        title="Shop by Category"
        description="Explore our curated collection of products"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard
            v-for="(category, categoryIndex) in !categoriesLoading
              ? hierarchicalCategories
              : Array(2).fill(null)"
            :key="category?.id ?? categoryIndex"
            :category="category"
          />
        </div>
      </HomeSection>

      <!-- Featured Products Section -->
      <HomeSection title="Featured Products" description="Discover our most popular items">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard
            v-for="(product, productIndex) in productsLoading
              ? Array(8).fill(null)
              : featuredProducts?.data.items"
            :key="product?.id ?? productIndex"
            :product="product"
          />
        </div>
      </HomeSection>
    </AppContainer>
  </main>
</template>
