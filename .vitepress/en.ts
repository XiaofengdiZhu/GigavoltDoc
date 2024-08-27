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
            }
        ]
    }
];