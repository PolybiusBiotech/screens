<template>
    <div v-if="glitch" class="glitch" :class="'glitch-' + glitch.type">
        <video autoplay="true" loop="true" muted="true" width="100%" height="100%">
            <source v-if="glitch.video === '1'" src="@/assets/glitches/glitch1.webm" type="video/webm">
            <source v-if="glitch.video === '2'" src="@/assets/glitches/glitch2.webm" type="video/webm">
            <source v-if="glitch.video === '3'" src="@/assets/glitches/nullsectest18_0001-1201-4x-RIFE-RIFE3.1-48fps.webm" type="video/webm">
            <source v-if="glitch.video === '4'" src="@/assets/glitches/nullsectest17000_1-1201-4x-RIFE-RIFE3.1-48fps.webm" type="video/webm">
            <source v-if="glitch.video === '5'" src="@/assets/glitches/nullsecvq8_0001-1201_esrgan-4x-RIFE-RIFE3.1-48fps.webm" type="video/webm">
            <source v-if="glitch.video === '6'" src="@/assets/glitches/nullsectest8_0001-1201-4x-RIFE-RIFE3.1-48fps(1).webm" type="video/webm">
            <source v-if="glitch.video === '7'" src="@/assets/glitches/nullsectest10_0001-1201-4x-RIFE-RIFE3.1-48fps.webm" type="video/webm">
            <source v-if="glitch.video === '8'" src="@/assets/glitches/nullsecvq80001-1201_esrgan.webm" type="video/webm">
        </video>
        <h1 v-if="glitch.text && glitch.type !== 'partial'">{{glitch.text}}</h1>
        <h2>@aspicyrobot</h2>
    </div>
</template>

<style scoped>
	.glitch {
		position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }

    .glitch-partial {
        animation-name: partial-glitch-keyframes;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    .glitch video {
        position: absolute;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: 5;
    }

    .glitch h1 {
        z-index: 10;
        line-height: 4vmin;

        color: var(--background-color);
        background-color: var(--secondary-color);

        animation-name: blink-keyframes;
        animation-duration: 0.5s;
        animation-direction: alternate;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    .glitch h2 {
        z-index: 10;
        line-height: 1vmin;
        font-size: 0.5em;

        color: var(--background-color);
        position: fixed;
        bottom: 1em;
        right: 1em;
    }

    @keyframes blink-keyframes {
        0% { opacity: 0.5; }
        100% { opacity: 1; }
    }

    @keyframes partial-glitch-keyframes {
        0%  { clip-path: polygon(4% 69%, 40% 69%, 40% 74%, 4% 74%, 4% 69%, 15% 26%, 50% 26%, 50% 31%, 15% 31%, 15% 26%);}
        9.99%  { clip-path: polygon(4% 69%, 40% 69%, 40% 74%, 4% 74%, 4% 69%, 15% 26%, 50% 26%, 50% 31%, 15% 31%, 15% 26%);}

        10% { clip-path: polygon(55% 13%, 93% 13%, 93% 18%, 55% 18%, 55% 13%, 53% 32%, 81% 32%, 81% 37%, 53% 37%, 53% 32%);}
        19.99% { clip-path: polygon(55% 13%, 93% 13%, 93% 18%, 55% 18%, 55% 13%, 53% 32%, 81% 32%, 81% 37%, 53% 37%, 53% 32%);}

        20% { clip-path: polygon(47% 72%, 72% 72%, 72% 77%, 47% 77%, 47% 72%, 51% 9%, 72% 9%, 72% 14%, 51% 14%, 51% 9%);}
        29.99% { clip-path: polygon(47% 72%, 72% 72%, 72% 77%, 47% 77%, 47% 72%, 51% 9%, 72% 9%, 72% 14%, 51% 14%, 51% 9%);}

        30% { clip-path: polygon(48% 52%, 78% 52%, 78% 57%, 48% 57%, 48% 52%, 0% 31%, 25% 31%, 25% 36%, 0% 36%, 0% 31%);}
        39.99% { clip-path: polygon(48% 52%, 78% 52%, 78% 57%, 48% 57%, 48% 52%, 0% 31%, 25% 31%, 25% 36%, 0% 36%, 0% 31%);}

        40% { clip-path: polygon(8% 9%, 43% 9%, 43% 14%, 8% 14%, 8% 9%, 56% 7%, 77% 7%, 77% 12%, 56% 12%, 56% 7%);}
        49.99% { clip-path: polygon(8% 9%, 43% 9%, 43% 14%, 8% 14%, 8% 9%, 56% 7%, 77% 7%, 77% 12%, 56% 12%, 56% 7%);}

        50% { clip-path: polygon(36% 54%, 75% 54%, 75% 59%, 36% 59%, 36% 54%, 65% 15%, 100% 15%, 100% 20%, 65% 20%, 65% 15%);}
        59.99% { clip-path: polygon(36% 54%, 75% 54%, 75% 59%, 36% 59%, 36% 54%, 65% 15%, 100% 15%, 100% 20%, 65% 20%, 65% 15%);}

        60% { clip-path: polygon(66% 88%, 93% 88%, 93% 93%, 66% 93%, 66% 88%, 16% 23%, 51% 23%, 51% 28%, 16% 28%, 16% 23%);}
        69.99% { clip-path: polygon(66% 88%, 93% 88%, 93% 93%, 66% 93%, 66% 88%, 16% 23%, 51% 23%, 51% 28%, 16% 28%, 16% 23%);}

        70% { clip-path: polygon(7% 14%, 34% 14%, 34% 19%, 7% 19%, 7% 14%, 66% 29%, 101% 29%, 101% 34%, 66% 34%, 66% 29%);}
        79.99% { clip-path: polygon(7% 14%, 34% 14%, 34% 19%, 7% 19%, 7% 14%, 66% 29%, 101% 29%, 101% 34%, 66% 34%, 66% 29%);}

        80% { clip-path: polygon(50% 86%, 84% 86%, 84% 91%, 50% 91%, 50% 86%, 29% 33%, 58% 33%, 58% 38%, 29% 38%, 29% 33%);}
        89.99% { clip-path: polygon(50% 86%, 84% 86%, 84% 91%, 50% 91%, 50% 86%, 29% 33%, 58% 33%, 58% 38%, 29% 38%, 29% 33%);}

        90% { clip-path: polygon(42% 11%, 71% 11%, 71% 16%, 42% 16%, 42% 11%, 35% 6%, 58% 6%, 58% 11%, 35% 11%, 35% 6%);}
        99.99% { clip-path: polygon(42% 11%, 71% 11%, 71% 16%, 42% 16%, 42% 11%, 35% 6%, 58% 6%, 58% 11%, 35% 11%, 35% 6%);}
    }

</style>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { getGlitch } from './schedule.js';

    const glitch = ref(null);
    const updateTime = () => {
        glitch.value = getGlitch();
        const now = new Date();
        const msUntilNextFullMinute = 1000 - now.getMilliseconds() + (60 - now.getSeconds()) * 1000 + 100;
        setTimeout(updateTime, msUntilNextFullMinute);
    };

    updateTime();
</script>
