import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { type EcwidProduct } from "@/api/product.types";

export interface CartItem {
  product: EcwidProduct;
  quantity: number;
}

export const useCartStore = defineStore(
  "cart",
  () => {
    const items = ref<CartItem[]>([]);

    // Add item to cart
    const addItem = (product: EcwidProduct, quantity: number = 1) => {
      const existingItem = items.value.find((item) => item.product.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        items.value.push({ product, quantity });
      }
    };

    // Remove item from cart
    const removeItem = (productId: number) => {
      const index = items.value.findIndex((item) => item.product.id === productId);
      if (index > -1) {
        items.value.splice(index, 1);
      }
    };

    // Update item quantity
    const updateQuantity = (productId: number, quantity: number) => {
      const item = items.value.find((item) => item.product.id === productId);
      if (item) {
        if (quantity <= 0) {
          removeItem(productId);
        } else {
          item.quantity = quantity;
        }
      }
    };

    // Check if item is in cart
    const isInCart = (productId: number) => {
      return items.value.some((item) => item.product.id === productId);
    };

    // Clear cart
    const clearCart = () => {
      items.value = [];
    };

    // Computed properties
    const totalItems = computed(() =>
      items.value.reduce((total, item) => total + item.quantity, 0),
    );

    const totalPrice = computed(() =>
      items.value.reduce((total, item) => total + item.product.price * item.quantity, 0),
    );

    const isEmpty = computed(() => items.value.length === 0);

    const totalTax = computed(() =>
      items.value.reduce(
        (total, item) =>
          total +
          item.product.price *
            item.quantity *
            ((item.product.tax?.defaultLocationIncludedTaxRate ?? 0) / 100),
        0,
      ),
    );

    return {
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isInCart,
      totalItems,
      totalPrice,
      totalTax,
      isEmpty,
    };
  },
  {
    persist: true,
  },
);
