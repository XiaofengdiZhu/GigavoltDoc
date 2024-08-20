---
sidebar: false
lastUpdated: false
editLink: false
outline: false
prev: false
next: false
---

# 关于

mod 源码：[GitHub](https://github.com/XiaofengdiZhu/Gigavolt/)

文档源码：[Github](https://github.com/XiaofengdiZhu/GigavoltDoc/)

开源协议：[Apache License 2.0](https://github.com/XiaofengdiZhu/Gigavolt/blob/main/LICENSE.txt)

主要作者：[销锋镝铸](https://github.com/XiaofengdiZhu)

代码贡献者：

* [钅离_LX](https://github.com/CS-LX)

<!--@include: ./parts/feedback.md-->

## 看板娘

> 使用的 AI 模型：[AOM3A1B by WarriorMama777](https://huggingface.co/WarriorMama777/OrangeMixs#aom3a1b)

::: details 🖼️ 十亿伏特 看板娘
![十亿伏特看板娘](../public/images/poster-girl/GigavoltPosterGirl.webp)
:::

::: details 🖼️ 十亿伏特 · 扩展 看板娘
![十亿伏特 · 扩展看板娘](../public/images/poster-girl/GigavoltExpandPosterGirl.webp)
:::

## 鸣谢

感谢以下热心网友的长期支持和测试
> 按名称排序

* [把红色赋予黑海_](https://gitee.com/THPRC)
* [钅离_LX](https://github.com/CS-LX)
* [千反田Q](https://tieba.baidu.com/home/main/?id=tb.1.8655ef45.iDFQv1eGqmen_1Lqsi_BUg)
* [一枚北陌本陌](https://space.bilibili.com/1766875450)

## 开发计划

GitHub Project：[点我打开](https://github.com/users/XiaofengdiZhu/projects/1/views/1)

## 如何构建

1. 首先使用 [Git](https://git-scm.com/downloads) 克隆此仓库

```bat
git clone https://github.com/XiaofengdiZhu/Gigavolt/
```

2. 进入此仓库

```bat
cd Gigavolt
```

3. 更新子模块

```bat
git submodule update --init
```

4. 使用 [Python](https://www.python.org/downloads/) 安装 [antlr4-tools](https://github.com/antlr/antlr4-tools)

```
pip install antlr4-tools
```

> 可能需要重启电脑

5. 使用 [Visual Studio](https://visualstudio.microsoft.com/) 打开`Gigavolt`目录中的`Gigavolt.sln`，点击`生成`-`生成解决方案`，如果报错未安装相应功能，请按提示完成安装

## 依赖项

> 不含依赖项的依赖项

### 十亿伏特 mod

* 开发框架：[.NET 8](https://dotnet.microsoft.com/)
* 游戏：[SurvivalCraft-UniAPI](https://gitee.com/THPRC/survivalcraft-api)
* 真值表表达式计算：[NCalc2](https://github.com/XiaofengdiZhu/NCalc2)
* 少量图标：[Google Fonts](https://fonts.google.com/icons)

### 十亿伏特 · 扩展 mod

> 不含与上面重复的

* 红白机模拟器：[XamariNES](https://github.com/XiaofengdiZhu/Gigavolt/tree/main/Gigavolt.Expand/reference/XamariNES)
    * 原版：[链接](https://github.com/enusbaum/XamariNES)

### 文档

* 静态站点生成器：[VitePress](https://vitepress.dev/)
    * 搜索插件：[vitepress-plugin-pagefind](https://github.com/ATQQ/sugar-blog/tree/master/packages/vitepress-plugin-pagefind)
* markdown-it 插件：
    * 数学公式：[markdown-it-mathjax3](https://github.com/nzt/markdown-it-mathjax3#readme)
    * 任务列表：[markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists#readme)
    * 上标：[markdown-it-sup](https://github.com/markdown-it/markdown-it-sup#readme)
    * 高级表格：[markdown-it-multimd-table](https://github.com/redbug312/markdown-it-multimd-table#readme)

## 依赖者

* 命令方块 mod 适配十亿伏特 mod：[AdaptCommandBlockForGigavolt](https://github.com/XiaofengdiZhu/AdaptCommandBlockForGigavolt)
* 另一种真值表：ExTruthTable by [把红色赋予黑海_](https://gitee.com/THPRC)