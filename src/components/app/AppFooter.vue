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
    href: "https://x.com/ecwid",
    label: "Follow us on X",
  },
];
</script>

<template>
  <footer class="bg-slate-50 text-slate-500 py-6 lg:py-10">
    <AppContainer>
      <div
        class="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-4 lg:gap-10"
      >
        <!-- Logo -->
        <RouterLink to="/" class="flex h-6 transition-colors hover:text-slate-950">
          <EcwidLogo class="h-full" />
        </RouterLink>

        <!-- Categories -->
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center lg:items-start">
          <!-- Copyright -->
          <p class="text-sm">&copy; {{ new Date().getFullYear() }} Ecwid. All rights reserved.</p>

          <!-- Socials -->
          <div class="flex items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.icon"
              :href="social.href"
              target="_blank"
              class="flex h-5 w-5 hover:text-slate-950 transition-colors"
              :aria-label="social.label"
            >
              <Icon :icon="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </AppContainer>
  </footer>
</template>
