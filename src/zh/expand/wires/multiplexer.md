# 路选器 <Badge text="v1.0" type="info"/>

## 概述

<img alt="路选器 图示" src="/images/expand/wires/GVMultiplexerBlock.webp" class="center_image small">

可以通过背面控制正面四个端点的导通和断开

## 说明

内部设计如下图：

<img alt="路选器内部设计 图示" src="/images/expand/wires/MultiplexerDiagram.svg" style="margin: 0 auto 32px; border-radius: 8px; padding: 8px; background-color: white;">

* 圆圈代表电压节点，`A`&#8203;`B`&#8203;`C`&#8203;`D`四个节点是电路板正面`上端`&#8203;`右端`&#8203;`下端`&#8203;`左端`，剩下的`a`&#8203;`b`&#8203;`c`&#8203;`d`&#8203;`O`是辅助节点
* 虚线代表常断通路，共 10 条；实线代表常通通路，共 4 条
* 每条通路由两根单向导线组成，每根导线上都有一个开关，共 28 个开关
* 可以通过背面电压控制这 28 个开关：
    * 对于常断通路，例如最低 1 位（下面称作第 n 位）为 1 时，图中 1 号开关将闭合，导线导通，电压能从`A`传导到`a`；第 2 位为 1 时，图中 2 号开关将闭合，导线导通，电压能从`a`传导到`A`，以此类推
    * 对于常通通路，例如第 26 位为 1 时，图中第 26 号开关将打开，导线断开，电压将不能直接从`O`传导到`c`
* 节点接收到新的电压时，会将此电压与原本的电压进行或运算，节点电压变成该运算结果，例如`c`节点原本的电压是 5 V，从`O`节点收到 3 V，`c`节点的电压将会变成 5 | 3 = 7 V
* 节点电压发生变化后，将向能传导到的其他节点传导新的电压，直到所有节点电压稳定，最后按照`A`&#8203;`B`&#8203;`C`&#8203;`D`节点的电压向正面`上端`&#8203;`右端`&#8203;`下端`&#8203;`左端`输出结果
* 每次背面和正面输入的电压发生变化时，内部节点都将全部复位归 0，重新计算输出结果

> [!INFO] 💡 例子
> 背面输入 0x21 V（二进制 100001），开关 1、6 将闭合，此时从`上端`输入 5 V，`A`节点变成 5 V，因为导线`1`是导通的，电压会传导到节点`a`，继续延导线`21`传导到节点`O`，再延导线`26`传导到节点`c`，最后延导线`6`传导到节点`C`，即`下端`将输出 5 V