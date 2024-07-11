import {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    {
        text: '首页',
        link: '/zh/index'
    },
    {
        text: '文档',
        link: '/zh/before_start'
    },
    {
        text: '例子',
        link: '/zh/examples'
    },
    {
        text: '下载',
        link: '/zh/download'
    },
    {
        text: '关于',
        link: '/zh/about'
    }
];
export const sidebar: DefaultTheme.SidebarItem[] = [
    {
        text: '十亿伏特',
        collapsed: true,
        items: [
            {
                text: '开始之前',
                link: '/zh/before_start'
            },
            {text: '与原版区别'}
        ]
    },
    {
        text: '十亿伏特 · 扩展',
        collapsed: true,
        items: [
            {
                text: '传感器',
                items: [
                    {
                        text: '地形扫描仪',
                        link: '/zh/expand/sensors/terrain_scanner'
                    }
                ]
            },
            {
                text: '显示器',
                items: [
                    {
                        text: '图片显示器'
                    },
                    {
                        text: '红白机模拟器',
                        link: '/zh/expand/leds/nes_emulator'
                    },
                    {
                        text: '示波器'
                    }
                ]
            }
        ]
    }
];