<template>
	<section>
		<h1 class="title">{{ props.title }}</h1>
		
		<Vue3Marquee :duration=50>
			<article 
					class="item" 
					v-for="item in items" 
					:key="item" 
					v-html="item">
				
				</article>
		</Vue3Marquee>
	</section>

</template>

<style scoped>
	section {
		line-height: 1.5em;
		position: relative;
		width: 100%;
	}
	.title {
		background: darkred;
	    box-shadow: 1em 0 1em 0 black;
		font-size: 1.5rem;
		margin: 0;
		padding: 0 0.5em;
		position: absolute;
			top: 0; left: 0; z-index: 999;
	}
	.item {
		display: inline-block;
		font-weight: bold;

		margin: 0;
		margin-right: 3em;
	}
</style>

<script lang="ts">
	const default_items:string[] = ["Everything is as it should be.",
			"Nothing happened in Factory #4, please do not approach it.",
			"DO NOT DANCE.",
			"A good employee is an obedient employee.",
			"Have you hugged your boss today? No? GOOD.",
			"The light from Tower A is a result of a solar flare. The sounds from Tower A are only kittens.",
			"Why overthink things when you can work more?",
			"Snacks from outside are forbidden. Please help yourself to Polybius&copy; Special Snacks&trade;. \
				Almost the same taste, almost the same components.",
			"DO NOT DANCE.",
			"For vacation time off please see the Employee Wellness department at https://polyb.io/dev/null.",
			"Polybius is a workplace, not a pub or club.",
			"No drinking or selling alcohol on company grounds.",
			"No, seriously, no drinking."];
</script>

<script setup lang="ts">
	import { reactive } from 'vue';
	import { Vue3Marquee } from "vue3-marquee";
	import 'vue3-marquee/dist/style.css';




	const props = defineProps({
		items: {
			type: Object,
			default: default_items
		},
		title: {
			type: String,
			default: 'News:'
		}
	});

	const items = reactive(props.items);


</script>