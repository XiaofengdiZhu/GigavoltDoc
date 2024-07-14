import{E as t,a as s,b as i,c as l,I as e,d as c}from"./chunks/ElectricElement.CeoLiehS.js";import{o as n,c as r,I as o,k as m,a5 as d}from"./chunks/framework.IyV-bm8r.js";const h=d('<h1 id="红白机模拟器" tabindex="-1">红白机模拟器 <a class="header-anchor" href="#红白机模拟器" aria-label="Permalink to &quot;红白机模拟器&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>可以模拟红白机的模拟器，使用的库是 <a href="https://github.com/enusbaum/XamariNES" target="_blank" rel="noreferrer">XamariNES</a>，纯软件模拟（CPU运算），不支持声音输出，仅支持以下四种ROM格式的游戏</p><ul><li>CNROM</li><li>MMC1</li><li>NROM</li><li>UxROM</li></ul><p>可能能够支持的游戏有</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 超级玛丽</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 魂斗罗</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 双截龙</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 恶魔城</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 冒险岛</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 勇者斗恶龙</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 合金装备</li></ul><p>同时仅能运行一个模拟器实例，即多个红白机模拟器显示的内容是一样的，每个红白机模拟器收到的手柄操作会按或计算后传输给模拟器<br> 启动时会自动加载 <a href="https://github.com/enusbaum/XamariNES" target="_blank" rel="noreferrer">XamariNES</a> 的内置 <a href="https://github.com/enusbaum/XamariNES/blob/master/XamariNES.UI/XamariNES.UI.App/Resources/roms/nestest.nes" target="_blank" rel="noreferrer">测试 ROM</a>，如果要载入其他 ROM，请编辑该方块并输入 ROM 的路径，或存储器的 ID，最后点击确定，红白机模拟器将立即从指定路径、存储器读取ROM；如果路径是 <code>nestest</code>，则载入 XamariNES 内置测试 ROM</p><h2 id="端口定义" tabindex="-1">端口定义 <a class="header-anchor" href="#端口定义" aria-label="Permalink to &quot;端口定义&quot;">​</a></h2><blockquote><p>方块的各面输入会按或计算后执行</p></blockquote>',9),E=JSON.parse('{"title":"红白机模拟器","description":"","frontmatter":{},"headers":[],"relativePath":"zh/expand/leds/nes_emulator.md","filePath":"zh/expand/leds/nes_emulator.md"}'),p={name:"zh/expand/leds/nes_emulator.md"},f=Object.assign(p,{setup(b){let a=[new t(s.All,i.Input,l.StartAndEnd,[new e(1,1,"电源","0 为关闭，1 为开启"),new e(2,2,"重置","0 为不重置，1 为执行重置；如一直为 1，会不停重置"),new e(3,4,"旋转","0 为正位，1 为顺时针旋转 90 度，2、3 同理"),new e(5,8,"空","无作用"),new e(9,16,"手柄 1","从高位到低位分别对应：`→` `←` `↓` `↑` `Start` `Select` `B` `A`"),new e(17,24,"手柄 2","无作用，因为 [XamariNES](https://github.com/enusbaum/XamariNES) 尚未支持多手柄"),new e(25,31,"缩放","0、1 为 1 个方块大，2 为 2 个方块大，最大 128 方块大"),new e(32,32,"空","无作用")])];return(u,k)=>(n(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyZGF0ZSUyMiUzQTE3MjA3MTE2MjAwMDAlN0Q="},[h,o(c,{imgAltPrefix:"红白机模拟器",connections:m(a),imgSrc:"/images/expand/GVNesEmulatorBlock.png"},null,8,["connections"])]))}});export{E as __pageData,f as default};