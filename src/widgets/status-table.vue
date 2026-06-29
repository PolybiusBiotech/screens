<template>
  <section>
    <h1><slot name="title" /></h1>
    <table>
      <tbody>
        <tr v-for="({ text, status }, index) in rows" :key="index">
          <td>{{ text }}</td>
          <td>
            <span :class="`status status-${statusClasses[index]}`">{{ status }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}
td {
  border: 0.2em solid var(--primary-color);
  padding: 0.25em;
}
td:first-child {
  border-right: none;
}
td:last-child {
  border-left: none;
  text-align: right;
}
.status {
  padding: 0 0.2em;
}
.status-critical {
  background-color: var(--critical-color);
  color: var(--background-color);
  animation-name: critical-keyframes;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
}
.status-ok {
  background-color: var(--positive-color);
  color: var(--background-color);
}
.status-warning {
  background-color: var(--warning-color);
  color: var(--background-color);
}

@keyframes critical-keyframes {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>

<script setup lang="ts">
import { computed, ref, useSlots, type PropType } from 'vue';

interface StatusItem {
  text?: string;
  status: string;
  statusClass?: string;
}

const props = defineProps({
  items: {
    type: Array as PropType<StatusItem[]>,
    default: () => [],
  },
});
const slots = useSlots();
const rows = ref<StatusItem[]>([]);
if (slots && slots.default)
  rows.value = [...rows.value, ...slots.default().map((s) => s.props as StatusItem)];
if (props.items) rows.value = [...rows.value, ...props.items]; // Either-or. Why? No internet no time to figure out. TODO

const statusClasses = computed(() => {
  // fugly
  return rows.value.map((item) => {
    const raw = item.status.toLowerCase();
    if (item.statusClass) return item.statusClass.toLowerCase();
    return raw;
  });
});
</script>
