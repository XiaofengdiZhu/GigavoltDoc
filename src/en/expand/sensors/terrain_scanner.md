<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 16, "Start Distance", "For each 1 increase of this, the start position moves one more block away from the scanner in the distance of the scanner faces. If the highest bit is 1, the direction changes to opposite.  \nIf this is 0xFFFF, this will not change the start distance, but change the scan method to the method like [Terrain Raycast Detector](terrain_raycast_detector), which can make a map."),
        new IOPort(17, 17, "Whether Store Block Data", "If this is 0, only store the contents of blocks, otherwise the values of blocks."),
        new IOPort(18, 32, "Empty", "No effect.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 16, "Start Vertical Offset", "For each 1 increase of this, the start position moves one more block in vertical direction. If the highest bit is 1, the direction changes to opposite. The positive direction is defined below."),
        new IOPort(17, 32, "Start Horizontal Offset", "For each 1 increase of this, the start position moves one more block in horizontal direction. If the highest bit is 1, the direction changes to opposite. The positive direction is defined below.")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "Start", "When it changes from 0 no not 0, the scanner will start scanning and store the result to the specified memory bank.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 16, "Vertical Scan Height", "For each 1 increase of this, the end position moves one more block in vertical direction. The positive direction is defined below."),
        new IOPort(17, 32, "Horizontal Scan Width", "For each 1 increase of this, the end position moves one more block in horizontal direction. The positive direction is defined below.")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "Memory Bank ID", "Specify a memory bank with the same ID to store result."),
    ])
];
</script>

# Terrain Scanner <Badge text="v2.0"/>

## Overview

Scans the blocks parallel to the face of the scanner, and stores the result to the specified memory bank. You can adjust the start distance and range.

> [!WARNING] ⚠ Attention
> If the scanning succeeds, the original data in the memory bank will be overwritten!

## Ports Definition

<ElectricElement imgAltPrefix="Terrain Scanner" :connections="connections" imgSrc="/images/expand/sensors/GVTerrainScannerBlock.webp"/>

## Positive Direction Explanation

|  The Scanner Faces To   |           Start Horizontal Offset            |            Start Vertical Offset            |            Horizontal Scan Width             |            Vertical Scan Height             |
|:-----------------------:|:--------------------------------------------:|:-------------------------------------------:|:--------------------------------------------:|:-------------------------------------------:|
|   Y-axis (up or down)   | The positive direction of the X-axis (north) | The positive direction of the Z-axis (west) | The positive direction of the X-axis (north) | The positive direction of the Z-axis (west) |
| X-axis (north or south) | The positive direction of the Z-axis (west)  |  The positive direction of the Y-axis (up)  | The positive direction of the Z-axis (west)  | The negative direction of the Y-axis (down) |
|  Z-axis (east or west)  | The positive direction of the X-axis (north) |  The positive direction of the Y-axis (up)  | The positive direction of the X-axis (north) | The negative direction of the Y-axis (down) |