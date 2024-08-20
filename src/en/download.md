---
title: MOD Download
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
    name: MOD Download
    text: " "
    tagline: " "
    actions:
        -   theme: brand
            text: Gigavolt
        -   theme: brand
            text: Gigavolt.Expand
        -   theme: alt
            text: History Versions
            link: https://github.com/XiaofengdiZhu/Gigavolt/releases
        -   theme: alt
            text: Read Doc
            link: /en/before_start
---

<script setup lang="ts">
    import {onMounted} from "vue";
    import {useData} from "vitepress";
    import QrcodeVue from "qrcode.vue";
    import downloadQuotes from "../../common/downloadQuotes.json";
    const data = useData();
    const locationHref = globalThis.document?.location.href ?? "";
    const qrCodeSize = 256;
    onMounted(() => {
        let quotes = downloadQuotes[data.lang.value];
        document.getElementsByClassName("tagline")[0].textContent = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementsByClassName("clip")[0].classList.add("download");
    })
</script>
<div style="display: flex; justify-content: center; max-width: 480px;" v-if="locationHref.length > 0">
    <qrcode-vue :value="locationHref" level="M" render-as="svg" :size="qrCodeSize" style="padding: 16px; background-color: white;"/>
</div>