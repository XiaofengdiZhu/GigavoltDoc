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
        text: '开始之前',
        link: '/zh/before_start'
    },
    {
        text: '十亿伏特',
        items: [
            {
                text: '简介',
                link: '/zh/index'
            },
            {
                text: '原版的变体',
                collapsed: true,
                items: [
                    {
                        text: '简单元件',
                        link: '/zh/base/shift/simple'
                    },
                    {
                        text: '数模、模数转换器',
                        link: '/zh/base/shift/converter'
                    },
                    {
                        text: '存储器',
                        link: '/zh/base/shift/memory_bank'
                    },
                    {
                        text: '真值表',
                        link: '/zh/base/shift/truth_table',
                        collapsed: false,
                        items: [
                            {
                                text: 'NCalc 运算符',
                                link: '/zh/base/shift/ncalc/operators'
                            },
                            {
                                text: 'NCalc 函数',
                                link: '/zh/base/shift/ncalc/functions'
                            },
                            {
                                text: 'NCalc 数值',
                                link: '/zh/base/shift/ncalc/values'
                            }
                        ]
                    },
                    {
                        text: '实时钟',
                        link: '/zh/base/shift/real_time_clock'
                    },
                    {
                        text: '声音发生器',
                        link: '/zh/base/shift/sound_generator'
                    },
                    {
                        text: '复杂活塞',
                        link: '/zh/base/shift/complex_piston'
                    },
                    {
                        text: '告示牌',
                        link: '/zh/base/shift/sign'
                    },
                    {
                        text: '发射器',
                        link: '/zh/base/shift/dispenser'
                    }
                ]
            },
            {
                text: '新增',
                collapsed: true,
                items: [
                    {
                        text: '元件',
                        link: '/zh/base/new/elements'
                    },
                    {
                        text: '调试功能',
                        link: '/zh/base/new/debug'
                    },
                    {
                        text: '特色功能',
                        link: '/zh/base/new/features'
                    }
                ]
            }
        ]
    },
    {
        text: '十亿伏特 · 扩展',
        items: [
            {
                text: '简介',
                link: '/zh/expand/introduction'
            },
            {
                text: '导线',
                collapsed: true,
                items: [
                    {
                        text: '铜锤 / 多面穿线块',
                        link: '/zh/expand/wires/copper_hammer'
                    },
                    {
                        text: '六面跨线块',
                        link: '/zh/expand/wires/wire_through'
                    },
                    {
                        text: '跳线',
                        link: '/zh/expand/wires/jump_wire'
                    },
                    {
                        text: '路选器',
                        link: '/zh/expand/wires/multiplexer'
                    }
                ]
            },
            {
                text: '传感器',
                collapsed: true,
                items: [
                    {
                        text: '地形扫描仪',
                        link: '/zh/expand/sensors/terrain_scanner'
                    }
                ]
            },
            {
                text: '显示器',
                collapsed: true,
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