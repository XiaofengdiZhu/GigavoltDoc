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
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "W 坐标", ""),
        new IOPort(17, 32, "Z 坐标", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "同步操作，详见下表", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "X 坐标", ""),
        new IOPort(17, 32, "Y 坐标", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "输入数据", ""),
    ], false, true)
];
</script>

# 四维存储器

## 概述

和 [存储器](../../base/shift/memory_bank) 相似，但从二维扩展到了四维。初始化时，必须先指定四个维度的范围

保存到存档的形式是一张张无损 [WebP](https://developers.google.com/speed/webp) 图片文件，每张图片存储一组三维数据，X轴为图片宽度，Y轴为图片高度，Z轴为图片时间轴
导出的文件格式是`.GBFDMB`，其本质是 [ZIP](https://support.pkware.com/pkzip/appnote) 压缩文件，在该文件的 zip 注释中存储了每个维度的范围等信息，解压后是一张张 [WebP](https://developers.google.com/speed/webp) 图片文件

> [!TIP] 💡 提示
> 请尽量避免使用 W 和 Z 坐标，初始化时也尽可能设置较小的值，因为多维度的数据在保存等操作下性能较差，可能造成卡顿

## 端口定义

<ElectricElement imgAltPrefix="四维存储器" :connections="connections" imgSrc="/images/expand/memory_banks/GVFourDimensionalMemoryBankBlock.webp"/>

## 下端同步操作

| 电压              | 操作       | 说明                                                                                    |
|-----------------|----------|:--------------------------------------------------------------------------------------|
| 无               | 异步读      | 下端无输入时，上端实时输出指定位置的数据（超出范围时输出 0，下同）                                                    |
| 0 或<br/>未指定     | 无        | 下端输入 0 或以下未指定的电压时，均输出 0，且一旦下端接有元件或导线，该电路板将进入同步工作模式，该端输入变化时才会进行操作，输出不会随其他输入电压改变而立即发生改变 |
| 1               | 读取       | 读取指定位置的数据输出到上端                                                                        |
| 2               | 写入       | 将后端输入数据覆写到指定位置                                                                        |
| 256<br/>(0x100) | 设置宽      | 根据后端输入，设置被图片、地层显示器读取时显示的宽度，默认为 0                                                      |
| 257<br/>(0x101) | 设置高      | 根据后端输入，设置被图片、地层显示器读取时显示的高度，默认为 0                                                      |
| 258<br/>(0x102) | 设置 X 轴偏移 | 根据后端输入，设置被图片、地层显示器读取时，忽略X坐标小于该偏移的数据，默认为 0                                             |
| 259<br/>(0x103) | 设置 Y 轴偏移 | 根据后端输入，设置被图片、地层显示器读取时，忽略Y坐标小于该偏移的数据，默认为 0                                             |
| 260<br/>(0x104) | 设置 Z 轴偏移 | 根据后端输入，设置被图片、地层显示器读取时，忽略Z坐标小于该偏移的数据，默认为 0                                             |
| 26<br/>(0x105)  | 设置 W 轴偏移 | 根据后端输入，设置被图片、地层显示器读取时，忽略W坐标小于该偏移的数据，默认为 0                                             |
| 272<br/>(0x110) | 获取宽      | 获取设置的宽，输出到上端                                                                          |
| 273<br/>(0x111) | 获取高      | 获取设置的高，输出到上端                                                                          |
| 274<br/>(0x112) | 获取 X 轴偏移 | 获取设置的 X 轴偏移，输出到上端                                                                     |
| 275<br/>(0x113) | 获取 Y 轴偏移 | 获取设置的 Y 轴偏移，输出到上端                                                                     |
| 276<br/>(0x114) | 获取 Z 轴偏移 | 获取设置的 Z 轴偏移，输出到上端                                                                     |
| 277<br/>(0x115) | 获取 W 轴偏移 | 获取设置的 W 轴偏移，输出到上端                                                                     |