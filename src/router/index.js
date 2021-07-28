import Vue from "vue";
import VueRouter from "vue-router";
import checkKey from "@/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/shares",
    name: "Shares",
    component: () => import("@/views/Shares.vue"),
  },
  {
    path: "/share/:id",
    name: "Share",
    component: () => import("@/views/Share.vue"),
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: () => import("@/views/Jobs.vue"),
  },
  {
    path: "*",
    name: "Error",
    component: () => import("@/views/Error.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (checkKey()) {
    next();
  } else {
    next("/login");
  }
});

export default router;
