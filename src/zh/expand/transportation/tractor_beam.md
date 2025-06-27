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
        new IOPort(1, 16, "缩放大小", "初始值为 0，每加 1，显示大小增加 1/256 倍，最大 255.996 倍"),
        new IOPort(17, 32, "Y 轴位置偏移", "每加 1，显示向上移动 1/8 格，最高位为 1 时改为向下")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "X 轴位置偏移", "每加 1，显示向北移动 1/8 格，最高位为 1 时改为向南"),
        new IOPort(17, 32, "Z 轴位置偏移", "每加 1，显示向东移动 1/8 格，最高位为 1 时改为向西")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "偏航角", "设置子地形的偏航角，即左右旋转，单位为度"),
        new IOPort(9, 16, "俯仰角", "设置子地形的偏航角，即上下旋转，单位为度"),
        new IOPort(17, 24, "翻滚角", "设置子地形的翻滚角，即以面向的方向为轴旋转，单位为度"),
        new IOPort(25, 25, "偏航角的符号", "为 1 时，`偏航角`反向旋转"),
        new IOPort(26, 26, "俯仰角的符号", "为 1 时，`俯仰角`反向旋转"),
        new IOPort(27, 27, "翻滚角的符号", "为 1 时，`翻滚角`反向旋转"),
        new IOPort(28, 28, "使用自定义亮度", "为 1 时，子地形的亮度为`自定义亮度`，否则采用主世界环境亮度"),
        new IOPort(29, 32, "自定义亮度", "值越大越亮，越小越暗")
        
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 1, "捕获/释放", "从 0 变为 1 时，将尝试捕获方块；从 1 变成 0 时，将尝试释放方块  \n释放时，子地形必须与主世界平行，且缩放为 1.0"),
        new IOPort(2, 2, "位置提示", "为 1 时，将持续显示一根线来提示当前各输入指向的位置  \n从 0 变为 1 时，能预览能被捕获到的方块")
    ])
];
</script>

# 牵引光束 <Badge text="v2.0"/>

## 概述

可将一片悬浮的方块捕获为`子地形`，接下来可以自由地将它移动、旋转、缩放，如果捕获的方块中有正在工作的牵引光束，则可套娃运行，不限层数  
`子地形`实际运行在亚空间中，其内部只有十亿伏特电路板能基本正常运作，你所看到的实际只是它的投影，所以你无法与其直接交互（包括点击、碰撞、射击、爆炸），当前版本有三种与其交互的手段：

* [飞线](../wires/jump_wire)
* [遥控锤](../others/remote_controller)
* 各类传感器
    * 运动传感器：均从主世界检测移动物体
    * 光敏二极管：均从主世界检测光照强度
    * [相机](../sensors/camera)：同时拍摄主世界和所有子地形

> [!CAUTION] 🚨 重要警告
> 存档退出时，如果被捕获的方块没有被释放回主世界，将就此消失，无法恢复

其他说明：

* **不会被捕获的方块**：空气、基岩、火
* **[地形射线探测器](../sensors/terrain_raycast_detector) 和 [地形扫描仪](../sensors/terrain_scanner)**：主世界中的只探测/扫描主世界的地形，子地形中的只探测/扫描自身所在的子地形
* **各类活塞**：主世界中的只能推拉主世界的方块，子地形中的只能推拉自身所在子地形的方块；在子地形中运行时，存在显示错误问题无法解决
* **能储存物品的方块**：例如各类箱子、发射器等，因为游戏机制原因，它们被捕获时会丢出其包含的物品，无法在子地形中使用；另外各类告示牌也无法使用

## 端口定义

<ElectricElement imgAltPrefix="牵引光束" :connections="connections" imgSrc="/images/expand/transportation/GVTractorBeamBlock.webp" :titleLevel="4"/>

> [!INFO] 💡 提示
> 各方向的偏移范围为 ±4095.875 格