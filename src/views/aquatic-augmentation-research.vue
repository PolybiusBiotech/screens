<template>
	<layout>
		<section id="tanks">
			<StyledTable>
				<template #title>Occupants</template>
				<table>
					<tr>
						<td>Tank 1</td>
						<td>Cephalopoda Generic</td>
					</tr><tr>
						<td>Tank 2</td>
						<td>Paralarva Raising</td>
					</tr><tr>
						<td>Tank 3</td>
						<td>Cyanea intellect augmentation</td>
					</tr><tr>
						<td>Tank 4</td>
						<td>Vulgaris testing</td>
					</tr><tr class="del">
						<td>Tank 5</td>
						<td>CLASSIFIED</td>
					</tr>
				</table>
			</StyledTable>
			
		</section>

		<section id="tasks" class="vertically-centered">
			<StatusTable>
				<template text="Task" status="Status" />
				<template text="Clean Tank 1" status="Complete" statusClass="ok" />
				<template text="Separate paralarva in Tank 2" status="Pending" statusClass="warning" />
				<template text="Tests 23-54 for Tank 3" status="In Progress" />
				<template text="Report on Tank 4" status="In Progress" />
				<template text="Feed Tank 5" status="DELAYED" statusClass="critical" />
				<template text="Enrich Tank 5" status="CLASSIFIED" statusClass="del" />
				<template text="Feed Tank 5" status="DELAYED"  statusClass="warning" />
			</StatusTable>

		</section>

		<section id="pie">
            <chart :dataRetriever="generatePieData" :interval="500" graphType="pie" displayLegend="true" displayLegendPosition="left" />

		</section>

		<NewsMarquee id="news" />
    </layout>
</template>

<style scoped>

    :deep(#content) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 4vh;
        grid-template-areas:
            "Tanks Tasks"
			"Pie Tasks"
            "News News";
    }

	#tanks { grid-area: Tanks; 	}
	#tasks { grid-area: Tasks; 	}
	#pie { grid-area: Pie; 	}
    #news { grid-area: News; }



 
	.del {
		text-decoration: line-through;
	}

</style>

<script setup>
	import { ref } from 'vue';
    import Layout from '@/layouts/primaryLayout.vue';

	import Chart from '../widgets/chart.vue';
	import NewsMarquee from '../widgets/news-marquee.vue';
	import StatusTable from '../widgets/status-table.vue';
	import StyledTable from '@/widgets/styled-table.vue';


	function generatePieData() { 
		const randomOurs = () => 0.5 - (Math.random() + Math.random() + Math.random() + Math.random()) / 4;
		return {
			labels: ['Tank 1', 'Tank 2', 'Tank 3', 'Tank 4', 'Tank 5'],
			datasets: [{
				data: [
					50, 
					70 + 10 * randomOurs(),
					30, 
					40, 
					10 + 5 * randomOurs(),
				],
				backgroundColor: ['blue', 'green', 'gray', 'yellow', 'red'],
			}]
		}
	};

</script>
