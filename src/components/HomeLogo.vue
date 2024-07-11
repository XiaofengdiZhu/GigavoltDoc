<template>
    <div class="home-logo"></div>
</template>

<style scoped>
.home-logo {
    background-size: contain;
    background-repeat: no-repeat;

    &::before {
        content: '';
        position: absolute;
    }
}

html:not(.dark) .home-logo {
    background-image: url("/images/poster-girl/GigavoltPosterGirl.webp");
}

.dark .home-logo {
    background-image: url("/images/poster-girl/GigavoltExpandPosterGirl.webp");
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

    html:not(.dark) .home-logo {
        transform: scaleX(-1);

        &::before {
            left: 40%;
            width: 60%;
            height: 100%;
            background: linear-gradient(to right, transparent 0%, var(--vp-c-bg) 100%);
        }
    }

    .dark .home-logo::before {
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
            background: linear-gradient(to bottom, transparent 0%, var(--vp-c-bg) 100%);
        }
    }
    @media (min-aspect-ratio: 1 / 1.25) {
        .home-logo::before {
            height: 100vw;
        }

        html:not(.dark) .home-logo {
            transform: scaleX(-1);

            &::before {
                background: linear-gradient(150deg, transparent 15%, var(--vp-c-bg) 80%);
            }
        }

        .dark .home-logo::before {
            background: linear-gradient(-150deg, transparent 15%, var(--vp-c-bg) 80%);
        }
    }
}
</style>