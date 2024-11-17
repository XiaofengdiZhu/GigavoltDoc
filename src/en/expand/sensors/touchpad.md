<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Duration", "The duration of touching or sighting, in milliseconds.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Horizontal Ordinate", "The origin is the top left corner, and the range is 0 \~ 0xFFFFFFFF.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Vertical Ordinate", "The origin is the top left corner, and the range is 0 \~ 0xFFFFFFFF.")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 1, "Touching / Sighting Mode", "When this is 0, this element will take effect only when a player touches on it, otherwise when a player looks on it."),
        new IOPort(2, 2, "Keep Last Output", "If this is 1, when you stop touching or looking on this element, it will keep the last output."),
        new IOPort(3, 3, "Touching Start\n/ Latest Ordinate", "If player is using mouse to control and the mode of this element is touching mode, when this is 1, the element will output the ordinate of the start touching position, and the duration will always be 0. Otherwise the element will output the latest ordinate of the touching position.")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Memory Bank ID", "Set the ID of a memory bank that you want to read image from, then the image will be displayed on the surface of this element like [Simple Image Display](../displays/image_display_led.html#simple-type) ."),
    ])
];
</script>

# Touchpad <Badge text="v2.1"/>

## Overview

Returns the position and duration of any player touch or watching on it. More details is in the document.

## Ports Definition

<ElectricElement imgAltPrefix="Touchpad" :connections="connections" imgSrc="/images/expand/sensors/GVTouchpadBlock.webp"/>