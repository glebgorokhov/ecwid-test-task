<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, defineProps, withDefaults } from "vue";

type CommonButtonProps = {
  label?: string;
  postIcon?: string;
  preIcon?: string;
  square?: boolean;
  roundedClass?: string;
  size?: 11 | 10;
  bgColorClass?: string;
  textColorClass?: string;
  tag?: string;
  disabled?: boolean;
};

function generateSizeClass(
  widthClass: string,
  heightClass: string,
  paddingClass: string,
  gapClass: string,
  textPaddingClass: string,
  iconClass: string,
) {
  return {
    widthClass,
    heightClass,
    paddingClass,
    gapClass,
    textPaddingClass,
    iconClass,
  };
}

const sizes = {
  11: generateSizeClass("w-11", "h-11", "px-4", "gap-1.5", "px-1", "w-5 h-5"),
  10: generateSizeClass("w-10", "h-10", "px-3", "gap-1", "px-0.5", "w-5 h-5"),
};

const props = withDefaults(defineProps<CommonButtonProps>(), {
  roundedClass: "rounded-2xl",
  size: 11,
  bgColorClass: "bg-yellow-300",
  textColorClass: "text-slate-950",
  tag: "button",
  disabled: false,
});

const sizeClasses = computed(() => sizes[props.size]);
</script>

<template>
  <component
    :is="tag"
    :class="[
      square ? sizeClasses.widthClass : sizeClasses.paddingClass,
      sizeClasses.heightClass,
      roundedClass,
      bgColorClass,
      textColorClass,
    ]"
    class="flex justify-center border border-transparent transition-colors"
  >
    <div
      :class="[
        sizeClasses.gapClass,
        sizeClasses.textPaddingClass,
        'flex items-center justify-center',
      ]"
    >
      <Icon v-if="preIcon" :icon="preIcon" :class="sizeClasses.iconClass" />
      <span
        v-if="label"
        :class="sizeClasses.textPaddingClass"
        class="uppercase tracking-wide font-semibold text-sm"
        >{{ label }}</span
      >
      <Icon v-if="postIcon" :icon="postIcon" :class="sizeClasses.iconClass" />
    </div>
  </component>
</template>
