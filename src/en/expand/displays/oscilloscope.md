<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Display <span style='color: lime; background-color: var(--grayA10);'>Green</span> Wave", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Display <span style='color: cyan; background-color: var(--grayA10);'>Cyan</span> Wave", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Display <span style='color: red; background-color: var(--grayA6);'>Red</span> Wave", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Display <span style='color: yellow; background-color: var(--grayA8);'>Yellow</span> Wave", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Clock", "When this port is not connected, any input change at the front ports will take effect on the display.  \nWhen this port is connected, only if the voltage of this port changes from 0 to not 0, this element will accept new changes from the front ports.")
    ])
];
</script>

# Oscilloscope <Badge text="v2.0"/>

## Overview

Displays the signals received from the front ports like an oscilloscope. You can manually adjust the upper and lower limits (automatically adjusted by default), the number of records, and whether bloom. Clicking anywhere blank will hide these buttons.

<img alt="The First Screenshot of Oscilloscope" src="/images/expand/leds/oscilloscope_screenshot_1.webp" class="center_image">

And you can click the edit button to enter fullscreen mode. In this screen, the top bar displays the voltage of the front ports, and the rightmost buttons are for debugging operations, which can refer to [here](../../base/new/debug#floating-step-debugging-widget)

<img alt="The Second Screenshot of Oscilloscope" src="/images/expand/leds/oscilloscope_screenshot_2_zh.webp" class="center_image">

## Ports Definition

<ElectricElement imgAltPrefix="Oscilloscope" :connections="connections" imgSrc="/images/expand/leds/GVOscilloscopeBlock.webp"/>