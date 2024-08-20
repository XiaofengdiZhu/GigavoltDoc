// https://vitepress.dev/guide/custom-theme
import {h, toRefs} from 'vue';
import type {Theme} from 'vitepress';
import {useData, useRoute} from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import './style.css';
import './custom.css';
import HomeLogo from '../../src/components/HomeLogo.vue';

export default {
    extends: DefaultTheme,
    Layout: () => {
        const {frontmatter} = toRefs(useData());
        const route = useRoute();
        giscusTalk({
            repo: 'XiaofengdiZhu/GigavoltDoc',
            repoId: 'R_kgDOMU_2_w',
            category: 'Giscus',
            categoryId: 'DIC_kwDOMU_2_84ChyMv',
            mapping: 'pathname',
            inputPosition: 'top',
            locales: {
                'zh': 'zh-CN',
                'en': 'en'
            },
            reactionsEnabled: '1'
        }, {
            frontmatter,
            route
        }, true);
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            "home-hero-before": () => h(HomeLogo)
        })
    }
} satisfies Theme