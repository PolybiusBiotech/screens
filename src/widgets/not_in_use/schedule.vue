<!-- EMF schedule. TODO: search parms? -->

<template>
    <section>
        {{ program }}
    </section>
</template>

<style scoped>
</style>

<script>
    const api_endpoint = 'https://www.emfcamp.org/schedule/2018.json' // TODO
</script>

<script setup>
    (async function ()  {

      const program = await fetch(api_endpoint).then(r=>r.json());
    })();
</script>