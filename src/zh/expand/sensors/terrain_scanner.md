<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 16, "起始距离", "每加 1，扫描起始位置距离扫描仪面向的方向加 1 格，最高位为 1 时向背面  \n如果为 0xFFFF，则不调整起始距离，扫描方式改为像 [地形射线探测器](terrain_raycast_detector) 那样，向面对方向不断扫描直到遇到非空气方块（可用于生成地图）"),
        new IOPort(17, 17, "是否存储方块特殊值", "为 0 时只保存方块 ID，为 1 时方块 ID 和数据一并保存"),
        new IOPort(18, 32, "空", "无作用")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 16, "起始纵向偏移", "每加 1，扫描起始位置纵向偏移 1 格，最高位为 1 时取反方向，正方向的定义另见下表"),
        new IOPort(17, 32, "起始横向偏移", "每加 1，扫描起始位置横向偏移 1 格，最高位为 1 时取反方向，正方向的定义另见下表")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "启动", "从 0 变为非 0 时启动扫描并将结果保存到指定 ID 的存储器")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 16, "纵向扫描高度", "每加 1，扫描的高度加 1 格，扫描方向的定义另见下表"),
        new IOPort(17, 32, "横向扫描宽度", "每加 1，扫描的宽度加 1 格，扫描方向的定义另见下表")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "存储器 ID", "指定要保存到的存储器的 ID")
    ])
];
</script>

# 地形扫描仪 <Badge text="v2.0"/>

## 概述

向扫描仪面对的面平行扫描方块，将结果保存到指定存储器，可指定起始距离和范围

> [!WARNING] ⚠️ 注意
> 扫描成功将直接覆盖存储器原始数据！

## 端口定义

<ElectricElement imgAltPrefix="地形扫描仪" :connections="connections" imgSrc="/images/expand/sensors/GVTerrainScannerBlock.webp"/>

## 方向说明

| 扫描仪面对方向 | 起始横向偏移正方向 | 起始纵向偏移正方向 |  横向扫描方向  |  纵向扫描方向  |
|:-------:|:---------:|:---------:|:--------:|:--------:|
| Y 轴-上或下 | X 轴正方向-北  | Z 轴正方向-西  | X 轴正方向-北 | Z 轴正方向-西 |
| X 轴-北或南 | Z 轴正方向-西  | Y 轴正方向-上  | Z 轴正方向-西 | Y 轴负方向-下 |
| Z 轴-东或西 | X 轴正方向-北  | Y 轴正方向-上  | X 轴正方向-北 | Y 轴负方向-下 |