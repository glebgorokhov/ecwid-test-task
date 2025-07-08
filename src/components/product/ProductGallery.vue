<script setup lang="ts">
import { computed, provide, ref } from "vue";

import { type EcwidProduct } from "@/api/product.types";
import CommonSkeleton from "@/components/common/CommonSkeleton.vue";

interface Props {
  product?: EcwidProduct;
}

const { product } = defineProps<Props>();

const isLoading = computed(() => !product);

provide("loading", isLoading);

const images = computed(() => {
  if (!product) {
    return [null, null, null, null];
  }

  return product.media?.images ?? [];
});

// Selected image index
const selectedImageIndex = ref(0);

// Main image
const mainImage = computed(() => images.value[selectedImageIndex.value] || images.value[0] || null);

// Handle thumbnail click
const handleThumbnailClick = (index: number) => {
  selectedImageIndex.value = index;
};
</script>

<template>
  <div class="space-y-4">
    <!-- Main Image -->
    <div class="pb-[160%] relative rounded-2xl overflow-hidden">
      <CommonSkeleton class="w-full h-full absolute inset-0" rounded-class="">
        <img
          v-if="mainImage"
          :src="mainImage.image1500pxUrl"
          :alt="product?.name"
          class="w-0 min-w-full min-h-full object-cover absolute inset-0 m-auto"
        />
      </CommonSkeleton>
    </div>

    <!-- Thumbnail Gallery -->
    <div v-if="images.length > 1" class="grid grid-cols-4 gap-4">
      <div
        v-for="(image, index) in images.slice(0, 4)"
        :key="image?.id ?? index"
        class="aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all relative"
        :class="[
          selectedImageIndex === index
            ? 'ring-2 ring-yellow-400 ring-offset-2'
            : 'hover:opacity-80',
        ]"
        @click="handleThumbnailClick(index)"
      >
        <CommonSkeleton class="w-full h-full absolute inset-0" rounded-class="">
          <img
            v-if="image"
            :src="image.image400pxUrl"
            :alt="product?.name"
            class="w-0 min-w-full min-h-full object-cover absolute inset-0 m-auto"
          />
        </CommonSkeleton>
      </div>
    </div>
  </div>
</template>
