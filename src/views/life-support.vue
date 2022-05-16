<template>
<layout>

    <section id="about">
        <Text>
            <template #title>Life support</template>
            <p>
                Please reference the safety manual for critical incidents.
            </p>
        </Text>
    </section>
    <section id="map">
        <Map current="life-support" warning="canteen,ia1,storage">
            <TopDownMap />
            <template #warning>Failure detected</template>
        </Map>
    </section>
    <section id="status">
        <StatusTable title="System status">
            <template #title>System status</template>
            <template text="C02 Levels" status="nominal"/>
            <template text="Flux status" status="nominal"/>
            <template text="Filter capacity" status="critical"/>
            <template text="Air pressure" status="warning"/>
		</StatusTable>
    </section>
    <NewsMarquee id="news" />
    </layout>
</template>

<style scoped>

    :deep(#content) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 3fr 4fr 4vh;
        grid-template-areas:
            "About Map"
            "Status Map"
            "News News";
    }

    #about { grid-area: About; }
    #status { grid-area: Status; }
    #map { grid-area: Map; }
    #news { grid-area: News; }

    #map {

    }

    .chart canvas {
        height: 30vh;
    }

    #about,
    #map,
    #schedule {
        max-width: 50vw;
        overflow: hidden;
    }

</style>

<script setup lang="ts">
    import Layout from '@/layouts/primaryLayout.vue';
    import NewsMarquee from '@/widgets/news-marquee.vue';
    import StatusTable from '@/widgets/status-table.vue';
    import Text from '@/widgets/text.vue';
    import Map from '@/widgets/map.vue';
    import TopDownMap from '@/maps/top-down.svg'
</script>
