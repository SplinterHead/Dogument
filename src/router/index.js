import Vue from "vue";
import VueRouter from "vue-router";
import PetListView from "@/views/PetListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "petlist",
    component: PetListView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
