<template>
<layout>

    <main id="wrapper">
        <div id="about">
            about
        </div>
        <div id="graphs">
            <div class="chart">
                <chart />
            </div>
        </div>
        <div id="employees">
            employees
        </div>
        <NewsMarquee id="news" />
    </main>
    </layout>
</template>

<style>

    #wrapper {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 4vh;
        grid-template-areas:
            "About Graphs"
            "Employees Graphs"
            "News News";
    }

    #about { grid-area: About; }
    #employees { grid-area: Employees; }
    #graphs { grid-area: Graphs; }
    #news { grid-area: News; }

    .chart canvas {
        height: 30vh;
    }

</style>

<script setup lang="ts">
    import Layout from '@/layouts/primaryLayout.vue';
    import Chart from '@/components/chart.vue';
    import NewsMarquee from '@/components/news-marquee.vue';
</script>
