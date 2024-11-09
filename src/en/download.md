---
title: MOD Download
layout: home
hero:
    name: "MOD Download "
    text: " "
    tagline: " "
    actions:
        -   theme: brand
            text: Gigavolt
        -   theme: brand
            text: Gigavolt.Expand
        -   theme: alt
            text: Gigavolt.Helper
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
    import locale from "../../common/locale.js";
    import downloadQuotes from "../../common/downloadQuotes.json";
    const data = useData();

    const locationHref = globalThis.document?.location.href ?? "";
    const qrCodeSize = 256;

    onMounted(() => {
        document.getElementsByClassName("clip")[0].classList.add("download");

        let tagline = document.getElementsByClassName("tagline")[0];
        tagline.textContent = locale("DownloadPage", "FetchingDownloadUrl");

        let actions = document.getElementsByClassName("action");
        actions[0].style.cursor = "wait";
        actions[1].style.cursor = "wait";

        const fetchDownloadUrlFailedString = locale("DownloadPage", "FetchDownloadUrlFailed");
        fetch("https://api.github.com/repos/XiaofengdiZhu/Gigavolt/releases/latest").then(response => response.json()).then(json => {
            let quotes = downloadQuotes[data.lang.value];
            tagline.textContent = quotes[Math.floor(Math.random() * quotes.length)];
            let versionBadge = document.createElement("span");
            versionBadge.classList.add("VPBadge");
            versionBadge.classList.add("tip");
            versionBadge.style.verticalAlign = "super";
            versionBadge.textContent = json.tag_name;
            document.getElementsByClassName("name")[0].appendChild(versionBadge);
            for(let asset of json.assets) {
                let actionIndex = 0;
                if(asset.name.includes("Expand")) {
                    actionIndex = 1;
                }
                else if(asset.name.includes("Helper")) {
                    actionIndex = 2;
                }
                actions[actionIndex].style.cursor = "pointer";
                actions[actionIndex].firstChild.href = asset.browser_download_url;
            }
        }).catch(error=>{
            tagline.textContent = fetchDownloadUrlFailedString;
            actions[0].style.cursor = "not-allowed";
            actions[1].style.cursor = "not-allowed";
            error && console.error(error);
        });
    });
</script>

<div style="display: flex; justify-content: center; max-width: 480px;" v-if="locationHref.length > 0">
    <qrcode-vue :value="locationHref" level="M" render-as="svg" :size="qrCodeSize" style="padding: 16px; background-color: white;"/>
</div>