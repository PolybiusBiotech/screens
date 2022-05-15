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
        <Map room="life-support" />
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
            "About Map"
            "Schedule Map"
            "News News";
    }

    #about { grid-area: About; }
    #schedule { grid-area: Schedule; }
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
        padding: 1rem;
    }

</style>

<script setup lang="ts">
    import Layout from '@/layouts/primaryLayout.vue';
    import NewsMarquee from '@/widgets/news-marquee.vue';
    import Schedule from '@/widgets/schedule.vue';
    import Text from '@/widgets/text.vue';
    import Map from '@/widgets/map.vue';






</script>
