<template>
  <layout>
    <section class="bar-table">
      <h1>{{ pageName }}</h1>
      <div class="main-area">
        <table>
          <tbody>
            <tr v-for="item in page" :key="item.id">
              <td class="fullname">{{ item.fullname }}</td>
              <td class="price">£{{ item.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pager">
        <span v-for="(_, i) in pageNames" :key="i" :class="{ active: i === pageIndex - 1 || (pageIndex === 0 && i === pageNames.length - 1) }">◆</span>
      </div>
    </section>
  </layout>
</template>

<style scoped>
.bar-table {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
}

h1 {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1.8em;
  letter-spacing: 0.12em;
  background-color: var(--primary-color);
  color: var(--background-color);
  box-shadow: 0 0 25px #be00fe70;
  padding: 0.25em 0.5em;
  margin: 0;
}

.main-area {
  flex-grow: 1;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

td {
  font-size: 1.25em;
  line-height: 1.85em;
  padding: 0 0.5em;
  border-bottom: 0.05em solid #be00fe35;
}

tr:last-child td {
  border-bottom: none;
}

.price {
  text-align: right;
  color: var(--accent-color);
  text-shadow: 0 0 14px #f9e20070;
  white-space: nowrap;
  font-size: 1.45em;
  padding-left: 1.5em;
}

.pager {
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.4em;
  color: var(--secondary-color);
  opacity: 0.6;
  padding-bottom: 0.5em;
}

.pager .active {
  color: var(--primary-color);
  opacity: 1;
  text-shadow: 0 0 8px #be00fe;
}
</style>

<script setup lang="ts">
import Layout from '@/layouts/layout2026.vue';
import { onMounted, ref } from 'vue';
import barData from '@/data/bar.json';

interface BarItem {
  id: number;
  fullname: string;
  price: string | number;
  department: { description: string };
}

const pages: Record<string, BarItem[]> = {};
(barData.cybar as BarItem[]).forEach((e) => {
  pages[e.department.description] = pages[e.department.description] || [];
  pages[e.department.description].push(e);
});
const pageNames = Object.keys(pages);

const page = ref<BarItem[]>([]);
const pageName = ref('');
const pageIndex = ref(0);

function paginate() {
  pageName.value = pageNames[pageIndex.value];
  page.value = pages[pageNames[pageIndex.value]];
  pageIndex.value = (pageIndex.value + 1) % pageNames.length;
}

onMounted(paginate);
setInterval(paginate, 10 * 1000);
</script>
