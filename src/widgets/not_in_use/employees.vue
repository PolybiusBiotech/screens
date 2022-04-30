<!-- 
	If you just want a scrolling list of non employees, duplicate this into a new component
	I can't guarantee that this won't be changed in ways specific to a workers list
-->
<template>
	<section>
		<h1><slot name="title" /></h1>
		<Vue3Marquee :duration=50 vertical=true>
			<ul class="list">
				<li v-for="employee in employees" :key="employee">
					<img :src="employee.img" alt="" />
					<span class="name">
						{{ employee.name }}
					</span>
				</li>
			</ul>
		</Vue3Marquee>
	</section>

</template>

<style scoped>
	.list {
		font-weight: bold;
		height: 20vh;
		overflow: hidden;
   }

	#employees ul {
		list-style-type: none;

		margin: 0;
		padding: 0;

	}
		#employees li {
			display: block;
			margin-bottom: 2vh;

		}
		#employees img {
			border-radius: 1vw;
			margin-right: 2vw;
			vertical-align: middle;
		}

</style>

<script setup>
	import { defineProps } from "vue";
  	import { Vue3Marquee } from "vue3-marquee";
	import 'vue3-marquee/dist/style.css';

	const props = defineProps({
		'employees': String
	})

</script>