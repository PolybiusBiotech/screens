<template>
	<layout>
	    <section class="bar-closed">
	    	<div>
	    		<h1>Bar closed</h1>
	    	</div>
	    	<div class="main-area">
				<h1>Please come back later</h1>
			</div>
	    </section>
    </layout>
</template>

<style scoped>
	.bar-closed {
        text-align: center;
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

