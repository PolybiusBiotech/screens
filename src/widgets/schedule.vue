<!-- EMF schedule. TODO: search parms? -->

<template>
    <section>
		<h1>
	        <slot name="title" />
		</h1>
		<ul>
			<li v-for="event in events" :key="event">
				<time class="time">{{ event.start_time }}</time>
				<div class="title">{{ event.title }}</div>
				<address class="venue">{{ event.venue }}</address>
			</li>
		</ul>
    </section>
</template>

<style scoped>
	ul {
		list-style-type: none;
		overflow: hidden;

		margin: 0;
		padding: 0;

		max-width: 100%;
		width: 100%;
	}
	li {
		border-bottom: 1px groove var(--primary-color);
		display: flex;
	    padding: 0.5em 0;
		width: 100%;
	}
	li:first-child { padding-top: 0; }
	li:last-child { border-bottom: 0;} 
	li > * {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}

	.time {
		font-family: monospace;
		font-size: 0.9em;
		letter-spacing: -0.1em;

		width: 3.5em;		
	}
	.title {
		flex: 1;
		padding-right: 0.5em;
	}
	.venue {
		width: 7em;
	}

</style>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
	const debug = true; // TODO

	const props = defineProps(['eventsCB']); // eventsCB = function to apply to events, e.g. keep first 5

	const api_endpoint = (debug) ?
		'https://www.emfcamp.org/schedule/2018.json' :
		'https://www.emfcamp.org/schedule/2022.json';

	
    let events = ref();
    // Read from local cache
    if (localStorage && localStorage.schedule)
        events.value = localStorage.schedule;

	function sortEvents (events:object[]): object[] {
		events = events.sort((e1:any, e2:any): number => {
			return (new Date(e1['start_date']) < new Date(e2['start_date'])) ? -1 : 1
		})
		return events;
	}

	function filterEvents(events:object[]) {
		const now = (debug) ? new Date('2018-09-02 14:00') : new Date();
		return events.filter((e:any) => new Date(e['start_date']) >= now);
	}

    async function updateSchedule() {
        const events_updated = await fetch(api_endpoint)
			.then(r=>r.json())
			.then(events => Promise.resolve(filterEvents(events)) )
			.then(events => Promise.resolve(sortEvents(events)))
			.then(events => Promise.resolve((props.eventsCB) ? props.eventsCB(events) : events) );
        if (events_updated)
            events.value = events_updated;
    }
    onMounted(updateSchedule);

	let schedInterval = setInterval(updateSchedule, 60 * 1000); // Check every minute and update. TODO TEST

</script>