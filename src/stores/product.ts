import { useQuery } from "@tanstack/vue-query";
import { defineStore } from "pinia";
import { ref } from "vue";

import { ecwidApi } from "@/api";
import type { EcwidProduct } from "@/api/product.types";

export const useProductStore = defineStore(
  "product",
  () => {
    const currentProduct = ref<EcwidProduct | null>(null);

    const getProductById = (id: number) => {
      return useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
          const response = await ecwidApi.product.getById(id);
          currentProduct.value = response.data;
          return response.data;
        },
        enabled: !!id,
      });
    };

    return {
      currentProduct,
      getProductById,
    };
  },
  {
    persist: true,
  },
);
