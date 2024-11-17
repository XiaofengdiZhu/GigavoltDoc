<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "输出结果", "因为结果经常为 0，所以默认输出 0xFFFFFFFF V，出错时也输出此结果")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "槽位", "指定控制第 n+1 个槽位"),
        new IOPort(9, 16, "数量", "指定要被控制的物品数量"),
        new IOPort(17, 17, "是否判断特殊值", "详见`方块特殊值`"),
        new IOPort(18, 18, "是否全部数量", "为 1 时忽略`指定数量`，改为尽可能控制所有符合条件的物品"),
        new IOPort(19, 19, "是否控制玩家背包", "为 0 时控制该电路板**背面**的箱子等可以存储物品的方块  \n为 1 时改为控制生存模式玩家的背包"),
        new IOPort(20, 24, "玩家序号", "当控制生存模式玩家的背包时，指定要控制第几个玩家的背包"),
        new IOPort(25, 32, "新槽位", "下端同步操作为`移动指定槽位的物品到新指定槽位`时的参数")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "同步操作", "另见下表")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 10, "方块 ID", "如果该部分大于 0，将判断物品的方块 ID 是否与该部分相等"),
        new IOPort(11, 14, "空", "无作用"),
        new IOPort(15, 32, "方块特殊值", "如果`方块 ID`部分大于 0，且`是否判断特殊值`为 1，将判断物品的方块特殊值是否与该部分相等")
    ])
];
</script>

# 箱子控制器 <Badge text="v2.0"/>

## 概述

用于控制箱子、熔炉、发射器等可存储物品的方块中的物品，也可以控制生存模式玩家背包中的物品  
可以在其背后摆放延长杆或轴向一致的提取器来控制更远的箱子

## 端口定义

<ElectricElement imgAltPrefix="箱子控制器" :connections="connections" imgSrc="/images/expand/transportation/GVInventoryControllerBlock.webp"/>

### 下端同步操作

|      电压       | 操作和说明                                                                                                                                     |
|:-------------:|:------------------------------------------------------------------------------------------------------------------------------------------|
|  0 或<br/>未指定  | 下端输入 0 或以下未指定的电压时均输出 0xFFFFFFFF V<br/>该端输入变化时才会立即尝试执行控制，不会因其他端口输入电压改变而执行控制                                                                |
|       1       | 输出指定槽位完整物品 ID（含特殊值）                                                                                                                       |
|       2       | 输出指定槽位物品数量                                                                                                                                |
|       3       | 输出指定槽位物品容量                                                                                                                                |
|       4       | 输出指定槽位剩余容量                                                                                                                                |
|       5       | 输出指定方块 ID 的物品总数量                                                                                                                          |
|       6       | 输出存在指定方块ID的物品所在的第一个槽位的序号                                                                                                                  |
|       7       | 输出指定方块ID的物品分布在多少个槽位里                                                                                                                      |
|       8       | 输出还能存入多少个指定方块 ID 的物品（含方块特殊值，无法无视）                                                                                                         |
|       9       | 输出槽位总数                                                                                                                                    |
| 10<br/>(0xA)  | 输出已使用的槽位数量                                                                                                                                |
| 11<br/>(0xB)  | 输出未使用的槽位数量                                                                                                                                |
| 12<br/>(0xC)  | 输出第一个有物品的槽位序号                                                                                                                             |
| 13<br/>(0xD)  | 输出最后一个有物品的槽位序号                                                                                                                            |
| 14<br/>(0xE)  | 输出第一个没有物品的槽位序号                                                                                                                            |
| 15<br/>(0xF)  | 输出最后一个没有物品的槽位序号                                                                                                                           |
| 16<br/>(0x10) | 移动指定槽位的物品到新指定槽位，需指定要移动的数量，输出成功移动的数量<br/>如果新指定槽位有其他物品，会尝试移动到其他可用槽位                                                                         |
| 17<br/>(0x11) | 整理指定方块 ID 的物品到从指定槽位开始，需指定要整理的数量，输出成功整理的数量<br/>判断方块 ID 时会一并判断方块特殊值，无法无视<br/>如果整理的数量超出指定槽位容量，将占用它之后的槽位<br/>如果要占用的槽位存在其他物品，则会将它们移动到其他能移动到的位置 |
| 18<br/>(0x12) | 删除指定槽位物品，需指定要删除的数量，输出成功删除的数量                                                                                                              |
| 19<br/>(0x13) | 删除指定方块ID的物品，需指定要删除的数量，输出成功删除的数量                                                                                                           |
| 20<br/>(0x14) | 设置指定槽位方块的特殊值，需指定设置的数量，输出成功设置的数量<br/>如果设置的数量少于指定槽位当前物品数量，会尝试将原物品移动到其他可用槽位                                                                  |
| 32<br/>(0x20) | 整理排序，顺序为按数量从小到大，输出整理后的已使用槽位数量                                                                                                             |
| 33<br/>(0x21) | 整理排序，顺序为按数量从大到小，输出整理后的已使用槽位数量                                                                                                             |
| 34<br/>(0x22) | 整理排序，顺序为按物品方块 ID（含特殊值）从小到大，输出整理后的已使用槽位数量                                                                                                  |
| 35<br/>(0x23) | 整理排序，顺序为按物品方块 ID（含特殊值）从大到小，输出整理后的已使用槽位数量                                                                                                  |
| 48<br/>(0x30) | 尝试强制刷新合成台、熔炉的合成结果，输出当前合成结果数量                                                                                                              |