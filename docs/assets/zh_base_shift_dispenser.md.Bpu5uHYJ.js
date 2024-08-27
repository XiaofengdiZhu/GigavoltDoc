import{E as i,a as c,b as r,c as l,I as t,d}from"./chunks/ElectricElement.BuvPvndk.js";import{d as h,o as p,c as _,j as e,a as n,I as a,k as m,D as f}from"./chunks/framework.CZYz2WcB.js";import"./chunks/locale.CB2Y0rC6.js";const u={id:"发射器",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#发射器","aria-label":'Permalink to "发射器 <Badge text="v1.0" type="info"/>"'},"​",-1),w=e("h2",{id:"概述",tabindex:"-1"},[n("概述 "),e("a",{class:"header-anchor",href:"#概述","aria-label":'Permalink to "概述"'},"​")],-1),g=e("p",null,"以类似于箱子的方式存储物品，一旦电压变化就会尝试将物品发射或丢出，可以通过输入的电压来控制射出的速度、角度等，默认为发射模式",-1),k=e("h2",{id:"端口定义",tabindex:"-1"},[n("端口定义 "),e("a",{class:"header-anchor",href:"#端口定义","aria-label":'Permalink to "端口定义"'},"​")],-1),x=e("blockquote",null,[e("p",null,"方块的各面输入会按或计算后执行")],-1),E=e("div",{class:"tip custom-block github-alert"},[e("p",{class:"custom-block-title"},"💡 提示"),e("p",null,[e("code",null,"十亿伏特 · 扩展 mod"),n("中还有 "),e("a",{href:"./.html"},"复杂发射器")])],-1),N=JSON.parse('{"title":"发射器","description":"","frontmatter":{},"headers":[],"relativePath":"zh/base/shift/dispenser.md","filePath":"zh/base/shift/dispenser.md"}'),P={name:"zh/base/shift/dispenser.md"},V=h({...P,setup(v){let o=[new i(c.All,r.Input,l.StartAndEnd,[new t(1,8,"速度","单位格/秒，最大设置 255 格/秒"),new t(9,16,"角度1",`* 朝向上方或下方时，为向北方偏转的角度
* 朝向其他方向时，为向右方偏转的角度
* 最高位为 1 时角度取负值
* 超过 90 时自动下调为 90 度`),new t(17,24,"角度2",`* 朝向上方或下方时，为向西方偏转的角度
* 朝向其他方向时，为向上方偏转的角度
* 其他同角度 1 定义
`),new t(25,25,"无视重力","为 1 时不受重力影响"),new t(26,26,"无视空阻","为 1 时不受空气等阻力影响"),new t(27,27,"安全模式",`为 1 时启用安全模式  
安全模式下，投射物不会触发被发射、撞到方块的方块行为，但仍然会触发被撞击方块的相关方块行为`),new t(28,28,"放置模式",`为 1 时启用放置模式  
放置模式下，投射物与非空气、流体相撞时，会将自身放置到世界中（如果可以的话）`),new t(29,29,"是否指定槽位","为 1 时只发射指定槽位的方块"),new t(30,32,"指定槽位","指定只发射第 n+1 个槽位的方块")])];return(B,C)=>{const s=f("Badge");return p(),_("div",{"data-pagefind-body":!0},[e("h1",u,[n("发射器 "),a(s,{text:"v1.0",type:"info"}),n(),b]),w,g,k,x,a(d,{imgAltPrefix:"十亿伏特发射器",connections:m(o),imgSrc:"/images/base/shift/GVDispenser.webp"},null,8,["connections"]),E])}}});export{N as __pageData,V as default};