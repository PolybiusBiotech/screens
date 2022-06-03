<template>
	<layout>
	    <section id="about">
	        <Text>
	            <template #title>Cybar</template>
	        </Text>
	    </section>
	    <section id="bar-table">
	            <BarTable />
	    </section>
    </layout>
</template>

<style scoped>

    :deep(#content) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 10fr;
        grid-template-areas:
            "About"
            "BarTable";
    }

    #bar-table { grid-area: BarTable; }
    

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
    import Layout from '@/layouts/noGlitchLayout.vue';
    import BarTable from '@/widgets/bar-table.vue';
    import Text from '@/widgets/text.vue';
    import StatusTable from '@/widgets/status-table.vue';
</script>
