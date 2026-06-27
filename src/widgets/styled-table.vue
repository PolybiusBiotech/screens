<!-- generic copy from status-table. TODO: DRY -->

<template>
	<section>
		<h1><slot name="title" /></h1>
		<slot /> <!-- table goes here -->
	</section>
</template>

<style scoped>
	:deep(table) {
		border-spacing: 0;
		border-collapse: collapse;
		width: 100%;
		border-bottom: 0.2em solid var(--primary-color);
	}
	:deep(td) {
		border: 0.2em solid var(--primary-color);
		border-bottom: 0;
		padding: 0.25em;
	}
	:deep(td:first-child) {
		border-right-style: dotted;
		border-right-width: 0.1em;
	}
	:deep(td:last-child) {
		border-left: none;
		text-align: right;
	}



	/* Want statuses? Class them */
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
	import { ref, useSlots } from 'vue';

	const props = defineProps({
		items: {
			type: String
//            default: []
		}
	});
	const slots = useSlots();
	const rows = ref<Record<string, any>[]>([]);
	if (slots && slots.default)
		rows.value = [...rows.value, ...slots.default().map(s => s.props as Record<string, any>)];
	if (props.items)
		rows.value = [...rows.value, ...JSON.parse(props.items)]; // Either-or. Why? No internet no time to figure out. TODO
		
</script>
