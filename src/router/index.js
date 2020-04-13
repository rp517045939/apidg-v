import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("@/views/login/login"),
    meta: {
      title: "授权登陆"
    }
  },
  {
    path: "/",
    component: () => import("@/views/homepage/homepage"),
    meta: {
      title: "授权登陆"
    }
  },
  {
    path: "/",
    component: () => import("@/views/homepage/homepage"),
    redirect:'/',
    children: [
		{path: "/dashboard", name: '首页', component: () => import("@/views/dashboard/index")},
		{path: "/apilist", name: '接口列表', component: () => import("@/views/api/index")},

	]
  },


];
const router = new VueRouter({
  routes
});

export default router;
