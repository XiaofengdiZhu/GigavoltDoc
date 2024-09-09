<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";
import UintColorConverter from "/components/UintColorConverter.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "缩放大小", "每加 1，显示大小增加 1/8 倍，最大 8191.875 倍"),
        new IOPort(17, 32, "Y 轴位置偏移", "每加 1，显示向上移动 1/8 格，最高位为 1 时改为向下"),
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "X 轴位置偏移", "每加 1，显示向北移动 1/8 格，最高位为 1 时改为向南"),
        new IOPort(17, 32, "Z 轴位置偏移", "每加 1，显示向东移动 1/8 格，最高位为 1 时改为向西")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "偏航角", "设置显示的偏航角，即左右旋转，单位为度"),
        new IOPort(9, 16, "俯仰角", "设置显示的偏航角，即上下旋转，单位为度"),
        new IOPort(17, 24, "翻滚角", "设置显示的翻滚角，即以面向的方向为轴旋转，单位为度"),
        new IOPort(25, 25, "偏航角的符号", "为 1 时，`偏航角`反向旋转"),
        new IOPort(26, 26, "俯仰角的符号", "为 1 时，`俯仰角`反向旋转"),
        new IOPort(27, 27, "翻滚角的符号", "为 1 时，`翻滚角`反向旋转"),
        new IOPort(28, 28, "弹出提示", "从 0 变为 1 时，在屏幕上弹出提示"),
        new IOPort(29, 32, "亮度", "设置显示的亮度，值越大越亮")
        
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "颜色", "设置显示的颜色，ABGR 颜色模式")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "存储器 ID", "变化后，将以 UTF8 编码读取指定 ID 的存储器中的数据，并立即写入到告示牌中，同时影响告示牌上直接显示和悬浮显示的文字")
    ])
];
</script>

# 告示牌 <Badge text="v1.0" type="info"/>

## 概述

不仅具有原版的显示文字、弹出提示功能，还可以额外悬浮显示文字，但只能记录一行文字

## 端口定义

> 除后端和下端第28位外，其他操作的都是悬浮显示的文字

<ElectricElement imgAltPrefix="十亿伏特告示牌" :connections="connections" imgSrc="/images/base/shift/GVSignBlock.webp"/>

> [!INFO] 💡 提示
> 各方向的偏移范围为 ±4095.875 格

> [!TIP] 📝 ABGR 颜色模式
> 从高位到低位，每 8 位分别为颜色的 <span style="opacity:0.6;">Alpha 透明度通道</span>、<span style="color:blue;">Blue 蓝色通道</span>、<span style="color:green;">Green 绿色通道</span>、<span style="color:red;">Red 红色通道</span>，可使用下面的电压颜色转换器来转换

::: details 🛠️ 电压颜色转换器

<UintColorConverter />
:::