import "@fontsource-variable/figtree";
import "./style.css";

import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Head management
const head = createHead({
  titleTemplate: "%s - Ecwid Store",
});
app.use(head);

// Pinia
const pinia = createPinia();
pinia.use(createPersistedState());
app.use(pinia);

// Vue Query
const queryClient = new QueryClient();
app.use(VueQueryPlugin, { queryClient });

// Router
app.use(router);

app.mount("#app");
