<script setup lang="ts">
import { computed } from "vue";

import CommonButton from "@/components/common/CommonButton.vue";
import { type CartItem, useCartStore } from "@/stores/cart";
import { formatPrice } from "@/utils/price";
import { generateProductUrl } from "@/utils/product";

interface Props {
  item: CartItem;
}

const { item } = defineProps<Props>();

const cartStore = useCartStore();

const itemTotal = computed(() => item.product.price * item.quantity);

const handleQuantityChange = (newQuantity: number) => {
  cartStore.updateQuantity(item.product.id, newQuantity);
};

const handleRemove = () => {
  cartStore.removeItem(item.product.id);
};
</script>

<template>
  <div class="flex items-start gap-4 lg:gap-6">
    <!-- Product Image -->
    <RouterLink
      :to="generateProductUrl(item.product)"
      class="w-16 lg:w-20 rounded-xl overflow-hidden shrink-0 block group"
    >
      <div class="relative pb-[160%]">
        <img
          v-if="item.product.imageUrl"
          :src="item.product.imageUrl"
          :alt="item.product.name"
          class="w-0 min-w-full min-h-full object-cover absolute inset-0 m-auto group-hover:scale-105 transition-transform"
        />
      </div>
    </RouterLink>

    <!-- Product Info -->
    <div class="flex-1">
      <!-- Item Total (mobile) -->
      <div class="text-left min-w-0 lg:hidden">
        <p class="text-sm font-semibold tracking-wide text-slate-950 mb-1">
          {{ formatPrice(itemTotal) }}
        </p>
      </div>

      <!-- Product Name -->
      <h3
        class="text-base lg:text-lg uppercase tracking-wide font-semibold text-slate-950 leading-[1.3]"
      >
        <RouterLink
          :to="generateProductUrl(item.product)"
          class="hover:text-slate-700 transition-colors"
        >
          {{ item.product.name }}
        </RouterLink>
      </h3>

      <ul
        class="flex items-center gap-x-3 lg:gap-x-4 gap-y-1 flex-wrap text-xs lg:text-sm text-slate-600 mt-2 lg:mt-1.5"
      >
        <li>
          SKU: <span class="text-slate-950">{{ item.product.sku }}</span>
        </li>
        <li>
          Price: <span class="text-slate-950">{{ formatPrice(item.product.price) }}</span> per item
        </li>
      </ul>

      <div class="flex items-center gap-3 mt-4">
        <!-- Quantity Controls -->
        <div class="flex items-center bg-slate-100 rounded-2xl overflow-hidden">
          <CommonButton
            aria-label="Decrease Quantity"
            post-icon="mdi:minus"
            square
            :size="10"
            bg-color-class="bg-slate-100 hover:bg-slate-200"
            text-color-class="text-slate-700"
            @click="handleQuantityChange(item.quantity - 1)"
            :disabled="item.quantity <= 1"
            type="button"
          />

          <span class="w-10 text-center font-semibold text-slate-950">
            {{ item.quantity }}
          </span>

          <CommonButton
            aria-label="Increase Quantity"
            post-icon="mdi:plus"
            square
            :size="10"
            bg-color-class="bg-slate-100 hover:bg-slate-200"
            text-color-class="text-slate-700"
            @click="handleQuantityChange(item.quantity + 1)"
            :disabled="!item.product.inStock"
            type="button"
          />
        </div>

        <!-- Remove Button -->
        <CommonButton
          aria-label="Remove Item"
          :size="10"
          bg-color-class="bg-red-100 hover:bg-red-200"
          text-color-class="text-red-700"
          @click="handleRemove"
          post-icon="mdi:trash-can-outline"
          square
        />
      </div>
    </div>

    <!-- Item Total -->
    <div class="hidden lg:block text-right min-w-0">
      <p class="text-lg font-semibold tracking-wide text-slate-950">
        {{ formatPrice(itemTotal) }}
      </p>
    </div>
  </div>
</template>
