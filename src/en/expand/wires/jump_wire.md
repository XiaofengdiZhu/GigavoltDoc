<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";
import {onMounted} from "vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Output", "According to left and right input, the Jump Wire performs a bitwise OR operation between the bottom input of itself and the input of other Jump Wires, then output the result."),
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Whether Read Other Jump Wires", "If this input is greater than 7 V, the Jump Wire will read the bottom input of other Jump Wire, whose tag is same and left input is greater than 7 V.")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Bottom Input", "/")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Whether Allow Bottom Input", "If this input is greater than 7 V, the Jump Wire will allow bottom input, and the bottom input can be read by other Jump Wires with the same tag.")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Tag", "Set the tag of the Jump Wire. There are green lines between the jump wires with the same tag, indicating that they are connected to each other."),
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

# Jump Wire <Badge text="v1.0" type="info"/>

## Overview

The Jump Wires with the same tag can read the bottom inputs of each other, which can be used to transmit signals wirelessly. The transmission delay is 1 electric cycle (0.01 seconds).

There are green lines between the jump wires with the same tag, indicating that they are connected to each other.

## Port Definition

<ElectricElement imgAltPrefix="Jump Wire" :connections="connections" imgSrc="/images/expand/wires/GVJumpWireBlock.webp" gateMask="true"/>

<img class="no_hover" alt="Another Jump Wire" src="/images/expand/wires/GVJumpWireBlock.webp" style="width: calc(20% - 16px); min-width: 100px; margin-top: 16px; image-rendering: pixelated; mask-image: linear-gradient(2.3086rad, transparent 0% 17.5%, black 17.5% 100%), linear-gradient(-2.3086rad, transparent 0% 17.5%, black 17.5% 100%); mask-composite: intersect;">

<svg id="lineContainer" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1">
    <line id="line" x1="0" y1="0" x2="100" y2="100" stroke="lime" stroke-width="1"/>
</svg>