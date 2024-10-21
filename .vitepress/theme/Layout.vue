<script setup lang="ts">
import {useData, withBase} from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import {nextTick, provide} from 'vue';
import HomeLogo from '../../src/components/HomeLogo.vue';

const {Layout} = DefaultTheme;
const {isDark} = useData();

if (isDark.value) {
    changeFavicon(true);
}

globalThis.matchMedia && globalThis.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    changeFavicon(event.matches);
});

const enableTransitions = () => 'startViewTransition' in document && globalThis.matchMedia('(prefers-reduced-motion: no-preference)').matches;

provide('toggle-appearance', async ({
    clientX: x,
    clientY: y
}: MouseEvent) => {
    changeFavicon(!isDark.value);
    if (!enableTransitions()) {
        isDark.value = !isDark.value;
        return;
    }

    const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`
    ];

    await document.startViewTransition(async () => {
        isDark.value = !isDark.value;
        await nextTick();
    }).ready;

    document.documentElement.animate({clipPath: isDark.value ? clipPath.reverse() : clipPath}, {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    });
});

function changeFavicon(isDark: boolean) {
    document.head.querySelector('link[rel="icon"]')['href'] = withBase(isDark ? '/logo_dark_64.webp' : '/logo_light_64.webp');
}

</script>

<template>
    <Layout>
        <template #home-hero-before>
            <HomeLogo/>
        </template>
    </Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
    z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
    z-index: 9999;
}

.VPSwitchAppearance {
    width: 22px !important;
}

.VPSwitchAppearance .check {
    transform: none !important;
}
</style>