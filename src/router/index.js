import Vue from "vue";
import VueRouter from "vue-router";
import FrontIndex from "../views/front/Index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: FrontIndex
  },
  {
    path: "/manager",
    name: "Manager",
    component: () =>
      import("../views/manager/Index.vue"),
    children: [
      {
        path: "workNews",
        name: "workNews",
        component: () =>
          import("../views/manager/module-page/WorkNews.vue"),
      },
      {
        path: "addWorkNews",
        name: "addWorkNews",
        component: () =>
          import("../views/manager/module-page/AddNews.vue"),
      },
    ]
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
