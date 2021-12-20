import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CartPage from '../views/CartPage.vue';
import PersonalInfo from '../views/PersonalInfo.vue';
import OrdersPage from '../views/OrdersPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
  },
  {
    path: '/personal-info',
    name: 'PersonalInfo',
    component: PersonalInfo,
  },
  {
    path: '/orders',
    name: 'OrdersPage',
    component: OrdersPage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
