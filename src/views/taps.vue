<template>
	<layout>
	    <section class="taps">
	    	<div class="main-area">
				<table class="taps">
					<tr>
						<td v-for="tap in taps" :key="tap.id">
                            <h2>{{ tap.fullname }}</h2>
                        </td>
					</tr>
                    <tr class="img-row">
						<td v-for="tap in taps" :key="tap.id" :style="{ backgroundImage: 'url(' + tap.logo + ')' }">
     
                        </td>
					</tr>
                    <tr class="price-row">
						<td v-for="tap in taps" :key="tap.id">
                            <h2>£{{ tap.price }}</h2>
                        </td>
					</tr>
				</table>
			</div>
	    </section>
    </layout>
</template>

<style scoped>
    .main-area {
        height: 100%;
        font-size: 1.3em;
    }
    .price-row {
        font-size: 1.5em;
    }
	.taps {
	    width: 100%;
        margin-top: 2em;
        height: calc(100% - 2em);
	}
    .taps tr {
        height: 1%;
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
    .taps .img-row td { 
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    .taps tr.img-row { 
        height: 100%;
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
        e.logo = 'https://bar.emf.camp' + e.logo;
        return e;
    });
    console.log(taps);

    setTimeout(() => {
        location.reload();
    }, 5 * 60 * 1000)

</script>
