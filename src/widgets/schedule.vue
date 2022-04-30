<!-- EMF schedule. TODO: search parms? -->

<template>
    <section>
        {{ events }}
    </section>
</template>

<style scoped>
</style>

<script>
    const api_endpoint = 'https://www.emfcamp.org/schedule/2018.json' // TODO
</script>

<script setup>
    import { onMounted, ref } from 'vue';
    let events = ref();
    // Read from local cache
    if (localStorage && localStorage.schedule)
        events.value = localStorage.schedule;
    const updateSchedule = async () => {
        const events_updated = await fetch(api_endpoint).then(r=>r.json());
        if (events_updated)
            events.value = events_updated;
    }
    onMounted(updateSchedule);

</script>