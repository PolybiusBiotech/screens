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
        border: 1px solid var(--primary-color);
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
    }
    .status-warning {
        background-color: var(--warning-color);
        color: var(--background-color);
    }

</style>

<script setup lang="ts">
    import { onMounted, ref, useSlots } from 'vue';

    const slots = useSlots();
    const items = (slots.default().map(s => s.props));
</script>
