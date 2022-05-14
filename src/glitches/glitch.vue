<template>
    <div class="glitch" v-if='enabled'>
        <video autoplay="" loop="true" muted="" playsinline="" width="100%" height="100%">
            <source src="@/assets/glitches/glitch1.webm" type="video/webm">
        </video>
        <h1>CONNECTION LOST</h1>
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
        animation-name: glitch-keyframes;
        animation-duration: 20s;
        animation-iteration-count: infinite;
        animation-timing-function: steps(10, end);
        pointer-events: none;
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
        line-height: 4vh;

        color: var(--background-color);
        background-color: var(--secondary-color);
    }

    @keyframes glitch-keyframes {
        0%  { clip-path: polygon(4% 69%, 40% 69%, 40% 74%, 4% 74%, 4% 69%, 15% 26%, 50% 26%, 50% 31%, 15% 31%, 15% 26%);}
        0.99%  { clip-path: polygon(4% 69%, 40% 69%, 40% 74%, 4% 74%, 4% 69%, 15% 26%, 50% 26%, 50% 31%, 15% 31%, 15% 26%);}

        1% { clip-path: polygon(55% 13%, 93% 13%, 93% 18%, 55% 18%, 55% 13%, 53% 32%, 81% 32%, 81% 37%, 53% 37%, 53% 32%);}
        1.99% { clip-path: polygon(55% 13%, 93% 13%, 93% 18%, 55% 18%, 55% 13%, 53% 32%, 81% 32%, 81% 37%, 53% 37%, 53% 32%);}

        2% { clip-path: polygon(47% 72%, 72% 72%, 72% 77%, 47% 77%, 47% 72%, 51% 9%, 72% 9%, 72% 14%, 51% 14%, 51% 9%);}
        2.99% { clip-path: polygon(47% 72%, 72% 72%, 72% 77%, 47% 77%, 47% 72%, 51% 9%, 72% 9%, 72% 14%, 51% 14%, 51% 9%);}

        3% { clip-path: polygon(48% 52%, 78% 52%, 78% 57%, 48% 57%, 48% 52%, 0% 31%, 25% 31%, 25% 36%, 0% 36%, 0% 31%);}
        3.99% { clip-path: polygon(48% 52%, 78% 52%, 78% 57%, 48% 57%, 48% 52%, 0% 31%, 25% 31%, 25% 36%, 0% 36%, 0% 31%);}

        4% { clip-path: polygon(8% 9%, 43% 9%, 43% 14%, 8% 14%, 8% 9%, 56% 7%, 77% 7%, 77% 12%, 56% 12%, 56% 7%);}
        4.99% { clip-path: polygon(8% 9%, 43% 9%, 43% 14%, 8% 14%, 8% 9%, 56% 7%, 77% 7%, 77% 12%, 56% 12%, 56% 7%);}

        5% { clip-path: polygon(36% 54%, 75% 54%, 75% 59%, 36% 59%, 36% 54%, 65% 15%, 100% 15%, 100% 20%, 65% 20%, 65% 15%);}
        5.99% { clip-path: polygon(36% 54%, 75% 54%, 75% 59%, 36% 59%, 36% 54%, 65% 15%, 100% 15%, 100% 20%, 65% 20%, 65% 15%);}

        6% { clip-path: polygon(66% 88%, 93% 88%, 93% 93%, 66% 93%, 66% 88%, 16% 23%, 51% 23%, 51% 28%, 16% 28%, 16% 23%);}
        6.99% { clip-path: polygon(66% 88%, 93% 88%, 93% 93%, 66% 93%, 66% 88%, 16% 23%, 51% 23%, 51% 28%, 16% 28%, 16% 23%);}

        7% { clip-path: polygon(7% 14%, 34% 14%, 34% 19%, 7% 19%, 7% 14%, 66% 29%, 101% 29%, 101% 34%, 66% 34%, 66% 29%);}
        7.99% { clip-path: polygon(7% 14%, 34% 14%, 34% 19%, 7% 19%, 7% 14%, 66% 29%, 101% 29%, 101% 34%, 66% 34%, 66% 29%);}

        8% { clip-path: polygon(50% 86%, 84% 86%, 84% 91%, 50% 91%, 50% 86%, 29% 33%, 58% 33%, 58% 38%, 29% 38%, 29% 33%);}
        8.99% { clip-path: polygon(50% 86%, 84% 86%, 84% 91%, 50% 91%, 50% 86%, 29% 33%, 58% 33%, 58% 38%, 29% 38%, 29% 33%);}

        9% { clip-path: polygon(42% 11%, 71% 11%, 71% 16%, 42% 16%, 42% 11%, 35% 6%, 58% 6%, 58% 11%, 35% 11%, 35% 6%);}
        9.99% { clip-path: polygon(42% 11%, 71% 11%, 71% 16%, 42% 16%, 42% 11%, 35% 6%, 58% 6%, 58% 11%, 35% 11%, 35% 6%);}

        10% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);}
        19.99% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);}

        20% { clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%);}
        100% { clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%);}
    }

</style>

<script setup lang="ts">
    const enabled = false;
</script>
