import {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    {
        text: 'Home',
        link: '/en/index'
    },
    {
        text: 'Docs',
        link: '/en/before_start'
    },
    {
        text: 'Examples',
        link: '/en/examples'
    },
    {
        text: 'Download',
        link: '/en/download'
    },
    {
        text: 'About',
        link: '/en/about'
    }
];
export const sidebar: DefaultTheme.SidebarItem[] = [
    {
        text: 'Before Start',
        link: '/en/before_start'
    },
    {
        text: 'Gigavolt',
        items: [
            {
                text: 'Introduction（Home）',
                link: '/en/index'
            },

            {
                text: 'Shifts of Vanilla',
                collapsed: true,
                items: [
                    {
                        text: 'Simple Elements',
                        link: '/en/base/shift/simple'
                    },
                    {
                        text: 'D/A & A/D Converter',
                        link: '/en/base/shift/converter'
                    },
                    {
                        text: 'Memory Bank',
                        link: '/en/base/shift/memory_bank'
                    },
                    {
                        text: 'True Table',
                        link: '/en/base/shift/truth_table',
                        collapsed: false,
                        items: [
                            {
                                text: 'NCalc Operators',
                                link: '/en/base/shift/ncalc/operators'
                            },
                            {
                                text: 'NCalc Functions',
                                link: '/en/base/shift/ncalc/functions'
                            },
                            {
                                text: 'NCalc Values',
                                link: '/en/base/shift/ncalc/values'
                            }
                        ]
                    },
                    {
                        text: 'Real Time Clock',
                        link: '/en/base/shift/real_time_clock'
                    },
                    {
                        text: 'Sound Generator',
                        link: '/en/base/shift/sound_generator'
                    },
                    {
                        text: 'Complex Piston',
                        link: '/en/base/shift/complex_piston'
                    },
                    {
                        text: 'Sign',
                        link: '/en/base/shift/sign'
                    },
                    {
                        text: 'Dispenser',
                        link: '/en/base/shift/dispenser'
                    }
                ]
            },
            {
                text: 'New',
                collapsed: true,
                items: [
                    {
                        text: 'Elements',
                        link: '/en/base/new/elements'
                    },
                    {
                        text: 'Debug Functions',
                        link: '/en/base/new/debug'
                    },
                    {
                        text: 'Features',
                        link: '/en/base/new/features'
                    }
                ]
            }
        ]
    },
    {
        text: 'Gigavolt.Expand',
        items: [
            {
                text: 'Introduction',
                link: '/en/expand/introduction'
            },
            {
                text: 'Wires',
                collapsed: true,
                items: [
                    {
                        text: 'Copper Hammer / More Wire Through Blocks',
                        link: '/en/expand/wires/copper_hammer'
                    },
                    {
                        text: 'Six-Face Jumper',
                        link: '/en/expand/wires/jumper'
                    },
                    {
                        text: 'Jump Wire',
                        link: '/en/expand/wires/jump_wire'
                    },
                    {
                        text: 'Multiplexer',
                        link: '/en/expand/wires/multiplexer'
                    }
                ]
            },
            {
                text: 'Calculation',
                collapsed: true,
                items: [
                    {
                        text: 'More Two In Two Out Gates',
                        link: '/en/expand/gates/more_two_in_two_out'
                    },
                    {
                        text: 'More One In One Out Gates',
                        link: '/en/expand/gates/more_one_in_one_out'
                    },
                    {
                        text: 'JS Microcontroller',
                        link: '/en/expand/gates/javascript_microcontroller'
                    }
                ]
            },
            {
                text: 'Memory Banks',
                collapsed: true,
                items: [
                    {
                        text: 'List Memory Bank',
                        link: '/en/expand/memory_banks/list_memory_bank'
                    },
                    {
                        text: 'Four Dimensional Memory Bank',
                        link: '/en/expand/memory_banks/four_dimensional_memory_bank'
                    },
                    {
                        text: 'Volatile Memory Banks',
                        link: '/en/expand/memory_banks/volatile_memory_banks'
                    },
                    {
                        text: 'Memory Banks Operator',
                        link: '/en/expand/memory_banks/memory_banks_operator'
                    }
                ]
            },
            {
                text: 'Display',
                collapsed: true,
                items: [
                    {
                        text: 'Oscilloscope',
                        link: '/en/expand/displays/oscilloscope'
                    },
                    {
                        text: 'Block Show Board',
                        link: '/en/expand/displays/block_display_led'
                    },
                    {
                        text: 'Image Display',
                        link: '/en/expand/displays/image_display_led'
                    },
                    {
                        text: 'Terrain Stratum Display',
                        link: '/en/expand/displays/terrain_display_led'
                    },
                    {
                        text: 'NES Emulator',
                        link: '/en/expand/displays/nes_emulator'
                    }
                ]
            },
            {
                text: 'Sensors',
                collapsed: true,
                items: [
                    {
                        text: 'Block Value Plate',
                        link: '/en/expand/sensors/block_value_plate'
                    },
                    {
                        text: 'Terrain Raycast Detector',
                        link: '/en/expand/sensors/terrain_raycast_detector'
                    },
                    {
                        text: 'Terrain Scanner',
                        link: '/en/expand/sensors/terrain_scanner'
                    },
                    {
                        text: 'Player Monitor',
                        link: '/en/expand/sensors/player_monitor'
                    },
                    {
                        text: 'Camera',
                        link: '/en/expand/sensors/camera'
                    }
                ]
            }
        ]
    }
];