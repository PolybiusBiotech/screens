<template>
<layout largeNotch>

    <section id="about">
        <h1 class="main-title">Augmentation Research</h1>
    </section>
    <section id="doors">
        <Lock initial="off" on-text="Secure" off-text="Insecure" override="off">
            <template #title>Secure door</template>
        </Lock>
        <Lock initial="on" on-text="TA" off-text="GC" override="on">
            <template #title>Feeding Control</template>
        </Lock>
    </section>
    <section id="entry">
        <Keypad />
    </section>

    </layout>
</template>

<style scoped>

    :deep(#content) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 2fr;
        grid-template-areas:
            "About"
            "Doors"
            "Entry";
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
        display: flex;
        width: 100%;
        gap: 2em;
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

    #news { grid-area: News; }



</style>

<script setup lang="ts">
    import Layout from '@/layouts/primaryLayout.vue';
    import NewsMarquee from '@/widgets/news-marquee.vue';
    import Text from '@/widgets/text.vue';
    import Lock from '@/widgets/lock.vue';
    import Keypad from '@/widgets/keypad.vue';
</script>
