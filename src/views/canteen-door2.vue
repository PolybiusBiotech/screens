<template>
    <layout largeNotch>
        <section id="map">
            <Map current="life-support" warning="canteen,ia1,storage">
                <TopDownMap />
                <template #warning>Failure detected</template>
            </Map>
        </section>

    </layout>
</template>

<style scoped>
    :deep(#map) {
        width: 90vw;
    }

</style>

<script setup lang="ts">
    import Layout from '@/layouts/primaryLayout.vue';
    import Map from '@/widgets/map.vue';
    import TopDownMap from '@/maps/top-down.svg'

</script>
