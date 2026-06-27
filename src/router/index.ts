import Menu from '@/components/mainMenu.vue';
import Aquatic from '@/views/2022/aquatic-augmentation-research.vue';
import AquaticDoor from '@/views/2022/aquatic-augmentation-research-door.vue';
import CanteenDoor1 from '@/views/2022/canteen-door1.vue';
import CanteenDoor2 from '@/views/2022/canteen-door2.vue';
import Demo1 from '@/views/2022/demo1.vue';
import Demo2 from '@/views/2022/demo2.vue';
import Bar2022 from '@/views/2022/bar.vue';
import Bar from '@/views/2026/bar.vue';
import BarClosed2026 from '@/views/2026/bar-closed.vue';
import Entrance from '@/views/2022/entrance.vue';
import EntranceMap from '@/views/2022/entrance-map.vue';
import Laboratory32a from '@/views/2022/laboratory32a.vue';
import LifeSupport from '@/views/2022/life-support.vue';
import LifeSupportDoor from '@/views/2022/life-support-door.vue';
import PlantRoom from '@/views/2022/plant-room.vue';
import PlantRoomDoor from '@/views/2022/plant-room-door.vue';
import Taps from '@/views/2026/taps.vue';
import Taps2022 from '@/views/2022/taps.vue';
import BarClosed from '@/views/2022/bar-closed.vue';

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    component: Menu,
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: Demo1,
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: Demo2,
  },

  {
    path: '/aquatic-augmentation-research',
    name: 'aquatic-augmentation-research',
    component: Aquatic,
  },

  {
    path: '/aquatic-augmentation-research-door',
    name: 'aquatic-augmentation-research-door',
    component: AquaticDoor,
  },

  {
    path: '/canteen',
    name: 'canteen',
    component: Demo1,
  },

  {
    path: '/canteen-door1',
    name: 'canteen-door1',
    component: CanteenDoor1,
  },

  {
    path: '/canteen-door2',
    name: 'canteen-door2',
    component: CanteenDoor2,
  },

  {
    path: '/default',
    name: 'default',
    component: Demo1,
  },

  {
    path: '/entrance',
    name: 'entrance',
    component: Entrance,
  },
  {
    path: '/entrance-map',
    name: 'entrance-map',
    component: EntranceMap,
  },

  {
    path: '/laboratory32a',
    name: 'laboratory32a',
    component: Laboratory32a,
  },
  {
    path: '/laboratory32a-door',
    name: 'laboratory32a-door',
    component: Demo1,
  },

  {
    path: '/life-support',
    name: 'life-support',
    component: LifeSupport,
  },
  {
    path: '/life-support-door',
    name: 'life-support-door',
    component: LifeSupportDoor,
  },
  {
    path: '/plant-room',
    name: 'plant-room',
    component: PlantRoom,
  },

  {
    path: '/plant-room-door',
    name: 'plant-room-door',
    component: PlantRoomDoor,
  },
  {
    path: '/bar',
    name: 'bar',
    component: Bar,
  },
  {
    path: '/2022/bar',
    name: 'bar-2022',
    component: Bar2022,
  },
  {
    path: '/taps',
    name: 'taps',
    component: Taps,
    meta: {
      refresh: '1',
    },
  },
  {
    path: '/2022/taps',
    name: 'taps-2022',
    component: Taps2022,
    meta: {
      refresh: '1',
    },
  },
  {
    path: '/bar-closed',
    name: 'bar-closed',
    component: BarClosed2026,
  },
  {
    path: '/2022/bar-closed',
    name: 'bar-closed-2022',
    component: BarClosed,
  },

  // Don't forget to add paths to /src/components/mainMenu.vue !
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
