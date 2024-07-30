<script setup lang="ts">
//Inspired by https://github.com/pmotschmann/Evolve
import {reactive} from "vue";
import {BlastProperties} from "./BlastProperties";

const {
    properties
} = defineProps<{
    properties: BlastProperties;
}>();
const style = reactive({
    top: properties.Top + "px",
    left: properties.Left + "px"
});
</script>

<template>
    <div :class="$style.blast" :style="style"></div>
</template>

<style module>
.blast {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    animation-name: blast;
    animation-duration: v-bind('properties.Duration + "s"');
    animation-fill-mode: forwards;
    box-shadow: 0 -2px 4px #FFF, 0 -2px 10px #FF3, 0 -10px 20px #F90, 0 -20px 40px #C33, inset 0 -20px 40px #FFF, inset 0 -20px 100px #FF3, inset 0 -40px 200px #F90, inset 0 -80px 400px #C33;
}

@keyframes blast {
    75% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        width: v-bind('properties.Width + "px"');
        height: v-bind('properties.Height + "px"');
        top: v-bind('(properties.Top - properties.Height / 2)  + "px"');
        left: v-bind('(properties.Left - properties.Width / 2)  + "px"');
        animation-timing-function: ease-out, cubic-bezier(0.22, 0.61, 0.36, 1), cubic-bezier(0.22, 0.61, 0.36, 1), cubic-bezier(0.22, 0.61, 0.36, 1), cubic-bezier(0.22, 0.61, 0.36, 1);
    }
}
</style>