<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Output Result", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Output Result", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 16, "Synchronous Operations, details are in the table below.", ""),
        new IOPort(1, 16, "Player Index", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Output Result", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "The ID of a memory bank for storing captured image.", ""),
    ], false, true)
];
</script>

# Player Monitor <Badge text="v2.0"/>

## Overview

You can get various information about a player by using this element.

## Ports Definition

<ElectricElement imgAltPrefix="Player Monitor" :connections="connections" imgSrc="/images/expand/sensors/GVPlayerMonitorBlock.webp"/>

## Synchronous Operations

> [!TIP] 📝 Note
> If an output is a fraction, the highest(leftmost) bit of the voltages represents the sign, the radix point is between the 16th and 17th bit.

|     Voltage     |         Information         | Description                                                                                                                                                                                                    |       Right Output        |           Top Output           |          Left Output           |
|:---------------:|:---------------------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------:|:------------------------------:|:------------------------------:|
| 0 or<br/>Others |            None             | Only if the voltage of the bottom port changes, the information will be updated.                                                                                                                               |             0             |               0                |               0                |
|        1        |        Body Position        | Outputs are fractions.                                                                                                                                                                                         |             X             |               Y                |               Z                |
|        2        |        Body Rotation        | Outputs are fractions in degrees.                                                                                                                                                                              |            Yaw            |             Pitch              |              Roll              |
|        3        |        Body Velocity        | Outputs are fractions.                                                                                                                                                                                         |             X             |               Y                |               Z                |
|        4        |        Eye Position         | Outputs are fractions.                                                                                                                                                                                         |             X             |               Y                |               Z                |
|        5        |    Relative Eye Rotation    | Relative to the body. Outputs are fractions in degrees.                                                                                                                                                        |            Yaw            |             Pitch              |               /                |
|        6        |    Absolute Eye Rotation    | Relative to the world. Outputs are fractions in degrees.                                                                                                                                                       |            Yaw            |             Pitch              |              Roll              |
|        7        | Properties of Body Position | Outputs are integers.                                                                                                                                                                                          |        Temperature        |            Humidity            |       Light (Brightness)       |
|        8        |       Spawn Position        | Outputs are fractions.                                                                                                                                                                                         |             X             |               Y                |               Z                |
|       16        |         Attribute 1         | Outputs are fractions.                                                                                                                                                                                         |          Health           |            Stamina             |             Sleep              |
|       17        |         Attribute 2         | Outputs are fractions.                                                                                                                                                                                         |           Food            |           Body Heat            |            Wetness             |
|       18        |         Attribute 3         | Level is a fraction, others are integers.                                                                                                                                                                      |           Level           |   Experiences For Next Level   | The Value of the Block in Hand |
|       19        |         Attribute 4         | Outputs are fractions.                                                                                                                                                                                         | Time Before Flu Recovered | Time Before Sickness Recovered | Time Before Fire Extinguished  |
|       32        |           State 1           | If the result is true, the output will be 0xFFFFFFFF V                                                                                                                                                         |          Walking          |             Flying             |             Riding             |
|       33        |           State 2           | If the result is true, the output will be 0xFFFFFFFF V                                                                                                                                                         |         Sneaking          |            Falling             |               /                |
|       33        |           State 3           | If the player is swimming, the right output will be 0xFFFFFFFF V.<br/>Under water depth is a fraction.                                                                                                         |         Swimming          |       Under Water Depth        |               /                |
|       48        |           Capture           | Capture the player's screen to the memory bank specified by the back input. Outputs are 0 V.<br/>If the game has only one player and the resolution is high, the image will contain UI, otherwise it will not. |             /             |               /                |               /                |

> [!WARNING] ⚠️ Warning
> Capture is resource-intensive, please do that only when necessary.