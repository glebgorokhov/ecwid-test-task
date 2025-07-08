<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useRouter } from "vue-router";

import AppContainer from "@/components/app/AppContainer.vue";
import CartItem from "@/components/cart/CartItem.vue";
import CommonBreadcrumbs from "@/components/common/CommonBreadcrumbs.vue";
import CommonButton from "@/components/common/CommonButton.vue";
import { useCartStore } from "@/stores/cart";
import { formatPrice } from "@/utils/price";

const router = useRouter();
const cartStore = useCartStore();

const handleCheckout = () => {
  // Clear cart and navigate to thank you page
  cartStore.clearCart();
  router.push("/thank-you");
};

useHead({
  title: "Shopping Cart",
});

const summarySections = computed(() => {
  return [
    {
      label: `Items (${cartStore.totalItems})`,
      total: formatPrice(cartStore.totalPrice),
    },
    {
      label: `Tax (incl.)`,
      total: formatPrice(cartStore.totalTax),
    },
  ];
});
</script>

<template>
  <main class="pt-7 pb-12">
    <AppContainer>
      <!-- Breadcrumbs -->
      <CommonBreadcrumbs :items="[{ label: 'Shopping Cart', href: '/cart' }]" class="mb-4" />

      <!-- Header -->
      <h1 class="text-5xl font-semibold uppercase tracking-wide text-slate-950 mb-8">
        Shopping Cart
      </h1>

      <!-- Empty State -->
      <div v-if="cartStore.isEmpty" class="text-center py-12 bg-slate-50 rounded-3xl">
        <Icon icon="mdi:emoticon-sad-outline" class="w-16 h-16 text-slate-600 mx-auto mb-4" />
        <h2 class="text-2xl font-semibold uppercase tracking-wide text-slate-950 mb-2">
          Your cart is empty
        </h2>
        <p class="text-slate-600 mb-6">Start shopping to add items to your cart!</p>
        <div class="flex justify-center">
          <CommonButton
            label="Continue Shopping"
            tag="router-link"
            to="/"
            post-icon="mdi:arrow-right"
          />
        </div>
      </div>

      <!-- Cart Has Items -->
      <div v-else class="grid grid-cols-[1fr_22rem] gap-12">
        <!-- Cart Items -->
        <div>
          <CartItem
            v-for="item in cartStore.items"
            :key="item.product.id"
            :item="item"
            class="not-first:pt-7 not-first:border-t not-first:border-slate-200 not-last:pb-7"
          />
        </div>

        <!-- Cart Summary - Right Column (1/3 width, sticky) -->
        <div>
          <div class="lg:sticky lg:top-8">
            <div class="bg-slate-100 rounded-2xl p-5">
              <!-- Summary Sections -->
              <div class="space-y-3">
                <div
                  v-for="section in summarySections"
                  :key="section.label"
                  class="flex justify-between items-center"
                >
                  <span class="text-base text-slate-600">{{ section.label }}</span>
                  <span class="text-base font-semibold text-slate-950 tracking-wide">
                    {{ section.total }}
                  </span>
                </div>
              </div>

              <!-- Summary Final Section -->
              <div class="border-t border-slate-300 pt-4 mt-4">
                <div class="flex justify-between items-center">
                  <span class="text-xl uppercase tracking-wide font-semibold text-slate-950"
                    >Total</span
                  >
                  <span class="text-2xl font-semibold text-slate-950 tracking-wide">
                    {{ formatPrice(cartStore.totalPrice) }}
                  </span>
                </div>
              </div>

              <CommonButton
                label="Place Order"
                class="w-full mt-4"
                post-icon="mdi:arrow-right"
                @click="handleCheckout"
              />
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </main>
</template>
