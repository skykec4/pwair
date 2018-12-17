import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
// import LoginPage from '../views/LoginPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes
});
