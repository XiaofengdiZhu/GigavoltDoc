<script setup lang="ts">
import {ref, useCssModule, watchEffect} from "vue";
import DetonatorBlast from "./DetonatorBlast.vue";
import {BlastProperties} from "./BlastProperties";

const iconImg = ref(null);
const explosionContainer = ref(null);
const blasts = ref<BlastProperties[]>([]);

const explosionStarted = ref(false);

const cssModule = useCssModule();

let iconRect: DOMRect;
const onIconClick = () => {
    if (explosionStarted.value) {
        return;
    }
    explosionStarted.value = true;
    let html = document.documentElement;
    html.style.overflow = "hidden";
    html.requestFullscreen();
    html.style.transitionDuration = "2s"
    html.style.backgroundColor = "black";
    iconRect = iconImg.value.getBoundingClientRect();
    /*const stop = watchEffect(() => {
        if (explosionContainer.value) {
            stop();
            explosionContainer.value.requestFullscreen();
        }
    });*/
}
let counter = 0;
let windowInfo = {
    windowWidth: 0,
    windowHeight: 0,
    baseWidth: 0,
    baseHeight: 0
}
const onAfterStart = () => {
    windowInfo.windowWidth = window.innerWidth;
    windowInfo.windowHeight = window.innerHeight;
    windowInfo.baseWidth = windowInfo.windowWidth * 2;
    windowInfo.baseHeight = windowInfo.windowWidth > windowInfo.windowHeight ? windowInfo.windowHeight * 2 : windowInfo.baseWidth;
    blasts.value.push(new BlastProperties(counter++, windowInfo.baseWidth, windowInfo.baseHeight, iconRect.left + iconRect.width / 2, iconRect.top + iconRect.height / 2, 3.5));
    setTimeout(() => {
        addRandomBlast();
    }, 4000);
}

function addRandomBlast() {
    if (blasts.value.length > 10) {
        blasts.value.shift();
    }
    let scale = Math.random() * 0.3;
    let duration = scale * 6 + 1.2;
    scale += 0.1;
    if (windowInfo.windowWidth < windowInfo.windowHeight) {
        scale *= Math.random() * windowInfo.windowHeight / windowInfo.windowWidth + 1;
    }
    blasts.value.push(new BlastProperties(counter++, windowInfo.baseWidth * scale, windowInfo.baseHeight * scale, windowInfo.windowWidth * (Math.random() * 0.8 + 0.1), windowInfo.windowHeight * (Math.random() * 0.8 + 0.1), duration));
    setTimeout(() => {
        addRandomBlast();
    }, (duration * 1000 * Math.random() + 400) * (Math.max(1 - counter * 0.01, 0.25)));
}

</script>

<template>
    <img :class="$style.icon" class="center_image small" src="/images/base/shift/GVDetonatorBlock.webp" style="width: 60px;" ref="iconImg" @click="onIconClick">
    <Transition :enter-active-class="$style.v_enter_active" :enter-from-class="$style.v_enter_from" @after-enter="onAfterStart">
        <div :class="$style.container" ref="explosionContainer" v-if="explosionStarted">
            <template v-for="blast in blasts" :key="blast.Id">
                <DetonatorBlast :properties="blast"></DetonatorBlast>
            </template>
        </div>
    </Transition>
</template>

<style module>
.icon {
    animation-name: icon;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-direction: normal;
}

@keyframes icon {
    0% {
        translate: none;
        rotate: none;
        animation-timing-function: linear;
    }
    8% {
        translate: none;
        rotate: z 7deg;
        animation-timing-function: linear;
    }
    16% {
        translate: none;
        rotate: none;
        animation-timing-function: linear;
    }
    24% {
        translate: none;
        rotate: z -7deg;
        animation-timing-function: linear;
    }
    32% {
        translate: none;
        rotate: none;
        animation-timing-function: linear;
    }
    50% {
        translate: none;
        rotate: none;
        animation-timing-function: linear;
    }
    60% {
        translate: 0 -14%;
        rotate: none;
        animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1), linear;
    }
    70% {
        translate: none;
        rotate: none;
        animation-timing-function: cubic-bezier(0.55, 0.06, 0.68, 0.19), linear;
    }
    80% {
        translate: 0 -14%;
        rotate: none;
        animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1), linear;
    }
    90% {
        translate: none;
        rotate: none;
        animation-timing-function: cubic-bezier(0.55, 0.06, 0.68, 0.19), linear;
    }
}

.v_enter_active {
    transition: opacity 2s ease;
}

.v_enter_from {
    opacity: 0;
}

.container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: black;
}
</style>