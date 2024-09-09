<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "显示 <span style='color: lime; background-color: var(--grayA10);'>绿色</span> 线", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "显示 <span style='color: cyan; background-color: var(--grayA10);'>青色</span> 线", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "显示 <span style='color: red; background-color: var(--grayA6);'>红色</span> 线", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "显示 <span style='color: yellow; background-color: var(--grayA8);'>黄色</span> 线", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "时钟", "不接元件或导线时，正面四端的变化会立即显示在示波器上  \n接上时，只有在其电压从 0 变为非 0 时才会从正面接受新的输入")
    ])
];
</script>

# 示波器 <Badge text="v2.0"/>

## 概述

将正面四端收到的信号像示波器那样显示在正面，可以通过点击图像上显示的按钮来手动调整上下限（默认自动调整）、显示的记录数、是否开启泛光，点击空白处则隐藏前述按钮

<img alt="示波器 截图1" src="/images/expand/leds/oscilloscope_screenshot_1.webp" class="center_image">

还可以点编辑键来全屏显示图像，顶栏显示的电压是当前各端电压，最右边的按钮是调试操作，具体功能可参考 [此处](../../base/new/debug#单步调试悬浮窗)

<img alt="示波器 截图2" src="/images/expand/leds/oscilloscope_screenshot_2_zh.webp" class="center_image">

## 端口定义

<ElectricElement imgAltPrefix="示波器" :connections="connections" imgSrc="/images/expand/leds/GVOscilloscopeBlock.webp"/>