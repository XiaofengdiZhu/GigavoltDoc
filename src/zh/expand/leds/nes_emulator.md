<script setup>
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.All, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 1, "电源", "0 为关闭，1 为开启"),
        new IOPort(2, 2, "重置", "0 为不重置，1 为执行重置；如一直为 1，会不停重置"),
        new IOPort(3, 4, "旋转", "0 为正位，1 为顺时针旋转 90 度，2、3 同理"),
        new IOPort(5, 8, "空", "无作用"),
        new IOPort(9, 16, "手柄 1", "从高位到低位分别对应：`→` `←` `↓` `↑` `Start` `Select` `B` `A`"),
        new IOPort(17, 24, "手柄 2", "无作用，因为 [XamariNES](https://github.com/enusbaum/XamariNES) 尚未支持多手柄"),
        new IOPort(25, 31, "缩放", "0、1 为 1 个方块大，2 为 2 个方块大，最大 128 方块大"),
        new IOPort(32, 32, "空", "无作用")
    ])
];
</script>

# 红白机模拟器 <Badge text="1.0"/>

## 概述

可以模拟红白机的模拟器，使用的库是 [XamariNES](https://github.com/enusbaum/XamariNES)，纯软件模拟（CPU运算），不支持声音输出，仅支持以下四种ROM格式的游戏

* CNROM
* MMC1
* NROM
* UxROM

可能能够支持的游戏有

* [x] 超级玛丽
* [x] 魂斗罗
* [x] 双截龙
* [ ] 恶魔城
* [ ] 冒险岛
* [ ] 勇者斗恶龙
* [ ] 合金装备

同时仅能运行一个模拟器实例，即多个红白机模拟器显示的内容是一样的，每个红白机模拟器收到的手柄操作会按或计算后传输给模拟器  
启动时会自动加载 [XamariNES](https://github.com/enusbaum/XamariNES) 的内置 [测试 ROM](https://github.com/enusbaum/XamariNES/blob/master/XamariNES.UI/XamariNES.UI.App/Resources/roms/nestest.nes)，如果要载入其他 ROM，请编辑该方块并输入 ROM 的路径，或存储器的 ID，最后点击确定，红白机模拟器将立即从指定路径、存储器读取ROM；如果路径是`nestest`，则载入 XamariNES 内置测试 ROM

## 端口定义

> 方块的各面输入会按或计算后执行

<ElectricElement imgAltPrefix="红白机模拟器" :connections="connections" imgSrc="/images/expand/GVNesEmulatorBlock.png"/>