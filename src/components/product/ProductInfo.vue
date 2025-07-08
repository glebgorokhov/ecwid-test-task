<script setup lang="ts">
import { computed, provide } from "vue";

import { type EcwidProduct } from "@/api/product.types";
import CommonButton from "@/components/common/CommonButton.vue";
import CommonSkeleton from "@/components/common/CommonSkeleton.vue";
import CommonSkeletonText from "@/components/common/CommonSkeletonText.vue";
import { useCartStore } from "@/stores/cart";
import { formatPrice } from "@/utils/price";

interface Props {
  product?: EcwidProduct;
}

const { product } = defineProps<Props>();
const cartStore = useCartStore();

const isLoading = computed(() => !product);

provide("loading", isLoading);

const handleAddToCart = () => {
  if (product) {
    cartStore.addItem(product, 1);
  }
};
</script>

<template>
  <div class="space-y-4">
    <!-- Product Name -->
    <h1 class="text-4xl leading-[1.3] font-semibold uppercase tracking-wide text-slate-950">
      <CommonSkeletonText :lines="2" rounded-class="rounded-md">
        {{ product?.name }}
      </CommonSkeletonText>
    </h1>

    <!-- Price -->
    <p class="text-2xl font-semibold text-slate-950">
      <CommonSkeletonText :random="false" :lines="1" class="w-24" rounded-class="rounded-md">
        {{ formatPrice(product?.price ?? 0) }}
      </CommonSkeletonText>
    </p>

    <!-- Description -->
    <div
      v-if="isLoading || product?.description"
      class="text-base text-slate-950 leading-relaxed space-y-3"
    >
      <CommonSkeletonText :lines="5">
        <div v-html="product?.description" class="space-y-3"></div>
      </CommonSkeletonText>
      <CommonSkeletonText :lines="2" v-if="isLoading" />
      <CommonSkeletonText :lines="3" v-if="isLoading" />
      <CommonSkeletonText :lines="4" v-if="isLoading" />
    </div>

    <!-- Add to Cart Button -->
    <div class="pt-3">
      <CommonSkeleton class="w-full" rounded-class="rounded-2xl h-11">
        <CommonButton
          v-if="!cartStore.isInCart(product?.id ?? 0)"
          label="Add to cart"
          class="w-full pointer-events-auto transform-3d"
          post-icon="mdi:cart-plus"
          @click="handleAddToCart"
          type="button"
        />
        <CommonButton
          v-else
          label="In cart"
          class="w-full pointer-events-auto transform-3d"
          post-icon="mdi:cart-check"
          to="/cart"
          tag="router-link"
          bg-color-class="bg-green-400 hover:bg-green-500"
          text-color-class="text-green-950"
        />
      </CommonSkeleton>
    </div>
  </div>
</template>
