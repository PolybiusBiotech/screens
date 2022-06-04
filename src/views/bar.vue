<template>
	<layout>
	    <section class="bar-table">
	    	<div>
	    		<h1>{{pageName}}</h1>
	    	</div>
	    	<div class="main-area">
				<table>
					<tr v-for="item in page" :key="item">
						<td class="fullname">{{ item.fullname }}</td>
						<td class="price">{{ item.price }}£</td>
					</tr>
				</table>
			</div>
			<h2>Page {{pageIndex + 1}} / {{pageNames.length}}</h2>
	    </section>
    </layout>
</template>

<style scoped>
	.bar-table {
	    height: 100%;
	    display: flex;
	    flex-direction: column;
	    
	}
	.main-area {
		flex-grow: 1;
	}

	table {
		width: 100%;
	}

	td {
		font-size: 1.2em;
		line-height: 1.8em;
		border-bottom: 0.05em solid var(--border-color);
	}

	tr:last-child td {
	    border-bottom: none;
	}


	.price {
		text-align: right;
	}

	h2 {
		font-size: 1em;
		text-align: right;
	}


</style>

<script setup lang="ts">
    import Layout from '@/layouts/noGlitchLayout.vue';
    import Text from '@/widgets/text.vue';
    import { onMounted, ref } from 'vue';
    import barData from '../data/bar.json';

    const pages = {};
    barData.cybar.forEach(e => {
     pages[e.department.description] = (pages[e.department.description] || []);
     pages[e.department.description].push(e);
    })
	const pageNames = Object.keys(pages);

    console.log(pageNames, pages);
    const page = ref();
	const pageName = ref();

    const pageIndex = ref(0);
    async function paginate() {
		pageName.value = pageNames[pageIndex.value];
        page.value = pages[pageNames[pageIndex.value]];
        pageIndex.value = (pageIndex.value + 1) % pageNames.length;
    }
    onMounted(paginate);

	let schedInterval = setInterval(paginate, 20 * 1000); 

</script>
