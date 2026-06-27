<template>
	<div class="countdown">
		<div :class="{
			'done animate__animated animate__heartBeat animate__infinite' : seconds_left <= 0
			}"
			:style="`font-size: ${props.fontSize}`">
			{{ seconds_left }}
		</div>
	</div>
</template>

<style scoped>
	:deep() {
		display: grid;
			align-items: center;
		text-align: center;
	}
	.done {
		--animate-duration: 2s;
		color: red;
		font-weight: bold;
	}

</style>

<script setup lang="ts">
	import 'animate.css';
	import { computed, onBeforeUnmount, onMounted, ref, type PropType } from 'vue';

	const props = defineProps({
		end: {
			type: [String, Date] as PropType<string | Date>,
			required: true
		},
		fontSize: {
			type: String,
			default: '1em'
		}
	})

	let interval: ReturnType<typeof setInterval>;

	let endDate: Date;
	switch (props.end) {
		case 'end_of_EMF':
			endDate = new Date(2022, 5, 6, 11, 0); // Note: month numbers start at 0
			break;
		case 'almost_end_of_EMF':
			endDate = new Date(2022, 5, 5, 23, 59);
			break;
		default:
			endDate = props.end as Date;
	}
	const current = ref(new Date());

	const seconds_left = computed(() => {
		const diff = Math.floor((endDate.getTime() - current.value.getTime()) / 1000);
		if (diff <= 0) {
			// do something
			return 0;
		}
		return diff;
	});

	onMounted(() => {
		interval = setInterval(() => { current.value = new Date(); }, 1000);
	});
	onBeforeUnmount(() => {
		clearInterval(interval);
	});
</script>
