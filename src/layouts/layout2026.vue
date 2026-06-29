<template>
  <main id="layout-2026">
    <div id="notch">
      <svg class="border" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 85">
        <path d="M 0 0 L 100 80 L 200 0" />
      </svg>
      <div class="logo">
        <!-- GTN logo mark, extracted from GTN_main_logo.svg — viewBox centres the multicolour group -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="317 356 102 124">
          <!-- hexagon outline -->
          <path
            fill="none"
            stroke="#BE00FE"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M338.3,378.5l33.5,19l33.5-19v38.8l-33.5,19.4V475l-33.5-19.4v-38.8"
          />
          <!-- orange R swoosh -->
          <path
            fill="#F77F02"
            d="M340.2,361.3c18.5,1.3,35.5,7.5,52.4,16.5c-7.7-1.3-14.6-2.5-22.1-3.8
              c1.8,3.5,3.4,6.5,4.9,9.4C365.7,372.7,354.6,364.5,340.2,361.3z"
          />
          <!-- yellow arc -->
          <path
            fill="#F9E200"
            d="M322.1,383.4c0.8,3.9,1.2,7.2,2.2,10.5c3.5,12,9.1,22.9,17,32.7
              c6.1,7.6,12.6,14.7,20.4,20.5c5.5,4.1,11.4,7.5,18.2,9c7.4,1.7,13.6-0.8,19.4-5.2
              c0.2-0.1,0.4-0.3,0.6-0.3c-4.2,5.4-9.2,9.4-16.5,9.7c-10.7,0.5-19.6-3.8-27.6-10.2
              c-9.3-7.5-17.5-16.2-23.4-26.7c-6.4-11.2-10.3-23.2-10.3-36.3z"
          />
          <!-- orange sparkle -->
          <path
            fill="#F77F02"
            d="M399.8,434.6c0.6,0.2,1.3,0.5,1.9,0.7c1.2,0.4,2.2,0,3-0.8
              c1.4-1.4,2-3.1,2.1-5c0.1-1.2,0-2.5-0.2-3.7l0.1-0.1c0.2,0.8,0.5,1.6,0.7,2.4
              c0.4,2.4,0.6,4.7,1,7c0.1,0.9,0.5,1.8,0.8,2.6c0.5,1.1,1.3,1.9,2.4,2.4
              c0.4,0.2,0.8,0.4,1.2,0.8c-0.3,0-0.6-0.1-0.9-0.2c-1.7-0.6-3.2-0.1-4.5,0.9
              c-1.5,1-2.6,2.4-3.6,3.8c-0.6,0.9-1.3,1.8-2,2.7l-0.1-0.1c0.4-1,0.7-2.1,1-3.1
              c0.6-2.2,0.8-4.3,0-6.5c-0.4-1.3-1.2-2.3-2.1-3.2C400.2,435.1,400,434.9,399.8,434.6z"
          />
        </svg>
      </div>
    </div>
    <div id="content-2026">
      <slot />
    </div>
    <div class="lore-id">
      <p>Polybius Biotech Galactic Trade Network</p>
      <p>Business Class Lounge</p>
    </div>
  </main>
</template>

<style>
/* Align the viewport background to the 2026 theme so the layout margin gap disappears */
html,
body,
#app {
  background-color: #0d0010 !important;
}
</style>

<style scoped>
@import url('@/assets/css/font-eurostile.css');

/* No condensed variant in the licensed files; regular Eurostile used throughout. */
* {
  --lines_base_width: 0.5vmin;
  --notch_width: 18vmax;

  /* 2026 GTN colour theme — overrides common.css :root for all children */
  --primary-color: #be00fe;
  --border-color: #be00fe;
  --secondary-color: #f77f02;
  --accent-color: #f9e200;
  --background-color: #0d0010;
  --warning-color: #f77f02;
  --critical-color: #e12020;
  --positive-color: #f9e200;
}

#layout-2026 {
  background-color: #0d0010;
  border: var(--lines_base_width) solid var(--primary-color);
  border-radius: 5vmin;
  box-shadow: 0 0 35px #be00fe50, inset 0 0 60px #be00fe0a;
  display: flex;
  flex-direction: column;
  font-family: 'Eurostile', 'Exo', sans-serif;
  font-weight: 700;
  height: calc(100vh - 2 * var(--lines_base_width));
  margin: var(--lines_base_width);
  overflow: hidden;
  padding: var(--lines_base_width);
  position: relative;
  width: calc(100vw - 2 * var(--lines_base_width));
}

#notch {
  border-top: var(--lines_base_width) solid #0d0010;
  margin: auto;
  /* fixed so it pins to the viewport top regardless of layout margin */
  position: fixed;
  left: calc(50% - 0.5 * var(--notch_width));
  top: 0;
  width: var(--notch_width);
}

/* logo: 22% of notch width — small enough that V wings clear it by ~1.2vmax */
#notch .logo {
  filter: drop-shadow(0 0 6px #f77f02) drop-shadow(0 0 16px #f77f0270);
  margin: auto;
  margin-top: 0.5vmin;
  position: relative;
  width: 22%;
}

#notch .border {
  filter: drop-shadow(0 0 4px #be00fe90);
  position: absolute;
  top: 0;
}
#notch .border path {
  fill: #0d0010;
  stroke: var(--border-color);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--lines_base_width);
  vector-effect: non-scaling-stroke;
}

#content-2026 {
  display: grid;
  flex: 1;
  gap: 2vh 2vw;
  /* V depth ≈ notch_width × (80/200) = 7.2vmax; add 1.5vmax breathing room */
  padding: 9vmax 3vw 2vh;
  grid-auto-flow: row;
  /* 1fr: single slot item stretches to fill available content height */
  grid-template-rows: 1fr;
  max-width: 100vw;
  min-height: 0;
  overflow: hidden;
}

/* bottom-right branding ID — flex item, in flow so it never overlaps content */
.lore-id {
  flex-shrink: 0;
  font-family: 'Eurostile', 'Exo', sans-serif;
  font-weight: 400;
  font-size: 0.85em;
  letter-spacing: 0.06em;
  line-height: 1.35;
  text-align: right;
  color: var(--primary-color);
  opacity: 0.45;
  padding: 0 2vw 1.2vmin 0;
}
.lore-id p {
  margin: 0;
}
</style>

<script setup lang="ts">
defineProps({
  largeNotch: {
    type: Boolean,
  },
});
</script>
