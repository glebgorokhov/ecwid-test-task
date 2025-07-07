<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";

type CommonBreadcrumbsProps = {
  items: {
    label: string;
    href: string;
  }[];
};

defineProps<CommonBreadcrumbsProps>();
</script>

<template>
  <div class="flex items-center gap-2">
    <template v-for="(item, index) in items" :key="item.label">
      <component
        :is="index === items.length - 1 ? 'span' : RouterLink"
        :to="index === items.length - 1 ? undefined : item.href"
        :class="[
          'text-sm text-slate-500 ',
          {
            'hover:text-slate-950 transition-colors': index < items.length - 1,
          },
        ]"
      >
        {{ item.label }}
      </component>
      <Icon
        v-if="index !== items.length - 1"
        class="text-gray-500"
        aria-label="Breadcrumb separator"
        icon="mdi:chevron-right"
      />
    </template>
  </div>
</template>
