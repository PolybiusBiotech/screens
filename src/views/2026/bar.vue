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
import { computed, onMounted, reactive, ref } from 'vue';
import barData from '@/data/bar.json';
import { BAR_API_BASE } from '@/bar-config';

interface StockType {
  key: string;
  id: number;
  fullname: string;
  price: string | number;
  department: { description: string };
  base_units_remaining: string;
}

const POLL_URL =
  BAR_API_BASE + '/api/stocklines.json?type=continuous&location=Null%20Sector&output=full';

const items = reactive<StockType[]>(barData.cybar as StockType[]);

async function refreshStock() {
  try {
    const resp = await fetch(POLL_URL);
    const data = (await resp.json()) as { stocklines: Array<{ stocktype: StockType }> };
    if (!data.stocklines.length) return; // Null Sector not set up yet — keep existing data
    items.splice(0, items.length, ...data.stocklines.map((sl) => sl.stocktype));
  } catch {
    // network error — keep existing data
  }
}

const inStockPages = computed(() => {
  const result: Record<string, StockType[]> = {};
  for (const item of items) {
    if (parseFloat(item.base_units_remaining) > 0) {
      (result[item.department.description] ??= []).push(item);
    }
  }
  return result;
});

const pageNames = computed(() => Object.keys(inStockPages.value));
const page = ref<StockType[]>([]);
const pageName = ref('');
const pageIndex = ref(0);

function paginate() {
  const names = pageNames.value;
  if (!names.length) return;
  pageIndex.value = pageIndex.value % names.length;
  pageName.value = names[pageIndex.value];
  page.value = inStockPages.value[names[pageIndex.value]];
  pageIndex.value = (pageIndex.value + 1) % names.length;
}

onMounted(() => {
  paginate();
  refreshStock();
  setInterval(paginate, 10 * 1000);
  setInterval(refreshStock, 5 * 60 * 1000);
});
</script>
