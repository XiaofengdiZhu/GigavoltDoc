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
                    }
                ]
            }
        ]
    }
];