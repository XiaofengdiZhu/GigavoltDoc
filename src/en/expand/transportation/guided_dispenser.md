<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.All, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "X Offset", "For each 1 increase of this, the position of the destination moves west by 1 block."),
        new IOPort(9, 16, "Y Offset", "For each 1 increase of this, the position of the destination moves up by 1 block."),
        new IOPort(9, 16, "Z Offset", "For each 1 increase of this, the position of the destination moves north by 1 block."),
        new IOPort(25, 25, "X Offset Sign", "If this is 1, the destination moves east but not west."),
        new IOPort(26, 26, "Y Offset Sign", "If this is 1, the destination moves down but not up."),
        new IOPort(27, 27, "Z Offset Sign", "If this is 1, the destination moves south but not north."),
        new IOPort(28, 28, "Placing & Safe Mode", "If this is 1, the projectile will be in placing and safe mode.  \nIn placing mode, when projectile hits a block that is not air or fluid, the projectile will place itself in the terrain chunk (If it is allowed).  \nIn safe mode, the projectile will not trigger OnFiredAsProjectile and OnHitAsProjectile in SubsystemBlockBehavior, but still will trigger OnHitByProjectile."),
        new IOPort(29, 29, "Whether Specify Slot", "If this is 1, the dispenser only shoots the blocks at the specified slot."),
        new IOPort(30, 32, "Specify Slot", "If the 29th bit is 1, the dispenser only shoots the blocks at this+1th slot.")
    ], false)
];
</script>

# Guided Dispenser <Badge text="v1.0" type="info"/>

## Overview

Similar to the Dispenser, but the speed and angle of it cannot be specified, but the destination (not guaranteed). You can also set whether to place the projectile in the terrain chunk when it arrives at the destination, and whether the projectile is affected by air resistance or gravity. By default, it is in shooting mode.

## Ports Definition

<ElectricElement imgAltPrefix="Guided Dispenser" :connections="connections" imgSrc="/images/expand/transportation/GVGuidedDispenserBlock.webp"/>