<template>
	<div class="map">
        <MapComponent :id="elementId" />
        <div class="legend">
            <div class="legend-warning" v-if="hasWarnings">FAILURE DETECTED</div>
        </div>
	</div>
</template>

<style>
    .map {
        position: relative;
    }
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
        fill: var(--warning-color);
    }

    .legend {
        position: absolute;
        right: 0;
        bottom: 0;
        text-align: right;
        color: var(--background-color)

    }
    .legend div {
        display: inline-block;
        padding: 0.25em;

    }
    .legend-warning {
        background-color: var(--warning-color);
    }

    @keyframes room-warning-keyframes {
        0%  { fill-opacity: 0.8; }
        50%  { fill-opacity: 1; }
        100%  { fill-opacity: 0.8; }
    }

</style>


<script>

</script>

<script setup>
	import {onMounted} from 'vue';
    import MapComponent from './map.svg?component'

	const props = defineProps({
		room: {
			type: String,
			required: true
		},
        warning: {
			type: String,
		},
	})

    const warningRooms = (props.warning || "").split(",").filter(Boolean);
    const hasWarnings = warningRooms.length > 0;

    const elementId = 'map' + Math.random();

	onMounted(()=>{
        const element = document.getElementById(elementId);
        const rooms = {};
        element.querySelectorAll("[class^=room-]").forEach((e, i) => {
            const name = e.classList[0].slice(5);
            rooms[name] = e;
            e.classList.add("room");
        });
        rooms[props.room].classList.add('room-current');

        warningRooms.forEach((r, i) => {
            if (rooms[r]) {
                rooms[r].classList.add('room-warning');
            } else {
                console.warn(`room ${r} not found in list of rooms`);
            }
        })

	});

</script>
