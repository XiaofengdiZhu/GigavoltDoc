<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.All, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "X 轴位置偏移", "每加 1，要投射到的位置向西偏移 1 格"),
        new IOPort(9, 16, "Y 轴位置偏移", "每加 1，要投射到的位置向上偏移 1 格"),
        new IOPort(17, 24, "Z 轴位置偏移", "每加 1，要投射到的位置向北偏移 1 格"),
        new IOPort(25, 25, "X 轴位置偏移的符号", "为 1 时，向西改为向东"),
        new IOPort(26, 26, "Y 轴位置偏移的符号", "为 1 时，向上改为向下"),
        new IOPort(27, 27, "Z 轴位置偏移的符号", "为 1 时，向北改为向南"),
        new IOPort(28, 28, "是否放置+安全模式", "为 1 时与非空气、流体相撞时，或抵达指定的偏移位置时，投射物将自身放置到世界中（如果可以的话）  \n还会自动开启安全模式（不会触发投射物被发射时、撞到方块时的行为，仍然会触发被撞击方块的相关行为）"),
        new IOPort(29, 29, "是否指定槽位", "为 1 时只发射指定槽位的方块"),
        new IOPort(30, 32, "指定槽位", "指定只发射第 n+1 个槽位的方块")
    ], false)
];
</script>

# 制导发射器 <Badge text="v1.0" type="info"/>

## 概述

和发射器类似，但不是指定速度和角度，而是直接指定要投射到的位置（不保证 100% 抵达），而且能设置抵达指定位置时是否将投射物放置到世界中，投射物均不受空气阻力影响，受重力影响，默认为发射模式

## 端口定义

<ElectricElement imgAltPrefix="制导发射器" :connections="connections" imgSrc="/images/expand/transportation/GVGuidedDispenserBlock.webp"/>