<template>
<layout>
	<section id="tasks" class="vertically-centered">
		<h1>Task List</h1>
		<StatusTable title="Task List" :items="tasks"/>
	</section>

	<section id="jobs">
		<Chart :dataRetriever="generateGraphData" :interval="1500" graphType="bar" :yMax=100 />
	</section>
    <NewsMarquee id="news" />
</layout>
</template>

<style scoped>
    :deep(#content) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 4vh;
        grid-template-areas:
            "Tasks Jobs"
            "News News";
    }

    #tasks { grid-area: Tasks; }
    #jobs { grid-area: Jobs; }
    #news { grid-area: News; }

    #tasks :deep(.status-delayed) {
        background-color: var(--critical-color);
        color: var(--background-color);
        animation-name: critical-keyframes;
        animation-duration: 0.7s;
        animation-iteration-count: infinite;
    }
    #tasks :deep(.status-pending) {
        background-color: var(--warning-color);
        color: var(--background-color);
    }



    @keyframes critical-keyframes {
        0%  { opacity: 0.5; }
        50%  { opacity: 1; }
        100%  { opacity: 0.5; }
    }


</style>


<script setup>
    import Layout from '@/layouts/primaryLayout.vue';

	import Chart from "../widgets/chart.vue";
	import NewsMarquee from "../widgets/news-marquee.vue";
    import StatusTable from '@/widgets/status-table.vue';

	const tasks = [
		{ text: "Blockage in Laboratory 32A", status: "delayed" },
		{ text: "Electrical short in Canteen", status: "complete" },
		{ text: "Blockage in Toilets 52B", status: "delayed" },
		{ text: "Non-slip flooring in Corridor B", status: "pending" },
		{ text: "Shelving in Office 47", status: "complete" },
		{ text: "Replacing airlock in Tank 21", status: "delayed" },
	];

	const ailaG = [{text:"HAir pressure", status:"Hwarning"}];

	function generateGraphData() { return {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [{
            label: '',
            data: new Array(6).fill(0).map(()=>Math.random()*10 + 10),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4
        }]
    } };
	
</script>