<template>
  <layout>
    <section class="bar-screen">
      <div v-for="dept in currentPage" :key="dept.name" class="dept-panel">
        <h1>{{ dept.name }}</h1>
        <table>
          <tbody>
            <tr v-for="item in dept.items" :key="item.id">
              <td class="fullname">{{ item.fullname }}</td>
              <td class="price">£{{ item.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pager">
        <span v-for="(_, i) in pages" :key="i" :class="{ active: i === pageIndex }">◆</span>
      </div>
    </section>
  </layout>
</template>

<style scoped>
.bar-screen {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 2vh;
}

.dept-panel {
  flex-shrink: 0;
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
  margin: 0 0 1vh;
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
  margin-top: auto;
  flex-shrink: 0;
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
import { computed, onMounted, ref } from 'vue';
import barData from '@/data/bar.json';

interface StockType {
  id: number;
  fullname: string;
  price: string | number;
  department: { description: string };
  base_units_remaining: string;
}

const inStockPages = computed(() => {
  const result: Record<string, StockType[]> = {};
  for (const item of barData.cybar as StockType[]) {
    if (parseFloat(item.base_units_remaining) > 0) {
      (result[item.department.description] ??= []).push(item);
    }
  }
  return result;
});

const pageNames = computed(() => Object.keys(inStockPages.value));

// Greedy bin-packing: header ≈ 1.5 lines, each item = 1 line.
// Tune LINES_PER_PAGE for the actual portrait monitor.
const LINES_PER_PAGE = 12;

const pages = computed(() => {
  const result: Array<Array<{ name: string; items: StockType[] }>> = [];
  let current: Array<{ name: string; items: StockType[] }> = [];
  let currentLines = 0;

  for (const name of pageNames.value) {
    const items = inStockPages.value[name];
    const cost = 1.5 + items.length;
    if (current.length > 0 && currentLines + cost > LINES_PER_PAGE) {
      result.push(current);
      current = [];
      currentLines = 0;
    }
    current.push({ name, items });
    currentLines += cost;
  }
  if (current.length > 0) result.push(current);
  return result;
});

const pageIndex = ref(0);
const currentPage = computed(() => pages.value[pageIndex.value] ?? []);

function paginate() {
  if (!pages.value.length) return;
  pageIndex.value = (pageIndex.value + 1) % pages.value.length;
}

onMounted(() => {
  setInterval(paginate, 10 * 1000);
  setTimeout(() => window.location.reload(), 5 * 60 * 1000);
});
</script>
