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


<script>
	import 'animate.css';
	let interval;
</script>

<script setup>
	import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
	const props = defineProps({
		end: {
			//type: Date | "end_of_EMF" | "almost_end_of_EMF", // but it is buggy and I have no time
			required: true
		},
		fontSize: {
			type: String,
			default: '1em'
		}
	})
	
	let end;
	switch(props.end) {
		case 'end_of_EMF':
			end = new Date(2022,5,6,11,0); // Note: month numbers start at 0
			break;
		case 'almost_end_of_EMF':
			end = new Date(2022,5,5,23,59);
			break;
		default:
			end = props.end;
	}
	let current = ref(new Date());

	const seconds_left = computed(() => {
		const diff = Math.floor((end - current.value) / 1000);
		if (diff<=0) {
			// do something
			return 0;
		} 
		return diff;
	});

	onMounted(()=>{
		interval = setInterval(()=>{ current.value = new Date(); }, 1000);
	});
	onBeforeUnmount(() => {
		clearInterval(interval);
	});


</script>