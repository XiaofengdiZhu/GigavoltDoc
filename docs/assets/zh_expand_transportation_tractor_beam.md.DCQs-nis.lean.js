import{E as a,a as o,b as r,c as i,I as t}from"./chunks/ElectricConnectionTable.BnFVfk2b.js";import{E as p}from"./chunks/ElectricElement.ByEg-ig9.js";import{d as m,o as u,c as h,j as n,a as l,G as s,a3 as f,k as w,B as b}from"./chunks/framework.C-GLQy3h.js";import"./chunks/locale.DUWwBpDx.js";const g={id:"牵引光束",tabindex:"-1"},S=JSON.parse('{"title":"牵引光束","description":"","frontmatter":{},"headers":[],"relativePath":"zh/expand/transportation/tractor_beam.md","filePath":"zh/expand/transportation/tractor_beam.md"}'),_={name:"zh/expand/transportation/tractor_beam.md"},C=m({..._,setup(x){let c=[new a(o.Top,r.Input,i.StartAndEnd,[new t(1,16,"缩放大小","初始值为 0，每加 1，显示大小增加 1/256 倍，最大 255.996 倍"),new t(17,32,"Y 轴位置偏移","每加 1，显示向上移动 1/8 格，最高位为 1 时改为向下")]),new a(o.Right,r.Input,i.StartAndEnd,[new t(1,16,"X 轴位置偏移","每加 1，显示向北移动 1/8 格，最高位为 1 时改为向南"),new t(17,32,"Z 轴位置偏移","每加 1，显示向东移动 1/8 格，最高位为 1 时改为向西")]),new a(o.Bottom,r.Input,i.StartAndEnd,[new t(1,8,"偏航角","设置子地形的偏航角，即左右旋转，单位为度"),new t(9,16,"俯仰角","设置子地形的偏航角，即上下旋转，单位为度"),new t(17,24,"翻滚角","设置子地形的翻滚角，即以面向的方向为轴旋转，单位为度"),new t(25,25,"偏航角的符号","为 1 时，`偏航角`反向旋转"),new t(26,26,"俯仰角的符号","为 1 时，`俯仰角`反向旋转"),new t(27,27,"翻滚角的符号","为 1 时，`翻滚角`反向旋转"),new t(28,28,"使用自定义亮度","为 1 时，子地形的亮度为`自定义亮度`，否则采用主世界环境亮度"),new t(29,32,"自定义亮度","值越大越亮，越小越暗")]),new a(o.Left,r.Input,i.StartAndEnd,[new t(1,1,"捕获/释放",`从 0 变为 1 时，将尝试捕获或释放方块  
释放时，子地形必须与主世界平行，且缩放为 1.0`),new t(2,2,"位置提示",`为 1 时，将持续显示一根线来提示当前各输入指向的位置  
从 0 变为 1 时，能预览能被捕获到的方块`)])];return(E,e)=>{const d=b("Badge");return u(),h("div",{"data-pagefind-body":!0},[n("h1",g,[e[0]||(e[0]=l("牵引光束 ")),s(d,{text:"v2.0"}),e[1]||(e[1]=l()),e[2]||(e[2]=n("a",{class:"header-anchor",href:"#牵引光束","aria-label":'Permalink to "牵引光束 <Badge text="v2.0"/>"'},"​",-1))]),e[3]||(e[3]=f('<h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>可将一片悬浮的方块捕获为<code>子地形</code>，接下来可以自由地将它移动、旋转、缩放，如果捕获的方块中有正在工作的牵引光束，则可套娃运行，不限层数<br><code>子地形</code>实际运行在亚空间中，其内部只有十亿伏特电路板能基本正常运作，你所看到的实际只是它的投影，所以你无法与其直接交互（包括点击、碰撞、射击、爆炸），当前版本有三种与其交互的手段：</p><ul><li><a href="./../wires/jump_wire.html">飞线</a></li><li><a href="./../others/remote_controller.html">遥控锤</a></li><li>各类传感器 <ul><li>运动传感器：均从主世界检测移动物体</li><li>光敏二极管：均从主世界检测光照强度</li><li><a href="./../sensors/camera.html">相机</a>：同时拍摄主世界和所有子地形</li></ul></li></ul><div class="caution custom-block github-alert"><p class="custom-block-title">🚨 重要警告</p><p>存档退出时，如果被捕获的方块没有被释放回主世界，将就此消失，无法恢复</p></div><p>其他说明：</p><ul><li><strong>不会被捕获的方块</strong>：空气、基岩、火</li><li><strong><a href="./../sensors/terrain_raycast_detector.html">地形射线探测器</a> 和 <a href="./../sensors/terrain_scanner.html">地形扫描仪</a></strong>：主世界中的只探测/扫描主世界的地形，子地形中的只探测/扫描自身所在的子地形</li><li><strong>各类活塞</strong>：主世界中的只能推拉主世界的方块，子地形中的只能推拉自身所在子地形的方块；在子地形中运行时，存在显示错误问题无法解决</li><li><strong>能储存物品的方块</strong>：例如各类箱子、发射器等，因为游戏机制原因，它们被捕获时会丢出其包含的物品，无法在子地形中使用；另外各类告示牌也无法使用</li></ul><h2 id="端口定义" tabindex="-1">端口定义 <a class="header-anchor" href="#端口定义" aria-label="Permalink to &quot;端口定义&quot;">​</a></h2>',7)),s(p,{imgAltPrefix:"牵引光束",connections:w(c),imgSrc:"/images/expand/transportation/GVTractorBeamBlock.webp",titleLevel:4},null,8,["connections"]),e[4]||(e[4]=n("div",{class:"info custom-block github-alert"},[n("p",{class:"custom-block-title"},"💡 提示"),n("p",null,"各方向的偏移范围为 ±4095.875 格")],-1))])}}});export{S as __pageData,C as default};
