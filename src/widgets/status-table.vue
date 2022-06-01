<template>
    <section>
		<h1><slot name="title" /></h1>
		<table>
            <tbody>
                <tr v-for="({text, status}, index) in items">
                    <td>{{text}}</td>
                    <td><span :class="`status status-${statusClasses[index]}`">{{status}}</span></td>
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
    import { computed, ref, useSlots } from 'vue';

    const props = defineProps({
        items: {
            default: []
        }
    });
    const slots = useSlots();
    let items = ref([]);
    if (slots && slots.default)
        items.value = [...items.value, ...slots.default().map(s => s.props)];
    if (props.items)
        items.value = [...items.value, ...props.items]; // Either-or. Why? No internet no time to figure out. TODO
    
    const statusClasses = computed( () => { // fugly
        return items.value.map(item => {
            const raw = item.status.toLowerCase();
            if (item.statusClass) 
                return item.statusClass.toLowerCase();
            return raw;  
        });
    })
</script>
