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
        new IOPort(11, 11, "", "为 1 时同时判断方块的特殊值，否则只判断方块 ID"),
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
> 各端口的输入会按或计算后作为最终输入

它的形状是 T 字形，横线的一端摆放要取出物品的箱子（或其他可存储物品的方块，下同），竖线的一端如果是另一个箱子，提取器会把取出的物品存入该箱子，否则会尝试把物品丢出；两端都可以摆放 [延长杆](#关于延长杆) 或轴向一致的提取器来提取/存入更远的箱子。

箱子提取器有以下两个版本，区别在于材质和端口定义

## 指定槽位版

<ElectricElement imgAltPrefix="箱子提取器-指定槽位" :connections="connections1" imgSrc="/images/expand/transportation/GVInventoryFetcherBlock0.webp"/>

## 指定 ID 版

<ElectricElement imgAltPrefix="箱子提取器-指定 ID" :connections="connections2" imgSrc="/images/expand/transportation/GVInventoryFetcherBlock2.webp"/>

## 关于延长杆

<img alt="延长杆 图示" src="/images/expand/transportation/GVInventoryFetcherBlock1.webp" class="center_image small">

用于让箱子提取器、[箱子控制器](inventory_controller) 能够无延迟地远距离操作箱子（或其他可存储物品的方块），而且它是双向导通的，但不能拐弯或垂直相交