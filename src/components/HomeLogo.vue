<script setup lang="ts">
import {ref, watch} from 'vue';
import {useRoute} from 'vitepress';

const isDownloadPage = ref(false);
const route = useRoute();

isDownloadPage.value = route.path.endsWith("/download.html");

watch(() => route.path, (path) => {
    isDownloadPage.value = path.endsWith("/download.html");
});
</script>
<template>
    <div :class="[$style['home-logo'], isDownloadPage ? $style['download-page'] : '']"></div>
</template>

<style module>
.home-logo {
    background-size: contain;
    background-repeat: no-repeat;

    &::before {
        content: '';
        position: absolute;
    }
}

html:not(:global(.dark)) .home-logo {
    background-image: url("/images/poster-girl/GigavoltPosterGirl.webp");

    &.download-page {
        background-image: url("/logo_light_1024.webp");
    }
}

:global(.dark) .home-logo {
    background-image: url("/images/poster-girl/GigavoltExpandPosterGirl.webp");

    &.download-page {
        background-image: url("/logo_dark_1024.webp");
    }
}

@media (min-aspect-ratio: 1.15 / 1) {
    .home-logo {
        position: fixed;
        top: var(--vp-nav-height);
        width: calc(100vh - var(--vp-nav-height));
        height: calc(100vh - var(--vp-nav-height));
        right: 0;
        z-index: -1;
    }

    html:not(:global(.dark)) .home-logo:not(.download-page) {
        transform: scaleX(-1);

        &::before {
            left: 40%;
            width: 60%;
            height: 100%;
            background: linear-gradient(to right, transparent 0%, var(--vp-c-bg) 100%);
        }
    }

    html:not(:global(.dark)) .home-logo.download-page::before {
        width: 60%;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, var(--vp-c-bg) 100%);
    }

    :global(.dark) .home-logo::before {
        width: 60%;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, var(--vp-c-bg) 100%);
    }
}

@media (max-aspect-ratio: 1.15 / 1) {
    .home-logo {
        width: 100%;
        height: 100vw;

        &::before {
            width: 100%;
        }
    }

    @media (max-aspect-ratio: 1 / 1.25) {
        .home-logo::before {
            top: calc(30vw + var(--vp-nav-height));
            height: 70vw;
            background: linear-gradient(to bottom, transparent 0%, var(--vp-c-bg) 95%);
        }
    }
    @media (min-aspect-ratio: 1 / 1.25) {
        .home-logo::before {
            height: 100vw;
        }

        html:not(:global(.dark)) .home-logo:not(.download-page) {
            transform: scaleX(-1);

            &::before {
                background: linear-gradient(150deg, transparent 25%, var(--vp-c-bg) 70%);
            }
        }

        html:not(:global(.dark)) .home-logo.download-page::before {
            background: linear-gradient(-150deg, transparent 25%, var(--vp-c-bg) 70%);
        }

        :global(.dark) .home-logo::before {
            background: linear-gradient(-150deg, transparent 25%, var(--vp-c-bg) 70%);
        }
    }
}
</style>