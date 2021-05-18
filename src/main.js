import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';

import App from './App.vue';
import Products from './components/Products.vue';
import Edit from './components/Edit.vue';
import Index from './components/Index.vue';
import Home from './components/Home.vue';
import Basket from './components/Basket.vue';
import Meat from './components/Meat.vue';
import Vegetables from './components/Vegetables.vue';
import Fruit from './components/Fruit.vue';
import Frozen from './components/Frozen.vue';
import Condiments from './components/Condiments.vue';
import Others from './components/Others.vue';
import Payment from './components/Payment.vue';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

const routes = [
  {
    name: 'Home',
    path: '/home',
    component: Home
  },
  {
    name: 'Basket',
    path: '/basket',
    component: Basket
  },
  {
    name: 'Meat',
    path: '/meat',
    component: Meat
  },
  {
    name: 'Vegetables',
    path: '/vegetables',
    component: Vegetables
  },
  {
    name: 'Fruit',
    path: '/fruit',
    component: Fruit
  },
  {
    name: 'Condiments',
    path: '/condiments',
    component: Condiments
  },
  {
    name: 'Others',
    path: '/others',
    component: Others
  },
  {
    name: 'Frozen',
    path: '/frozen',
    component: Frozen
  },
  {
    name: 'Products',
    path: '/products',
    component: Products
  },
  {
    name: 'Edit',
    path: '/edit',
    component: Edit
  },
  {
    name: 'Index',
    path: '/index',
    component: Index
  },
  {
    name: 'Payment',
    path: '/payment',
    component: Payment
  },
];
const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({render: h => h(App), router}).$mount('#app')
