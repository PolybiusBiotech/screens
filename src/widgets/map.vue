<template>
	<div class="map">
        <MapComponent :id="elementId" />
        <div class="legend">
            <div class="legend-warning">FAILURE DETECTED</div>
        </div>
	</div>
</template>

<style>
    .map svg {
        transform: rotate(35deg) translateX(35%)
    }
	.map svg .room {
    }

    .map svg .room-current {
        fill: #4b758e;
    }

    .map svg .room-warning {
        animation-name: room-warning-keyframes;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        fill: var(--secondary-color);
    }

    .legend {
        position: relative;
        right: 0;
        bottom: 0;
        text-align: right;

    }
    .legend div {
        display: inline-block;
        padding: 0.25em;

    }
    .legend-warning {
        background-color: var(--secondary-color);
    }

    @keyframes room-warning-keyframes {
        0%  { fill-opacity: 0.5; }
        50%  { fill-opacity: 1; }
        100%  { fill-opacity: 0.5; }
    }

</style>


<script>

</script>

<script setup>
	import { computed, onBeforeUnmount, onMounted, ref} from 'vue';
    import MapComponent from './map.svg?component'

	const props = defineProps({
		room: {
			type: String,
			required: true
		},
	})

    const roomsWarning = ['canteen', 'ia1', 'storage'];

    const elementId = 'map' + Math.random();

	onMounted(()=>{
        ref();
        const element = document.getElementById(elementId);
        const rooms = {};
        element.querySelectorAll("[class^=room-]").forEach((e, i) => {
            const name = e.classList[0].slice(5);

            rooms[name] = e;
            e.classList.add("room");
        });
        console.log(rooms);
        rooms[props.room].classList.add('room-current');

        roomsWarning.forEach((r, i) => {
            rooms[r].classList.add('room-warning');
        })

	});

</script>
