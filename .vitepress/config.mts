import {defineConfig} from 'vitepress';
import taskLists from 'markdown-it-task-lists';
import sup from 'markdown-it-sup';
import {nav as nav_zh, sidebar as sidebar_zh} from "./zh";
import {nav as nav_en, sidebar as sidebar_en} from "./en";
import {pagefindPlugin, chineseSearchOptimize} from 'vitepress-plugin-pagefind'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Gigavolt 十亿伏特',
    srcDir: './src',
    outDir: './docs',
    base: '/GigavoltDoc/',
    lang: 'en',
    vite: {
        plugins: [
            pagefindPlugin({
                indexingCommand: 'npx pagefind --site "docs" --output-subdir "pagefind" --exclude-selectors "div.aside, a.header-anchor, svg"',
                locales: {
                    root: {},
                    zh: {
                        btnPlaceholder: '搜索',
                        placeholder: '搜索文档',
                        emptyText: '空空如也',
                        heading: '共 {{searchResult}} 条结果',
                        showDate: true,
                        customSearchQuery: chineseSearchOptimize
                    }
                }
            })
        ]
    },
    themeConfig: {
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
            copyright: 'Copyright © 2023-2024 <a href="https://github.com/XiaofengdiZhu/" target="_blank">销锋镝铸 XiaofengdiZhu</a>'
        },
        notFound: {
            quote: 'I Walk to where the creeks end, the water running dry. Sitting in repose to watch the rise of clouds.'
        }/*,
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
            md.use(taskLists).use(sup);
        }
    },
    locales: {
        en: {
            title: 'Gigavolt',
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
                    pattern: '路径地址？？？',
                    text: '对本页提出修改建议'
                },
                outline: {
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