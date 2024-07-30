<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue"; 
import {onMounted} from "vue"; 

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "输出", "根据左端和右端的电压，将下端输入和其他跳线的输入按或计算后，输出相应结果"),
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "是否读取其他跳线", "大于 7 V 时，将会从标签相同的跳线读取其下端输入，但如果那个标签的左端小于 7 V，将无法读取")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "下端输入", "/")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "是否允许下端输入", "大于 7 V时，将允许下端输入，而且下端输入将能被标签相同的其他跳线读取")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "标签", "设置该跳线的标签，标签相同的跳线之间会有绿色指示线，代表它们互相连接"),
    ])
];

const updateLine = () => {
    let jumpWires = document.getElementsByClassName("no_hover");
    if(jumpWires.length === 2){
        let jumpWire1 = jumpWires[0];
        let jumpWire2 = jumpWires[1];
        let rect1 = jumpWire1.getBoundingClientRect();
        let rect2 = jumpWire2.getBoundingClientRect();
        let line = document.getElementById("line");
        line.setAttribute("x1", rect1.left + rect1.width / 2 + "px");
        line.setAttribute("y1", rect1.top + rect1.height / 2 + "px");
        line.setAttribute("x2", rect2.left + rect2.width / 2 + "px");
        line.setAttribute("y2", rect2.top + rect2.height / 2 + "px");
    }
};
onMounted(() => {
    globalThis.addEventListener("resize", updateLine);
    globalThis.addEventListener("scroll", updateLine);
});
</script>

# 跳线 <Badge text="v1.0" type="info"/>

## 概述

标签相同的跳线可以互相读取其下端输入，实现无线传输信号的效果，传输延迟为 1 个电路周期（0.01 秒）

标签相同的跳线之间会有绿色的指示线，代表它们互相连接

## 端口定义

<ElectricElement imgAltPrefix="跳线" :connections="connections" imgSrc="/images/expand/wires/GVJumpWireBlock.webp" gateMask="true"/>

<img class="no_hover" alt="另一个跳线" src="/images/expand/wires/GVJumpWireBlock.webp" style="width: calc(20% - 16px); min-width: 100px; margin-top: 16px; image-rendering: pixelated; mask-image: linear-gradient(2.3086rad, transparent 0% 17.5%, black 17.5% 100%), linear-gradient(-2.3086rad, transparent 0% 17.5%, black 17.5% 100%); mask-composite: intersect;">

<svg id="lineContainer" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1">
    <line id="line" x1="0" y1="0" x2="100" y2="100" stroke="lime" stroke-width="1"/>
</svg>