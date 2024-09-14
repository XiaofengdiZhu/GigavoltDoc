<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "输出结果", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "输出结果", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 16, "同步操作，详见下表", ""),
        new IOPort(1, 16, "指定玩家序号", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "输出结果", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "将捕获的图像输出到指定 ID 的存储器", ""),
    ], false, true)
];
</script>

# 玩家监视器 <Badge text="v2.0"/>

## 概述

用于获取玩家的各种信息

## 端口定义

<ElectricElement imgAltPrefix="玩家监视器" :connections="connections" imgSrc="/images/expand/sensors/GVPlayerMonitorBlock.webp"/>

## 下端同步操作

> [!TIP] 📝 说明
> 对于为小数的输出，最高位为1时代表负数（原码模式），较高的第 17~31 位为整数部分，较低的第 1~16 位为小数部分

|     电压      |   信息   | 说明                                                                        |   右端输出   |    上端输出    |   左端输出    |
|:-----------:|:------:|---------------------------------------------------------------------------|:--------:|:----------:|:---------:|
| 0 或<br/>未指定 |   无    | 当下端或后端输入变化时才会刷新信息                                                         |    0     |     0      |     0     |
|      1      |  身体位置  | 均为小数                                                                      |    X     |     Y      |     Z     |
|      2      |  身体方向  | 均为小数，角度制                                                                  | 偏航角（Yaw） | 俯仰角（Pitch） | 翻滚角（Roll） |
|      3      |  身体速度  | 均为小数                                                                      |    X     |     Y      |     Z     |
|      4      |  眼睛位置  | 均为小数                                                                      |    X     |     Y      |     Z     |
|      5      | 眼睛相对方向 | 相对身体的方向，均为小数，角度制                                                          | 偏航角（Yaw） | 俯仰角（Pitch） |     /     |
|      6      | 眼睛绝对方向 | 相对世界的方向，均为小数，角度制                                                          | 偏航角（Yaw） | 俯仰角（Pitch） | 翻滚角（Roll） |
|      7      | 所处位置信息 | 均为整数                                                                      |    温度    |     湿度     |    亮度     |
|      8      | 出生点位置  | 均为小数                                                                      |    X     |     Y      |     Z     |
|     16      |  状态 1  | 均为小数                                                                      |   生命值    |    耐力值     |    疲倦度    |
|     17      |  状态 2  | 均为小数                                                                      |   饥饿度    |     体温     |    湿度     |
|     18      |  状态 3  | 等级为小数，其余为整数                                                               |    等级    |  升级还需经验球数  | 当前手持物品ID  |
|     19      |  状态 4  | 均为小数                                                                      |  剩余感冒时间  |   剩余疾病时间   |  剩余燃烧时间   |
|     32      | 是否在 1  | 如是则输出 0xFFFFFFFF V                                                        |    步行    |     飞行     |    骑行     |
|     33      | 是否在 2  | 如是则输出 0xFFFFFFFF V                                                        |    蹲下    |     掉落     |     /     |
|     33      | 是否在 3  | 在游泳则输出 0xFFFFFFFF V，浸水深度为小数                                               |    游泳    |    浸水深度    |     /     |
|     48      |  捕获图像  | 将玩家看到的图像输出到由后端输入电压指定 ID 的存储器，无输出电压<br/>如果是单人模式且游戏设置中的分辨率为高，图像会包含 UI，否则不包含 |    /     |     /      |     /     |

> [!WARNING] ⚠ 注意
> 捕获玩家看到的图像非常消耗性能，请尽量不要不停捕获