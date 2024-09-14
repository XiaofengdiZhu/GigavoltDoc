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
        new IOPort(1, 8, "视角角度", "单位为角度"),
        new IOPort(9, 16, "空", "无作用"),
        new IOPort(17, 32, "Y 轴位置偏移", "每加 1，拍照位置向上移动 1/8 格  \n最高位为 1 时改为向下")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "X 轴位置偏移", "每加 1，拍照位置向北移动 1/8 格  \n最高位为 1 时改为向南"),
        new IOPort(17, 32, "Z 轴位置偏移", "每加 1，拍照位置向东移动 1/8 格  \n最高位为 1 时改为向西")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "偏航角", "设置拍照的偏航角，即左右旋转，单位为角度"),
        new IOPort(9, 16, "俯仰角", "设置拍照的偏航角，即上下旋转，单位为角度"),
        new IOPort(17, 24, "翻滚角", "设置拍照的翻滚角，即以面向的方向为轴旋转，单位为角度"),
        new IOPort(25, 25, "偏航角的符号", "为 1 时，`偏航角`反向旋转"),
        new IOPort(26, 26, "俯仰角的符号", "为 1 时，`俯仰角`反向旋转"),
        new IOPort(27, 27, "翻滚角的符号", "为 1 时，`翻滚角`反向旋转"),
        new IOPort(28, 32, "空", "无作用")
        
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 16, "照片的高度", "建议不超过 8192 (0x2000)"),
        new IOPort(17, 32, "照片的宽度", "建议不超过 8192 (0x2000)")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "存储器 ID", "将图像输出到指定 ID 的存储器。像素按 ABGR 颜色模式转换为数据。")
    ])
];
</script>

# 照相机 <Badge text="v2.0"/>

## 概述

用于拍照，分为以下两个版本

## 简单照相机

<img alt="简单照相机 图示" src="/images/expand/sensors/GVCameraBlock0.webp" class="center_image small">

输入指定的存储器 ID，每次输入发生变化就会对着面对的方向拍照，视角为 90 度，分辨率为 512×512，并把图像保存到指定的存储器中

> 各端口的输入会按或计算后作为最终输入

## 复杂照相机

可以控制拍照的各项参数，详见下面接口定义

### 端口定义

<ElectricElement imgAltPrefix="复杂照相机" :connections="connections" imgSrc="/images/expand/sensors/GVCameraBlock1.webp" :titleLevel="4"/>

> [!INFO] 💡 提示
> 各方向的偏移范围为 ±4095.875 格

> [!TIP] 📝 ABGR 颜色模式
> 从高位到低位，每 8 位分别为颜色的 <span style="opacity:0.6;">Alpha 透明度通道</span>、<span style="color:blue;">Blue 蓝色通道</span>、<span style="color:green;">Green 绿色通道</span>、<span style="color:red;">Red 红色通道</span>，可使用下面的电压颜色转换器来转换

::: details 🛠️ 电压颜色转换器

<UintColorConverter />
:::