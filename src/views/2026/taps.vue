<template>
  <layout>
    <section class="taps-grid">
      <div v-for="tap in taps" :key="tap.id" class="tap-card">
        <div class="tap-header">
          <span class="tap-names">{{ tap.tapNames }}</span>
          <span class="dept">{{ tap.dept }}</span>
        </div>
        <div class="logo-wrap">
          <img v-if="tap.logo" :src="tap.logo" :alt="tap.fullname" />
          <div v-else class="no-logo">{{ tap.manufacturer }}</div>
        </div>
        <div class="beer-info">
          <div class="beer-name">{{ tap.manufacturer }} {{ tap.name }}</div>
          <div class="abv">{{ tap.abv }}% ABV</div>
          <div class="price">£{{ tap.price }}</div>
        </div>
      </div>
    </section>
  </layout>
</template>

<style scoped>
.taps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5vw;
  height: 100%;
  width: 100%;
}

.tap-card {
  background: #13001a;
  border: 0.3vmin solid var(--primary-color);
  border-radius: 1.2vmin;
  box-shadow: 0 0 12px #be00fe30, inset 0 0 20px #be00fe08;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1.2vmin 1.5vmin;
}

.tap-header {
  align-items: baseline;
  display: flex;
  gap: 1em;
  justify-content: space-between;
  margin-bottom: 0.6vmin;
}

.tap-names {
  color: var(--secondary-color);
  font-size: 1.1em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.dept {
  color: var(--primary-color);
  font-size: 0.65em;
  letter-spacing: 0.1em;
  opacity: 0.6;
  text-transform: uppercase;
}

.logo-wrap {
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  min-height: 0;
  padding: 0.5vmin 0;
}

.logo-wrap img {
  max-height: 100%;
  max-width: 75%;
  object-fit: contain;
}

.no-logo {
  color: var(--primary-color);
  font-size: 1.4em;
  letter-spacing: 0.05em;
  opacity: 0.35;
  text-align: center;
  word-break: break-word;
}

.beer-info {
  border-top: 0.2vmin solid #be00fe20;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  margin-top: 0.6vmin;
  padding-top: 0.6vmin;
  row-gap: 0.1em;
}

.beer-name {
  color: #e8d0ff;
  font-size: 0.9em;
  grid-column: 1;
  grid-row: 1;
  letter-spacing: 0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.abv {
  color: var(--primary-color);
  font-size: 0.7em;
  font-weight: 400;
  grid-column: 1;
  grid-row: 2;
  opacity: 0.7;
}

.price {
  align-self: center;
  color: var(--accent-color);
  font-size: 1.6em;
  grid-column: 2;
  grid-row: 1 / span 2;
  letter-spacing: 0.02em;
  padding-left: 1em;
  text-shadow: 0 0 14px #f9e20060;
}
</style>

<script setup lang="ts">
import Layout from '@/layouts/layout2026.vue';
import tapsData from '@/data/taps.json';
import { BAR_MEDIA_BASE } from '@/bar-config';

interface Stockline {
  name: string;
  location: string;
}
interface StockType {
  id: number;
  manufacturer: string;
  name: string;
  abv: string;
  fullname: string;
  price: string;
  logo: string | null;
  stocklines: Stockline[];
  department: { description: string };
}
interface TapItem {
  stocktype: StockType;
}

const taps = [...(tapsData.kegs as TapItem[]), ...(tapsData.ciders as TapItem[])].map((item) => {
  const st = item.stocktype;
  return {
    id: st.id,
    manufacturer: st.manufacturer,
    name: st.name,
    abv: st.abv,
    fullname: st.fullname,
    price: st.price,
    logo: st.logo ? BAR_MEDIA_BASE + st.logo : null,
    dept: st.department.description,
    tapNames: st.stocklines.map((l) => l.name).join(' · '),
  };
});
</script>
