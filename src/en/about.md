---
sidebar: false
lastUpdated: false
editLink: false
outline: false
prev: false
next: false
---

# About

Mod source code：[GitHub](https://github.com/XiaofengdiZhu/Gigavolt/)

Document source code：[Github](https://github.com/XiaofengdiZhu/GigavoltDoc/)

Open source license：[Apache License 2.0](https://github.com/XiaofengdiZhu/Gigavolt/blob/main/LICENSE.txt)

Main author：[销锋镝铸](https://github.com/XiaofengdiZhu)

Code contributors：

* [钅离_LX](https://github.com/CS-LX)

<!--@include: ./parts/feedback.md-->

## Thanks

Thanks to the following long-term supporters and testers
> Ordered by name

* [把红色赋予黑海_](https://gitee.com/THPRC)
* [钅离_LX](https://github.com/CS-LX)
* [千反田Q](https://tieba.baidu.com/home/main/?id=tb.1.8655ef45.iDFQv1eGqmen_1Lqsi_BUg)
* [一枚北陌本陌](https://space.bilibili.com/1766875450)

## Icon

> Used AI model: [The Araminta Experiment - Flux1-A1 by aramintastudio](https://civitai.com/models/463163?modelVersionId=742904)

<table :class="$style.table_align_center">
    <thead>
        <tr>
            <th>MOD</th>
            <th>64*</th>
            <th>128*</th>
            <th>1024*</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Gigavolt</td>
            <td><img src="../public/logo_light_64.webp" alt="Gigavolt 64*64 Icon" /></td>
            <td><img src="../public/logo_light_128.webp" alt="Gigavolt 128*128 Icon" /></td>
            <td><img src="../public/logo_light_1024.webp" alt="Gigavolt 1024*1024 Icon" /></td>
        </tr>
        <tr>
            <td>Gigavolt.Expand</td>
            <td><img src="../public/logo_dark_64.webp" alt="Gigavolt.Expand 64*64 Icon" /></td>
            <td><img src="../public/logo_dark_128.webp" alt="Gigavolt.Expand 128*128 Icon" /></td>
            <td><img src="../public/logo_dark_1024.webp" alt="Gigavolt.Expand 1024*1024 Icon" /></td>
        </tr>
        <tr>
            <td>Gigavolt.Helper</td>
            <td>None</td>
            <td><img src="../public/logo_helper_128.webp" alt="Gigavolt.Helper 128*128 Icon" /></td>
            <td><img src="../public/logo_helper_1024.webp" alt="Gigavolt.Helper 1024*1024 Icon" /></td>
        </tr>
    </tbody>
</table>

## Yuru-chara

> Used AI model: [AOM3A1B by WarriorMama777](https://huggingface.co/WarriorMama777/OrangeMixs#aom3a1b)

::: details 🖼️ Gigavolt Yuru-chara
![Gigavolt Yuru-chara](../public/images/poster-girl/GigavoltPosterGirl.webp)
:::

::: details 🖼️ Gigavolt.Expand Yuru-chara
![Gigavolt.Expand Yuru-chara](../public/images/poster-girl/GigavoltExpandPosterGirl.webp)
:::

::: details 🖼️ Gigavolt.Helper Yuru-chara
![Gigavolt.Helper Yuru-chara](../public/images/poster-girl/GigavoltHelperPosterGirl.webp)
:::

## Develop plans

GitHub Project：[Link](https://github.com/users/XiaofengdiZhu/projects/1/views/1)

## How to build

1. Use [Git](https://git-scm.com/downloads) to clone this repository

```bat
git clone https://github.com/XiaofengdiZhu/Gigavolt/
```

2. Enter the directory

```bat
cd Gigavolt
```

3. Update submodules

```bat
git submodule update --init
```

4. Use [Python](https://www.python.org/downloads/) to install [antlr4-tools](https://github.com/antlr/antlr4-tools)

```
pip install antlr4-tools
```

> Probably need to restart the computer

5. Use [Visual Studio](https://visualstudio.microsoft.com/) to open`Gigavolt.sln`in`Gigavolt`directory，click`Build`-`Build solution`. If there is an error, please install the corresponding function according to the prompt

## Dependencies

> Dependencies' dependencies are not included

### Gigavolt mod

* Develop framework：[.NET 8](https://dotnet.microsoft.com/)
* Game：[SurvivalCraft-UniAPI](https://gitee.com/THPRC/survivalcraft-api)
* Calculation library of truth table：[NCalc2](https://github.com/XiaofengdiZhu/NCalc2)
* Some icons：[Google Fonts](https://fonts.google.com/icons)

### Gigavolt.Expand mod

> Duplicates are not included

* NES emulator：[XamariNES](https://github.com/XiaofengdiZhu/Gigavolt/tree/main/Gigavolt.Expand/reference/XamariNES)
    * Vanilla：[链接](https://github.com/enusbaum/XamariNES)

### Document

* Static site generator：[VitePress](https://vitepress.dev/)
    * Search plugin：[vitepress-plugin-pagefind](https://github.com/ATQQ/sugar-blog/tree/master/packages/vitepress-plugin-pagefind)
* markdown-it extensions：
    * MathJax：[markdown-it-mathjax3](https://github.com/nzt/markdown-it-mathjax3#readme)
    * Task list：[markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists#readme)
    * Superscript：[markdown-it-sup](https://github.com/markdown-it/markdown-it-sup#readme)
    * Advanced table：[markdown-it-multimd-table](https://github.com/redbug312/markdown-it-multimd-table#readme)

## Dependents

* [AdaptCommandBlockForGigavolt](https://github.com/XiaofengdiZhu/AdaptCommandBlockForGigavolt)
* Another truth table：ExTruthTable by [把红色赋予黑海_](https://gitee.com/THPRC)

<style module>
.table_align_center {
    & th {
        text-align: center;
    }
    & td {
        text-align: center;
        & img {
            margin: auto;
        }
    }
}
</style>