<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "方块值", "探测到最近的符合条件的方块的完整值（含特殊值）")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 12, "探测距离", "最多探测多少格，等于 0 时不进行探测"),
        new IOPort(13, 13, "是否判断特殊值", "详见`指定方块特殊值`"),
        new IOPort(14, 14, "是否跳过液体", "如果为 1，探测时将跳过水和岩浆方块  \n该设置优先级高于`指定方块 ID`"),
        new IOPort(15, 32, "空", "无作用")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Output, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "距离", "探测到最近的符合条件的方块的距离，单位格")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 10, "指定方块 ID", "如果该部分大于 0，将只探测方块 ID 与该部分相等的方块"),
        new IOPort(11, 14, "空", "无作用"),
        new IOPort(15, 32, "指定方块特殊值", "如果`指定方块 ID`部分大于 0，且`是否判断特殊值`为 1，将同时判断方块的特殊值是否与该部分相等")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Output, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "连续方块数量", "探测到符合条件的方块后，输出当前方向连续出现了多少个该方块")
    ])
];
</script>

# 地形射线探测器 <Badge text="v1.0" type="info"/>

## 概述

每次输入变化时，向探测器面对的方向逐格探测是否存在非空气方块，并返回距离等数据，还能探测指定方块  
需要先设置探测距离

## 端口定义

<ElectricElement imgAltPrefix="地形射线探测器" :connections="connections" imgSrc="/images/expand/sensors/GVTerrainRaycastDetectorBlock.webp"/>