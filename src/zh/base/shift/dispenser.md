<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.All, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "速度", "单位格/秒，最大设置 255 格/秒"),
        new IOPort(9, 16, "角度1", "* 朝向上方或下方时，为向北方偏转的角度\n* 朝向其他方向时，为向右方偏转的角度\n* 最高位为 1 时角度取负值\n* 超过 90 时自动下调为 90 度"),
        new IOPort(17, 24, "角度2", "* 朝向上方或下方时，为向西方偏转的角度\n* 朝向其他方向时，为向上方偏转的角度\n* 其他同角度 1 定义\n"),
        new IOPort(25, 25, "无视重力", "为 1 时不受重力影响"),
        new IOPort(26, 26, "无视空阻", "为 1 时不受空气等阻力影响"),
        new IOPort(27, 27, "安全模式", "为 1 时启用安全模式  \n安全模式下，投射物不会触发被发射、撞到方块的方块行为，但仍然会触发被撞击方块的相关方块行为"),
        new IOPort(28, 28, "放置模式", "为 1 时启用放置模式  \n放置模式下，投射物与非空气、流体相撞时，会将自身放置到世界中（如果可以的话）"),
        new IOPort(29, 29, "是否指定槽位", "为 1 时只发射指定槽位的方块"),
        new IOPort(30, 32, "指定槽位", "指定只发射第 n+1 个槽位的方块")
    ])
];
</script>

# 发射器 <Badge text="v1.0" type="info"/>

## 概述

以类似于箱子的方式存储物品，一旦电压变化就会尝试将物品发射或丢出，可以通过输入的电压来控制射出的速度、角度等，默认为发射模式

## 端口定义

> 方块的各面输入会按或计算后执行

<ElectricElement imgAltPrefix="十亿伏特发射器" :connections="connections" imgSrc="/images/base/shift/GVDispenser.webp"/>

> [!TIP] 💡 提示
> `十亿伏特 · 扩展 mod`中还有 [复杂发射器]()