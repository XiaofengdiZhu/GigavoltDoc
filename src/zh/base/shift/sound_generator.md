<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "播放开始位置", "设置从第 n 个 16 位数据开始播放，仅在读取音频数据时发生作用  \n例如左端设为 44100 V，此端设为 88200 V，那么将从 88200/2/44100 = 1 秒处开始播放"),
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "播放数量", "设置播放 n 个 16 位数据，仅在读取音频数据时发生作用")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "启动/响度", "输入电压从 0V 上升后立即开始播放，输入 0V 停止，再上升后从头播放；电压越高，声音响度越大  \n0V 时如果其他四端输入发生变化，将尝试重新从指定存储器读取音频数据；而非 0 V 时其他四端输入发生变化，将不发生任何作用")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "采样率", "设置音频采样率，单位为 Hz，仅在读取音频数据时发生作用  \n范围限制：8000 \~ 48000，对应十六进制：1F40 \~ BB80")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "存储器 ID", "从指定 ID 的存储器读取音频数据，仅在读取音频数据时发生作用"),
    ])
];
</script>

# 声音发生器 <Badge text="v1.0" type="info"/>

## 概述

可以从存储器加载 PCM 编码的音频数据并播放的元件

## 端口定义

<ElectricElement imgAltPrefix="十亿伏特声音发生器" :connections="connections" imgSrc="/images/base/shift/GVSoundGeneratorBlock.webp"/>

## 音频转换

要使用声音发生器，首先需要使用 [ffmpeg](https://ffmpeg.org/) 或 [格式工厂](http://www.pcgeshi.com/index.html) 等软件将音频文件转换为满足以下条件的文件：

* 文件格式：WAV
* 编码：PCM（如果没有该选项，一般默认就是PCM）
* 声道数：2
* 采样率：8000 \~ 48000 Hz
* 采样深度：16位

再使用存储器的导入功能将该文件导入
> [!TIP] 💡 进入存档时报错
> 进入存档时声音发生器会可能报错，这是因为其他端口的元件还未初始化，导致声音发生器收到 0V 的输入，或者是因为存储器还未初始化，导致读取存储器失败  
> 正确的解决方法是退出存档前，将后端输入电压置0V，在需要播放时再重新设置