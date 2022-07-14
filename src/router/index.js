import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "result",
      component: () => import("../views/ResultView.vue"),
    },
    {
      path: "/favspoke",
      name: "favspoke",
      component: () => import("../views/FavsPokeView.vue"),
    },
  ],
});

export default router;
