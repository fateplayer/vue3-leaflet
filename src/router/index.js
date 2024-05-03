/*
 * @Author: fanyun
 * @Date: 2024-05-01 09:04:17
 * @LastEditors: fanyun
 * @LastEditTime: 2024-05-01 18:47:39
 * @Description:
 *
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/map1',
      name: 'map1',
      component: () => import('../views/MapView1.vue')
    },
    {
      path: '/map2',
      name: 'map2',
      component: () => import('../views/MapView2.vue')
    },
    {
      path: '/map3',
      name: 'map3',
      component: () => import('../views/MapView3.vue')
    }
  ]
})

export default router
