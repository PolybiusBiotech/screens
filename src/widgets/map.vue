<template>
	<div class="map" :id="elementId">
        <slot />
        <div class="legend">
            <div class="legend-warning" v-if="hasWarnings"><slot name="warning"/></div>
        </div>
	</div>
</template>

<style>
    .map {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .map svg .area-current {
        fill: #4b758e;
    }

    .map svg .area-warning {
        animation-name: area-warning-keyframes;
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

    .animate-dash {
        animation-name: dash-keyframes;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    svg text {
        text-transform: none;
        font-size: 0.5vmin;
        font-weight: 900;
        font-family: 'Tourney', cursive;
    }

    @keyframes area-warning-keyframes {
        0%  { fill-opacity: 0.6; }
        50%  { fill-opacity: 1; }
        100%  { fill-opacity: 0.6; }
    }

    @keyframes dash-keyframes {
        0%  { stroke-dashoffset: 4; }
        100%  { stroke-dashoffset: 0; }
    }

</style>


<script>

</script>

<script setup>
	import {onMounted} from 'vue';

	const props = defineProps({
		current: {
			type: String
		},
        warning: {
			type: String,
		},
	})

    const warningAreas = (props.warning || "").split(",").filter(Boolean);
    const hasWarnings = warningAreas.length > 0;

    const elementId = 'map' + Math.random();

	onMounted(()=>{
        const parentElement = document.getElementById(elementId);
        const svgElement = parentElement.querySelector('svg');

        // Make sure the map never overflows the viewport
        const resize = () => {
            svgElement.style.width = (parentElement.clientWidth - 5) + "px";
            svgElement.style.height = (parentElement.clientHeight - 5) + "px";
        }
        resize();
        window.addEventListener('resize', resize);

        const areas = {};
        svgElement.querySelectorAll(".area").forEach((e, i) => {
            const name = Array.from(e.classList).find(e => e.indexOf('area-') === 0).slice(5);
            areas[name] = e;
        });
        props.current && areas[props.current].classList.add('area-current');

        warningAreas.forEach((area, i) => {
            if (areas[area]) {
                areas[area].classList.add('area-warning');
            } else {
                console.warn(`area ${area} not found in list of areas ${areas.join(',')}`);
            }
        })
	});

</script>
