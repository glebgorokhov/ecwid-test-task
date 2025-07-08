<script setup lang="ts">
import { computed, provide } from "vue";
import { RouterLink } from "vue-router";

import { type EcwidProduct } from "@/api/product.types";
import { useCartStore } from "@/stores/cart";
import { formatPrice } from "@/utils/price";
import { generateProductUrl } from "@/utils/product";

import CommonButton from "../common/CommonButton.vue";
import CommonSkeleton from "../common/CommonSkeleton.vue";
import CommonSkeletonText from "../common/CommonSkeletonText.vue";

type ProductCardProps = {
  product?: EcwidProduct;
};

const { product } = defineProps<ProductCardProps>();
const isLoading = computed(() => !product);
const { addItem, isInCart } = useCartStore();

provide("loading", isLoading);

const handleAddToCart = () => {
  if (product) {
    addItem(product, 1);
  }
};
</script>

<template>
  <div class="bg-white rounded-4xl relative overflow-hidden group">
    <!-- Image -->
    <div class="pb-[160%] relative">
      <CommonSkeleton class="absolute inset-0" rounded-class="rounded-[inherit]">
        <img
          :src="product?.imageUrl"
          :alt="product?.name"
          class="w-0 min-w-full min-h-full object-cover absolute inset-0 m-auto transition-transform group-hover:scale-105"
        />
      </CommonSkeleton>
    </div>

    <!-- Link -->
    <RouterLink
      v-if="product"
      :to="generateProductUrl(product)"
      class="absolute inset-0"
      aria-label="Open Product Page"
    ></RouterLink>

    <!-- Data -->
    <div
      class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-amber-50 to-amber-500/0 p-5 pointer-events-none"
    >
      <!-- Price -->
      <p class="text-base text-slate-950 font-medium">
        <CommonSkeletonText :random="false" :lines="1" class="w-20" rounded-class="rounded-md">
          {{ formatPrice(product?.price ?? 0) }}
        </CommonSkeletonText>
      </p>

      <!-- Name -->
      <h3
        class="text-lg font-semibold uppercase tracking-wide leading-[1.4] text-slate-950 mt-0.5 line-clamp-2"
      >
        <CommonSkeletonText :lines="2" rounded-class="rounded-md">
          {{ product?.name }}
        </CommonSkeletonText>
      </h3>

      <!-- Add to cart -->
      <div class="mt-3">
        <CommonSkeleton class="w-full" rounded-class="rounded-2xl h-11">
          <CommonButton
            v-if="!isInCart(product?.id ?? 0)"
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
  </div>
</template>
