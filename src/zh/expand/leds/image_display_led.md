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
        new IOPort(28, 28, "缩放算法", "为 0 时，以各向异性过滤算法缩放  \n为1时，以保留硬边缘算法缩放"),
        new IOPort(29, 29, "是否残像", "为 0 时，其他参数变化会立即按照新参数显示图像  \n为 1 时，其他参数变化会保留之前显示的图像，使其持续显示，直到此位变为 0，或退出存档"),
        new IOPort(30, 32, "空", "无作用")
        
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "上色", "设置要给图片上的颜色，ABGR 颜色模式")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "存储器 ID", "设置要显示的图片所在的存储器的 ID"),
    ])
];
</script>

# 图片显示器 <Badge text="v1.0" type="info"/>

## 概述

用于显示图片，分为以下两个版本

## 简单图片显示器

<img alt="简单图片显示器 图示" src="/images/expand/leds/image_display_led_0.webp" class="center_image small">

直接输入要显示的图片所在的存储器的 ID，就会在其表面显示相应的图片，如果有多个输入，则会将这些输入进行或计算，显示的亮度根据环境亮度决定

> [!TIP] 💡 提示
> 可以通过 存储器的导入功能、[照相机](../sensors/camera)、[玩家监视器](../sensors/player_monitor) 等方式将图像数据存入存储器

## 复杂图片显示器

可以控制显示的各项参数，详见下面接口定义

### 端口定义

<ElectricElement imgAltPrefix="复杂图片显示器" :connections="connections" imgSrc="/images/expand/leds/image_display_led_1.webp" :titleLevel="4"/>

> [!INFO] 💡 提示
> 各方向的偏移范围为 ±4095.875 格

> [!TIP] 📝 ABGR 颜色模式
> 从高位到低位，每 8 位分别为颜色的 <span style="opacity:0.6;">Alpha 透明度通道</span>、<span style="color:blue;">Blue 蓝色通道</span>、<span style="color:green;">Green 绿色通道</span>、<span style="color:red;">Red 红色通道</span>，可使用下面的电压颜色转换器来转换

::: details 🛠️ 电压颜色转换器

<UintColorConverter />
:::