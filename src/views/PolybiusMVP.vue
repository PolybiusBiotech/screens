<script setup lang="ts">
    import NewsMarquee from '../components/news-marquee.vue';
</script>

<template>
    <main id="wrapper">
        <div id="about">
            about
        </div>
        <div id="graphs">
            graphs
        </div>
        <div id="employees">
            employees
        </div>
        <NewsMarquee id="news" />
    </main>
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


</style>
