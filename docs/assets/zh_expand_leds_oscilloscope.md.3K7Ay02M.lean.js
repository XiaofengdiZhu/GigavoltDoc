import{d,o as p,c as m,j as c,a as s,I as r,k as h,a5 as u,D as _,aH as g,aI as f}from"./chunks/framework.CZYz2WcB.js";import{E as e,a,b as o,c as t,I as n,d as b}from"./chunks/ElectricElement.BuvPvndk.js";import"./chunks/locale.CB2Y0rC6.js";const w={id:"示波器",tabindex:"-1"},x=c("a",{class:"header-anchor",href:"#示波器","aria-label":'Permalink to "示波器 <Badge text="v2.0"/>"'},"​",-1),y=u('<h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>将正面四端收到的信号像示波器那样显示在正面，可以通过点击图像上显示的按钮来手动调整上下限（默认自动调整）、显示的记录数、是否开启泛光，点击空白处则隐藏前述按钮</p><img alt="示波器 截图1" src="'+g+'" class="center_image"><p>还可以点编辑键来全屏显示图像，顶栏显示的电压是当前各端电压，最右边的按钮是调试操作，具体功能可参考 <a href="./../../base/new/debug.html#单步调试悬浮窗">此处</a></p><img alt="示波器 截图2" src="'+f+'" class="center_image"><h2 id="端口定义" tabindex="-1">端口定义 <a class="header-anchor" href="#端口定义" aria-label="Permalink to &quot;端口定义&quot;">​</a></h2>',6),H=JSON.parse('{"title":"示波器","description":"","frontmatter":{},"headers":[],"relativePath":"zh/expand/leds/oscilloscope.md","filePath":"zh/expand/leds/oscilloscope.md"}'),k={name:"zh/expand/leds/oscilloscope.md"},A=d({...k,setup(I){let l=[new e(a.Top,o.Input,t.Hide,[new n(1,32,"显示 <span style='color: lime; background-color: var(--grayA10);'>绿色</span> 线","")],!1,!0),new e(a.Right,o.Input,t.Hide,[new n(1,32,"显示 <span style='color: cyan; background-color: var(--grayA10);'>青色</span> 线","")],!1,!0),new e(a.Bottom,o.Input,t.Hide,[new n(1,32,"显示 <span style='color: red; background-color: var(--grayA6);'>红色</span> 线","")],!1,!0),new e(a.Left,o.Input,t.Hide,[new n(1,32,"显示 <span style='color: yellow; background-color: var(--grayA8);'>黄色</span> 线","")],!1,!0),new e(a.In,o.Input,t.Hide,[new n(1,32,"时钟",`不接元件或导线时，正面四端的变化会立即显示在示波器上  
接上时，只有在其电压从 0 变为非 0 时才会从正面接受新的输入`)])];return(v,B)=>{const i=_("Badge");return p(),m("div",{"data-pagefind-body":!0},[c("h1",w,[s("示波器 "),r(i,{text:"v2.0"}),s(),x]),y,r(b,{imgAltPrefix:"示波器",connections:h(l),imgSrc:"/images/expand/leds/GVOscilloscopeBlock.webp"},null,8,["connections"])])}}});export{H as __pageData,A as default};