<template>
  <nav>
    <section class="year-section">
      <h2>2026</h2>
      <router-link to="/bar">Bar</router-link>
      <router-link to="/bar-closed">Bar Closed</router-link>
      <router-link to="/taps">Taps</router-link>
    </section>

    <section class="year-section">
      <h2>2022</h2>
      <template v-if="show2022">
        <router-link to="/2022/bar">Bar (2022)</router-link>
        <router-link to="/2022/taps">Taps</router-link>
        <router-link to="/bar-closed">Bar closed</router-link>
        <router-link to="/demo1">Demo1</router-link>
        <router-link to="/demo2">Demo2</router-link>
        <router-link to="/aquatic-augmentation-research">Aquatic Augmentation Research</router-link>
        <router-link to="/aquatic-augmentation-research-door">Aquatic Augmentation Research - Door</router-link>
        <router-link to="/canteen-door1">Canteen (Door 1)</router-link>
        <router-link to="/canteen-door2">Canteen (Door 2)</router-link>
        <router-link to="/entrance">Entrance</router-link>
        <router-link to="/entrance-map">Entrance (Map)</router-link>
        <router-link to="/laboratory32a">Laboratory 32A</router-link>
        <router-link to="/life-support">Life Support</router-link>
        <router-link to="/life-support-door">Life Support - Door</router-link>
        <router-link to="/plant-room">Plant Room</router-link>
        <router-link to="/plant-room-door">Plant Room - Door</router-link>
      </template>
      <button v-else @click="show2022 = true">Show 2022 screens</button>
    </section>
  </nav>
</template>

<style scoped>
nav {
  padding: 1em;
}
h2 {
  margin: 0.5em 0;
  font-size: 1em;
}
.year-section {
  margin-bottom: 1.5em;
}
a,
button {
  display: inline-block;
  border: 0.5em outset white;
  margin: 0.5em;
  padding: 1em;
  cursor: pointer;
  background: none;
  color: inherit;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
const show2022 = ref(false);
</script>
