---
title: MOD下载
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
    name: MOD 下载
    text: " "
    tagline: " "
    actions:
        -   theme: brand
            text: 十亿伏特
        -   theme: brand
            text: 十亿伏特 · 扩展
        -   theme: alt
            text: 历史版本
            link: https://github.com/XiaofengdiZhu/Gigavolt/releases
        -   theme: alt
            text: 查看文档
            link: /zh/before_start
---

<script setup>
    import { onMounted } from "vue";
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