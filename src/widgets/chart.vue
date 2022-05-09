<template>
    <article class="chart">
        <canvas :id="uid"></canvas>

    </article>
</template>

<style scoped>
	.chart {
		width: 100%;
	}
</style>

<script lang="ts">
	//type GraphType = "area" | "bar" | "bubble" | "line";

	const animations = { // Fun animations we can use
		"none": null,
		"wobbly": {
			tension: {
				duration: 1000,
				easing: 'linear',
				from: 1,
				to: 0,
				loop: true
            }
        },
    }


	type AnimationName = {
		[P in (keyof typeof animations)] : String;
	}


    let interval;


</script>
<script setup lang="ts">
    import { onMounted, PropType } from 'vue';
    import { Chart, registerables } from 'chart.js';
    Chart.register(...registerables);

    const uid:string = 'chart' + Math.random();

    const props = defineProps({
		animation: {
			type: String,
			default: 'none'
		},
        dataRetriever: { 
			// If static data, just return the JSON. If dynamic, retrieve it and set an interval.
			// Function should return whatever chart.js has under "data"
            type: Function as PropType <Function>,
            default: null
        }, 
		graphType: { // See chart.js documentation
			type:  String, //Object as PropType <GraphType>,
			default: 'bar'
		},
        interval: { // in milliseconds, 0 for no refresh
            type: Number as PropType <Number>,
            default: 0
        },
		yMax: {
			type: Number as PropType <Number>,
			optional: true
		}
    });


    onMounted(() => {
        const ctx = document.getElementById(uid);
        const chart = new Chart(ctx, {
            type: props.graphType,
            data: props.dataRetriever.call(null),
            options: { // TODO will we want to change these?
				animation: animations[props.animation],
				maintainAspectRatio: false,
				plugins: { 
					legend: { display: false } 
				},
				responsive: true,
				scaleShowLabels: false,

				scales: {
					y: {
						display: false,
						min: 0,
						max: props.yMax
					}
				}
            },
        });
		if (props.interval > 0) {
			interval = setInterval(() => {
				chart.data.datasets[0].data = props.dataRetriever.call(null).datasets[0].data;
				requestAnimationFrame(()=>chart.update());
			}, props.interval);
		} 
    });
</script>