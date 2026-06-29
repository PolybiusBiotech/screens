<template>
  <layout>
    <section class="bar-closed">
      <div class="message">
        <p>
          Polybius Biotech Galactic Trade Network thanks its loyal Business Class customers,
          but sincerely regrets to inform them that
          <strong>this lounge is now closed.</strong>
        </p>
      </div>
      <div class="restock">
        <span class="label">Restock scheduled in</span>
        <span class="countdown" :class="{ done: timeLeft === '00:00:00' }">{{ timeLeft }}</span>
      </div>
    </section>
  </layout>
</template>

<style scoped>
.bar-closed {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8vh;
  text-align: center;
  padding: 0 8vw;
}

.message {
  font-size: 1.5em;
  line-height: 1.7;
  color: var(--primary-color);
  max-width: 70vw;
}

.message strong {
  color: var(--accent-color);
  text-shadow: 0 0 18px #f9e20080;
  display: inline;
}

.restock {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4em;
}

.label {
  font-size: 1em;
  opacity: 0.6;
  color: var(--secondary-color);
  letter-spacing: 0.1em;
}

.countdown {
  font-size: 5em;
  letter-spacing: 0.12em;
  color: var(--primary-color);
  text-shadow: 0 0 30px #be00fe80;
}

.countdown.done {
  color: var(--accent-color);
  text-shadow: 0 0 30px #f9e20080;
  animation: pulse 0.8s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
</style>

<script setup lang="ts">
import Layout from '@/layouts/layout2026.vue';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const RESTOCK_HOUR = 15;

function getNextRestock(): Date {
  const now = new Date();
  const target = new Date(now);
  target.setHours(RESTOCK_HOUR, 0, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);
  return target;
}

const restockTime = getNextRestock();
const now = ref(new Date());
let interval: ReturnType<typeof setInterval>;

const timeLeft = computed(() => {
  const diff = Math.max(0, restockTime.getTime() - now.value.getTime());
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1_000);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
});

onMounted(() => {
  interval = setInterval(() => {
    now.value = new Date();
  }, 1000);
});
onBeforeUnmount(() => clearInterval(interval));
</script>
