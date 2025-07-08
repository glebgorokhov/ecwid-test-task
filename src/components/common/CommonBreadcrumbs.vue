<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { computed, provide } from "vue";
import { RouterLink } from "vue-router";

import CommonSkeletonText from "./CommonSkeletonText.vue";

type CommonBreadcrumbsProps = {
  items: {
    label: string;
    href: string;
  }[];
  loading?: boolean;
};

const props = defineProps<CommonBreadcrumbsProps>();

const isLoading = computed(() => props.loading);
const computedItems = computed(() =>
  props.loading
    ? Array(2).fill({})
    : [
        {
          label: "Home",
          href: "/",
        },
        ...props.items,
      ],
);

provide("loading", isLoading);
</script>

<template>
  <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
    <template v-for="(item, index) in computedItems" :key="item.label">
      <component
        :is="index === computedItems.length - 1 ? 'span' : RouterLink"
        :to="index === computedItems.length - 1 ? undefined : item.href || undefined"
        :class="[
          'text-sm text-slate-500 ',
          {
            'hover:text-slate-950 transition-colors': index < computedItems.length - 1,
          },
        ]"
      >
        <CommonSkeletonText :random="false" :lines="1" class="w-30" rounded-class="rounded-md">
          {{ item.label }}
        </CommonSkeletonText>
      </component>
      <Icon
        v-if="index !== computedItems.length - 1"
        class="text-gray-500"
        aria-label="Breadcrumb separator"
        icon="mdi:chevron-right"
      />
    </template>
  </div>
</template>
