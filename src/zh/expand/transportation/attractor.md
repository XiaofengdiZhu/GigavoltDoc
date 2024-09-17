<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.All, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "", "发生作用的范围，0xFF 时对全地图生效"),
        new IOPort(9, 9, "", "为 0 时以直线方式移动被吸引物体；为 1 时以抛物线方式移动，一些情况下无法以抛物线移动时会自动改为直线方式"),
        new IOPort(10, 10, "", "为 1 时吸引掉落物"),
        new IOPort(11, 11, "", "为 1 时吸引抛射物"),
        new IOPort(12, 12, "", "为 1 时吸引燃烧中的火焰方块"),
        new IOPort(13, 13, "", "为 1 时吸引正在进行的爆炸，成功率低"),
        new IOPort(14, 14, "", "为 1 时吸引玩家，仅直线方式，持续 60 秒"),
        new IOPort(15, 15, "", "为 1 时吸引玩家以外的动物、可移动实体，仅直线方式，持续 60 秒"),
        new IOPort(16, 16, "", "为 1 时把吸引改为弹开，为避免无限远离，速度会逐渐减慢，仅直线方式移动时有效"),
        new IOPort(17, 22, "", "指定初始移动速度，单位格/秒，仅直线方式移动有效"),
        new IOPort(23, 32, "", "只吸引指定方块 ID 的掉落物、抛射物，为 0 时不指定")
    ], true)
];
</script>

# 吸引器 <Badge text="v2.0"/>

## 概述

可吸引掉落物、抛射物、动物等，每次输入电压变化都会尝试进行吸引

## 端口定义

<ElectricElement imgAltPrefix="吸引器" :connections="connections" imgSrc="/images/expand/transportation/GVAttractorBlock.webp"/>