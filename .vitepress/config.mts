import {defineConfig} from 'vitepress';
import taskLists from 'markdown-it-task-lists';
import sup from 'markdown-it-sup';
import multimd_table from 'markdown-it-multimd-table-ext';
import {nav as nav_zh, sidebar as sidebar_zh} from "./zh";
import {nav as nav_en, sidebar as sidebar_en} from "./en";
import {pagefindPlugin, chineseSearchOptimize} from 'vitepress-plugin-pagefind';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Gigavolt Doc 十亿伏特文档',
    description: 'The document for Gigavolt mod of Survivalcraft. 生存战争十亿伏特mod的文档',
    srcDir: './src',
    outDir: './docs',
    base: '/GigavoltDoc/',
    lang: 'en',
    ignoreDeadLinks: ['./index'],
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/GigavoltDoc/logo_light_64.webp'
            }
        ]
    ],
    vite: {
        plugins: [
            pagefindPlugin({
                indexingCommand: 'npx pagefind --site "docs" --output-subdir "pagefind" --exclude-selectors "div.aside, a.header-anchor, svg, .VPBadge"',
                locales: {
                    root: {},
                    zh: {
                        btnPlaceholder: '搜索',
                        placeholder: '搜索文档',
                        emptyText: '空空如也',
                        heading: '共 {{searchResult}} 条结果',
                        toSelect: '选择',
                        toNavigate: '切换',
                        toClose: '关闭',
                        searchBy: '搜索引擎：',
                        pageResultCount: 100,
                        showDate: true,
                        customSearchQuery: chineseSearchOptimize
                    }
                }
            })
        ]
    },
    themeConfig: {
        logo: {
            light: "/logo_light_64.webp",
            dark: "/logo_dark_64.webp"
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/XiaofengdiZhu/Gigavolt'
            }
        ],
        nav: [
            {
                text: 'English',
                link: '/en/'
            },
            {
                text: '中文',
                link: '/zh/'
            }
        ],
        outline: {
            level: 'deep'
        },
        footer: {
            message: 'Licensed under the <a href="https://github.com/XiaofengdiZhu/Gigavolt/blob/main/LICENSE.txt" target="_blank">Apache License 2.0</a>',
            copyright: 'Copyright © 2023-2024 <a href="https://github.com/XiaofengdiZhu/" target="_blank">XiaofengdiZhu 销锋镝铸</a>'
        },
        notFound: {
            title: 'PAGE NOT FOUND 未找到页面',
            quote: 'I Walk to where the creeks end, the water running dry. Sitting in repose to watch the rise of clouds.\u3000\u3000\u3000\u3000\u3000\u3000行到水穷处，坐看云起时',
            linkLabel: 'go to home 返回首页',
            linkText: 'Take me home 返回首页'
        }
        /*,
        search: {
            provider: 'local',
            options: {
                detailedView: true,
                locales: {
                    'zh': {
                        translations: {
                            button: {
                                buttonText: '搜索',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: "无法找到相关结果",
                                resetButtonTitle: "清除查询条件",
                                displayDetails: "显示详情",
                                backButtonTitle: "返回",
                                footer: {
                                    selectText: "选择",
                                    navigateText: "切换",
                                    closeText: "关闭"
                                }
                            }
                        }
                    }
                }
            }
        }*/
    },
    markdown: {
        math: true,
        image: {
            lazyLoading: true
        },
        config: (md) => {
            md.use(taskLists).use(sup).use(multimd_table, {
                rowspan: true,
                headerless: true
            });
        }
    },
    locales: {
        en: {
            title: 'Gigavolt Doc',
            description: 'The document for Gigavolt mod of Survivalcraft.',
            titleTemplate: 'Gigavolt Doc',
            label: 'English',
            lang: 'en',
            link: '/en/',
            themeConfig: {
                nav: nav_en,
                sidebar: sidebar_en,
                footer: {
                    message: 'Licensed under the <a href="https://github.com/XiaofengdiZhu/Gigavolt/blob/main/LICENSE.txt" target="_blank">Apache License 2.0</a>',
                    copyright: 'Copyright © 2023-2024 <a href="https://github.com/XiaofengdiZhu/" target="_blank">XiaofengdiZhu</a>'
                }
            }
        },
        zh: {
            title: '十亿伏特文档',
            description: '生存战争十亿伏特mod的文档',
            titleTemplate: '十亿伏特文档',
            label: '中文',
            lang: 'zh',
            link: '/zh/',
            themeConfig: {
                nav: nav_zh,
                sidebar: sidebar_zh,
                lastUpdated: {
                    text: '最近更新'
                },
                returnToTopLabel: '返回顶部',
                darkModeSwitchLabel: '切换深色/浅色模式',
                darkModeSwitchTitle: '切换到深色模式',
                lightModeSwitchTitle: '切换到浅色模式',
                sidebarMenuLabel: '菜单',
                langMenuLabel: '语言',
                docFooter: {
                    prev: '上一页',
                    next: '下一页'
                },
                editLink: {
                    pattern: 'https://github.com/XiaofengdiZhu/GigavoltDoc/edit/main/src/:path',
                    text: '对本页提出修改建议'
                },
                outline: {
                    level: 'deep',
                    label: '目录'
                },
                footer: {
                    message: '开源协议：<a href="https://github.com/XiaofengdiZhu/Gigavolt/blob/main/LICENSE.txt" target="_blank">Apache License 2.0</a>',
                    copyright: 'Copyright © 2023-2024 <a href="https://github.com/XiaofengdiZhu/" target="_blank">销锋镝铸</a>'
                },
                notFound: {
                    title: '未找到页面',
                    quote: '行到水穷处，坐看云起时',
                    linkLabel: '返回首页',
                    linkText: '返回首页'
                }
            }
        }
    }
})