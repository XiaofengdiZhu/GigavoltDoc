<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";
import UintColorConverter from "/components/UintColorConverter.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "Scale Size", "For each 1 increase of this, the scale size of floating text increases by 1/8 times, with a maximum of 8191.875 times."),
        new IOPort(17, 32, "Y Offset", "For each 1 increase of this, the position of floating text moves up by 1/8 block. If the highest bit of this is 1, moving down instead.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "X Offset", "For each 1 increase of this, the position of floating text moves north by 1/8 block. If the highest bit of this is 1, moving south instead."),
        new IOPort(17, 32, "Z Offset", "For each 1 increase of this, the position of floating text moves east by 1/8 block. If the highest bit of this is 1, moving west instead.")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "Yaw", "Set the yaw angle of the floating text, in degree."),
        new IOPort(9, 16, "Pitch", "Set the pitch angle of the floating text, in degree."),
        new IOPort(17, 24, "Roll", "Set the roll angle of the floating text, in degree."),
        new IOPort(25, 25, "Yaw Sign", "If this is 1, the yaw angle will be negative."),
        new IOPort(26, 26, "Pitch Sign", "If this is 1, the pitch angle will be negative."),
        new IOPort(27, 27, "Roll Sign", "If this is 1, the roll angle will be negative."),
        new IOPort(28, 28, "Popup Message", "When it changes from 0 to 1, there will be a popup message on screen."),
        new IOPort(29, 32, "Brightness", "Set the brightness of the floating text. The higher the voltage, the brighter the floating text.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "Color", "Set the color of the floating text, in ABGR color mode.")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "Memory Bank ID", "When this changes, the sign will read text in UTF8 codec from the memory bank whose ID equals this. If the read is succeeded, the text in the sign will be replaced by the read result, then the text on the sign and the text floating in the air both are replaced.")
    ])
];
</script>

# Sign <Badge text="v1.0" type="info"/>

## Overview

Can not only display text on it and popup message, but can also display text floating in air. The disadvantage is that it can only record one line of text.

## Ports Definition

> Besides the back port and the 28th bit at bottom port, all operations are for the floating text

<ElectricElement imgAltPrefix="GV Sign" :connections="connections" imgSrc="/images/base/shift/GVSignBlock.webp"/>

> [!INFO] 💡 Tip
> The offset ranges of each direction are all ±4095.875.

> [!TIP] 📝 ABGR Color Mode
> From high to low bits，every 8 bits represents the color's <span style="opacity:0.6;">Alpha chanel</span>、<span style="color:blue;">Blue chanel</span>、<span style="color:green;">Green chanel</span>、<span style="color:red;">Red chanel</span>. You can use the tool below to convert.

::: details 🛠️ Voltage Color Converter

<UintColorConverter />
:::