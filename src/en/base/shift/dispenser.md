<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.All, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "Speed", "In blocks/second. The max speed is 255 blocks/second."),
        new IOPort(9, 16, "Angle 1", "* If the dispenser faces upwards or downwards, Angle 1 is the deviation angle toward the north.\n* Otherwise, Angle 1 is the deviation angle toward right.\n* If the value is greater than 90, the value will be reduced to 90.\n* If the highest bit is 1, the value will be negative."),
        new IOPort(17, 24, "Angle 2", "* If the dispenser faces upwards or downwards, Angle 2 is the deviation angle toward the west.\n* Otherwise, Angle 1 is the deviation angle toward up.\n* Others are defined the same as Angle 1."),
        new IOPort(25, 25, "Ignore Gravity", "If this is 1, the projectile will ignore gravity."),
        new IOPort(26, 26, "Ignore Resistance", "If this is 1, the projectile will ignore resistance like air resistance and etc."),
        new IOPort(27, 27, "Safe Mode", "If this is 1, the projectile will be in safe mode.  \nIn safe mode, the projectile will not trigger OnFiredAsProjectile and OnHitAsProjectile in SubsystemBlockBehavior, but still will trigger OnHitByProjectile."),
        new IOPort(28, 28, "Placing Mode", "If this is 1, the projectile will be in placing mode.  \nIn placing mode, when projectile hits a block that is not air or fluid, the projectile will place itself in the terrain chunk (If it is allowed)."),
        new IOPort(29, 29, "Whether Specify Slot", "If this is 1, the dispenser only shoots the blocks at the specified slot."),
        new IOPort(30, 32, "Specify Slot", "If the 29th bit is 1, the dispenser only shoots the blocks at this+1 slot.")
    ])
];
</script>

# Dispenser <Badge text="v1.0" type="info"/>

## Overview

Stores items in a similar way to a chest,but allows shooting or dispensing them through the hole when the input voltage changes. You can control the speed, angle, etc. of the projectile through the input voltage. By default, it is in shooting mode.

## Ports Definition

> The final input is generated by performing a bitwise OR operation on the inputs from all sides.

<ElectricElement imgAltPrefix="GV Dispenser" :connections="connections" imgSrc="/images/base/shift/GVDispenser.webp"/>

> [!TIP] 💡 Tip
> In addition,`Gigavolt.Expand mod`has [Guided Dispenser]().