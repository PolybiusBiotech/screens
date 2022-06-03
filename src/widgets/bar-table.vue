<!-- EMF schedule. TODO: search parms? -->

<template>
    <section>
		<h1>
	        <slot name="title" />
		</h1>
		<table>
			<tr v-for="item in items" :key="item">
				<td class="fullname">{{ item.fullname }}</td>
				<td class="price">{{ item.price }}£</td>
			</tr>
		</table>
    </section>
</template>

<style scoped>
	section {
		display: flex;
		height: 100%;
	}
	table {
		width: 100%;
	}
	li:first-child { padding-top: 0; }
	li:last-child { border-bottom: 0;} 
	li > * {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}

	.time {
		font-family: monospace;
		font-size: 0.9em;
		letter-spacing: -0.1em;

		width: 3.5em;		
	}
	.title {
		flex: 1;
		padding-right: 0.5em;
	}
	.venue {
		width: 7em;
	}

</style>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import barData from './bar.json';

	const props = defineProps(['eventsCB']); // eventsCB = function to apply to events, e.g. keep first 5

	const api_endpoint = 'https://bar.emf.camp/api/cybar.json'; /// CORS!!!

    let items = ref();

    // hack!
    const response = barData; 
    

    
    console.log(items.value);
    
    let page = 0;
    async function updateSchedule() {
    	if (page === 0) {
        	items.value = response.cybar.slice(0, 16);
        } else {
        	items.value = response.cybar.slice(16, 32);
        }
        page = (page + 1) % 2;
    }
    onMounted(updateSchedule);

	let schedInterval = setInterval(updateSchedule, 20 * 1000); // 

</script>