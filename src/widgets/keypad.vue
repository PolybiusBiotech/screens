<template>
    <div :class="'keypad ' + (error ? 'keypad-error': '')">
        <div class="input">{{inputFilled}}</div>
        <div class="keys">
            <!--button v-for="number in [1, 2, 3, 4, 5, 6, 7, 8, 9, '#', 0, '@']" @click="press(number)"-->
            <button v-for="number in numberDicts[numbersType]" @click="press(number)">
                {{ number }}
            </button>
        </div>
    </div>
</template>

<style scoped>
    .keypad {
        display: inline-block;
        font-size: 2.5em;
    }
    .input {
        text-align: center;
        margin-bottom: 0.5em;
        letter-spacing: .5rem;
    }
    .keypad-error .input {
        color: var(--critical-color);
        animation: shake 0.1s;
        animation-iteration-count: infinite;
    }
    .keys {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
        column-gap: 0.2em;
        row-gap: 0.2em;
        grid-template-areas:
            "1 2 3"
            "4 5 6"
            "7 8 9"
            ". 0 .";
    }
    button {
        font-size: 0.7em;
        background: var(--background-color);
        color: var(--primary-color);
        border: 0.2em solid var(--border-color);
        line-height: 2em;
        width: 3em;
    }
    button:active {
        color: var(--background-color);
        background-color: var(--primary-color);
    }

    @keyframes shake {
        0% { transform: translateY(0); }
        25% { transform: translateY(-0.1em); }
        50% { transform: translateY(0); }
        75% { transform: translateY(0.1em); }
        100% { transform: translateY(0); }
    }
</style>

<script setup lang="ts">
    import { ref, computed } from 'vue';

    const props = defineProps({
        numbersType: {
            type: String,
            default: 'arabic'
        }
	});

    const input = ref("");
    const inputFilled = computed(() =>
        (input.value + "••••••").slice(0,4)
    );
    const error = ref(false);
    const press = (number) => {
        if (error.value) {
            return;
        }
        if (number === '#' || number === '@') {
            input.value = '';
            return;
        }
        input.value += number;
        if (input.value.length >= 4) {
            error.value = true;
            setTimeout(() => {
                error.value = false;
                input.value = "";
            }, 500);
        }
    }

    const numberDicts = { // First member will be ignored!
        arabic: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, '#', 0, '@'],
        greek: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', '∰', 'κ', '∃'],
    }

</script>
