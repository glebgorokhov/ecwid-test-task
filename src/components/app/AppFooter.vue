<script setup lang="ts">
import { Icon } from "@iconify/vue";

import EcwidLogo from "../icons/EcwidLogo.vue";
import AppContainer from "./AppContainer.vue";

const socials = [
  {
    icon: "mdi:facebook",
    href: "https://www.facebook.com/ecwid",
    label: "Follow us on Facebook",
  },
  {
    icon: "mdi:instagram",
    href: "https://www.instagram.com/ecwid",
    label: "Follow us on Instagram",
  },
  {
    icon: "mdi:twitter",
    href: "https://www.twitter.com/ecwid",
    label: "Follow us on Twitter",
  },
];

const categoryColumns = [
  {
    title: "Category 1",
    items: [
      {
        title: "Subcategory 1",
        href: "/subcategory/1",
      },
      {
        title: "Subcategory 2",
        href: "/subcategory/2",
      },
    ],
  },
  {
    title: "Category 2",
    items: [
      {
        title: "Subcategory 3",
        href: "/subcategory/3",
      },
      {
        title: "Subcategory 4",
        href: "/subcategory/4",
      },
    ],
  },
];
</script>

<template>
  <footer class="border-t border-slate-200">
    <AppContainer>
      <div class="flex items-start justify-between py-12">
        <!-- Logo -->
        <RouterLink to="/" class="flex h-6">
          <EcwidLogo class="h-full text-slate-600" />
        </RouterLink>

        <!-- Categories -->
        <div class="flex items-startr gap-8">
          <div v-for="column in categoryColumns" :key="column.title">
            <h3 class="text-sm tracking-wide font-semibold uppercase text-slate-950">
              <RouterLink :to="`/category/`" class="text-slate-950 transition-colors">
                {{ column.title }}
              </RouterLink>
            </h3>
            <ul class="mt-2.5 space-y-1">
              <li v-for="item in column.items" :key="item.title">
                <RouterLink
                  :to="item.href"
                  class="text-sm text-slate-500 hover:text-slate-950 transition-colors"
                >
                  {{ item.title }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="flex items-center justify-between gap-4 border-t border-slate-200 py-10">
        <!-- Copyright -->
        <p class="text-sm text-slate-500">
          &copy; {{ new Date().getFullYear() }} Ecwid. All rights reserved.
        </p>

        <!-- Socials -->
        <div class="flex items-center gap-4">
          <a
            v-for="social in socials"
            :key="social.icon"
            :href="social.href"
            target="_blank"
            class="flex h-5 w-5 text-slate-500 hover:text-slate-950 transition-colors"
            :aria-label="social.label"
          >
            <Icon :icon="social.icon" class="h-5 w-5" />
          </a>
        </div>
      </div>
    </AppContainer>
  </footer>
</template>
