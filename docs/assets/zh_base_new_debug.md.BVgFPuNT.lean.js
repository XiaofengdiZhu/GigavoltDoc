import{_ as o,o as l,c as n,j as e,a as t,I as s,ad as i,ae as c,a5 as _,D as d,af as r,ag as h}from"./chunks/framework.C1yyT_1F.js";const M=JSON.parse('{"title":"调试功能","description":"","frontmatter":{},"headers":[],"relativePath":"zh/base/new/debug.md","filePath":"zh/base/new/debug.md"}'),p={name:"zh/base/new/debug.md"},u=e("h1",{id:"调试功能",tabindex:"-1"},[t("调试功能 "),e("a",{class:"header-anchor",href:"#调试功能","aria-label":'Permalink to "调试功能"'},"​")],-1),m=e("p",null,[t("将"),e("code",null,"GV 调试台"),t("方块拿在手上编辑，或将其放置后编辑、交互，即可打开下图所示"),e("code",null,"十亿伏特调试面板")],-1),g=e("img",{src:i,alt:"十亿伏特调试面板 图示",class:"center_image"},null,-1),b={id:"运行倍速",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#运行倍速","aria-label":'Permalink to "运行倍速 <Badge text="v1.0" type="info"/>"'},"​",-1),x=e("p",null,"原版设定的运行频率是 100 次电路循环/秒，如果设置为 2，将会变成 200 次电路循环/秒，可以是小数，例如设置为 0.5，运行频率将变成 50 次电路循环/秒，当前版本允许的最低运行倍速为 0.1",-1),v=e("p",null,"GV 调试台输出的电压为当前设置的倍速，小数点位于第16、17位之间",-1),P=e("div",{class:"tip custom-block github-alert"},[e("p",{class:"custom-block-title"},"🧪 参考倍速"),e("p",null,[t("CPU "),e("code",null,"AMD R7 5800X"),t(" 在 4.55GHz 下，仅摆放 1 个非门，并用导线首尾相连")]),e("ul",null,[e("li",null,"设置 10 万倍速时，实际倍速 9.2 万倍，游戏帧数 9 ~ 10"),e("li",null,"设置 9 万倍速时，实际倍速 8.8 万倍，游戏帧数 16 ~ 17"),e("li",null,"设置 8 万倍速时，实际倍速 7.9 万倍，游戏帧数 370 ~ 380")])],-1),k={id:"悬浮显示电压",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#悬浮显示电压","aria-label":'Permalink to "悬浮显示电压 <Badge text="v2.0"/>"'},"​",-1),V=e("p",null,"开启后，会在面向的十亿伏特元件、导线上显示其各方向的输入、输出电压，绿色代表的是输入，红色代表的是输出，右下角显示的是背端电压",-1),y=e("img",{src:c,alt:"十亿伏特调试面板 图示",class:"center_image"},null,-1),T={id:"超视距保持运行",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#超视距保持运行","aria-label":'Permalink to "超视距保持运行 <Badge text="v2.0"/>"'},"​",-1),D=e("p",null,"开启后，当出现过的电路元件、导线不在视距内时，仍然会保持运行，退出存档失效",-1),S={id:"单步调试悬浮窗",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#单步调试悬浮窗","aria-label":'Permalink to "单步调试悬浮窗 <Badge text="v1.0" type="info"/>"'},"​",-1),A=_("",8),C={id:"键盘单步调试",tabindex:"-1"},$=e("a",{class:"header-anchor",href:"#键盘单步调试","aria-label":'Permalink to "键盘单步调试 <Badge text="v1.0" type="info"/>"'},"​",-1),w=e("p",null,"开启后，可使用键盘来进行单步调试等，效果和单步调试悬浮窗一致",-1),E=e("ul",null,[e("li",null,[e("code",null,"F5"),t(" 暂停/继续")]),e("li",null,[e("code",null,"F6"),t(" 单步")]),e("li",null,[e("code",null,"F7"),t(" 步过")])],-1);function F(G,I,R,j,H,J){const a=d("Badge");return l(),n("div",{"data-pagefind-body":!0},[u,m,g,e("h2",b,[t("运行倍速 "),s(a,{text:"v1.0",type:"info"}),t(),f]),x,v,P,e("h2",k,[t("悬浮显示电压 "),s(a,{text:"v2.0"}),t(),B]),V,y,e("h2",T,[t("超视距保持运行 "),s(a,{text:"v2.0"}),t(),N]),D,e("h2",S,[t("单步调试悬浮窗 "),s(a,{text:"v1.0",type:"info"}),t(),z]),A,e("h2",C,[t("键盘单步调试 "),s(a,{text:"v1.0",type:"info"}),t(),$]),w,E])}const O=o(p,[["render",F]]);export{M as __pageData,O as default};
