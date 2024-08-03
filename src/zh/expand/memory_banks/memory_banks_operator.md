---
outline: [ 2,3 ]
---

<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections1 = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "将结果输出到指定 ID 的存储器", ""),
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "指定右边存储器 ID", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "同步操作，详见下表", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "指定左边存储器 ID", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "同步操作的参数", ""),
    ], false, true)
];
let connections2 = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "将结果输出到指定 ID 的存储器（必须指定）", ""),
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "X 轴范围大小", "单位格，方向为西"),
        new IOPort(9, 16, "Y 轴范围大小", "单位格，方向为上"),
        new IOPort(17, 24, "Z 轴范围大小", "单位格，方向为北"),
        new IOPort(25, 25, "X 轴范围的符号", "为 1 时，X 轴范围的方向改为向东"),
        new IOPort(26, 26, "Y 轴范围的符号", "为 1 时，Y 轴范围的方向改为向下"),
        new IOPort(27, 27, "Z 轴范围的符号", "为 1 时，Z 轴范围的方向改为向南"),
        new IOPort(28, 32, "空白", "无作用")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "变为 256 V (0x100) 时，尝试初始化", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "指定作为初始化模板的存储器 ID", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "X 轴偏移大小", "单位格，方向为西  \n偏移是指起始位置相对于多存储器操作器所在位置的偏移"),
        new IOPort(9, 16, "Y 轴偏移大小", "单位格，方向为上"),
        new IOPort(17, 24, "Z 轴偏移大小", "单位格，方向为北"),
        new IOPort(25, 25, "X 轴偏移的符号", "为 1 时，X 轴偏移的方向改为向东"),
        new IOPort(26, 26, "Y 轴偏移的符号", "为 1 时，Y 轴偏移的方向改为向下"),
        new IOPort(27, 27, "Z 轴偏移的符号", "为 1 时，Z 轴偏移的方向改为向南"),
        new IOPort(28, 28, "是否不输出结果", "为 1 时不将结果输出到上端输入指定 ID 的存储器，为 0 时则输出<br/>无论是否输出结果，均要在上端指定一个有效存储器"),
        new IOPort(29, 29, "是否覆盖", "为 1 时将会覆盖已有数据的存储器，为 0 时不覆盖"),
        new IOPort(30, 32, "空白", "无作用")
    ])
];
</script>

# 多存储器操作器 <Badge text="v1.0" type="info"/>

## 概述

有两种用途，一种是对两个存储器进行合并、取交集等操作，下面称之为一般操作；另一种用途是批量初始化多个存储器

## 一般操作

左右两边各指定一个存储器 ID，按下端输入进行不同操作后，将结果输出到由上端输入指定 ID 的存储器

上左右都应该指定正确的存储器 ID，只有在下端为 1 时允许右端指定 ID 的存储器不存在，否则将不进行任何操作

而复制以外的操作，输出存储器的高度将被设置为 1，宽度被设置为数据总数量，因此推荐输出到可手动设置宽高的一维存储器

### 端口定义

<ElectricElement imgAltPrefix="多存储器操作器" :connections="connections1" imgSrc="/images/expand/memory_banks/GVMemoryBanksOperatorBlock.webp" :titleLevel="4" :serial="1"/>

### 下端同步操作

|     电压      |     操作      | 说明                                                                                                                  |
|:-----------:|:-----------:|:--------------------------------------------------------------------------------------------------------------------|
| 0 或<br/>未指定 |      无      | 当下端输入变化时才会进行操作，不会因其他端口输入电压改变而立即执行操作                                                                                 |
|      1      | 合并<br/>/复制  | 将左右两边存储器的所有数据直接合并，左边存储器的数据在前，右边存储器的数据在后<br/>如果右端指定ID的存储器不存在，而左边存在，则相当于复制左边数据<br/>复制时，需要确保左边存储器与输出存储器类型一致（是否是易失版不影响） |
|      2      |     插入      | 将右边存储器的所有数据插入左边存储器，可使用后端输入指定插入的位置（从 0 开始）<br/>如果指定位置大于左边存储器的数据数量，则会在中间补 0                                           |
|      3      |     覆盖      | 将右边存储器的所有数据覆盖到左边存储器，可使用后端输入指定覆盖开始的位置（从 0 开始）<br/>如果指定位置大于左边存储器的数据数量，则会在中间补 0                                        |
|      4      |     交集      | 将左边存储器的数据逐一与右边比对，如果右边也存在则保留，否则删除                                                                                    |
|      5      | 交集<br/>（去重） | 同上，但还会对结果进行去重                                                                                                       |
|      6      |     差集      | 将左边存储器的数据逐一与右边比对，如果右边存在则删除，否则保留                                                                                     |
|      7      | 差集<br/>（去重） | 同上，但还会对结果进行去重                                                                                                       |

> [!TIP] 📝 关于指定插入、覆盖开始的位置
> 例如要将数据插入到第 5、6 个数据之间，则后端应该输入 5；要插入到第 1 个数据之前，则后端应该输入 0  
> 要从第 5 个数据开始覆盖，则后端应该输入 4；要从第 1 个数据开始覆盖，则后端应该输入 0

## 批量初始化

左边指定作为初始化模板的存储器的 ID，上端指定用于储存初始化结果的存储器的 ID，后端输入起始偏移位置和其他参数，右端输入范围，下端变为 256 V (0x100) 时，范围内和模板相同类型的存储器会被初始化为与模板一致

### 端口定义

<ElectricElement imgAltPrefix="多存储器操作器" :connections="connections2" imgSrc="/images/expand/memory_banks/GVMemoryBanksOperatorBlock.webp" :titleLevel="4" :serial="2"/>