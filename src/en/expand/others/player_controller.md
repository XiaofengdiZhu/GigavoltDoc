<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Input Parameter", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Input Parameter", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 16, "Synchronous Operations, details are in the table below.", ""),
        new IOPort(1, 16, "Player Index", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Input Parameter", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 1, "Intercept Right Input", ""),
        new IOPort(2, 2, "Intercept Top Input", ""),
        new IOPort(3, 3, "Intercept Left Input", "")
    ], false, true)
];
</script>

# Player Controller <Badge text="v2.0"/>

## Overview

For controlling various information of a player.

## Ports Definition

> If a parameter input port is not connected to a wire or element, or being intercepted, the corresponding information will not be changed.

<ElectricElement imgAltPrefix="Player Controller" :connections="connections" imgSrc="/images/expand/others/GVPlayerControllerBlock.webp"/>

## Synchronous Operations

> [!TIP] 📝 Note
> If an input is a fraction, the highest(leftmost) bit of the voltages represents the sign, the radix point is between the 16th and 17th bit.

|     Voltage     |      Information      | Description                                                                                                                                  |        Right Input        |           Top Input            |           Left Input           |
|:---------------:|:---------------------:|----------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------:|:------------------------------:|:------------------------------:|
| 0 or<br/>Others |         None          | Only if the voltage of the bottom port changes, the information will be changed.                                                             |             0             |               0                |               0                |
|        1        |     Body Position     | Inputs are fractions.                                                                                                                        |             X             |               Y                |               Z                |
|        2        |     Body Rotation     | Outputs are fractions in degrees.<br/>Only the roll is effective because the game will automatically straighten the body.                    |            Yaw            |             Pitch              |              Roll              |
|        3        |     Body Velocity     | Inputs are fractions.                                                                                                                        |             X             |               Y                |               Z                |
|        5        | Relative Eye Rotation | Relative to the body. Outputs are fractions in degrees.<br/>Only the pitch is effective because the game will automatically fix the yaw to 0 |            Yaw            |             Pitch              |               /                |
|        8        |    Spawn Position     | Inputs are fractions.                                                                                                                        |             X             |               Y                |               Z                |
|       16        |      Attribute 1      | Inputs are fractions.                                                                                                                        |          Health           |            Stamina             |             Sleep              |
|       17        |      Attribute 2      | Inputs are fractions.                                                                                                                        |           Food            |           Body Heat            |            Wetness             |
|       18        |      Attribute 3      | Level is a fraction, others are integers.                                                                                                    |           Level           |               /                | The Value of the Block in Hand |
|       19        |      Attribute 4      | Inputs are fractions.                                                                                                                        | Time Before Flu Recovered | Time Before Sickness Recovered | Time Before Fire Extinguished  |