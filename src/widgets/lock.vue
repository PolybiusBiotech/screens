<template>
    <div class="lock">
        <div :class="'button '+ (status ? 'button-on' : 'button-off')+ ' ' + (error ? 'button-error' : '') " @click="switchState()">
            <div class="indicator" />
            <div class="button-label">
               {{error ? 'access denied' : status ? props.onText : props.offText}}
            </div>

        </div>
        <h1 @click="switchState()">
            <slot name="title" />
        </h1>
    </div>
</template>

<style scoped>
    h1 {
        width: 100%;
        text-align: center;
    }

    .button {
        height: 6.3em;
        position: relative;
    }
    .indicator {
        width: 0.2em;
        height: 100%;
        position: absolute;
        background-color: var(--border-color);
        left: calc(50% - 0.1em);
    }
    .button-error .indicator {
        background-color: var(--critical-color);
    }
    .button-label {
        border: 0.2em solid var(--border-color);
        line-height: 3em;
        text-align: center;
        position: absolute;
        font-size: 1em;
        top: 0;
        left: 2em;
        right: 2em;
        background: var(--background-color);
        transition: top 0.2s,color 0.2s, background 0.02s;
    }

    .button-on .button-label {
        top: 3em;
        background: var(--border-color);
        color: var(--background-color);
    }
    .button-error .button-label {
        background: var(--critical-color);
        border-color: var(--critical-color);
        color: var(--background-color);
    }
</style>

<script setup lang="ts">
    import { stat } from 'fs';
import { ref } from 'vue';

    const props = defineProps({
		initial: {
			type: String,
            default: 'on'
		},
        onText: {
			type: String,
            default: 'on'
		},
        offText: {
			type: String,
            default: 'off'
		},
        override: {
            type: String,
        }
	});

    const status = ref(props.initial === 'on');
    const error = ref(false);
    const switchState = () => {
        status.value = !status.value;
        if (props.override && props.override === 'off') {
            setTimeout(() => {
                //status.value = props.override === 'on';
                status.value = (props.initial === 'on');
                error.value = true;
                setTimeout(() => {
                    error.value = false;
                }, 1000);
            }, 100);
        }
    }

</script>
