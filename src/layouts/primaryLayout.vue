<template>
	<main id="layout">
		 <div id="notch"><!-- class="animate__animated animate__flip animate__infinite animate__slower animate__delay-2s"-->
			<svg class="border" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
				<path d="M 0 0 L 100 50 L 200 0" />
			</svg>
			<div class="logo">
				<!-- copied from website: -->
				<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.927086 59.531242">
					<path d="M35.93262 4.6418l11.81816 6.69539L59.56894 4.6418v13.67568l-11.81816 6.83784v13.53323l-11.81816-6.83784V18.17503"></path>
				</svg>
			</div>
		</div>
		<div id="content">
			<!-- Content will be inserted here -->
				<slot />
			<!-- End of content-->
		</div>
	</main> <!-- #layout -->


</template>

<style scoped>
	* {
		--lines_base_width: 0.5vw;
	    --notch_width: 20vw;
	}
	#layout {
		/* Columns and rows data will be set in individual views */
		border: var(--lines_base_width) solid var(--primary-color);
		border-radius: 1.5vh;
		height: calc(100vh - 2*var(--lines_base_width));
		margin: var(--lines_base_width);
		overflow: hidden;
		padding: var(--lines_base_width);
		position: static;
		width: calc(100vw - 2*var(--lines_base_width)) ;
		z-index: 10;
	}

	#notch {
		background: black;
		border-top: var(--lines_base_width) solid black;
		margin: auto;
		position: absolute;
			left: calc(50% - 0.50 * var(--notch_width));
			top: 0;
		width: var(--notch_width);
		z-index: 999999;
	}
    #notch .logo {
		margin: auto;
        position: relative;
        width: 45%;
        z-index: 9999;
    }    
        #notch .logo path {
            animation-name: spin;
            animation-duration: 6s;
            animation-iteration-count: infinite;
            fill: none;
            stroke: var(--border-color);
            stroke-linecap: round;
            stroke-linejoin: round; 
            stroke-width: calc(0.6 * var(--lines_base_width));
            transform-origin: center;
        }

    #notch .border {
        position: absolute;
        top: 0;
        z-index: 100;
    }
        #notch .border path {
            fill: black;
            stroke: var(--border-color);
            stroke-linecap: round;
            stroke-linejoin: round; 
            stroke-width: var(--lines_base_width);
            vector-effect: non-scaling-stroke;
        }

	#content {
		display: grid;
		gap: 1vh 1vw;
		grid-auto-flow: row;
	}

</style>