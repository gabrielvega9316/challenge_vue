import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import DetailView from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile/:id',
      name: 'profile',
      // component: DetailView,
      props: true,
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DetailView.vue')
    }
  ]
})

export default router
