<script setup lang="ts">
import { computed, provide, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import AppContainer from "@/components/app/AppContainer.vue";
import ProductBreadcrumbs from "@/components/product/ProductBreadcrumbs.vue";
import ProductGallery from "@/components/product/ProductGallery.vue";
import ProductInfo from "@/components/product/ProductInfo.vue";
import { useProductStore } from "@/stores/product";
import { extractProductIdFromUrl } from "@/utils/product";

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();

const productId = computed(() => {
  return extractProductIdFromUrl(route.fullPath) || 0;
});

const {
  data: product,
  isLoading: productLoading,
  error: productError,
} = productStore.getProductById(productId.value);

// Watch for errors and redirect to NotFound
watch(productError, (error) => {
  if (error && !productLoading.value) {
    router.push({ name: "not-found" });
  }
});

// Watch for product data - if no product found after loading, redirect to NotFound
watch([product, productLoading], ([newProduct, loading]) => {
  if (!loading && !newProduct && productId.value > 0) {
    router.push({ name: "not-found" });
  }
});

provide("loading", productLoading);
</script>

<template>
  <main class="pt-7 pb-12">
    <AppContainer>
      <!-- Breadcrumbs -->
      <ProductBreadcrumbs :product="product" class="mb-6" />

      <!-- Product Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Gallery -->
        <div>
          <ProductGallery :product="product" />
        </div>

        <!-- Product Info -->
        <div>
          <ProductInfo :product="product" />
        </div>
      </div>
    </AppContainer>
  </main>
</template>
