<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "Block Value", "The value of the nearest block detected")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 12, "Detection Distance", "Set how many blocks should the detector detect. When this is 0, the detector will not do anything."),
        new IOPort(13, 13, "Whether Check Block Data", "See`Specify Block Data`"),
        new IOPort(14, 14, "Whether Ignore Fluid", "If this is 1, the detector will ignore fluid blocks like water and magma.  \nThis option has higher priority than`Specify Block Content`"),
        new IOPort(15, 32, "Empty", "No effect.")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Output, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "Result Distance", "The distance of nearest block detected, in blocks.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 10, "Specify Block Content", "If this is greater than 0, the detector will only detect the block with the same block content."),
        new IOPort(11, 14, "Empty", "No effect."),
        new IOPort(15, 32, "Specify Block Data", "If`Specify Block Content`is greater than 0 and`Whether Check Block Data`is 1, the detector will also check whether the data of block equals to this.")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Output, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "Continuous Count", "If the block, which meets the conditions, is detected, the detector will continue detecting until a block not the first one.")
    ])
];
</script>

# Terrain Raycast Detector <Badge text="v1.0" type="info"/>

## Overview

When any input changes, the detector will detect the blocks in the direction it faces, then return the distance and other information. You can also specify which block to detect.
The`Detection Distance`must be set to a positive integer.

## Ports Definition

<ElectricElement imgAltPrefix="Terrain Raycast Detector" :connections="connections" imgSrc="/images/expand/sensors/GVTerrainRaycastDetectorBlock.webp"/>