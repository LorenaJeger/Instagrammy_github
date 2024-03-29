import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/signup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
