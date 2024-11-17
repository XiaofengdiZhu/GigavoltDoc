<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "时长", "触摸或看着持续的时间，单位为毫秒")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "横坐标", "左上角为原点，范围为 0 \~ 0xFFFFFFFF")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "纵坐标", "左上角为原点，范围为 0 \~ 0xFFFFFFFF")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 1, "触摸 / 视线模式", "此位为 0 时，只有点击该元件才会作出反应；为 1 时为，玩家直视该元件时就会作出反应"),
        new IOPort(2, 2, "保持输出", "为 1 时，不再触摸或看向它时将保持最后的输出"),
        new IOPort(3, 3, "开始 / 当前\n触摸坐标", "使用鼠标操作且本元件为触摸模式时，如此位为 0，则输出开始触摸时的坐标，时长始终为 0；为 1 则输出当前的触摸坐标和持续的时长")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "存储器 ID", "输入要显示的图片所在的存储器的 ID，就会在其表面像 [简单图片显示器](../displays/image_display_led.html#简单图片显示器) 那样显示相应的图片"),
    ])
];
</script>

# 触摸板 <Badge text="v2.1"/>

## 概述

可以获取玩家点击或看着此元件的位置和时长

## 端口定义

<ElectricElement imgAltPrefix="触摸板" :connections="connections" imgSrc="/images/expand/sensors/GVTouchpadBlock.webp"/>