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
                text: '计算',
                collapsed: true,
                items: [
                    {
                        text: '更多两入两出',
                        link: '/zh/expand/gates/more_two_in_two_out'
                    },
                    {
                        text: '更多单入单出',
                        link: '/zh/expand/gates/more_one_in_one_out'
                    },
                    {
                        text: 'JS 单片机',
                        link: '/zh/expand/gates/javascript_microcontroller'
                    }
                ]
            },
            {
                text: '存储器',
                collapsed: true,
                items: [
                    {
                        text: '一维存储器',
                        link: '/zh/expand/memory_banks/list_memory_bank'
                    },
                    {
                        text: '四维存储器',
                        link: '/zh/expand/memory_banks/four_dimensional_memory_bank'
                    },
                    {
                        text: '多种易失性存储器',
                        link: '/zh/expand/memory_banks/volatile_memory_banks'
                    },
                    {
                        text: '多存储器操作器',
                        link: '/zh/expand/memory_banks/memory_banks_operator'
                    }
                ]
            },
            {
                text: '显示器',
                collapsed: true,
                items: [
                    {
                        text: '示波器',
                        link: '/zh/expand/leds/oscilloscope'
                    },
                    {
                        text: '方块展示板',
                        link: '/zh/expand/leds/block_display_led'
                    },
                    {
                        text: '图片显示器',
                        link: '/zh/expand/leds/image_display_led'
                    },
                    {
                        text: '地层显示器',
                        link: '/zh/expand/leds/terrain_display_led'
                    },
                    {
                        text: '红白机模拟器',
                        link: '/zh/expand/leds/nes_emulator'
                    }
                ]
            },
            {
                text: '传感器',
                collapsed: true,
                items: [
                    {
                        text: '方块值板',
                        link: '/zh/expand/sensors/block_value_plate'
                    },
                    {
                        text: '地形射线探测器',
                        link: '/zh/expand/sensors/terrain_raycast_detector'
                    },
                    {
                        text: '地形扫描仪',
                        link: '/zh/expand/sensors/terrain_scanner'
                    },
                    {
                        text: '玩家监视器',
                        link: '/zh/expand/sensors/player_monitor'
                    },
                    {
                        text: '照相机',
                        link: '/zh/expand/sensors/camera'
                    }
                ]
            },
            {
                text: '运输',
                collapsed: true,
                items: [
                    {
                        text: `固态空气`,
                        link: '/zh/expand/transportation/solidified_air'
                    },
                    {
                        text: `制导发射器`,
                        link: '/zh/expand/transportation/guided_dispenser'
                    },
                    {
                        text: `更多投射物`,
                        link: '/zh/expand/transportation/more_projectiles'
                    },
                    {
                        text: `吸引器`,
                        link: '/zh/expand/transportation/attractor'
                    },
                    {
                        text: `箱子提取器`,
                        link: '/zh/expand/transportation/inventory_fetcher'
                    },
                    {
                        text: `箱子控制器`,
                        link: '/zh/expand/transportation/inventory_controller'
                    }
                ]
            },
            {
                text: '其他',
                collapsed: true,
                items: [
                    {
                        text: '遥控器',
                        link: '/zh/expand/others/remote_controller'
                    }
                ]
            }
        ]
    }
];