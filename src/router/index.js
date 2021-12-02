import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/calendar',
    name: 'Calendar',
    meta: {layout: 'Main'},
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    meta: {layout: 'Main'},
    component: () => import('../views/UserProfile.vue')
  },
  {
    path: '/currentTODO',
    name: 'CurrentTODO',
    meta: {layout: 'Main'},
    component: () => import('../views/CurrentTODO.vue')
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
