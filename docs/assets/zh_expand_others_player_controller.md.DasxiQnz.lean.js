import{E as l,a as d,b as r,c as a,I as n}from"./chunks/ElectricConnectionTable.BnFVfk2b.js";import{E as x}from"./chunks/ElectricElement.ByEg-ig9.js";import{d as g,o as y,c as p,j as e,a as i,G as s,k as h,a3 as m,B as u}from"./chunks/framework.C-GLQy3h.js";import"./chunks/locale.DUWwBpDx.js";const b={id:"玩家控制器",tabindex:"-1"},v=JSON.parse('{"title":"玩家控制器","description":"","frontmatter":{},"headers":[],"relativePath":"zh/expand/others/player_controller.md","filePath":"zh/expand/others/player_controller.md"}'),f={name:"zh/expand/others/player_controller.md"},C=g({...f,setup(w){let c=[new l(d.Top,r.Input,a.Hide,[new n(1,32,"输入参数","")],!1,!0),new l(d.Right,r.Input,a.Hide,[new n(1,32,"输入参数","")],!1,!0),new l(d.Bottom,r.Input,a.BitWidth,[new n(1,16,"同步操作，详见下表",""),new n(1,16,"指定玩家序号","")],!1,!0),new l(d.Left,r.Input,a.Hide,[new n(1,32,"输入参数","")],!1,!0),new l(d.In,r.Input,a.StartAndEnd,[new n(1,1,"阻断右端输入",""),new n(2,2,"阻断上端输入",""),new n(3,3,"阻断左端输入","")],!1,!0)];return(k,t)=>{const o=u("Badge");return y(),p("div",{"data-pagefind-body":!0},[e("h1",b,[t[0]||(t[0]=i("玩家控制器 ")),s(o,{text:"v2.0"}),t[1]||(t[1]=i()),t[2]||(t[2]=e("a",{class:"header-anchor",href:"#玩家控制器","aria-label":'Permalink to "玩家控制器 <Badge text="v2.0"/>"'},"​",-1))]),t[3]||(t[3]=e("h2",{id:"概述",tabindex:"-1"},[i("概述 "),e("a",{class:"header-anchor",href:"#概述","aria-label":'Permalink to "概述"'},"​")],-1)),t[4]||(t[4]=e("p",null,"用于控制玩家的各种信息",-1)),t[5]||(t[5]=e("h2",{id:"端口定义",tabindex:"-1"},[i("端口定义 "),e("a",{class:"header-anchor",href:"#端口定义","aria-label":'Permalink to "端口定义"'},"​")],-1)),t[6]||(t[6]=e("blockquote",null,[e("p",null,"如果参数输入端没有连接导线或元件，或者被阻断，将不改变对应的信息")],-1)),s(x,{imgAltPrefix:"玩家控制器",connections:h(c),imgSrc:"/images/expand/others/GVPlayerControllerBlock.webp"},null,8,["connections"]),t[7]||(t[7]=m('<h2 id="下端同步操作" tabindex="-1">下端同步操作 <a class="header-anchor" href="#下端同步操作" aria-label="Permalink to &quot;下端同步操作&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">📝 说明</p><p>对于为小数的输入，最高位为 1 时代表负数（原码模式），较高的第 17~31 位为整数部分，较低的第 1~16 位为小数部分</p></div><table tabindex="0"><thead><tr><th style="text-align:center;">电压</th><th style="text-align:center;">信息</th><th>说明</th><th style="text-align:center;">右端输入</th><th style="text-align:center;">上端输入</th><th style="text-align:center;">左端输入</th></tr></thead><tbody><tr><td style="text-align:center;">0 或<br>未指定</td><td style="text-align:center;">无</td><td>当下端或后端输入变化时才会进行操作</td><td style="text-align:center;">0</td><td style="text-align:center;">0</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">身体位置</td><td>均为小数</td><td style="text-align:center;">X</td><td style="text-align:center;">Y</td><td style="text-align:center;">Z</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">身体方向</td><td>均为小数，角度制<br>只有翻滚角生效可能是因为游戏会自动将身体正过来</td><td style="text-align:center;">偏航角（Yaw）</td><td style="text-align:center;">俯仰角（Pitch）</td><td style="text-align:center;">翻滚角（Roll）</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">身体速度</td><td>均为小数</td><td style="text-align:center;">X</td><td style="text-align:center;">Y</td><td style="text-align:center;">Z</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;">眼睛相对方向</td><td>相对身体的方向，均为小数，角度制<br>只有俯仰角生效可能是因为游戏会自动将偏航角固定到 0</td><td style="text-align:center;">偏航角（Yaw）</td><td style="text-align:center;">俯仰角（Pitch）</td><td style="text-align:center;">/</td></tr><tr><td style="text-align:center;">8</td><td style="text-align:center;">出生点位置</td><td>均为小数</td><td style="text-align:center;">X</td><td style="text-align:center;">Y</td><td style="text-align:center;">Z</td></tr><tr><td style="text-align:center;">16</td><td style="text-align:center;">属性 1</td><td>均为小数</td><td style="text-align:center;">生命值</td><td style="text-align:center;">耐力值</td><td style="text-align:center;">疲倦度</td></tr><tr><td style="text-align:center;">17</td><td style="text-align:center;">属性 2</td><td>均为小数</td><td style="text-align:center;">饥饿度</td><td style="text-align:center;">体温</td><td style="text-align:center;">湿度</td></tr><tr><td style="text-align:center;">18</td><td style="text-align:center;">属性 3</td><td>等级为小数，其余为整数</td><td style="text-align:center;">等级</td><td style="text-align:center;">/</td><td style="text-align:center;">当前手持物品 ID</td></tr><tr><td style="text-align:center;">19</td><td style="text-align:center;">属性 4</td><td>均为小数</td><td style="text-align:center;">剩余感冒时间</td><td style="text-align:center;">剩余疾病时间</td><td style="text-align:center;">剩余燃烧时间</td></tr></tbody></table>',3))])}}});export{v as __pageData,C as default};
