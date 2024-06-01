<template>
	<layout>
	    <section class="taps">
	    	<div>
	    		<h1>{{pageName}}</h1>
	    	</div>
	    	<div class="main-area">
				<table class="taps">
					<tr>
						<td v-for="tap in taps" :key="tap">
                            <h2>{{ tap.fullname }}</h2>
                            <img :src="tap.img" />
                        </td>
					</tr>
				</table>
			</div>
	    </section>
    </layout>
</template>

<style scoped>
	.taps {
	    width: 100%;
        margin-top: 3em;
	    
	}
	.taps td {
		width: 33%;
        text-align: center;
	}
    .taps img {
		width: 80%;
	}

    .taps h2 {
        text-align: center;
    }

	table {
		width: 100%;
	}

	td {
		font-size: 1.2em;
		line-height: 1.8em;
		border-bottom: 0.05em solid var(--border-color);
	}

	tr:last-child td {
	    border-bottom: none;
	}


	.price {
		text-align: right;
	}

	h2 {
		font-size: 1em;
		text-align: right;
	}


</style>

<script setup lang="ts">
    import Layout from '@/layouts/noGlitchLayout.vue';
    import Text from '@/widgets/text.vue';
    import tapsData from '../data/taps.json';

    const taps = [...tapsData.kegs, ...tapsData.ciders].map(tap => {
        const e = tap.stocktype;
        e['img'] = 'https://bar.emf.camp' + e.logo;
        return e;
    });
    console.log(taps);

</script>
