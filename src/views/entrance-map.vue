<template>
<layout>
    <section id="map">
        <Map warning="lower-tunnel,observation">
            <ProfileMap />
            <template #warning>Contamination Warning</template>
        </Map>
    </section>
    </layout>
</template>

<style scoped>

    :deep(#content) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "Map";
    }

    #map { grid-area: Map; }

    #map {

    }

    #map{
        overflow: hidden;
    }

</style>

<script setup lang="ts">
    import Layout from '@/layouts/primaryLayout.vue';
    import Map from '@/widgets/map.vue';
    import ProfileMap from '@/maps/profile.svg'
</script>
