import{_ as r,a as o,b as i,c as d,d as m,e as u,f as p,g}from"./chunks/O2GVTransformerBlock.CTwLCrHV.js";import{_ as f,o as x,c as b,j as l,a as e,G as s,n as D,a3 as E,B as v}from"./chunks/framework.C-GLQy3h.js";const L="_led_table_1j2u6_2",y={led_table:L},j=JSON.parse('{"title":"新增元件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/base/new/elements.md","filePath":"zh/base/new/elements.md"}'),B={name:"zh/base/new/elements.md"},k={id:"总线",tabindex:"-1"},P={id:"单向二极管",tabindex:"-1"},_={id:"_4-种-led-灯",tabindex:"-1"},$={id:"变压器",tabindex:"-1"},N={id:"调试台",tabindex:"-1"};function T(n,t,z,V,w,G){const a=v("Badge");return x(),b("div",{"data-pagefind-body":!0},[t[16]||(t[16]=l("h1",{id:"新增元件",tabindex:"-1"},[e("新增元件 "),l("a",{class:"header-anchor",href:"#新增元件","aria-label":'Permalink to "新增元件"'},"​")],-1)),l("h2",k,[t[0]||(t[0]=e("总线 ")),s(a,{text:"v2.0"}),t[1]||(t[1]=e()),t[2]||(t[2]=l("a",{class:"header-anchor",href:"#总线","aria-label":'Permalink to "总线 <Badge text="v2.0"/>"'},"​",-1))]),t[17]||(t[17]=l("p",null,"外观为橙色的特殊导线，只能与有色导线、有色元件相连接，来自不同颜色导线、元件的信号能互不干扰地在总线中传输，能大幅优化排线",-1)),t[18]||(t[18]=l("img",{src:r,alt:"总线用例 图示",class:"center_image"},null,-1)),l("h2",P,[t[3]||(t[3]=e("单向二极管 ")),s(a,{text:"v2.0"}),t[4]||(t[4]=e()),t[5]||(t[5]=l("a",{class:"header-anchor",href:"#单向二极管","aria-label":'Permalink to "单向二极管 <Badge text="v2.0"/>"'},"​",-1))]),t[19]||(t[19]=l("p",null,[e("信号只能单向通过的二极管，延迟 1 个电路周期（0.01 秒，本质上是延迟门），只提供有颜色版本，它们在"),l("code",null,"十亿伏特 复数"),e("分类中")],-1)),t[20]||(t[20]=l("img",{src:o,alt:"新增的二极管 图示",class:"center_image"},null,-1)),l("h2",_,[t[6]||(t[6]=e("4 种 LED 灯 ")),s(a,{text:"v1.0",type:"info"}),t[7]||(t[7]=e()),t[8]||(t[8]=l("a",{class:"header-anchor",href:"#_4-种-led-灯","aria-label":'Permalink to "4 种 LED 灯 <Badge text="v1.0" type="info"/>"'},"​",-1))]),t[21]||(t[21]=l("ul",null,[l("li",null,[l("strong",null,"8 x 4 面 LED 灯"),e("：原版中的 4 面 LED 灯显通过 4 个小灯来展示 4 位二进制信号的情况，该元件则通过 32个小灯来展示十亿伏特 32 位二进制信号的情况")]),l("li",null,[l("strong",null,"4 x 4 面 LED 灯"),e("：取输入电压的最低 16 位后展示之")]),l("li",null,[l("strong",null,"4 x 2 面 LED 灯"),e("：取输入电压的最低 8 位后展示之")]),l("li",null,[l("strong",null,"8 数字 LED 灯"),e("：相当于 8 个原版中的 7 段显示器，通过 8 个十六进制数字直观地展示 32 位二进制信号的情况")])],-1)),l("table",{class:D(n.$style.led_table)},t[9]||(t[9]=[l("tbody",null,[l("tr",null,[l("td",null,"8 x 4 面 LED 灯"),l("td",null,"4 x 4 面 LED 灯"),l("td",null,"4 x 2 面 LED 灯"),l("td",null,"8 数字 LED 灯")]),l("tr",null,[l("td",null,[l("img",{src:i,alt:"8 x 4 面 LED 灯 图示"})]),l("td",null,[l("img",{src:d,alt:"4 x 4 面 LED 灯 图示"})]),l("td",null,[l("img",{src:m,alt:"4 x 2 面 LED 灯 图示"})]),l("td",null,[l("img",{src:u,alt:"8 数字 LED 灯 图示"})])])],-1)]),2),l("h2",$,[t[10]||(t[10]=e("变压器 ")),s(a,{text:"v1.0",type:"info"}),t[11]||(t[11]=e()),t[12]||(t[12]=l("a",{class:"header-anchor",href:"#变压器","aria-label":'Permalink to "变压器 <Badge text="v1.0" type="info"/>"'},"​",-1))]),t[22]||(t[22]=E('<h3 id="十亿伏特转原版变压器" tabindex="-1">十亿伏特转原版变压器 <a class="header-anchor" href="#十亿伏特转原版变压器" aria-label="Permalink to &quot;十亿伏特转原版变压器&quot;">​</a></h3><p>下端连接十亿伏特元件或导线，输入十亿伏特 32 位电压，取最低 4 位转换为原版电压，向上端输出</p><img src="'+p+'" alt="The Image of Gigavolt to Original Transformer" class="center_image small"><h3 id="原版转十亿伏特变压器" tabindex="-1">原版转十亿伏特变压器 <a class="header-anchor" href="#原版转十亿伏特变压器" aria-label="Permalink to &quot;原版转十亿伏特变压器&quot;">​</a></h3><p>下端连接原版元件或导线，输入原版 4 位电压，向上端输出等值的十亿伏特电压</p><img src="'+g+'" alt="The Image of Original to Gigavolt Transformer" class="center_image small">',6)),l("h2",N,[t[13]||(t[13]=e("调试台 ")),s(a,{text:"v1.0",type:"info"}),t[14]||(t[14]=e()),t[15]||(t[15]=l("a",{class:"header-anchor",href:"#调试台","aria-label":'Permalink to "调试台 <Badge text="v1.0" type="info"/>"'},"​",-1))]),t[23]||(t[23]=l("p",null,[e("另见 "),l("a",{href:"./debug.html"},"调试")],-1))])}const q={$style:y},C=f(B,[["render",T],["__cssModules",q]]);export{j as __pageData,C as default};