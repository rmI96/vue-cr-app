import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main-layout'},
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'main-layout'},
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main-layout'},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/newpost',
    name: 'Newpost',
    meta: {layout: 'main-layout'},
    component: () => import('../views/NewPost.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'empty-layout'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: {layout: 'empty-layout'},
    component: () => import('../views/Registration.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
