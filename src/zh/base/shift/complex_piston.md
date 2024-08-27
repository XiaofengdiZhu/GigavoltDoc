<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.All, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "", "延伸长度，单位格"),
        new IOPort(9, 16, "", "速度，单位格/秒"),
        new IOPort(17, 24, "", "推拉方块个数，单位格"),
        new IOPort(25, 25, "", "为 1 时有粘性，否则没有"),
        new IOPort(26, 26, "", "为 1 时严格推拉个数，否则不严格"),
        new IOPort(27, 27, "", "为 1 时隐藏延长杆，否则显示")
    ], true)
];
</script>

# 复杂活塞 <Badge text="v2.0"/>

## 概述

完全由电压控制的活塞，一旦电压变化就会尝试调整
> 简单版另见 [简单元件的变体](simple#活塞)

## 端口定义

<ElectricElement imgAltPrefix="十亿伏特复杂活塞" :connections="connections" imgSrc="/images/base/shift/GVPistonBlock_complex.webp"/>

> 速度为 0 时活塞将无法运作