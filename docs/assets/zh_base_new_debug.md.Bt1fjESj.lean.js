import{_ as n,a,b as r}from"./chunks/debug_example.n7pXW2Rh.js";import{_ as d,o as p,c as m,j as e,a as l,G as s,a3 as i,B as g}from"./chunks/framework.C-GLQy3h.js";const u="/GigavoltDoc/images/base/new/EditGVDebugDialog_zh.webp",b="/GigavoltDoc/images/base/new/GVStepFloatingButtons_zh.webp",$=JSON.parse('{"title":"调试功能","description":"","frontmatter":{},"headers":[],"relativePath":"zh/base/new/debug.md","filePath":"zh/base/new/debug.md"}'),f={name:"zh/base/new/debug.md"},x={id:"运行倍速",tabindex:"-1"},v={id:"悬浮显示电压",tabindex:"-1"},k={id:"超视距保持运行",tabindex:"-1"},B={id:"单步调试悬浮窗",tabindex:"-1"},P={id:"键盘单步调试",tabindex:"-1"};function G(V,t,w,y,D,z){const o=g("Badge");return p(),m("div",{"data-pagefind-body":!0},[t[15]||(t[15]=e("h1",{id:"调试功能",tabindex:"-1"},[l("调试功能 "),e("a",{class:"header-anchor",href:"#调试功能","aria-label":'Permalink to "调试功能"'},"​")],-1)),t[16]||(t[16]=e("img",{src:n,alt:"十亿伏特调试台 图示",class:"center_image small"},null,-1)),t[17]||(t[17]=e("p",null,[l("将"),e("code",null,"GV 调试台"),l("方块拿在手上编辑，或将其放置后编辑、交互，即可打开下图所示"),e("code",null,"十亿伏特调试面板")],-1)),t[18]||(t[18]=e("img",{src:u,alt:"十亿伏特调试面板 图示",class:"center_image"},null,-1)),e("h2",x,[t[0]||(t[0]=l("运行倍速 ")),s(o,{text:"v1.0",type:"info"}),t[1]||(t[1]=l()),t[2]||(t[2]=e("a",{class:"header-anchor",href:"#运行倍速","aria-label":'Permalink to "运行倍速 <Badge text="v1.0" type="info"/>"'},"​",-1))]),t[19]||(t[19]=e("p",null,"原版设定的运行频率是 100 次电路循环/秒，如果设置为 2，将会变成 200 次电路循环/秒，可以是小数，例如设置为 0.5，运行频率将变成 50 次电路循环/秒，当前版本允许的最低运行倍速为 0.1",-1)),t[20]||(t[20]=e("p",null,"GV 调试台输出的电压为当前设置的倍速，小数点位于第16、17位之间",-1)),t[21]||(t[21]=e("div",{class:"tip custom-block github-alert"},[e("p",{class:"custom-block-title"},"🧪 参考倍速"),e("p",null,[l("CPU "),e("code",null,"AMD R7 5800X"),l(" 在 4.55GHz 下，仅摆放 1 个非门，并用导线首尾相连")]),e("ul",null,[e("li",null,"设置 10 万倍速时，实际倍速 9.2 万倍，游戏帧数 9 ~ 10"),e("li",null,"设置 9 万倍速时，实际倍速 8.8 万倍，游戏帧数 16 ~ 17"),e("li",null,"设置 8 万倍速时，实际倍速 7.9 万倍，游戏帧数 370 ~ 380")])],-1)),e("h2",v,[t[3]||(t[3]=l("悬浮显示电压 ")),s(o,{text:"v2.0"}),t[4]||(t[4]=l()),t[5]||(t[5]=e("a",{class:"header-anchor",href:"#悬浮显示电压","aria-label":'Permalink to "悬浮显示电压 <Badge text="v2.0"/>"'},"​",-1))]),t[22]||(t[22]=e("p",null,"开启后，会在面向的十亿伏特元件、导线上显示其各方向的输入、输出电压，绿色代表的是输入，红色代表的是输出，右下角显示的是背端电压",-1)),t[23]||(t[23]=e("img",{src:a,alt:"悬浮显示电压 图示",class:"center_image"},null,-1)),e("h2",k,[t[6]||(t[6]=l("超视距保持运行 ")),s(o,{text:"v2.0"}),t[7]||(t[7]=l()),t[8]||(t[8]=e("a",{class:"header-anchor",href:"#超视距保持运行","aria-label":'Permalink to "超视距保持运行 <Badge text="v2.0"/>"'},"​",-1))]),t[24]||(t[24]=e("p",null,"开启后，当出现过的电路元件、导线不在视距内时，仍然会保持运行，退出存档失效",-1)),e("h2",B,[t[9]||(t[9]=l("单步调试悬浮窗 ")),s(o,{text:"v1.0",type:"info"}),t[10]||(t[10]=l()),t[11]||(t[11]=e("a",{class:"header-anchor",href:"#单步调试悬浮窗","aria-label":'Permalink to "单步调试悬浮窗 <Badge text="v1.0" type="info"/>"'},"​",-1))]),t[25]||(t[25]=i('<p>开启后，会在游戏顶端中间显示三个按钮，和<code>最近 1000 次运行历时 x</code>，即最近 1000 次 电路循环历时 x 秒</p><img src="'+b+'" alt="单步调试悬浮窗 图示" class="center_image"><p>三个按钮分别是：</p><ol><li><strong>暂停/继续</strong>：点击后将十亿伏特电路暂停，再次点击继续运行</li><li><strong>单步</strong>：运行一个元件</li><li><strong>步过</strong>：运行一个电路循环</li></ol><p>下图是在开关关闭状态下，点击暂停后打开开关，点击两次步过按钮后的截图</p><img src="'+r+'" alt="十亿伏特调试例子 图示" class="center_image"><p>可以看出，左边的 LED 灯下面因为比右边多了一个逻辑或门，会比右边慢一个电路循环亮起</p><p>屏幕上还显示了 3 条青色线，这是电路在上一次运行中，有哪些元件、导线运行了的标识，青色线旁边的数字是它们的运行顺序</p>',8)),e("h2",P,[t[12]||(t[12]=l("键盘单步调试 ")),s(o,{text:"v1.0",type:"info"}),t[13]||(t[13]=l()),t[14]||(t[14]=e("a",{class:"header-anchor",href:"#键盘单步调试","aria-label":'Permalink to "键盘单步调试 <Badge text="v1.0" type="info"/>"'},"​",-1))]),t[26]||(t[26]=i('<p>开启后，可使用键盘来进行单步调试等，效果和单步调试悬浮窗一致</p><ul><li><code>F5</code>暂停/继续</li><li><code>F6</code>单步</li><li><code>F7</code>步过</li></ul><blockquote><p>“启用快捷轮盘”是什么？详见 <a href="./features.html#快捷轮盘">特色功能</a></p></blockquote>',3))])}const E=d(f,[["render",G]]);export{$ as __pageData,E as default};