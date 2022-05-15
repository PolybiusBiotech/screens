<template>
<layout>

    <section id="about">
        <Text>
            <template #title>About Us</template>
            <p>
                Polybius Biotech provides high quality solution for your business.
            </p>
            <p>
                Your safety is our number 1 priority.
            </p>

        </Text>
    </section>
    <section id="graphs">
        <h1>Data</h1>
        <div class="chart">
            <chart :dataRetriever="generateGraphData" :interval="1500" graphType="bar" :yMax=10 />
        </div>
        <div class="chart">
            <chart :dataRetriever="generateGraphData" :interval="3200" graphType="line" :yMax=20 animation="wobbly" />
        </div>
        <div class="chart">
            <chart :dataRetriever="generateGraphData" :interval="2000" graphType="pie" />
        </div>
    </section>
    <section id="schedule">
        <schedule :eventsCB="eventsFilter">
			<template #title>Training Plan [Partial]</template>
		</schedule>
    </section>
    <NewsMarquee id="news" />
    </layout>
</template>

<style scoped>

    :deep(#content) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 3fr 4fr 4vh;
        grid-template-areas:
            "About Graphs"
            "Schedule Graphs"
            "News News";
    }

    #about { grid-area: About; }
    #schedule { grid-area: Schedule; }
    #graphs { grid-area: Graphs; }
    #news { grid-area: News; }

    #graphs {
        /* Space evenly */
        display: flex;
        flex-direction: column;

    }
    h1 {
        align-self: end;
    }
    #graphs > *:not(h1) {
        flex: 1;
    }
    .chart canvas {
        height: 30vh;
    }

    #about,
    #graphs,
    #schedule {
        max-width: 50vw;
        overflow: hidden;
    }

</style>

<script setup lang="ts">
    import Layout from '@/layouts/primaryLayout.vue';
    import Chart from '@/widgets/chart.vue';
    import NewsMarquee from '@/widgets/news-marquee.vue';
    import Schedule from '@/widgets/schedule.vue';
    import Text from '@/widgets/text.vue';

    function eventsFilter(events:object[]) {
		return events.slice(0,5);
	}




    const generateGraphData = () => { return {
        labels: ['A', 'B', 'C', 'D', 'E', 'F'],
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
