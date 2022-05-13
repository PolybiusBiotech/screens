import Menu from '@/components/mainMenu.vue'
import Demo1 from '@/views/demo1.vue'
import Demo2 from '@/views/demo2.vue'
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    component: Menu
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: Demo1
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: Demo2
  }

  // Don't forget to add paths to /src/components/mainMenu.vue !


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
