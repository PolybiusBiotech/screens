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

let interval:any;


</script>
<script setup lang="ts">
    import { onMounted, Prop, PropType } from 'vue';
    import { Chart, registerables } from 'chart.js';

	import chartjsGauge from 'chartjs-gauge';

	Chart.register(...registerables);

    const uid:string = 'chart' + Math.random();

    const props = defineProps({

		animation: {
			type: String as PropType <string>,
			default: 'none'
		},
        dataRetriever: {
			// If static data, just return the JSON. If dynamic, retrieve it and set an interval.
			// Function should return whatever chart.js has under "data"
            type: Function as PropType <Function>,
            default: null
        },
		displayLegend: {
			type: Boolean,
			default: false
		},
		displayLegendPosition: {
			type: String,
			default: 'top'
		},
		graphType: { // See chart.js documentation
			type:  String as PropType<any>,
			default: 'bar'
		},
        interval : {
			type: Number as PropType <number>,
			default: 0
		},
		optionsDelta: {
			// IMPORTANT
			// does a SHALLOW merge. If you overwrite a default option you'll lose everything under it you didn't specifically mention.
			type: Object as PropType <Object>,
			default: {}
		},
		yMax: {
			type: Number as PropType <number>,
			default: -1
			//optional: true
		}
    });


    onMounted(() => {
		const defaultOptions = { // TODO will we want to change these?
			animation: animations[props.animation],
			maintainAspectRatio: false,
			plugins: {
				legend: { 
					display: props.displayLegend,
					position: props.displayLegendPosition,
					labels: {
						color: '#0083d1', // TODO var(--primary-color) somehow
						font: { size: 20 },
					}
				}
			},
			responsive: true,
			scaleShowLabels: false,

			scales: {
				y: {
					display: false,
					min: 0,
				}
			}
		};
		if (props.yMax >= 0) {
			defaultOptions.scales.y['max'] = props.yMax;
		}

		const options = Object.assign(props.optionsDelta, defaultOptions);
        const ctx:any = document.getElementById(uid);

			//chartjs(ctx, options);
		const config = {
			type: props.graphType,
			data: props.dataRetriever.call(null),
			options
		}

		let chart;
		switch (props.graphType) {
			case 'gauge':
				chart = chartjsGauge(ctx, config);
				break;
			default:
				chart = new Chart(ctx, config);
				break;
		}

		if (props.interval > 0) {
			interval = setInterval(() => {
				switch (props.graphType) {
					case 'gauge':
						chart.data.datasets[0].value = props.dataRetriever.call(null).datasets[0].value;
						break;
					default:
						chart.data.datasets[0].data = props.dataRetriever.call(null).datasets[0].data;
						break;
				}
				requestAnimationFrame(()=>chart.update());
			}, props.interval);
		}
    });
</script>
