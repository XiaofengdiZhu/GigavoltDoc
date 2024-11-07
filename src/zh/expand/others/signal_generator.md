<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import SignalGeneratorElement from "../../../components/ElectricElement/SignalGeneratorElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.UpTop, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "波值", "输出波的当前数值（仅整数部分）")
    ]),
    new ElectricConnection(ElectricConnectorDirection.UpRight, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 4, "波类型", "这四位二进制为 0000 时按正弦波计算，为 0001 时按三角波计算，为 0010 时按锯齿波计算，为 0011 时按方波计算，为其他时按正弦波计算"),
        new IOPort(5, 6, "波间隔行为", "两个波周期之间的间隔期间，这两位二进制为 00 或 11 时输出 0，为 01 时保持波周期结束时的输出，为 10 时按`波垂直偏移`的值输出"),
        new IOPort(7, 7, "随机波振幅", "为 1 时将在每次时钟重置、溢出时设置一个随机的波振幅，该随机值不会超过设置的波振幅"),
        new IOPort(8, 8, "波垂直偏移的符号", "为 1 时给`波垂直偏移`加上负号，否则保持默认的正号"),
        new IOPort(9, 16, "空白", "无作用"),
        new IOPort(17, 32, "波间隔", "设置两个波周期之间加入多少个时钟的间隔，间隔期间的电压可通过波间隔行为调整；调整后时钟将重置"),
    ]),
    new ElectricConnection(ElectricConnectorDirection.UpLeft, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "波垂直偏移", "调整波值输出，默认增加，如果`波垂直偏移的符号`为 1 则减少")
    ]),
    new ElectricConnection(ElectricConnectorDirection.UpIn, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "当前时钟", "输出当前的时钟位置（时钟的范围为 0 \~ 波周期+波间隔）")
    ]),
    new ElectricConnection(ElectricConnectorDirection.DownRight, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "波周期", "设置波的周期；调整后时钟将重置"),
        new IOPort(17, 32, "波水平偏移", "计算波值前调整时钟，最高位为 0 时代表加上，1 代表减去，之后 15 位为要加上/减去的数值（相当于调整相位）")
    ]),
    new ElectricConnection(ElectricConnectorDirection.DownLeft, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 16, "波振幅", "设置波的振幅")
    ]),
    new ElectricConnection(ElectricConnectorDirection.DownBottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "调整时钟", "接上此端激活同步模式，否则为异步模式；<br/>最高位为 0 时代表加上，1 代表减去，之后 31 位为要加上或减去的数值")
    ]),
    new ElectricConnection(ElectricConnectorDirection.DownIn, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "<div style=\"text-wrap: nowrap;\">异步模式<br/>控制时钟</div>", "为 0 时重置并暂停时钟，小于等于 7 时暂停时钟，大于 7 时启动并保持运行"),
        new IOPort(1, 32, "<div style=\"text-wrap: nowrap;\">同步模式<br/>重置时钟</div>", "从 0 上升时重置时钟")
    ])
];
</script>

# 信号发生器 <Badge text="v2.0"/>

用于产生正弦波、三角波、锯齿波、方波，占用两格，如果空间不足将无法放置或旋转。分为两种模式：

* **异步模式**：下下端不接任何导线和元件即启用异步模式，此模式下可通过下后端来控制时钟启动、暂停、重置，启动后时钟将不断自加1
* **同步模式**：给接下下端接上导线或元件即启用同步模式，下下端电压每次变化都会给时钟增、减相应数值，可通过下后端来重置时钟

无论是同步模式还是异步模式，都需要时钟发生变化才会计算新的波值

## 端口定义

<SignalGeneratorElement imgAltPrefix="信号发生器" :connections="connections" imgSrc="/images/expand/others/GVSignalGeneratorBlock.webp"/>