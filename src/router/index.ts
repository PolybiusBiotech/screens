import Menu from '@/components/mainMenu.vue'
import Demo1 from '@/views/demo1.vue'
import Demo2 from '@/views/demo2.vue'
import Entrance from '@/views/entrance.vue'
import EntranceMap from '@/views/entrance-map.vue'
import LifeSupport from '@/views/life-support.vue'
import LifeSupportDoor from '@/views/life-support-door.vue'
import PlantRoom from '../views/plant-room.vue'

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
  },


  { 
    path: '/aquatic-augmentation-research',
    name: 'aquatic-augmentation-research',
    component: Demo2
  },

  { 
    path: '/aquatic-augmentation-research-door',
    name: 'aquatic-augmentation-research-door',
    component: Demo2
  },

  { 
    path: '/canteen',
    name: 'canteen',
    component: Demo2
  },

  { 
    path: '/canteen-door1',
    name: 'canteen-door1',
    component: Demo2
  },

  { 
    path: '/canteen-door2',
    name: 'canteen-door2',
    component: Demo2
  },

  {
    path: '/entrance',
    name: 'entrance',
    component: Entrance
  },
  {
    path: '/entrance-map',
    name: 'entrance-map',
    component: EntranceMap
  },

  {
    path: '/laboratory32a',
    name: 'laboratory32a',
    component: Demo2
  },
  {
    path: '/laboratory32a-door',
    name: 'laboratory32a-door',
    component: Demo2
  },

  
  {
    path: '/life-support',
    name: 'life-support',
    component: LifeSupport
  },
  {
    path: '/life-support-door',
    name: 'life-support-door',
    component: LifeSupportDoor
  },
  {
    path: '/plant-room',
    name: 'plant-room',
    component: PlantRoom
  },

  {
    path: '/plant-room-door',
    name: 'plant-room-door',
    component: PlantRoom
  },

  // Don't forget to add paths to /src/components/mainMenu.vue !


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
