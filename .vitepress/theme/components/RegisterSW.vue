<script setup lang="ts">
import {onBeforeMount, ref} from 'vue'
import {useData} from "vitepress";

const offlineReady = ref(false)

function onOfflineReady() {
    offlineReady.value = true
}

async function close() {
    offlineReady.value = false
}

onBeforeMount(async () => {
    const {registerSW} = await import('virtual:pwa-register')
    registerSW({
        immediate: true,
        onNeedRefresh() {
            console.log('Need refreshing')
        },
        onOfflineReady,
        onRegisteredSW() {
            console.info('Service Worker registered')
        },
        onRegisterError(e) {
            console.error('Service Worker registration error!', e)
        }
    })
})
</script>

<template>
    <template v-if="offlineReady">
        <div :class="$style['pwa-toast']" role="alertdialog" aria-labelledby="pwa-message">
            <div class="mb-3">
                {{ useData().lang.value == 'zh' ? '该网站已准备好离线查看' : 'This website is ready to work offline' }}
            </div>
            <button type="button" @click="close">
                OK
            </button>
        </div>
    </template>
</template>

<style module>
.pwa-toast {
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 16px;
    padding: 12px 20px;
    border: 1px solid var(--vp-button-alt-border);
    border-radius: 8px;
    z-index: 100;
    text-align: left;
    box-shadow: 3px 4px 5px var(--grayA6);
    color: var(--vp-button-alt-text);
    background-color: var(--vp-button-alt-bg);

    & > button {
        line-height: 28px;
        outline: none;
        margin-top: 12px;
        margin-right: 5px;
        border-radius: 24px;
        padding: 0 20px;
        border: 1px solid var(--vp-button-brand-border);
        color: var(--vp-button-brand-text);
        background-color: var(--vp-button-brand-bg);
    }
}
</style>