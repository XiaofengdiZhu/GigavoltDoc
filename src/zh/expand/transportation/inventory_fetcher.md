---
outline: 2
---

<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections1 = [
    new ElectricConnection(ElectricConnectorDirection.All, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "", "指定要提取的槽位"),
        new IOPort(9, 16, "", "指定数量"),
        new IOPort(17, 17, "", "为 1 时忽略指定数量，直接提取该槽位全部的物品"),
        new IOPort(18, 18, "", "为 1 时阻止物品被丢出")
    ], true)
];
let connections2 = [
    new ElectricConnection(ElectricConnectorDirection.All, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 10, "", "指定要提取的方块 ID"),
        new IOPort(11, 11, "", "为 1 时同时判断方块的特殊值，否则不只判断方块 ID"),
        new IOPort(12, 12, "", "为 1 时提取全部符合条件的物品，否则只提取 1 个"),
        new IOPort(13, 13, "", "为 1 时阻止物品被丢出"),
        new IOPort(14, 14, "", "无作用"),
        new IOPort(15, 32, "", "指定要提取的方块的特殊值，前提是第 11 位为 1")
    ], true)
];
</script>

# 箱子提取器 <Badge text="v2.0"/>

## 概述

箱子提取器可以从箱子、熔炉、发射器等可存储物品的方块中提取物品，它由电路来控制，每次电压变化都将尝试进行提取
> 方块的各面输入会按或计算后执行

它的形状是T字形，横线的一端`背面`摆放要取出物品的箱子，另一端`正面`分四种情况：

* 如摆放箱子等可以存储物品的方块，则向其存入提取的物品
* 如摆放 [延长杆](#关于延长杆)，物品将无延迟地在延长杆中运输，最终存入终点的另一个箱子等可以存储物品的方块，或丢出
* 如摆放另一个方向相反的提取器，而且该提取器的背面也摆放有箱子等可以存储物品的方块，则该提取器将被视为延长杆（这两个提取器之间可以插入更多延长杆）
* 非以上三种情况，提取器将尝试直接把物品丢出

箱子提取器有以下两个版本，区别在于材质和端口定义

## 指定槽位版

<ElectricElement imgAltPrefix="箱子提取器-指定槽位" :connections="connections1" imgSrc="/images/expand/transportation/GVInventoryFetcherBlock0.webp"/>

## 指定 ID 版

<ElectricElement imgAltPrefix="箱子提取器-指定 ID" :connections="connections2" imgSrc="/images/expand/transportation/GVInventoryFetcherBlock2.webp"/>

## 关于延长杆

<img alt="延长杆 图示" src="/images/expand/transportation/GVInventoryFetcherBlock1.webp" class="center_image small">

用于让提取器能够无延迟地远距离传送物品，而且它是双向导通的，但不能两两垂直相交