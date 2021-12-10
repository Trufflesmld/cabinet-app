import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home page',
    meta: {layout: 'Main'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'Main'},
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/record',
    name: 'Record',
    meta: {layout: 'Main'},
    component: () => import('../views/Record.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: {layout: 'Main'},
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: {layout: 'Main'},
    component: () => import('../views/History.vue')
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    meta: {layout: 'Main'},
    component: () => import('../views/UserProfile.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {layout: 'Empty'},
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'Empty'},
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
