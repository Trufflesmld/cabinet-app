import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/calendar',
    name: 'Calendar',
    meta: {layout: 'Main'},
    component: () => import('../views/Calendar.vue')
  },
  {
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
