<template>
    <article class="chart">
        <canvas :id="uid" height="30vh" width="40vw"></canvas>

    </article>
</template>

<script setup>
    import { computed, onMounted } from 'vue';
    import { Chart, registerables } from 'chart.js';
    Chart.register(...registerables);

    const uid = 'chart' + Math.random();

    // TODO import / update
    const generateData = () => { return {
        labels: ['A', 'B', 'C', 'D', 'E', 'F'],
        datasets: [{
            label: '',
            data: new Array(6).fill(0).map(()=>Math.random()*20),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    } };

    let interval;

    onMounted(() => {
        const ctx = document.getElementById(uid);
        const chart = new Chart(ctx, {
            type: 'line', // TODO prop
            data: generateData(),
            options: {
				animations: {
					tension: {
						duration: 1000,
						easing: 'linear',
						from: 1,
						to: 0,
						loop: true
					}
				},
				legend: false,
				scales: {
					y: {
						min: 0,
						max: 20
					}
				}
            },
        });
        interval = setInterval(() => {
            chart.data.datasets[0].data = generateData().datasets[0].data;
            requestAnimationFrame(()=>chart.update());
        }, 3000);
    });
</script>