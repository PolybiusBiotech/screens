<template>
    <section>
		<h1><slot name="title" /></h1>
		<table>
            <tbody>
                <tr v-for="({text, status}, index) in items">
                    <td>{{text}}</td>
                    <td><span :class="`status status-${status}`">{{status}}</span></td>
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
    .status-warning {
        background-color: var(--warning-color);
        color: var(--background-color);
    }

    @keyframes critical-keyframes {
        0%  { opacity: 0.5; }
        50%  { opacity: 1; }
        100%  { opacity: 0.5; }
    }

</style>

<script setup lang="ts">
    import { onMounted, ref, useSlots } from 'vue';

    const props = defineProps({
        items: {
            default: []
        }
    });
    const slots = useSlots();
    let items = ref([]);
    items.value = [...(slots.default().map(s => s.props)), ...props.items].filter(a=>a);
    console.log('b',[...items.value]);
</script>
