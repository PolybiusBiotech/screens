<!-- for copypaste as basic template -->
<!-- some suggestions in comments -->
<template>
	<layout>
        <section id="projects">
			<StyledTable>
				<table><tbody>
					<tr>
					<td>Section 1A</td>
					<td>Algae Alginate</td>
					<td>Maintain temperature at 10℃</td>
					</tr><tr>
					<td>Section 1B</td>
					<td>Reactive Hedera Helix</td>
					<td>Water saturation levels at 60%</td>
					</tr><tr>
					<td>Section 2A</td>
					<td>Angular Soy Cluster</td>
					<td>None</td>
					</tr><tr>
					<td>Section 2B</td>
					<td>Variegated Clusiana Varieties</td>
					<td>Do not touch</td>
					</tr><tr>
					<td>Section 3A</td>
					<td>Exercise Artemia NYOS</td>
					<td>Strict feeding regimen</td>
					</tr><tr>
					<td>Section 3B</td>
					<td>Intellect Artemia NYOS</td>
					<td>Maintain lightning at 40%</td>
					</tr><tr>
					<td>Section 3C</td>
					<td>Empathy Artemia NYOS</td>
					<td>Do not interact</td>
					</tr><tr>
					<td>Section 3D</td>
					<td>Control Artemia NYOS</td>
					<td>CONTROL</td>
					</tr>

				</tbody></table>
			</StyledTable>
        </section>
        <section id="tasks">
            <StatusTable>
				<template text="Water Section 1B" status="Complete" statusClass="ok" />
				<template text="Temperature Control Section 1A" status="Pending" statusClass="warning" />
				<template text="Trim Section 2A" status="Paused" />
				<template text="Dust Section 2B" status="Pending" statusClass="warning" />
				<template text="Water Change Section 3A" status="DELAYED" />
				<template text="Water Change Section 3B" status="DELAYED" />
				<template text="Water Change Section 3C" status="DELAYED" />
				<template text="Water Change Section 3D" status="PAUSED" />
			</StatusTable>
        </section>
        <section id="graph">
			<Chart :dataRetriever="generateGraphData" 
				:interval="-1" 
				graphType="line" 
				:yMax=90 
				animation="wobbly-light" 
				displayLegend="true" 
				displayLegendPosition="left" />
        </section>

		<NewsMarquee id="news" />
    </layout>
</template>

<style scoped>

    :deep(#content) {
        grid-template-columns: 5fr 4fr;
        grid-template-rows: 1fr 1fr 4vh;
        grid-template-areas:
            "Projects Tasks"
            "Graph Graph"
            "News News";
    }

    #projects { grid-area: Projects; } 
    #progress { grid-area: Progress; } 
    #graph { grid-area: Graph; } 
	#news { grid-area: News; } 

	#projects,
	#tasks {
		font-size: 2vh;
		margin-top: 12vh;
	}
	#projects tr :deep(td:first-child()) {
		white-space: nowrap;
	}
	#graph {
		padding: 0 10%;
		text-align: center;
	}
		.chart {
			height: 100%;
		}


</style>

<script setup>
    import Layout from '@/layouts/primaryLayout.vue';
    import Chart from '@/widgets/chart.vue';
    import NewsMarquee from '@/widgets/news-marquee.vue';
    import StyledTable from '@/widgets/styled-table.vue';
    import StatusTable from '@/widgets/status-table.vue';
    

	function generateGraphData() { return {
		labels: new Array(4).fill(0).map((n,i)=>i*20),
		datasets: [
			{
				label: 'Control', // Should grow linearly
				data: [10, 30, 50, 70],
				borderColor: 'blue',
				tension: 0
			},{
				label: 'Empathy', // Should grow slowly
				data: [0, 15, 25, 35],
				borderColor: 'purple',
				tension: 20
			},{
				label: 'Exercise',
				data: [30, 10, 60, 80],
				borderColor: 'green',
				tension: 2
			},{
				label: 'Intellect',
				data: [5, 20, 50, 90],
				borderColor: 'red',
				tension: 1
			},
		]
	}}
</script>
