<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "输出数据/结果", ""),
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "右索引", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "同步操作，详见下表", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "左索引", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "输入数据", ""),
    ], false, true)
];
</script>

# 一维存储器 <Badge text="v1.0" type="info"/>

## 概述

和 [存储器](../../base/shift/memory_bank) 相似，但只能存储一行数据，但是有很多实用功能，无需初始化即可使用

保存到存档的形式是未经任何处理的二进制文件，可使用支持十六进制编辑的软件进行编辑  
导出的文件格式是`.GBLMB`，其本质是 [ZIP](https://support.pkware.com/pkzip/appnote) 压缩文件，解压后可使用支持十六进制编辑的软件进行编辑

> 另有 [易失版](volatile_memory_banks#易失性一维存储器)

## 端口定义

<ElectricElement imgAltPrefix="一维存储器" :connections="connections" imgSrc="/images/expand/memory_banks/GVListMemoryBankBlock.webp"/>

## 下端同步操作

|          电压           |    操作    | 说明                                                                                                                                                                                                 |
|:---------------------:|:--------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           无           |   异步读    | 下端无输入时，上端实时输出右索引位置的数据（超出范围时输出 0，下同）                                                                                                                                                                |
|      0 或<br/>未指定      |    无     | 下端输入 0 或以下未指定的电压时，均输出 0，且一旦下端接有元件或导线，该电路板将进入同步工作模式，该端输入变化时才会进行操作，输出不会随其他输入电压改变而立即发生改变                                                                                                              |
|           1           |    读取    | 读取右索引位置的数据输出到上端                                                                                                                                                                                    |
|           2           |    写入    | 将后端输入数据覆写到左右索引范围内（含两个索引位置，左索引为 0 时只覆写到右索引，下同）                                                                                                                                                      |
|           3           |    插入    | 将后端输入数据插入到左右索引范围内（在较小的索引位置插入较大索引减较小索引再加一的数量的后端输入数据）                                                                                                                                                |
|           4           |    剪切    | 读取右索引位置的数据输出到上端后删除                                                                                                                                                                                 |
|           5           |    删除    | 将左右索引范围内数据删除                                                                                                                                                                                       |
|           6           |    顺查    | 从左右索引中较小的索引开始，按顺序查找后端输入数据，最多查找到较大的索引，最后将找到的索引位置输出到上端（未找到则输出 0xFFFFFFFF；左右索引均为 0 时从头找到尾）                                                                                                            |
|           7           |    倒查    | 从左右索引中较大的索引开始，按倒序查找后端输入数据，最少查找到较小的索引，最后将找到的索引位置输出到上端（未找到则输出 0xFFFFFFFF；左右索引均为 0 时从尾找到头）                                                                                                            |
|           8           |    查删    | 将左右索引范围内等于后端输入数据的数据删除，上端输出删除的数据个数                                                                                                                                                                  |
|           9           |   查询数量   | 将左右索引范围内等于后端输入数据的数据数量输出到上端                                                                                                                                                                         |
|     10<br/>(0xA)      |   复制粘贴   | 将右索引的数据复制粘贴到左索引位置(右索引位置数据为 0 时将粘贴 0，下同)                                                                                                                                                            |
|     11<br/>(0xB)      |   复制插入   | 将右索引的数据复制插入到左索引位置                                                                                                                                                                                  |
|     12<br/>(0xC)      |    反转    | 将左右索引范围内数据顺序反转                                                                                                                                                                                     |
|     13<br/>(0xD)      |    升序    | 将左右索引范围内数据从小到大重新排列                                                                                                                                                                                 |
|     14<br/>(0xE)      |    降序    | 将左右索引范围内数据从大到小重新排列                                                                                                                                                                                 |
|     15<br/>(0xF)      |   数据数量   | 在上端输出当前存储的数据数量（提示：设置过大索引的数据会导致结果膨胀）                                                                                                                                                                |
| 16\~31<br/>(0x10\~1F) | 左批量二元计算器 | 对左右索引范围内所有数据分别进行二元数学运算，原本的数据作为运算的左值，后端输入数据作为运算的右值，下端输入从小到大对应的运算方式分别为加法、减法、乘法、除法、取余、等于、大于、大于等于、小于、小于等于、取大、取小、左移、右移、乘方、对数（左真右底）                                                                      |
| 32\~47<br/>(0x20\~2F) | 右批量二元计算器 | 和左批量计算器相似，只是原本的数据作为运算的右值，后端输入数据作为运算的左值                                                                                                                                                             |
| 48\~66<br/>(0x30\~42) | 批量一元计算器  | 对左右索引范围内所有数据分别进行一元数学运算，原本的数据作为运算的输入，下端从小到大对应的运算方式分别为正弦、余弦、正切、余切、正割、余割、反正弦、反余弦、反正切、双曲正弦、双曲余弦、双曲正切、角度转弧度、弧度转角度、原码正负转换、补码正负转换、取反、加一、减一<br/>输入和输出最高位为1时代表负数（原码模式），较高的第 17\~31 位为整数部分，较低的第 1\~16 位为小数部分 |
|    256<br/>(0x100)    |   设置宽    | 根据后端输入，设置被图片、地层显示器读取时显示的宽度，默认为 0                                                                                                                                                                   |
|    257<br/>(0x101)    |   设置高    | 根据后端输入，设置被图片、地层显示器读取时显示的高度，默认为 0                                                                                                                                                                   |
|    258<br/>(0x102)    |  设置初始偏移  | 根据后端输入，设置被图片、地层显示器读取时，忽略开头多少个数据，默认为 0                                                                                                                                                              |
|    272<br/>(0x110)    |   获取宽    | 获取设置的宽，输出到上端                                                                                                                                                                                       |
|    273<br/>(0x111)    |   获取高    | 获取设置的高，输出到上端                                                                                                                                                                                       |
|    274<br/>(0x112)    |  获取初始偏移  | 获取设置的初始偏移，输出到上端                                                                                                                                                                                    |