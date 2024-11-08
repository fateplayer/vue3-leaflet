/*
 * @Author: fanyun
 * @Date: 2024-05-01 09:04:17
 * @LastEditors: fanyun
 * @LastEditTime: 2024-05-03 12:23:21
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
    },
    {
      path: '/map4',
      name: 'map4',
      component: () => import('../views/MapView4.vue')
    }
  ]
})

export default router
