<script setup lang="ts">
import { type EcwidProduct } from "@/api/product.types";
import { formatPrice } from "@/utils/price";

import CommonButton from "../common/CommonButton.vue";

type ProductCardProps = {
  product: EcwidProduct;
};

defineProps<ProductCardProps>();
</script>

<template>
  <div class="bg-white rounded-4xl relative overflow-hidden">
    <!-- Image -->
    <div class="pb-[160%] relative">
      <img
        :src="product.imageUrl"
        :alt="product.name"
        class="w-0 min-w-full min-h-full object-cover absolute inset-0 m-auto"
      />
    </div>

    <!-- Data -->
    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-amber-50 to-amber-500/0 p-5">
      <p class="text-base text-slate-950 font-medium">
        {{ formatPrice(product.price) }}
      </p>
      <h3
        class="text-lg font-semibold uppercase tracking-wide leading-[1.4] text-slate-950 mt-0.5 line-clamp-2"
      >
        {{ product.name }}
      </h3>
      <CommonButton label="Add to cart" class="w-full mt-3" post-icon="mdi:cart-plus" />
    </div>
  </div>
</template>
