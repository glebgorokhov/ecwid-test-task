<script setup lang="ts">
import { computed, provide } from "vue";
import { useRoute } from "vue-router";

import AppContainer from "@/components/app/AppContainer.vue";
import ProductBreadcrumbs from "@/components/product/ProductBreadcrumbs.vue";
import ProductGallery from "@/components/product/ProductGallery.vue";
import ProductInfo from "@/components/product/ProductInfo.vue";
import { useProductStore } from "@/stores/product";

const route = useRoute();
const productStore = useProductStore();

const productId = computed(() => Number(route.params.id));

const { data: product, isLoading: productLoading } = productStore.getProductById(productId.value);

// Provide loading state to child components
provide("loading", productLoading);

// Computed for easier access
const currentProduct = computed(() => product.value);
</script>

<template>
  <main class="pt-7 pb-12">
    <AppContainer>
      <!-- Breadcrumbs -->
      <ProductBreadcrumbs :product="currentProduct" class="mb-6" />

      <!-- Product Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Gallery -->
        <div>
          <ProductGallery :product="currentProduct" />
        </div>

        <!-- Product Info -->
        <div>
          <ProductInfo :product="currentProduct" />
        </div>
      </div>
    </AppContainer>
  </main>
</template>
