import{E as s,a as i,b as c,c as d,I as e,d as l}from"./chunks/ElectricElement.BuvPvndk.js";import{d as p,o as _,c as h,j as n,a as t,I as a,k as m,D as f}from"./chunks/framework.CZYz2WcB.js";import"./chunks/locale.CB2Y0rC6.js";const u={id:"制导发射器",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#制导发射器","aria-label":'Permalink to "制导发射器 <Badge text="v1.0" type="info"/>"'},"​",-1),g=n("h2",{id:"概述",tabindex:"-1"},[t("概述 "),n("a",{class:"header-anchor",href:"#概述","aria-label":'Permalink to "概述"'},"​")],-1),w=n("p",null,"和发射器类似，但不是指定速度和角度，而是直接指定要投射到的位置（不保证 100% 抵达），而且能设置抵达指定位置时是否将投射物放置到世界中，投射物均不受空气阻力影响，受重力影响，默认为发射模式",-1),b=n("h2",{id:"端口定义",tabindex:"-1"},[t("端口定义 "),n("a",{class:"header-anchor",href:"#端口定义","aria-label":'Permalink to "端口定义"'},"​")],-1),D=JSON.parse('{"title":"制导发射器","description":"","frontmatter":{},"headers":[],"relativePath":"zh/expand/transportation/guided_dispenser.md","filePath":"zh/expand/transportation/guided_dispenser.md"}'),E={name:"zh/expand/transportation/guided_dispenser.md"},I=p({...E,setup(k){let o=[new s(i.All,c.Input,d.StartAndEnd,[new e(1,8,"X 轴位置偏移","每加 1，要投射到的位置向北偏移 1 格"),new e(9,16,"Y 轴位置偏移","每加 1，要投射到的位置向上偏移 1 格"),new e(17,24,"Z 轴位置偏移","每加 1，要投射到的位置向西偏移 1 格"),new e(25,25,"X 轴位置偏移的符号","为 1 时，向北改为向南"),new e(26,26,"Y 轴位置偏移的符号","为 1 时，向上改为向下"),new e(27,27,"Z 轴位置偏移的符号","为 1 时，向西改为向东"),new e(28,28,"是否放置",`为 1 时与非空气、流体相撞时，或抵达指定的偏移位置时，投射物将自身放置到世界中（如果可以的话）  
会自动开启安全模式（不会触发投射物被发射时、撞到方块时的行为，仍然会触发被撞击方块的相关行为）`),new e(29,29,"是否指定槽位","为 1 时只发射指定槽位的方块"),new e(30,32,"指定槽位","指定只发射第 n+1 个槽位的方块")],!1)];return(B,P)=>{const r=f("Badge");return _(),h("div",{"data-pagefind-body":!0},[n("h1",u,[t("制导发射器 "),a(r,{text:"v1.0",type:"info"}),t(),x]),g,w,b,a(l,{imgAltPrefix:"制导发射器",connections:m(o),imgSrc:"/images/expand/transportation/GVGuidedDispenserBlock.webp"},null,8,["connections"])])}}});export{D as __pageData,I as default};
