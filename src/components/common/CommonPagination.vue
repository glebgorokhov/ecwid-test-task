<script setup lang="ts">
import { computed } from "vue";

import CommonButton from "./CommonButton.vue";

interface CommonPaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  loading?: boolean;
  totalItems?: number;
}

const props = defineProps<CommonPaginationProps>();

const pages = computed(() => {
  const pages: Array<{ page: number; isEllipsis: boolean }> = [];
  const maxVisiblePages = 5;

  if (props.totalPages <= maxVisiblePages) {
    // Show all pages if total is small
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push({ page: i, isEllipsis: false });
    }
  } else {
    // Show first page
    pages.push({ page: 1, isEllipsis: false });

    if (props.currentPage > 3) {
      pages.push({ page: 0, isEllipsis: true });
    }

    // Show pages around current page
    const start = Math.max(2, props.currentPage - 1);
    const end = Math.min(props.totalPages - 1, props.currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push({ page: i, isEllipsis: false });
    }

    if (props.currentPage < props.totalPages - 2) {
      pages.push({ page: 0, isEllipsis: true });
    }

    // Show last page
    if (props.totalPages > 1) {
      pages.push({ page: props.totalPages, isEllipsis: false });
    }
  }

  return pages;
});

const hasPrevious = computed(() => props.currentPage > 1);
const hasNext = computed(() => props.currentPage < props.totalPages);

const getPageUrl = (page: number) => {
  if (page === 1) {
    return props.baseUrl;
  }
  return `${props.baseUrl}?page=${page}`;
};

function generateButtonClasses(bgColorClass: string, textColorClass: string) {
  return {
    bgColorClass,
    textColorClass,
  };
}

const activeButtonClasses = generateButtonClasses("bg-yellow-300", "text-slate-950");
const inactiveButtonClasses = generateButtonClasses(
  "bg-slate-200 hover:bg-slate-300",
  "text-slate-600",
);
const disabledButtonClasses = generateButtonClasses("bg-slate-50", "text-slate-400");

function getButtonClasses(isActive: boolean, isDisabled: boolean) {
  if (isDisabled) {
    return disabledButtonClasses;
  }

  return isActive ? activeButtonClasses : inactiveButtonClasses;
}
</script>

<template>
  <div class="flex flex-col lg:flex-row items-center justify-between gap-3">
    <!-- Total items -->
    <div class="text-sm text-slate-600">
      {{ totalItems || 0 }} item{{ totalItems === 1 ? "" : "s" }} found on
      {{ totalPages || 0 }} page{{ totalPages === 1 ? "" : "s" }}
    </div>

    <!-- Buttons -->
    <div class="flex items-center justify-center gap-2">
      <!-- Previous button -->
      <CommonButton
        :tag="hasPrevious ? 'RouterLink' : 'div'"
        aria-label="Previous page"
        pre-icon="mdi:chevron-left"
        :disabled="loading"
        :size="10"
        type="button"
        :bg-color-class="getButtonClasses(false, !hasPrevious).bgColorClass"
        :text-color-class="getButtonClasses(false, !hasPrevious).textColorClass"
        :square="true"
        rounded-class="rounded-xl"
        :to="getPageUrl(currentPage - 1)"
      />

      <!-- Page numbers -->
      <template v-for="(pageItem, index) in pages" :key="index">
        <CommonButton
          :tag="!pageItem.isEllipsis ? 'router-link' : 'div'"
          :to="getPageUrl(pageItem.page)"
          :label="pageItem.isEllipsis ? '...' : pageItem.page.toString()"
          :square="true"
          rounded-class="rounded-xl"
          :disabled="loading"
          :size="10"
          :bg-color-class="getButtonClasses(pageItem.page === currentPage, false).bgColorClass"
          :text-color-class="getButtonClasses(pageItem.page === currentPage, false).textColorClass"
        />
      </template>

      <!-- Next button -->
      <CommonButton
        :tag="hasNext ? 'router-link' : 'div'"
        :to="getPageUrl(currentPage + 1)"
        :square="true"
        rounded-class="rounded-xl"
        :disabled="loading"
        pre-icon="mdi:chevron-right"
        :size="10"
        :bg-color-class="getButtonClasses(false, !hasNext).bgColorClass"
        :text-color-class="getButtonClasses(false, !hasNext).textColorClass"
      />
    </div>
  </div>
</template>
