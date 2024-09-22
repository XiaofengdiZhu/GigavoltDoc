<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "输入参数", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "输入参数", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 16, "同步操作，详见下表", ""),
        new IOPort(1, 16, "指定玩家序号", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "输入参数", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 1, "阻断右端输入", ""),
        new IOPort(2, 2, "阻断上端输入", ""),
        new IOPort(3, 3, "阻断左端输入", "")
    ], false, true)
];
</script>

# 玩家控制器 <Badge text="v2.0"/>

## 概述

用于控制玩家的各种信息

## 端口定义

> 如果参数输入端没有连接导线或元件，或者被阻断，将不改变对应的信息

<ElectricElement imgAltPrefix="玩家控制器" :connections="connections" imgSrc="/images/expand/others/GVPlayerControllerBlock.webp"/>

## 下端同步操作

> [!TIP] 📝 说明
> 对于为小数的输入，最高位为 1 时代表负数（原码模式），较高的第 17~31 位为整数部分，较低的第 1~16 位为小数部分

|     电压      |   信息   | 说明                                              |   右端输入   |    上端输入    |   左端输入    |
|:-----------:|:------:|-------------------------------------------------|:--------:|:----------:|:---------:|
| 0 或<br/>未指定 |   无    | 当下端或后端输入变化时才会进行操作                               |    0     |     0      |     0     |
|      1      |  身体位置  | 均为小数                                            |    X     |     Y      |     Z     |
|      2      |  身体方向  | 均为小数，角度制<br/>只有翻滚角生效可能是因为游戏会自动将身体正过来            | 偏航角（Yaw） | 俯仰角（Pitch） | 翻滚角（Roll） |
|      3      |  身体速度  | 均为小数                                            |    X     |     Y      |     Z     |
|      5      | 眼睛相对方向 | 相对身体的方向，均为小数，角度制<br/>只有俯仰角生效可能是因为游戏会自动将偏航角固定到 0 | 偏航角（Yaw） | 俯仰角（Pitch） |     /     |
|      8      | 出生点位置  | 均为小数                                            |    X     |     Y      |     Z     |
|     16      |  属性1   | 均为小数                                            |   生命值    |    耐力值     |    疲倦度    |
|     17      |  属性2   | 均为小数                                            |   饥饿度    |     体温     |    湿度     |
|     18      |  属性3   | 等级为小数，其余为整数                                     |    等级    |     /      | 当前手持物品 ID |
|     19      |  属性4   | 均为小数                                            |  剩余感冒时间  |   剩余疾病时间   |  剩余燃烧时间   |