<template>
  <layout>
    <section id="one">
      <Countdown :end="almost_end_of_EMF" fontSize="15vh"></Countdown>

      <Countdown :end="soon" fontSize="15vh"></Countdown>
    </section>
    <section id="two">
      <Chart graphType="doughnut" :dataRetriever="generateChartData" :interval="50"></Chart>
      <Text>
        <template #title>Demo text</template>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla omnis necessitatibus sunt,
          assumenda consectetur provident illum optio iusto delectus beatae aliquam nobis minima
          ipsa eius, nisi reiciendis. Quos, libero sunt.
        </p>
        <p>
          Odit beatae perferendis praesentium blanditiis rerum voluptatibus veniam repellat ipsum
          quo. Excepturi mollitia culpa in nostrum. Mollitia ipsam consectetur minus earum facere!
        </p>
      </Text>
    </section>

    <NewsMarquee id="news" />
  </layout>
</template>

<style scoped>
:deep(#content) {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4vh;
  grid-template-areas:
    'One Two'
    'News News';
}

#one {
  grid-area: One;
}
#two {
  grid-area: Two;
}
#news {
  grid-area: News;
}

#one {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  align-content: space-between;
  height: 90vh;
}
#one .countdown {
  flex: 1;
}
</style>

<script setup lang="ts">
import Layout from '@/layouts/primaryLayout.vue';
import Chart from '@/widgets/chart.vue';
import Countdown from '@/widgets/countdown.vue';
import NewsMarquee from '@/widgets/news-marquee.vue';
import Text from '@/widgets/text.vue';

const almost_end_of_EMF = new Date(2022, 5, 5, 22, 0, 0); // Note: subtract 1 from RL month. June = 5
const soon = new Date(Date.now() + 10 * 1000);

const chartLims = [0, 5];
let chartValue = 1.5;
const generateChartData = () => {
  const delta = (Math.random() * (chartLims[1] - chartLims[0])) / 500;
  const sign = Math.random() < 0.5 ? -1 : 1;
  chartValue += sign * delta;
  if (chartValue < chartLims[0]) chartValue = chartLims[0];
  if (chartValue > chartLims[1]) chartValue = chartLims[1];
  return {
    labels: ['Danger', 'Safe'],
    datasets: [
      {
        data: [chartValue, chartLims[1] - chartValue],
        backgroundColor: ['red', 'green'],
      },
    ],
  };
};
</script>
