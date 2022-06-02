<template>
<layout largeNotch>

    <section id="about">
        <h1 class="main-title">Plant Room</h1>
    </section>
    <section id="map">
        <Map warning="tunnel,observation">
            <ProfileMap />
        </Map>
    </section>
    <section id="doors">
        <Lock initial="off" on-text="Active" off-text="Inactive" override="off" errorMessage="Operation Failed">
            <template #title>Hatch activation</template>
        </Lock>
    </section>

    </layout>
</template>

<style scoped>

    :deep(#content) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 5fr 1fr;
        grid-template-areas:
            "About"
            "Map"
            "Doors";
    }

    h1.main-title {
        display: block;
        font-size: 3em;
        text-align: center;
    }

    #about {
        grid-area: About;
        padding-top: 2em;
    }
    #doors {
        grid-area: Doors;
        gap: 2em;

        display: flex;
        margin: auto;
        width: 50%;
    }
    #doors>* {
        flex: 1;
    }

    #entry {
        grid-area: Entry;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #map { 
        grid-area: Map;
        width: 95vw; 
    }
        #map svg {
            height: auto !important;
        }
        :deep(#map .legend) {
            display: none;
        }

    #news { grid-area: News; }



</style>

<script setup lang="ts">
    import Layout from '@/layouts/primaryLayout.vue';
    import Lock from '@/widgets/lock.vue';
    import Keypad from '@/widgets/keypad.vue';
    import Map from '@/widgets/map.vue';
	import ProfileMap from '@/maps/profile.svg'
</script>
