---
outline: [ 2,3 ]
---

<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections1 = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Result Memory Bank ID (Any Type)", ""),
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Right Memory Bank ID", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Synchronous Operations, details are in the table below.", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Left Memory Bank ID", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Parameter of Synchronous Operations", ""),
    ], false, true)
];
let connections2 = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Result Memory Bank ID (Any Type, **Required**)", ""),
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "X Range", "For each 1 increase of this, the end position moves west by 1 block.  \nThe origin of end position offset is the start position."),
        new IOPort(9, 16, "Y Range", "For each 1 increase of this, the end position moves up by 1 block."),
        new IOPort(17, 24, "Z Range", "For each 1 increase of this, the end position moves north by 1 block."),
        new IOPort(25, 25, "X Range Sign", "If this is 1, the end position moves east but not west."),
        new IOPort(26, 26, "Y Range Sign", "If this is 1, the end position moves down but not up."),
        new IOPort(27, 27, "Z Range Sign", "If this is 1, the end position moves south but not north."),
        new IOPort(28, 32, "Empty", "No effect.")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "When this changes to 256 V (0x100), the Memory Banks Operator will try to initialize.", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Template Memory Bank ID", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "X Offset", "For each 1 increase of this, the start position moves west by 1 block.  \nThe origin of start position offset is the position of this Memory Banks Operator."),
        new IOPort(9, 16, "Y Offset", "For each 1 increase of this, the start position moves up by 1 block."),
        new IOPort(17, 24, "Z Offset", "For each 1 increase of this, the start position moves north by 1 block."),
        new IOPort(25, 25, "X Offset Sign", "If this is 1, the start position moves east but not west."),
        new IOPort(26, 26, "Y Offset Sign", "If this is 1, the start position moves down but not up."),
        new IOPort(27, 27, "Z Offset Sign", "If this is 1, the start position moves south but not north."),
        new IOPort(28, 28, "Don't Output Result", "If this is 1, the result will not be output to the result memory bank<br/>No matter whether it outputs result, you must set an available memory bank id."),
        new IOPort(29, 29, "Whether Overwrite", "If this is 1, it will overwrite the memory banks that already have data."),
        new IOPort(30, 32, "Empty", "No effect.")
    ])
];
</script>

# Memory Banks Operator <Badge text="v1.0" type="info"/>

## Overview

It has two usages: one is to perform operations like concat, intersection, etc. on two memory banks, called general operation; the other is to initialize multiple memory banks at once, called batch initialization.

## General Operation

Specify two memory banks by set their IDs at the left and right port, then set the bottom port to different voltages to perform different operations, and the result will be output to the memory bank with the ID specified at the top port.

You must specify the correct memory bank ID at the top, left and right port; otherwise no operation will be performed. Only one exception is that if the bottom input is 1, the right memory bank ID can be unavailable.

Besides copy operation, the height of result memory bank will be set to 1 and width to data count, so it's recommended to output to a [List Memory Bank](list_memory_bank), that you can adjust width after initialization.

### Ports Definition

<ElectricElement imgAltPrefix="Memory Banks Operator" :connections="connections1" imgSrc="/images/expand/memory_banks/GVMemoryBanksOperatorBlock.webp" :titleLevel="4" :serial="1"/>

### Synchronous Operations

|     Voltage     |             Operation             | Description                                                                                                                                                                                                                                                                                                                                                              |
|:---------------:|:---------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0 or<br/>Others |               None                | Only if the voltage of the bottom port changes, the operation will be executed.                                                                                                                                                                                                                                                                                          |
|        1        |         Concat<br/>/Copy          | Concat left and right memory banks, the left memory bank data comes first, the right memory bank data comes last.<br/>If the right memory bank ID is unavailable, it will be treated as copying the left memory bank data.<br/>Copy operation requires that the left memory bank and the output memory bank are the same type (whether volatile or not does not affect). |
|        2        |              Insert               | Insert right memory bank data into left memory bank data. The data will be inserted at the position specified by the back port (index starts from 0).<br/>If the index is greater than the data count of the left memory bank, it will be inserted at the middle with 0.                                                                                                 |
|        3        |             Overwrite             | Overwrite right memory bank data into left memory bank data. The data will be overwrite at the position specified by the back port (index starts from 0).<br/>If the index is greater than the data count of the left memory bank, it will be inserted at the middle with 0.                                                                                             |
|        4        |             Intersect             | The data in left memory bank data, equals to the data in right memory bank data, will be kept, otherwise will be removed.                                                                                                                                                                                                                                                |
|        5        | Intersect<br/>(Duplicate Removal) | Same as above, but will also remove duplicates.                                                                                                                                                                                                                                                                                                                          |
|        6        |              Except               | The data in left memory bank data, equals to the data in right memory bank data, will be removed, otherwise will be kept.                                                                                                                                                                                                                                                |
|        7        |  Except<br/>(Duplicate Removal)   | Same as above, but will also remove duplicates.                                                                                                                                                                                                                                                                                                                          |

> [!TIP] 📝 The Position of Insert/Overwrite
> If you want to insert data into the 5th and 6th data, the back input should be 5; to insert data before the 1st data, then the back input should be 0.  
> If you want to overwrite data from the 5th data, the back input should be 4; to overwrite data from the 1st data, then the back input should be 0.

## Batch Initialization

Specify a memory bank as the template by set its ID at the left port, and a memory bank to store the result by set its ID at the top port. Set range and other parameters at the right port and back port.  
When the bottom input changes to 256 V (0x100), the Memory Banks Operator will try to initialize in batch.  
The memory banks in the range must be the same type as the template.

### Ports Definition

<ElectricElement imgAltPrefix="Memory Banks Operator" :connections="connections2" imgSrc="/images/expand/memory_banks/GVMemoryBanksOperatorBlock.webp" :titleLevel="4" :serial="2"/>