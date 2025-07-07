<script setup lang="ts">
import { computed, provide } from "vue";

import { type EcwidProduct } from "@/api/product.types";
import { formatPrice } from "@/utils/price";

import CommonButton from "../common/CommonButton.vue";
import CommonSkeleton from "../common/CommonSkeleton.vue";
import CommonSkeletonText from "../common/CommonSkeletonText.vue";

type ProductCardProps = {
  product?: EcwidProduct;
};

const { product } = defineProps<ProductCardProps>();
const isLoading = computed(() => !product);

provide("loading", isLoading);
</script>

<template>
  <div class="bg-white rounded-4xl relative overflow-hidden">
    <!-- Image -->
    <div class="pb-[160%] relative">
      <CommonSkeleton class="absolute inset-0" rounded-class="rounded-[inherit]">
        <img
          :src="product?.imageUrl"
          :alt="product?.name"
          class="w-0 min-w-full min-h-full object-cover absolute inset-0 m-auto"
        />
      </CommonSkeleton>
    </div>

    <!-- Data -->
    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-amber-50 to-amber-500/0 p-5">
      <p class="text-base text-slate-950 font-medium">
        <CommonSkeletonText :random="false" :lines="1" class="w-20" rounded-class="rounded-md">
          {{ formatPrice(product?.price ?? 0) }}
        </CommonSkeletonText>
      </p>
      <h3
        class="text-lg font-semibold uppercase tracking-wide leading-[1.4] text-slate-950 mt-0.5 line-clamp-2"
      >
        <CommonSkeletonText :lines="2" rounded-class="rounded-md">
          {{ product?.name }}
        </CommonSkeletonText>
      </h3>
      <div class="mt-3">
        <CommonSkeleton class="w-full" rounded-class="rounded-2xl h-11">
          <CommonButton label="Add to cart" class="w-full" post-icon="mdi:cart-plus" />
        </CommonSkeleton>
      </div>
    </div>
  </div>
</template>
