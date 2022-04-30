<template>
<layout>

    <div id="about">
        <Text>
            <template #title>About Us</template>
            <p>
                Bringing you the best there is and could be.
            </p>
            <p>
                From us straight to your door.
            </p>
            <p>
                You do not need to fear anymore.
            </p>
            <p class="larger">
                TRUST US.
            </p>
        </Text>
    </div>
    <div id="graphs">
        <div class="chart">
            <chart />
        </div>
        <div class="chart">
            <chart />
        </div>
    </div>
    <div id="schedule">
        <schedule />
    </div>
    <NewsMarquee id="news" />
    </layout>
</template>

<style>

    #content {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 4vh;
        grid-template-areas:
            "About Graphs"
            "Schedule Graphs"
            "News News";
    }

    #about { grid-area: About; }
    #schedule { grid-area: Schedule; }
    #graphs { grid-area: Graphs; }
    #news { grid-area: News; }

    .chart canvas {
        height: 30vh;
    }

</style>

<script setup lang="ts">
    import Layout from '@/layouts/primaryLayout.vue';
    import Chart from '@/widgets/chart.vue';
    import NewsMarquee from '@/widgets/news-marquee.vue';
    import Schedule from '@/widgets/schedule.vue';
    import Text from '@/widgets/text.vue';

    const employees = [
        {
            img: "https://placekitten.com/100/100",
            name: "Kate Libby"
        }, {
            img: "https://placekitten.com/g/100/100",
            name: "Dade Murphey"
        }, {
            img: "https://placekitten.com/100/99",
            name: "Thomas Anderson"
        }, {
            img: "https://placekitten.com/g/100/99",
            name: "Gargamel"
        }
    ];

</script>
