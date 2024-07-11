import{E as e,a,b as n,c as d,I as t,d as o}from"./chunks/ElectricElement.CeoLiehS.js";import{o as c,c as s,I as h,k as l,a5 as r}from"./chunks/framework.IyV-bm8r.js";const _=r('<h1 id="地形扫描仪" tabindex="-1">地形扫描仪 <a class="header-anchor" href="#地形扫描仪" aria-label="Permalink to &quot;地形扫描仪&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>向扫描仪面对的面平行扫描方块，将结果保存到指定存储器，可指定起始距离和范围</p><div class="warning custom-block github-alert"><p class="custom-block-title">⚠ 注意</p><p>扫描成功将直接覆盖存储器原始数据！</p></div><h2 id="端口定义" tabindex="-1">端口定义 <a class="header-anchor" href="#端口定义" aria-label="Permalink to &quot;端口定义&quot;">​</a></h2>',5),p=r('<h2 id="方向说明" tabindex="-1">方向说明 <a class="header-anchor" href="#方向说明" aria-label="Permalink to &quot;方向说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th>扫描仪面对方向</th><th>起始横向偏移正方向</th><th>起始纵向偏移正方向</th><th>横向扫描方向</th><th>纵向扫描方向</th></tr></thead><tbody><tr><td>Y轴-上或下</td><td>X轴正方向-北</td><td>Z轴正方向-西</td><td>X轴正方向-北</td><td>Z轴正方向-西</td></tr><tr><td>X轴-北或南</td><td>Z轴正方向-西</td><td>Y轴正方向-上</td><td>Z轴正方向-西</td><td>Y轴负方向-下</td></tr><tr><td>Z轴-东或西</td><td>X轴正方向-北</td><td>Y轴正方向-上</td><td>X轴正方向-北</td><td>Y轴负方向-下</td></tr></tbody></table>',2),w=JSON.parse('{"title":"地形扫描仪","description":"","frontmatter":{},"headers":[],"relativePath":"zh/expand/sensors/terrain_scanner.md","filePath":"zh/expand/sensors/terrain_scanner.md"}'),u={name:"zh/expand/sensors/terrain_scanner.md"},x=Object.assign(u,{setup(m){let i=[new e(a.Top,n.Input,d.BitWidth,[new t(1,16,"起始距离","每加 1，扫描起始位置距离扫描仪面向的方向加 1 格，最高位为 1 时向背面；如果为 0xFFFF，则不调整起始距离，扫描方式改为像射线探测器那样，向面对方向不断扫描直到遇到非空气方块（可用于生成地图）"),new t(17,17,"是否存储方块特殊值","为 0 时只保存方块ID，为 1 时方块 ID 和数据一并保存"),new t(18,32,"空","无作用")]),new e(a.Right,n.Input,d.BitWidth,[new t(1,16,"起始纵向偏移","每加 1，扫描起始位置纵向偏移 1 格，最高位为 1 时取反方向，正方向的定义另见下表"),new t(17,32,"起始横向偏移","每加 1，扫描起始位置横向偏移 1 格，最高位为 1 时取反方向，正方向的定义另见下表")]),new e(a.Bottom,n.Input,d.BitWidth,[new t(1,32,"启动","从0变为非0时启动扫描并将结果保存到指定 ID 的存储器")]),new e(a.Left,n.Input,d.BitWidth,[new t(1,16,"纵向扫描高度","每加 1，扫描的高度加 1 格，扫描方向的定义另见下表"),new t(17,32,"横向扫描宽度","每加 1，扫描的宽度加 1 格，扫描方向的定义另见下表")]),new e(a.In,n.Input,d.BitWidth,[new t(1,32,"存储器 ID","指定要保存到的存储器的 ID")])];return(b,I)=>(c(),s("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyZGF0ZSUyMiUzQTE3MjA3MDk5MzQyNjIlN0Q="},[_,h(o,{imgAltPrefix:"地形扫描仪",connections:l(i),imgSrc:"/images/expand/GVTerrainScanner.png"},null,8,["connections"]),p]))}});export{w as __pageData,x as default};
