import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Detail from '../views/Detail'
import NotFound from '../views/NotFound'

const routes = [
  {
    path: '/movie/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/:pathMatch(.*)*',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
