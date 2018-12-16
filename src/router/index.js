import Vue from 'vue'
import VueRouter from 'vue-router'
// import LoginPage from '../views/LoginPage.vue';
import MainPage from '../views/MainPage.vue';
import NewsPage from '../views/NewsPage.vue';


Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  component: () => import('../views/LoginPage.vue')
}, {
  path: '/main',
  component: MainPage
}, {
  path: '/news',
  component: NewsPage
}]

export const router = new VueRouter({
  mode: 'history',
  routes
})
