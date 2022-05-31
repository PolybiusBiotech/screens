<template>
<layout>
	<section id="welcome" class="vertically-centered">
		<Text>
			<p>Good evening! Everything is under control.</p>
			<p>PolyBio is here for you, to help you achieve your goals and be your most productive.</p>
			<p>Have you seen something inappropriate? Talk to your PolyBio Life Coach.</p>
			<p>Don’t forget your daily wellness training!</p>
			<p>And remember — feeling down? You’re working here!</p>
			<p>PolyBio: Here for you.</p>
		</Text>
	</section>
	<section id="countdown">
		<Countdown end="end_of_EMF" />
	</section>
	<section id="map" class="vertically-centered">
		<Map warning="tunnel,observation">
			<ProfileMap />
			<template #warning>Contamination Warning</template>
		</Map>
	</section>
	<NewsMarquee />
	</layout>
</template>

<style scoped>

	:deep(#content) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 20fr 1fr 4vh;
		grid-template-areas:
			"Welcome Map"
			"Countdown Countdown"
			"News News"
	}

	#welcome { grid-area: Welcome; }
	#countdown { grid-area: Countdown; }
	#map { grid-area: Map; }
	#news { grid-area: News; }


	#map{
		overflow: hidden;
	}

</style>

<script setup lang="ts">
	import Layout from '@/layouts/primaryLayout.vue';

	import Countdown from '@/widgets/countdown.vue';
	import Map from '@/widgets/map.vue';
	import NewsMarquee from '@/widgets/news-marquee.vue';
	import Text from '@/widgets/text.vue';

	import ProfileMap from '@/maps/profile.svg'

</script>
